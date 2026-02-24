# Yeditor — Elegant Grass HTML Editor

<p align="center">
  <strong>A clean, simple, open-source rich-text HTML editor</strong>
</p>

<p align="center">
  Cross-browser · Lightweight, no dependencies · Youyacao Technology · Zhuo Yifan
</p>

---

## Introduction

**Yeditor** (Elegant Grass HTML Editor) is an open-source rich-text editor for the web. Built with plain JavaScript and CSS, it has no third-party dependencies, a simple interface, and works in all major browsers. It fits blogs, admin panels, documentation, and any web app that needs inline editing.

- **Website & demo**: Open `index.html` in the project root in your browser to see the site and try the editor.
- **API / integration docs**: `api.html` — how to integrate with HTML, Vue, React, PHP, jQuery, Angular, etc.
- **About Yeditor**: `about.html` — product story and background.
- **Source code**: [https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)

---

## Features

- **Cross-browser**: Chrome, Firefox, Safari, Edge, and other modern browsers
- **Lightweight**: Only `yeditor.js` and `yeditor.css`, no build step
- **Font & color**: Font size (12px–32px), text color (color picker)
- **Alignment**: Left, center, right, justify
- **Formatting**: Bold, italic, underline, headings, ordered/unordered lists
- **Insert**: Links, **single image**, **multiple images** (by URL or by local upload)
- **Images**: Support both **remote URLs** and **local file upload** (click to choose files)
- **Source mode**: Toggle to view and edit raw HTML
- **Open source**: Free to use and extend

---

## Quick Start

### 1. Get the project

```bash
git clone https://gitee.com/youyacao/yeditor.git
cd yeditor
```

Or download: [Gitee repository](https://gitee.com/youyacao/yeditor) → “Clone/Download” → ZIP.

### 2. Run the site and demo locally

Open **index.html** in the project root in your browser:

- Read the product intro
- **Try the editor**: Type, change font and color, alignment, insert links or images (URL or local upload), switch to source mode
- **Download**: Use the “Download” button to get the project as a ZIP
- **Source**: Use the “Gitee” link to open [https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)

### 3. Integrate into your own page

Include the CSS and script and mount the editor on a container:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Using Yeditor</title>
  <link rel="stylesheet" href="src/yeditor.css">
</head>
<body>
  <div id="editor"></div>

  <script src="src/yeditor.js"></script>
  <script>
    var editor = new YEditor('#editor', {
      placeholder: 'Type here…',
      minHeight: 200,
      maxHeight: 500,
      toolbar: ['fontSize', 'fontColor', '|', 'bold', 'italic', 'underline', '|', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', '|', 'h2', 'h3', '|', 'ul', 'ol', '|', 'link', 'image', 'images', '|', 'code', 'source']
    });

    // Get HTML content
    var html = editor.getHTML();

    // Set HTML content
    editor.setHTML('<p>Initial content</p>');
  </script>
</body>
</html>
```

---

## Configuration

`YEditor(selector, options)` accepts:

| Option      | Type   | Default           | Description                    |
|------------|--------|-------------------|--------------------------------|
| placeholder| string | Type here…        | Placeholder text               |
| minHeight  | number | 200               | Minimum editor height (px)     |
| maxHeight  | number | 500               | Maximum editor height (px)     |
| toolbar    | array  | see below         | Toolbar items; `'|'` = divider |

**Toolbar items**: `fontSize`, `fontColor`, `bold`, `italic`, `underline`, `alignLeft`, `alignCenter`, `alignRight`, `alignJustify`, `h2`, `h3`, `ul`, `ol`, `link`, `image`, `images`, `code`, `source`.

- `fontSize` · `fontColor`
- `bold` · `italic` · `underline`
- `alignLeft` / `alignCenter` / `alignRight` / `alignJustify`
- `h2` / `h3` · `ul` · `ol`
- `link` · `image` (single) · `images` (multiple; URL or local upload)
- `code` · `source`

---

## API

- **getHTML()** — Get current HTML
- **setHTML(html)** — Set HTML content
- **getText()** — Get plain text
- **focus()** — Focus the editor
- **destroy()** — Destroy the instance

---

## Project structure

```
yeditor/
├── index.html          # Home page (demo, download, links)
├── api.html             # API / integration docs
├── about.html           # About Yeditor
├── src/
│   ├── yeditor.js       # Editor script
│   └── yeditor.css      # Editor styles
├── README.md            # Docs (Chinese)
└── README.en.md         # Docs (English, this file)
```

---

## Browser support

- Chrome (recommended)
- Firefox
- Safari
- Edge  

Any modern browser that supports `contentEditable` and `document.execCommand`.

---

## License & credits

- **Repository**: [https://gitee.com/youyacao/yeditor](https://gitee.com/youyacao/yeditor)
- **By**: Youyacao Technology (Chengdu) · Zhuo Yifan  
- Open source; you are welcome to use, learn from, and improve it.

---

## Contributing

1. Fork the repository
2. Create a branch (e.g. `feature/xxx` or `fix/xxx`)
3. Commit and push
4. Open a Pull Request on Gitee

For questions or suggestions, open an [Issue](https://gitee.com/youyacao/yeditor) on Gitee.

---

**Yeditor (Elegant Grass HTML Editor)** — clean, simple, open source.
