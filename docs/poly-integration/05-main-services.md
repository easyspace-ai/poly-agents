# 05 — 主进程服务与生命周期

## 目标

- 在 **`apps/electron/src/main`** 内注册 IPC，并托管 **后台任务**：DB 连接、网络代理应用、Telegram、市场同步、CLOB user WS、风控轮询等（对照 `cccc/bot/src/index.ts`、`heavyServices.ts`）。
- **单例**：多窗口只启一份服务；IPC 可来自任意窗口。

## 模块任务

1. `PolyServiceHost`（名称可调整）：`start()` / `stop()`，在 `app.whenReady` 链中 **插入点** 与现有 bootstrap 文档化。
2. 从 `cccc/bot` 迁移 **无 Express** 的纯函数/类：初始化顺序：`migrate` → `$connect` → 读配置 → `applyNetworking` → onboarding → 按需 `startHeavyServices`。
3. `before-quit`：逆序停止 WS、定时器、Telegram、`$disconnect`；超时策略与日志。

## 验收

- 反复开关窗口不重复监听；退出无悬挂句柄；异常重启后 risk task 重置行为与现 bot 一致。
