# 04 — IPC 契约与 Preload

## 目标

- **单一事实来源**：通道名、请求/响应类型、错误码在 **packages** 中定义（可与 `packages/shared` 或 `poly-core` 并列 `ipc/`）。
- Renderer **仅**通过 `contextBridge` 暴露的 API 调用，禁止 `require` poly 实现。

## 模块任务

1. 枚举能力域：`poly:markets:*`、`poly:trade:*`、`poly:config:*`、`poly:risk:*`、`poly:accounts:*` 等（最终命名以 `scripts/check-raw-sends.sh` 或现有 IPC 规范为准）。
2. 每个通道：**输入/输出 TypeScript 类型**；建议 **Zod** 在主进程入口校验（与仓库 Zod 主版本对齐）。
3. **preload**：`window.poly.*` 或 `window.craft.poly.*`（与现有 preload 风格统一）。
4. **大列表**：分页或 cursor；参考主项目 chunked 模式（如 `chunked-rpc`）避免单次 IPC 超大。

## 验收

- 类型从 preload 到 handler 端到端；未知通道明确错误；无裸字符串散落。

## 对照（旧 HTTP）

- `cccc/bot/src/routes/*.ts` → 每个 route 映射到一个或多个 IPC 方法。
