# 09 — 风控

## 目标

- `RiskPosition` / `RiskTask` / `RiskAppliedClobTrade` 及 Polymarket user 通道同步逻辑迁入主进程。
- 启动时对 `running` 任务重置等行为与 `cccc/bot/src/index.ts` 一致。

## 模块任务

1. 端口 `services/riskService.ts`、`riskPolymarketSubscriptions.ts`、`riskPolymarketBookBridge.ts` 等。
2. IPC：查询持仓、手动平仓、任务状态；推送见 06。
3. 与 **交易模块**（07）边界清晰：执行卖单仅通过统一 executor。

## 验收

- 重启后任务不僵死；止损触发与现逻辑一致（用历史 fixture 或沙箱）。
