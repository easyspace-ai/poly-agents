# 10 — UI（Renderer）

## 当前进度（本仓库已实现）

- **左侧主导航**：[`AppShell.tsx`](../../apps/electron/src/renderer/components/app-shell/AppShell.tsx) 中原 Craft 项（新建会话、所有会话、标签、数据源、技能、自动化、What's New）已 **整体注释/停用**（新建会话包在 `{false && …}` 中保留源码）；侧栏改为与 dashboard 一致的 **市场 / 风控 / 历史 / 账号 / 设置**（文案键 `spma.nav.*`）。
- **设置**：在 [`settings-registry`](../../apps/electron/src/shared/settings-registry.ts) 增加子页 **`poly`**，[`PolySettingsPage`](../../apps/electron/src/renderer/pages/settings/PolySettingsPage.tsx) 作为壳页；侧栏「设置」进入 **现有设置流程** 并默认打开 SPMA 子页（`handleSettingsClick('poly')`）。
- **路由**：新增 compound 路由 `poly/{markets|risk|history|accounts|setup}`（见 [`routes.ts`](../../apps/electron/src/shared/routes.ts)、[`route-parser.ts`](../../apps/electron/src/shared/route-parser.ts)、[`types.ts`](../../apps/electron/src/shared/types.ts)）。中间列与右侧主区暂用 [`SpmaNavigatorPanel`](../../apps/electron/src/renderer/components/spma/SpmaNavigatorPanel.tsx) 占位，待 IPC 与页面迁入后替换。

## 目标

- 将 `cccc/dashboard` 各页迁入 **`apps/electron/src/renderer`**：导航、布局与现有 Craft shell 一致。
- **Tailwind 4** + **`@craft-agent/ui`**；移除 dashboard 自维护 `components/ui`（除确需保留的薄封装）。

## 模块任务

1. 路由：设置 / 市场列表 / 详情 / 账户 / 风控 / 历史 / 引导 等页面映射到现有路由体系。
2. **数据层**：所有 `fetch` → preload IPC；所有 `wsBus` → 06 推送订阅。
3. **文案**：SQLite 等仅 bot 内部实现的表述更新为「本地存储」等中性说法（若仍用 SQLite 可在高级设置中说明）。

## 验收

- 无硬编码 `7633` 或 bot origin；暗色/主题与主应用一致；关键路径可 E2E（Playwright 若项目已有）。

## 参考

- `cccc/dashboard/src/pages/*.tsx`、`lib/api.ts`
