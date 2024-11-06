Docusaurus 是一个用于构建文档网站的静态站点生成器，支持快速创建和部署文档、博客等内容。结合 GitHub Pages，可以快速部署 Docusaurus 生成的静态站点。下面是基于 Docusaurus 和 GitHub Pages 搭建博客的项目说明。

### 1. 创建 Docusaurus 项目

#### 安装 Docusaurus
首先，确保你已安装 Node.js。然后，在你的命令行中使用 `npx` 来创建一个新的 Docusaurus 项目：

```bash
npx create-docusaurus@latest my-blog classic
```

这将会创建一个名为 `my-blog` 的新文件夹，里面包含 Docusaurus 的基本配置和示例内容。

#### 进入项目目录
进入新创建的项目文件夹：

```bash
cd my-blog
```

### 2. 配置 GitHub Pages 部署

#### 修改 `docusaurus.config.js` 配置文件

在 `docusaurus.config.js` 文件中，设置 GitHub Pages 的相关信息，包括网站的 `url` 和 `baseUrl`，以及 GitHub 仓库的相关配置：

```js
const config = {
  title: 'My Blog',  // 网站标题
  tagline: 'My personal blog powered by Docusaurus',  // 标签行
  favicon: 'img/favicon.ico',  // 网站图标

  // 配置网站的基本 URL
  url: 'https://<your-username>.github.io',  // GitHub Pages 的域名
  baseUrl: '/<your-repository>/',  // 你的仓库名称，例如 /blog

  // GitHub Pages 部署配置
  organizationName: '<your-username>',  // GitHub 用户名
  projectName: '<your-repository>',  // GitHub 仓库名

  // 其他配置...
};
```

这里需要根据你的 GitHub 用户名和仓库名称修改 `url` 和 `baseUrl` 配置。

#### 安装 GitHub Pages 插件

使用 Docusaurus 的 GitHub Pages 插件来自动化部署过程：

```bash
npm install @docusaurus/plugin-gh-pages
```

然后在 `docusaurus.config.js` 文件中配置 `@docusaurus/plugin-gh-pages` 插件：

```js
plugins: [
  [
    '@docusaurus/plugin-gh-pages',
    {
      // 配置 GitHub Pages 插件的选项
      deployUrl: 'https://<your-username>.github.io/<your-repository>/',  // 替换为你的 GitHub Pages 部署 URL
    },
  ],
]
```

### 3. 部署到 GitHub Pages

#### 创建 GitHub 仓库

在 GitHub 上创建一个新的仓库，命名为 `<your-username>.github.io` 或 `blog`，以便与 Docusaurus 项目结合。

#### 配置 Git

在本地 Docusaurus 项目中初始化 Git，并将仓库关联到远程 GitHub 仓库：

```bash
git init
git remote add origin https://github.com/<your-username>/<your-repository>.git
```

#### 推送代码到 GitHub

将本地文件推送到 GitHub 仓库：

```bash
git add .
git commit -m "Initial commit"
git push -u origin master
```

#### 使用 GitHub Pages 部署

执行以下命令将 Docusaurus 项目部署到 GitHub Pages：

```bash
npm run deploy
```

该命令会将生成的静态文件推送到 GitHub 仓库的 `gh-pages` 分支，并且该分支会自动用于 GitHub Pages 部署。

### 4. 访问网站

完成部署后，可以通过以下 URL 访问你的 Docusaurus 博客：

```
https://<your-username>.github.io/<your-repository>/
```

如果你设置了 GitHub Pages 部署正确，网页会自动更新并呈现 Docusaurus 站点。

### 总结

使用 Docusaurus 搭建 GitHub Pages 博客的流程如下：
1. 创建 Docusaurus 项目。
2. 配置 GitHub Pages 的相关信息。
3. 使用插件将站点部署到 GitHub Pages。
4. 提交并推送到 GitHub 仓库。
5. 部署到 GitHub Pages。

通过这种方式，你可以轻松搭建并管理基于 Docusaurus 的博客。
