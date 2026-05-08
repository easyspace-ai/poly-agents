# 01 — 架构与边界

## 目标

- **无 HTTP**：不向 renderer 暴露 bot 的 REST；不挂载 `httpHandler` 承载 bot API。
- **全 IPC**：`ipcMain.handle` + preload 类型化封装；敏感逻辑仅在 **主进程**。
- **实时数据**：主进程 `webContents.send`（或等价）→ renderer `ipcRenderer.on`；见 [06-renderer-push.md](./06-renderer-push.md)。
- **代码归宿**：新建 `packages/poly-*`（名称实施时确定）+ `apps/electron` 主进程 / preload / renderer；**不包含**对 `cccc/` 的运行时依赖。

## 与现有 Craft 栈的关系

- **Session / Agent RPC**：继续走现有 `bootstrapServer` + WebSocket RPC；poly 域 **不混用** 同一 WS 帧承载业务（避免协议污染）。
- **Electron 主进程**：poly 服务与 `SessionManager` 并行存在；明确 **启动顺序**（见 [05-main-services.md](./05-main-services.md)）与 `before-quit` 清理。

## 非目标（v1 可显式砍掉）

- 保留 `cccc` 作为 npm workspace 包长期依赖。
- 为 poly 再开独立监听端口（除非后续产品明确要求只读对外 API，另文）。

## 交付物

- 本目录各模块文档定稿后，**唯一执行清单**以 `docs/poly-integration/README.md` 顺序为准。
- `.cursor/plans/cccc_集成可行性_238ce8b0.plan.md` 仅保留指向本 README 的索引。
