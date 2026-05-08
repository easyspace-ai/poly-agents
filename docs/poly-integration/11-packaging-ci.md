# 11 — 打包与 CI

## 目标

- Electron **打包后主进程**可加载 Prisma、`@prisma/adapter-libsql`、**libsql 原生**，且三平台可安装运行。

## 模块任务

1. 审查 `electron-builder` / esbuild external：Prisma 引擎、query engine 路径、`schema` 与 `migrations` 打入 `extraResources` 或等价策略。
2. CI：至少 **typecheck** poly 包 + **单元测**服务层；可选 headless smoke。
3. **官方 CLOB 包**：无 postinstall 编译本地 fork（见 [07-trading-clob.md](./07-trading-clob.md)）。

## 验收

- macOS / Windows / Linux（按产品范围）安装包冷启动通过；DB 与配置写入 userData。
