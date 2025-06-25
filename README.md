# Jachen99 的个人博客站点

本项目基于 [Docusaurus 3](https://docusaurus.io/) 构建，是一个现代化、响应式、支持多主题的技术博客与随笔网站。支持全文检索、评论、浏览量统计、标签归档、RSS 订阅等功能，适合技术分享与个人成长记录。

---

## 技术栈与主要组件

- **Docusaurus 3**：现代静态网站生成器，支持 Markdown、MDX、文档、博客、主题自定义等。
- **React 18**：全站前端渲染基础。
- **@giscus/react**：基于 GitHub Discussions 的评论系统，支持深色/浅色主题自动切换。
- **Algolia DocSearch**：全文搜索，极速、免费、支持中文。
- **localStorage 浏览量统计**：每篇文章独立浏览量，首次三位数随机，后续自动+1，纯前端实现。
- **Prism**：代码高亮，支持多种主题。
- **自定义 CSS**：`src/css/custom.css`，美化站点风格。
- **RSS/Atom 订阅**：支持主流阅读器订阅。
- **GitHub Actions**：自动化部署（如有配置）。
- **多端适配**：PC、平板、手机均有良好体验。

---

## 主要功能

- **博客与随笔**：支持 Markdown/MDX，自动归档、标签、作者信息。
- **评论系统**：每篇文章底部集成 Giscus，基于 GitHub Discussions，支持表情、回复、深色/浅色主题。
- **浏览量统计**：每篇文章右上角悬浮显示浏览量，数据本地持久化，刷新/重启不丢失。
- **全文搜索**：集成 Algolia，支持中文分词与高亮。
- **标签与归档**：自动生成标签云、归档页，便于内容检索。
- **RSS/Atom 订阅**：支持主流 RSS 阅读器。
- **深色/浅色主题切换**：自动适配系统主题，也可手动切换。
- **响应式设计**：适配各类终端设备。
- **一键部署**：支持 GitHub Pages 自动部署。

---

## 快速开始

### 安装依赖

```bash
yarn
# 或
npm install
```

### 本地开发

```bash
yarn start
# 或
npm run start
```
默认会在 http://localhost:3000 启动本地开发服务器。

### 构建生产环境

```bash
yarn build
# 或
npm run build
```

### 部署到 GitHub Pages

```bash
# 使用 SSH
USE_SSH=true yarn deploy

# 或使用 HTTPS
GIT_USER=<你的 GitHub 用户名> yarn deploy
```
> 默认部署到 `gh-pages-V4` 分支。

---

## 目录结构简述

- `blog/`：所有博客文章（Markdown/MDX）
- `docs/`：随笔、专题、友链等内容
- `src/components/`：自定义 React 组件（如评论、浏览量等）
- `src/theme/`：Docusaurus 主题自定义与覆盖
- `static/`：静态资源（图片、icon等）
- `docusaurus.config.js`：站点配置
- `sidebars.js`：文档/随笔侧边栏配置

---

## 特色说明

- **评论系统**：无需第三方账号，直接用 GitHub 登录即可评论。
- **浏览量统计**：纯前端 localStorage 实现，轻量无后端依赖。
- **SEO 优化**：自动生成 sitemap、meta 标签，利于搜索引擎收录。
- **代码高亮**：支持多种主题和语言，适合技术分享。
- **多语言支持**：可扩展为多语言站点（当前为简体中文）。

---

## 依赖列表（部分）

- `@docusaurus/core`
- `@docusaurus/preset-classic`
- `@giscus/react`
- `@mdx-js/react`
- `prism-react-renderer`
- `clsx`
- `react` / `react-dom`

详见 `package.json`。

---

## 联系方式

- 博主：季冠臣（Jachen99）
- 邮箱：chenja630@gmail.com
- GitHub: [https://github.com/Jachen99](https://github.com/Jachen99)
- 个人主页：<https://jachen99.github.io>

如需自定义功能、样式或有部署问题，欢迎联系作者。

---

## License

MIT