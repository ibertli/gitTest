# 10月9日
# 控制台项目一般用于运行服务或命令行工具，也常用来试验ts代码
# 对于ts脚本，一般有以下两种执行方法
# （1）编译运行：npx tsc index.ts，此时会生成一个index.js文件，然后用 node index.js即可执行
#  (2)使用ts-node来运行。先安装：npm install -D ts-node，在运行：node -r ts-node/register index.ts

# 使用koa框架，把简单的ts变成一个web服务
npm install koa koa-static-server @koa/router
npm install @types/koa @types/koa-static-server @types/koa__router
# 安装模块之后要使用的使用需要先导入，如 import koa from "koa"
<<<<<<< HEAD
# 重点需要学习一下koa&1.3
=======
# 重点需要学习一下koa&1.3
>>>>>>> 1142abb05666692595f1ed2bbc60201bff6b3781
