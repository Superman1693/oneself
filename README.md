# Lin Zhixing Personal Site

静态个人博客 / 品牌站点，可直接本地打开或部署到 GitHub Pages。

## 项目结构

- `index.html`：首页（Hero + 导航卡片），作为入口。
- `about.html`：关于页面。
- `projects.html`：项目列表页面，卡片形式展示。
- `notes.html`：学习笔记列表页面，卡片形式展示。
- `design.html`：设计卡片页面。
- `contact.html`：联系方式页面。
- `styles.css`：全局样式与响应式布局，暗色简约风格。
- `scripts/data.js`：站点数据源，包含项目、笔记、设计卡片内容，便于后续扩展。
- `scripts/main.js`：数据渲染脚本，将内容注入页面。

## 本地预览

直接双击 `index.html` 或使用本地服务器（可选）：

```bash
npx serve .
```

## 发布到 GitHub Pages

1. 创建仓库并推送代码：

```bash
git init
git remote add origin https://github.com/<your-username>/<repo>.git
git add .
git commit -m "init personal site"
git push -u origin main
```

2. 在 GitHub 仓库设置里开启 Pages：

- Settings → Pages
- Source 选择 `Deploy from a branch`
- Branch 选择 `main` / 根目录
- 保存后等待生效，访问提供的 Pages URL。

## 内容维护

- 在 `scripts/data.js` 中新增或编辑 `projects` / `notes` / `designCards` 数据即可，页面会自动渲染。
- 链接占位符可替换为真实 GitHub 或 Demo 地址。

## 设计与交互

- 暗色基调、留白与轻动效，突出内容。
- 卡片 hover 态、锚点导航、响应式布局。

## 未来可扩展方向

- 增加文章详情页（可用静态 Markdown 转 HTML）。
- 引入更丰富的内容分类与标签筛选。
- 增加轻量主题切换（浅色 / 深色）。
