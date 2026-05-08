# 08 — 市场与同步

## 目标

- 市场列表、overlay、SX/Poly 对齐、Centrifugo / Polymarket WS 等 **写入 Prisma** 的路径迁入 poly 主进程服务。
- 无 HTTP；内部模块直接调 DB 与服务。

## 模块任务

1. 端口 `db/markets.ts`、`services/marketGroups.ts`、`sync/*`、`services/centrifugo.ts`、`polymarketWs.ts` 等（按依赖拆分 PR）。
2. 与 **配置 JSON** 交互：`orderBookLevels`、代理等从配置模块读取。
3. 对外暴露：IPC「只读查询」+ 推送（见 06）。

## 验收

- 与 cccc 行为对比：同一事件下 Market/Outcome 行数、主盘 `mainLine` 规则一致（可用 fixture 或录屏对照）。
