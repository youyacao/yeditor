# 优雅草 HTML 编辑器 (yeditor)

<p align="center">
  <strong>简洁、大方、开源的富文本 HTML 编辑器</strong>
</p>

<p align="center">
  适配各种浏览器 · 轻量无依赖 · 成都市一颗优雅草科技有限公司 · 卓伊凡
</p>

---

## 演示地址

**在线体验**：[https://yeditor.youyacao.com](https://yeditor.youyacao.com)

可直接在浏览器中打开上述地址体验 yeditor 的全部功能，也支持在项目根目录打开 `index.html` 进行本地预览。

---

## 简介

**优雅草 HTML 编辑器**（简称 **yeditor**）是成都市一颗优雅草科技有限公司面向 Web 推出的开源富文本编辑器。采用**纯 JavaScript + CSS** 实现，**无任何第三方依赖**，界面简洁大方，兼容主流浏览器，适合嵌入博客、后台、文档等各类 Web 应用。

yeditor 为本公司**自用产品**，在内部项目中持续使用与迭代，**未来每项产品都将内置使用**，并会长期更新维护。我们欢迎广大开发者使用、集成与二次开发，是否选用见仁见智，愿意用就用即可。如有问题或建议，欢迎通过 Gitee Issue 或交流群反馈。

**快速链接：**

- **官网与在线演示**：[yeditor.youyacao.com](https://yeditor.youyacao.com) 或打开项目根目录下的 `index.html`
- **优雅草科技官网**：[www.youyacao.com](https://www.youyacao.com)
- **技术接口文档**：`api.html` — 各语言/框架（HTML、Vue、React、PHP、jQuery、Angular 等）接入说明
- **关于 yeditor**：`about.html` — 产品简介与开发背景
- **开源地址**：[https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)
- **正版授权中心**：[zhengban.youyacao.com](https://zhengban.youyacao.com) — 商业授权 29 元/永久，可永久查询

**当前版本**：v1.0.0（2026 年 2 月 24 日首次发布），详见下方 [更新日志](#更新日志)。

---

## 为什么选择 yeditor（产品优势）

- **极简轻量**：市面上不少富文本编辑器过于臃肿，需要引入大量第三方依赖、构建工具或运行时，集成与维护成本高。yeditor 仅需引入 `yeditor.js` 与 `yeditor.css` 两个文件即可使用，无需打包、无需框架绑定，开箱即用。
- **零依赖**：不依赖 jQuery、Vue、React 等任何库，纯原生实现，适合任何技术栈的 Web 项目。
- **易集成**：单文件引入，一个挂载节点 + 一行初始化代码即可接入，支持按需配置工具栏。
- **长期维护**：优雅草科技自有项目全面采用，会持续迭代与修复，开源免费可商用；商业授权 29 元/永久，可在正版授权中心永久查询。

---

## 功能特性

- **多浏览器兼容**：支持 Chrome、Firefox、Safari、Edge 等主流浏览器
- **轻量简洁**：核心仅 `yeditor.js` + `yeditor.css`，无构建依赖
- **字体与颜色**：字体大小（12px～32px）、文字颜色（颜色选择器）
- **文字排版**：左对齐、居中、右对齐、两端对齐
- **常用格式**：粗体、斜体、下划线、标题、有序/无序列表
- **插入能力**：链接、**单张图片**、**多张图片**（支持远程链接与本地上传，多图一次插入）
- **源码模式**：可切换查看与编辑 HTML 源码
- **开源免费**：项目开源，可自由使用与二次开发

---

## 截图展示

以下为 yeditor 在浏览器中的实际使用效果。

**截图一**

![yeditor 截图一](https://doc.youyacao.com/server/index.php?s=/api/attachment/visitFile&sign=f4b170752c0d7acf67c1dde506ba34c1)

**截图二**

![yeditor 截图二](https://doc.youyacao.com/server/index.php?s=/api/attachment/visitFile&sign=febc43aaa8e04fdadf82d0d354652538)

**截图三**

![yeditor 截图三](https://doc.youyacao.com/server/index.php?s=/api/attachment/visitFile&sign=9b9b53bfac5db2b7ac018daf5e2f43d0)

**截图四**

![yeditor 截图四](https://doc.youyacao.com/server/index.php?s=/api/attachment/visitFile&sign=5f49c5ae23deb334ef738399bda233fd)

---

## 快速开始

### 1. 获取项目

```bash
# 克隆仓库
git clone https://gitee.com/youyacao/yeditor.git
cd yeditor
```

或直接下载：[Gitee 仓库](https://gitee.com/youyacao/yeditor) → 点击「克隆/下载」→ 下载 ZIP。

### 2. 本地查看官网与在线 Demo

- 打开 [yeditor.youyacao.com](https://yeditor.youyacao.com) 在线体验，或  
- 用浏览器打开项目根目录下的 **index.html**：
  - 查看产品介绍
  - 在编辑器中输入、调整字体与颜色、排版、插入链接/单张或多张图片、切换源码模式
  - 下载源码、跳转 Gitee 开源地址

### 3. 在您自己的页面中集成编辑器

在 HTML 中引入样式与脚本，并预留一个挂载节点：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>使用 yeditor</title>
  <link rel="stylesheet" href="src/yeditor.css">
</head>
<body>
  <div id="editor"></div>

  <script src="src/yeditor.js"></script>
  <script>
    var editor = new YEditor('#editor', {
      placeholder: '在此输入内容…',
      minHeight: 200,
      maxHeight: 500,
      toolbar: ['fontSize', 'fontColor', '|', 'bold', 'italic', 'underline', '|', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', '|', 'h2', 'h3', '|', 'ul', 'ol', '|', 'link', 'image', 'images', '|', 'code', 'source']
    });

    // 获取 HTML 内容
    var html = editor.getHTML();

    // 设置 HTML 内容
    editor.setHTML('<p>预置内容</p>');
  </script>
</body>
</html>
```

---

## 配置说明

`YEditor(selector, options)` 的 `options` 支持：

| 参数         | 类型   | 默认值 | 说明           |
|--------------|--------|--------|----------------|
| placeholder  | string | 在此输入内容… | 编辑器占位提示文字 |
| minHeight    | number | 200    | 编辑器最小高度(px) |
| maxHeight    | number | 500    | 编辑器最大高度(px) |
| toolbar      | array  | 见下方 | 工具栏按钮配置   |

**默认工具栏**：含字体大小、颜色、对齐、格式、插入、源码等。

- `fontSize` 字体大小 · `fontColor` 文字颜色  
- `bold` 粗体 · `italic` 斜体 · `underline` 下划线  
- `alignLeft` / `alignCenter` / `alignRight` / `alignJustify` 左对齐 / 居中 / 右对齐 / 两端对齐  
- `h2` / `h3` 标题 · `ul` 无序列表 · `ol` 有序列表  
- `link` 链接 · `image` 单张图片 · `images` 多张图片（多 URL 或本地上传）  
- `code` 代码块 · `source` 源码切换  
- `|` 表示工具栏分隔线  

---

## API 简要说明

- **getHTML()**：获取编辑器当前 HTML 内容  
- **setHTML(html)**：设置编辑器 HTML 内容  
- **getText()**：获取纯文本内容  
- **focus()**：使编辑器获得焦点  
- **destroy()**：销毁编辑器实例  

---

## 安全与防护

富文本编辑器输出的 HTML 若直接写入页面或存储后回显，可能带来 XSS 等风险。建议在接入 yeditor 时做好以下基础防护：

1. **输出时转义**：若将 `getHTML()` 的结果展示在非富文本区域，应对 HTML 实体转义（如 `&`、`<`、`>`、`"`、`'`）后再输出，避免未经验证的 HTML 被解释执行。
2. **白名单过滤**：若允许富文本展示，建议在后端或前端对 `getHTML()` 的结果做白名单标签/属性过滤（如只允许 `p、br、strong、em、a、img、ul、ol、li、h2、h3` 等），去除 `script、iframe、on*` 等危险内容。
3. **链接与图片地址校验**：对用户输入的链接（`href`）和图片地址（`src`）做协议与域名校验，禁止 `javascript:` 或不可信域名，避免钓鱼与脚本注入。
4. **CSP（Content-Security-Policy）**：在站点层配置合理的内容安全策略，限制脚本与资源加载来源，可有效减轻 XSS 影响。
5. **服务端二次校验**：提交到后端的 HTML 务必在服务端再次进行过滤或转义，不信任前端单独防护。

**前端基础防御示例**（仅作参考，生产环境建议使用成熟库如 DOMPurify 或在服务端过滤）：

```javascript
// 简单标签白名单过滤示例：仅保留安全标签，去除 script、iframe、on* 等
function simpleSanitize(html) {
  if (!html || typeof html !== 'string') return '';
  var div = document.createElement('div');
  div.innerHTML = html;
  var allowed = { p:1, br:1, strong:1, b:1, em:1, i:1, u:1, a:1, img:1, ul:1, ol:1, li:1, h2:1, h3:1, span:1, blockquote:1, pre:1, code:1 };
  var walk = function(node) {
    var next;
    for (var i = node.childNodes.length - 1; i >= 0; i--) {
      next = node.childNodes[i];
      if (next.nodeType === 1) {
        var tag = next.tagName.toLowerCase();
        if (!allowed[tag]) {
          while (next.firstChild) node.insertBefore(next.firstChild, next);
          node.removeChild(next);
        } else {
          [].slice.call(next.attributes).forEach(function(attr) {
            if (/^on\w+/i.test(attr.name) || (attr.name === 'href' && /^\s*javascript:/i.test(attr.value))) next.removeAttribute(attr.name);
          });
          walk(next);
        }
      }
    }
  };
  walk(div);
  return div.innerHTML;
}
// 使用：在提交或展示前对 editor.getHTML() 结果做过滤
// var safeHtml = simpleSanitize(editor.getHTML());
```

以上为通用建议，具体策略需结合业务与合规要求实施。yeditor 本身提供内容编辑能力，安全防护需在接入方全链路中配合完成。

---

## 项目结构

```
yeditor/
├── index.html          # 官网首页（含在线 Demo、下载、开源链接）
├── api.html            # 技术接口文档（各语言/框架接入说明）
├── about.html          # 关于 yeditor（产品简介）
├── src/
│   ├── yeditor.js      # 编辑器核心脚本
│   └── yeditor.css     # 编辑器样式
├── README.md           # 说明文档（本文件）
└── README.en.md        # 英文说明
```

---

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge  

及其他支持 `contentEditable` 与 `document.execCommand` 的现代浏览器。

---

## 更新日志

### 2026 年 2 月 24 日 — 首次发布（v1.0.0）

本版本为 yeditor 第一次正式发布，完成以下基础能力：

**核心与架构**

- 发布编辑器核心 `yeditor.js`、`yeditor.css`，纯 JavaScript + CSS 实现，无第三方依赖
- 支持通过 `new YEditor(selector, options)` 初始化，可选配置 `placeholder`、`minHeight`、`maxHeight`、`toolbar`
- 提供完整 API：`getHTML()`、`setHTML(html)`、`getText()`、`focus()`、`destroy()`

**编辑与排版**

- 字体大小（12px～32px）、文字颜色（颜色选择器）
- 粗体、斜体、下划线
- 左对齐、居中、右对齐、两端对齐
- 标题（h2、h3）、有序列表、无序列表

**插入与源码**

- 插入链接
- 单张图片插入（支持远程 URL 与本地上传）
- 多张图片一次插入（多 URL 或本地上传）
- 源码模式：可切换查看与编辑 HTML 源码
- 代码块支持

**官网与文档**

- 官网首页 `index.html`：产品介绍、在线演示、下载与开源入口
- 技术接口文档 `api.html`：各语言/框架（HTML、Vue、React、PHP、jQuery、Angular 等）接入说明
- 关于页 `about.html`：产品简介与开发背景

**兼容与授权**

- 兼容 Chrome、Firefox、Safari、Edge 等主流浏览器
- 项目开源，可自由使用与二次开发；商业授权 29 元/永久，在 [zhengban.youyacao.com](https://zhengban.youyacao.com) 正版授权中心可永久查询

---

## 正版授权

如需**正版授权**与后续官方支持，可在**正版授权中心**获取：

- **授权中心**：[https://zhengban.youyacao.com](https://zhengban.youyacao.com)
- **yeditor 永久授权**：**29 元/永久**，一次购买永久使用与更新支持。

欢迎通过正版授权支持我们持续维护与迭代 yeditor。

---

## 开源与版权

- **开源地址**：[Gitee](https://gitee.com/youyacao/yeditor) · [GitHub](https://github.com/youyacao/yeditor) · [GitCode](https://gitcode.com/youyacao/yeditor)  
- **开发**：成都市一颗优雅草科技有限公司 · 卓伊凡  
- 本项目开源，欢迎使用、学习与参与改进。

---

## 参与贡献

1. Fork 本仓库  
2. 新建分支（如 `feature/xxx` 或 `fix/xxx`）  
3. 提交代码并推送到分支  
4. 在 Gitee 上提交 Pull Request  

如有问题或建议，欢迎在 [Gitee 仓库](https://gitee.com/youyacao/yeditor) 提 Issue，或加入**优雅草开源技术客户交流群：929353806** 交流。

---

**优雅草 HTML 编辑器 (yeditor)** — 轻量、简洁、开源，长期更新，欢迎使用。  
© 成都市一颗优雅草科技有限公司 · 卓伊凡  

**代码仓库**：[Gitee](https://gitee.com/youyacao/yeditor) · [GitHub](https://github.com/youyacao/yeditor) · [GitCode](https://gitcode.com/youyacao/yeditor)
