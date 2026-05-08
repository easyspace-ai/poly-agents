# 02 — 数据层（Prisma / SQLite）

## 目标

- 业务数据：**SQLite + Prisma**，与当前 `cccc/bot/prisma/schema.prisma` **对齐**（Event / Market / Outcome / Trade / PolymarketAccount / Risk* 等）。
- 数据库文件位于 **`app.getPath('userData')`**（或 `~/.craft-agent` 下统一子路径），禁止依赖包内 `dev.db` 作为生产路径。

## 模块任务

1. 新建 `packages/poly-data`（或并入 `poly-core` 子路径 `db/`）：`schema.prisma`、`migrations`、导出 `getPrisma()`。
2. 从 `cccc/bot` 对照迁移：模型名、索引、`@@unique` 与现有查询一致，减少服务层改动面。
3. **`BotConfig` 表**：与 [03-config-json.md](./03-config-json.md) 协调——最终可删除模型并 migration drop，或仅作一次性导入源。
4. 主进程单例：连接在首次 IPC 需要前建立；退出时 `$disconnect`。

## 验收

- 冷启动创建 DB；迁移可重复执行；与 cccc 同 schema 的 smoke 写入/查询通过。

## 参考路径

- `cccc/bot/prisma/schema.prisma`
- `cccc/bot/src/db/index.ts`
