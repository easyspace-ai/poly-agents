# 07 — 交易与 CLOB（官方客户端）

## 目标

- 使用 **npm registry** `@polymarket/clob-client-v2`（**固定版本**），禁止 `file:../../packages/clob-client-v2`。
- 交易执行、签名、错误类型等与现逻辑对齐（对照 `executor/polymarket.ts`、`services/polymarketTrading.ts`、`polymarketProvision.ts`、`riskService.ts`）。

## 模块任务

1. 声明依赖并锁定版本；CI 可 `bun install` 无本地 build 步骤。
2. **薄封装**：统一代理、`ApiError` 映射、日志脱敏（对照 `proxySupport.ts` 注释中的历史补丁行为）。
3. **回归清单**：下单、撤单、FOK/市价路径、风控触发的卖单；与 testnet/mainnet 配置无关的单元测尽量 mock。

## 验收

- 无对 `packages/clob-client-v2` 的 workspace 引用；交易路径 E2E 或集成测通过。

## 后续清理

- 全仓无引用后删除 `packages/clob-client-v2`（若仍存在）。
