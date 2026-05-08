# 03 — 配置（JSON）

## 目标

- 替代原 **`BotConfig`** Prisma 键值：代理 URL、订单簿档位、onboarding 标记、router 数值配置等。
- 存储：**单 JSON 文件**（路径在 userData），**原子写**（tmp + rename），进程内 **缓存 + 显式 refresh**。

## 模块任务

1. 实现 `readPolyConfig` / `writePolyConfig` / `updatePolyConfigKey`（或等价 API）。
2. 替换所有 `prisma.botConfig` 与 `botConfigCache` 语义（对照 `cccc/bot/src/botConfigCache.ts`、`routes/config.ts`、`onboarding.ts`、`applyNetworking.ts`、`router/index.ts`）。
3. **一次性迁移**：若用户已有旧 DB，启动时读 `BotConfig` 行写入 JSON 后可删表（migration）。

## 与凭据的边界

- **PolymarketAccount**（私钥、API secret）默认仍走 **Prisma**（或后续统一进 `@craft-agent/shared/credentials`）；**不**放入明文 JSON，除非产品单独签字承担风险。

## 验收

- 改配置后无需重启即可影响读缓存路径；崩溃不损坏 JSON（原子写）。
