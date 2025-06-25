# 网站

此网站使用 [Docusaurus](https://docusaurus.io/)，一个现代静态网站生成器构建。

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

此命令会启动一个本地开发服务器并自动打开浏览器窗口。大多数更改会即时反映，无需重启服务器。

### 构建

```
$ yarn build
```

此命令会将静态内容生成到 `build` 目录中，可以使用任何静态内容托管服务进行部署。

### 部署

使用 SSH：

```
$ USE_SSH=true yarn deploy
```

不使用 SSH：

```
$ GIT_USER=<你的 GitHub 用户名> yarn deploy
```

如果你使用 GitHub Pages 进行托管，此命令可以方便地构建网站并将其推送到 `gh-pages` 分支。