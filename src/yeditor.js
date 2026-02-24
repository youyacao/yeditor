/**
 * 优雅草 HTML 编辑器 (yeditor)
 * 成都市一颗优雅草科技有限公司 · 卓伊凡
 * https://gitee.com/youyacao/yeditor
 */

(function (global) {
  'use strict';

  var defaultOptions = {
    placeholder: '在此输入内容…',
    minHeight: 200,
    maxHeight: 500,
    toolbar: ['fontSize', 'fontColor', '|', 'bold', 'italic', 'underline', '|', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', '|', 'h2', 'h3', '|', 'ul', 'ol', '|', 'link', 'image', 'images', '|', 'code', 'source']
  };

  var FONT_SIZES = [
    { value: '1', label: '12px' },
    { value: '2', label: '14px' },
    { value: '3', label: '16px' },
    { value: '4', label: '18px' },
    { value: '5', label: '20px' },
    { value: '6', label: '24px' },
    { value: '7', label: '32px' }
  ];

  var PRESET_COLORS = [
    '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#e74c3c', '#c0392b', '#e67e22', '#d35400', '#f39c12', '#f1c40f',
    '#2ecc71', '#27ae60', '#1abc9c', '#16a085', '#3498db', '#2980b9',
    '#9b59b6', '#8e44ad', '#e91e63', '#ad1457'
  ];

  function createButton(icon, title, action) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'yeditor-btn';
    btn.title = title;
    btn.innerHTML = icon;
    btn.setAttribute('aria-label', title);
    if (typeof action === 'function') {
      btn.addEventListener('click', action);
    }
    return btn;
  }

  function createDivider() {
    var div = document.createElement('span');
    div.className = 'yeditor-divider';
    return div;
  }

  function createSelect(options, title, onChange) {
    var wrap = document.createElement('span');
    wrap.className = 'yeditor-select-wrap';
    var sel = document.createElement('select');
    sel.className = 'yeditor-select';
    sel.title = title;
    options.forEach(function (opt) {
      var o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      sel.appendChild(o);
    });
    if (typeof onChange === 'function') {
      sel.addEventListener('change', function () { onChange(sel.value); });
    }
    wrap.appendChild(sel);
    return wrap;
  }

  function createColorPicker(title, onChange) {
    var wrap = document.createElement('span');
    wrap.className = 'yeditor-color-wrap';
    wrap.title = title;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'yeditor-btn yeditor-color-btn';
    btn.innerHTML = 'A';
    btn.style.color = '#333';
    var picker = document.createElement('input');
    picker.type = 'color';
    picker.className = 'yeditor-color-input';
    picker.value = '#333333';
    picker.addEventListener('input', function () {
      btn.style.color = picker.value;
      if (typeof onChange === 'function') onChange(picker.value);
    });
    wrap.appendChild(btn);
    wrap.appendChild(picker);
    wrap.addEventListener('click', function (e) {
      if (e.target === btn || e.target === wrap) picker.click();
    });
    return wrap;
  }

  var icons = {
    bold: '<b>B</b>',
    italic: '<i>I</i>',
    underline: '<u>U</u>',
    strike: '<s>S</s>',
    h2: 'H2',
    h3: 'H3',
    ul: '≡',
    ol: '≡',
    link: '🔗',
    image: '<span class="yeditor-icon-image" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg></span>',
    images: '<span class="yeditor-icon-images" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/><path d="M19 15v-2h-2v2h2zm0 4v-2h-2v2h2zm-4-4v-2h-2v2h2z" opacity=".7"/></svg></span>',
    code: '&lt;/&gt;',
    source: '&lt;&gt;',
    alignLeft: '≡',
    alignCenter: '≡',
    alignRight: '≡',
    alignJustify: '≡'
  };

  function createImageUploadWrap(self, single) {
    var wrap = document.createElement('span');
    wrap.className = 'yeditor-image-wrap';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'yeditor-btn yeditor-btn-image';
    btn.title = single ? '插入图片（链接或本地上传）' : '插入多张图片（链接或本地上传）';
    btn.innerHTML = single ? icons.image : icons.images;
    btn.setAttribute('aria-label', btn.title);
    var drop = document.createElement('div');
    drop.className = 'yeditor-image-dropdown';
    drop.innerHTML = '<button type="button" class="yeditor-image-opt" data-action="url">' + (single ? '输入链接' : '输入多链接') + '</button><button type="button" class="yeditor-image-opt" data-action="upload">' + (single ? '本地上传' : '本地上传多张') + '</button>';
    wrap.appendChild(btn);
    wrap.appendChild(drop);
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.contains('ye-open');
      document.querySelectorAll('.yeditor-image-dropdown.ye-open').forEach(function (d) { d.classList.remove('ye-open'); });
      if (!open) drop.classList.add('ye-open');
    });
    drop.querySelector('[data-action="url"]').addEventListener('click', function () {
      drop.classList.remove('ye-open');
      if (single) self.insertImage(); else self.insertImages();
    });
    drop.querySelector('[data-action="upload"]').addEventListener('click', function () {
      drop.classList.remove('ye-open');
      self.uploadImage(single);
    });
    drop.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { drop.classList.remove('ye-open'); });
    return wrap;
  }

  function YEditor(selector, options) {
    this.options = Object.assign({}, defaultOptions, options || {});
    this.el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!this.el) return;
    this._build();
  }

  YEditor.prototype._build = function () {
    var self = this;
    var opt = this.options;
    var wrap = document.createElement('div');
    wrap.className = 'yeditor-wrap';

    var toolbar = document.createElement('div');
    toolbar.className = 'yeditor-toolbar';

    var editor = document.createElement('div');
    editor.className = 'yeditor-editor';
    editor.contentEditable = true;
    editor.setAttribute('data-placeholder', opt.placeholder);
    editor.style.minHeight = (opt.minHeight || 200) + 'px';
    if (opt.maxHeight) editor.style.maxHeight = opt.maxHeight + 'px';

    var tools = opt.toolbar || defaultOptions.toolbar;
    tools.forEach(function (item) {
      if (item === '|') {
        toolbar.appendChild(createDivider());
        return;
      }
      switch (item) {
        case 'fontSize':
          toolbar.appendChild(createSelect(FONT_SIZES, '字体大小', function (val) {
            self.exec('fontSize', val);
          }));
          break;
        case 'fontColor':
          toolbar.appendChild(createColorPicker('文字颜色', function (val) {
            self.exec('foreColor', val);
          }));
          break;
        case 'bold':
          toolbar.appendChild(createButton(icons.bold, '粗体', function () { self.exec('bold'); }));
          break;
        case 'italic':
          toolbar.appendChild(createButton(icons.italic, '斜体', function () { self.exec('italic'); }));
          break;
        case 'underline':
          toolbar.appendChild(createButton(icons.underline, '下划线', function () { self.exec('underline'); }));
          break;
        case 'alignLeft':
          toolbar.appendChild(createButton('<span class="ye-icon-align-left">≡</span>', '左对齐', function () { self.exec('justifyLeft'); }));
          break;
        case 'alignCenter':
          toolbar.appendChild(createButton('<span class="ye-icon-align-center">≡</span>', '居中', function () { self.exec('justifyCenter'); }));
          break;
        case 'alignRight':
          toolbar.appendChild(createButton('<span class="ye-icon-align-right">≡</span>', '右对齐', function () { self.exec('justifyRight'); }));
          break;
        case 'alignJustify':
          toolbar.appendChild(createButton('<span class="ye-icon-align-justify">≡</span>', '两端对齐', function () { self.exec('justifyFull'); }));
          break;
        case 'h2':
          toolbar.appendChild(createButton(icons.h2, '标题2', function () { self.exec('formatBlock', 'h2'); }));
          break;
        case 'h3':
          toolbar.appendChild(createButton(icons.h3, '标题3', function () { self.exec('formatBlock', 'h3'); }));
          break;
        case 'ul':
          toolbar.appendChild(createButton(icons.ul, '无序列表', function () { self.exec('insertUnorderedList'); }));
          break;
        case 'ol':
          toolbar.appendChild(createButton(icons.ol, '有序列表', function () { self.exec('insertOrderedList'); }));
          break;
        case 'link':
          toolbar.appendChild(createButton(icons.link, '链接', function () { self.insertLink(); }));
          break;
        case 'image':
          toolbar.appendChild(createImageUploadWrap(self, true));
          break;
        case 'images':
          toolbar.appendChild(createImageUploadWrap(self, false));
          break;
        case 'code':
          toolbar.appendChild(createButton(icons.code, '代码', function () { self.exec('formatBlock', 'pre'); }));
          break;
        case 'source':
          var srcBtn = createButton(icons.source, '源码', function () { self.toggleSource(); });
          toolbar.appendChild(srcBtn);
          self._sourceBtn = srcBtn;
          break;
        default:
          break;
      }
    });

    wrap.appendChild(toolbar);
    wrap.appendChild(editor);

    var status = document.createElement('div');
    status.className = 'yeditor-status';
    status.textContent = '优雅草 HTML 编辑器 · yeditor';
    wrap.appendChild(status);

    this.wrap = wrap;
    this.toolbar = toolbar;
    this.editor = editor;
    this.statusBar = status;
    this._sourceMode = false;
    this._sourceBtn = null;

    this.el.innerHTML = '';
    this.el.appendChild(wrap);
  };

  YEditor.prototype.exec = function (cmd, value) {
    if (this._sourceMode) return;
    if (cmd === 'fontSize' && value) {
      document.execCommand('fontSize', false, value);
      this.editor.focus();
      return;
    }
    document.execCommand(cmd, false, value || null);
    this.editor.focus();
  };

  YEditor.prototype.insertLink = function () {
    if (this._sourceMode) return;
    var url = prompt('请输入链接地址：', 'https://');
    if (url) this.exec('createLink', url);
  };

  YEditor.prototype.insertImage = function () {
    if (this._sourceMode) return;
    var url = prompt('请输入图片地址（单张）：', 'https://');
    if (url && url.trim()) {
      url = url.trim();
      this.exec('insertImage', url);
    }
  };

  YEditor.prototype.uploadImage = function (single) {
    if (this._sourceMode) return;
    var self = this;
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = !single;
    input.style.display = 'none';
    document.body.appendChild(input);
    input.addEventListener('change', function () {
      var files = Array.prototype.slice.call(input.files || []);
      document.body.removeChild(input);
      if (files.length === 0) return;
      self._insertImagesFromFiles(files);
    });
    input.click();
  };

  YEditor.prototype._insertImagesFromFiles = function (files) {
    var self = this;
    var list = files.filter(function (f) { return f.type && f.type.indexOf('image/') === 0; });
    if (list.length === 0) return;
    this.editor.focus();
    if (list.length === 1) {
      var reader = new FileReader();
      reader.onload = function () { self.exec('insertImage', reader.result); };
      reader.readAsDataURL(list[0]);
      return;
    }
    var i = 0;
    function next() {
      if (i >= list.length) return;
      var file = list[i++];
      var reader = new FileReader();
      reader.onload = function () {
        self._insertOneImage(reader.result, i >= list.length);
        next();
      };
      reader.onerror = next;
      reader.readAsDataURL(file);
    }
    next();
  };

  YEditor.prototype._insertOneImage = function (src, isLast) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    var sel = window.getSelection();
    var range = sel.rangeCount && this.editor.contains(sel.getRangeAt(0).commonAncestorContainer)
      ? sel.getRangeAt(0)
      : (function () {
          var r = document.createRange();
          r.selectNodeContents(this.editor);
          r.collapse(false);
          return r;
        }.call(this));
    range.deleteContents();
    range.insertNode(img);
    if (!isLast) {
      var br = document.createElement('br');
      range.setStartAfter(img);
      range.insertNode(br);
      range.setStartAfter(br);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    this.editor.focus();
  };

  YEditor.prototype.insertImages = function () {
    if (this._sourceMode) return;
    var raw = prompt('请输入多张图片地址，每行一个或使用逗号分隔：', 'https://\nhttps://');
    if (!raw || !raw.trim()) return;
    var urls = raw.split(/[\n,，]/).map(function (s) { return s.trim(); }).filter(Boolean);
    if (urls.length === 0) return;
    this.editor.focus();
    var frag = document.createDocumentFragment();
    urls.forEach(function (url, i) {
      var img = document.createElement('img');
      img.src = url;
      img.alt = '';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      frag.appendChild(img);
      if (i < urls.length - 1) frag.appendChild(document.createElement('br'));
    });
    var sel = window.getSelection();
    var range;
    if (sel.rangeCount && sel.getRangeAt(0).commonAncestorContainer && this.editor.contains(sel.getRangeAt(0).commonAncestorContainer)) {
      range = sel.getRangeAt(0);
    } else {
      range = document.createRange();
      range.selectNodeContents(this.editor);
      range.collapse(false);
    }
    range.deleteContents();
    range.insertNode(frag);
    this.editor.focus();
  };

  YEditor.prototype.toggleSource = function () {
    if (this._sourceMode) {
      var raw = this.editor.innerText || '';
      this.editor.innerHTML = raw;
      this.editor.contentEditable = true;
      this.editor.classList.remove('yeditor-source-mode');
      if (this._sourceBtn) this._sourceBtn.classList.remove('active');
    } else {
      this._savedHTML = this.editor.innerHTML;
      this.editor.textContent = this._savedHTML;
      this.editor.contentEditable = false;
      this.editor.classList.add('yeditor-source-mode');
      if (this._sourceBtn) this._sourceBtn.classList.add('active');
    }
    this._sourceMode = !this._sourceMode;
  };

  YEditor.prototype.getHTML = function () {
    if (this._sourceMode) {
      var text = this.editor.innerText || '';
      return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<br>/gi, '\n');
    }
    return this.editor.innerHTML || '';
  };

  YEditor.prototype.setHTML = function (html) {
    this.editor.innerHTML = html || '';
    if (this._sourceMode) this.toggleSource();
  };

  YEditor.prototype.getText = function () {
    return this.editor.innerText || this.editor.textContent || '';
  };

  YEditor.prototype.focus = function () {
    this.editor.focus();
  };

  YEditor.prototype.destroy = function () {
    if (this.wrap && this.wrap.parentNode) {
      this.wrap.parentNode.removeChild(this.wrap);
    }
  };

  global.YEditor = YEditor;
})(typeof window !== 'undefined' ? window : this);
