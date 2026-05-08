# 12 — 下线并删除 `cccc/`

## 前置条件

- [01–11](./README.md) 中对应能力 **已替代** 且测试通过。
- 全仓库 `grep`：**无** `cccc/`、`file:.*clob-client-v2`、无 CI/文档引用。

## 检查清单

- [ ] 删除目录 `cccc/`（含 `bot`、`dashboard`）。
- [ ] 根 `package.json` workspaces / scripts 无 cccc。
- [ ] `bun.lock` 清理无用依赖。
- [ ] 可选：删除 `packages/clob-client-v2`（确认无其它引用）。
- [ ] 更新 CLAUDE.md / CONTRIBUTING / 内部 onboarding 中若有 poly 说明。

## 注意

- 删除前 **打 tag** 或保留 git 历史中的最后包含 cccc 的提交，便于事后 diff 行为。
