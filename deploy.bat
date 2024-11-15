@echo off

REM 切换到项目目录
cd /d E:\subject\Jachen99.github.io

REM 赋予 build 目录写入权限
icacls "build" /grant %username%:F /T

REM 执行 yarn build
yarn build

REM 检查构建是否成功
if not exist build (
    echo "构建失败或 build 文件夹未创建。"
    pause
    exit /b
)

REM 使用 Node.js 脚本创建 CNAME 文件
node createCname.js

REM 设置 GIT_USER 环境变量并执行 yarn 部署
set GIT_USER=Jachen99
yarn deploy

REM 保持命令行窗口打开
pause
