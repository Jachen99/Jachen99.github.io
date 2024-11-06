以下是翻译后的内容：

---

sidebar_position: 1

---

# 教程简介

让我们在**不到 5 分钟**的时间内了解 **Docusaurus**。

## 入门

通过 **创建一个新站点** 开始。

或者通过 **[docusaurus.new](https://docusaurus.new)** 立即 **尝试 Docusaurus**。

### 你需要准备的

- [Node.js](https://nodejs.org/en/download/) 版本 18.0 或以上：
  - 安装 Node.js 时，建议选中所有与依赖项相关的复选框。

## 生成一个新站点

使用 **经典模板** 生成一个新的 Docusaurus 站点。

在运行以下命令后，经典模板会自动添加到你的项目中：

```bash
npm init docusaurus@latest my-website classic
```

你可以在命令提示符、Powershell、终端或任何代码编辑器的集成终端中输入此命令。

此命令还会安装运行 Docusaurus 所需的所有依赖项。

## 启动站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令会更改你当前的工作目录。为了使用你新创建的 Docusaurus 站点，你需要在终端中进入该目录。

`npm run start` 命令会在本地构建你的网站，并通过开发服务器提供该站点，你可以通过 http://localhost:3000/ 来查看。

打开 `docs/intro.md`（此页面）并编辑一些内容：站点会 **自动重新加载** 并显示你的更改。
