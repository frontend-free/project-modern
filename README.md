# 项目

## 开发

`pnpm i` 安装依赖
`pnpm dev:agent` 启动项目

`pnpm add xxx -w` 安装依赖到根目录
`pnpm add xxx --filter @lib/xxx` 安装依赖到 @lib/xxx
`pnpm remove xxx` 移除依赖

## 新增项目

### 代码

复制 apps/agent 目录，重命名为 apps/xxx，并修改 package.json 中的 name 为 xxx。

修改 package.json 中的 scripts，添加新的项目脚本。

### 部署

新增项目需要修改 `Dockerfile` 和 `nginx.conf` 文件，添加新的项目配置。
