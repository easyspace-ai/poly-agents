# 06 — 主进程 → Renderer 推送

## 目标

- 替代 dashboard 通过 **HTTP WebSocket**（`wsBus`）订阅行情/订单簿等。
- 使用 **`webContents.send`**（或 `BrowserWindow` 广播）+ renderer **`ipcRenderer.on`**。

## 模块任务

1. 定义推送通道：`poly:push:odds`、`poly:push:orderbook`、`poly:push:risk` 等（与 04 文档命名一致）。
2. **节流**：高频 tick 合并为 rAF 或固定间隔；可选只发 diff。
3. **订阅计数**：第一个 renderer 订阅时主进程才 attach 上游 listener；最后一个 off 时 detach（省资源）。
4. **生命周期**：页面 `useEffect` return 里 `ipcRenderer.removeAllListeners` 或按 handler 移除，避免泄漏。

## 验收

- 长时间开页面内存稳定；切换路由后无重复订阅。

## 参考

- `cccc/dashboard/src/lib/wsBus.ts`
