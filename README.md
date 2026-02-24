# 优雅草 HTML 编辑器 (yeditor)

<p align="center">
  <strong>简洁、大方、开源的富文本 HTML 编辑器</strong>
</p>

<p align="center">
  适配各种浏览器 · 轻量无依赖 · 成都市一颗优雅草科技有限公司 · 卓伊凡
</p>

---

## 简介

**优雅草 HTML 编辑器**（简称 **yeditor**）是一款面向 Web 的开源富文本编辑器。采用纯 JavaScript + CSS 实现，无第三方依赖，界面简洁大方，兼容主流浏览器，适合嵌入博客、后台、文档等各类 Web 应用。

- **官网与在线演示**：打开项目根目录下的 `index.html` 即可在浏览器中查看官网、在线体验编辑器。
- **技术接口文档**：`api.html` — 各语言/框架（HTML、Vue、React、PHP、jQuery、Angular 等）接入说明。
- **关于 yeditor**：`about.html` — 产品简介与开发背景。
- **开源地址**：[https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)

---

## 功能特性

- **多浏览器兼容**：支持 Chrome、Firefox、Safari、Edge 等主流浏览器
- **轻量简洁**：核心仅 `yeditor.js` + `yeditor.css`，无构建依赖
- **字体与颜色**：字体大小（12px～32px）、文字颜色（颜色选择器）
- **文字排版**：左对齐、居中、右对齐、两端对齐
- **常用格式**：粗体、斜体、下划线、标题、有序/无序列表
- **插入能力**：链接、**单张图片**、**多张图片**（多图一次插入）
- **源码模式**：可切换查看与编辑 HTML 源码
- **开源免费**：项目开源，可自由使用与二次开发

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

用浏览器直接打开项目根目录下的 **index.html** 即可：

- 查看产品介绍
- **在线体验**：在页面中的编辑器里输入、调整字体与颜色、排版、插入链接/单张或多张图片、切换源码模式
- **下载源码**：点击「下载源码」获取项目压缩包
- **开源地址**：点击「Gitee 开源地址」跳转到 [https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)

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
- `link` 链接 · `image` 单张图片 · `images` 多张图片（多 URL 一次插入）  
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
└── README.en.md        # 英文说明（可选）
```

---

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge  
及其他支持 `contentEditable` 与 `document.execCommand` 的现代浏览器。

---

## 开源与版权

- **开源地址**：[https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)  
- **开发**：成都市一颗优雅草科技有限公司 · 卓伊凡  
- 本项目开源，欢迎使用、学习与参与改进。

---

## 参与贡献

1. Fork 本仓库  
2. 新建分支（如 `feature/xxx` 或 `fix/xxx`）  
3. 提交代码并推送到分支  
4. 在 Gitee 上提交 Pull Request  

如有问题或建议，欢迎在 [Gitee 仓库](https://gitee.com/youyacao/yeditor) 提 Issue。

---

**优雅草 HTML 编辑器 (yeditor)** — 简洁、大方、开源。
