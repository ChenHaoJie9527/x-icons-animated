# motion-kit v1 进度表

## 当前里程碑

| 阶段 | 内容 | 状态 | 备注 |
| --- | --- | --- | --- |
| M1 | 建立 `packages/motion-kit` 包结构 | 已完成 | 已创建 `package.json`、`tsconfig.json` |
| M2 | 完成 primitives（fade/rotate/translate/scale/transition） | 已完成 | 纯函数实现 |
| M3 | 完成 `composeVariants` 组合器 | 已完成 | 支持递归对象合并 |
| M4 | 完成 `useIconMotionKit` 控制 Hook | 已完成 | 统一 controls + hover + ref |
| M5 | 编写 v1 开发规范文档 | 已完成 | `V1-DEVELOPMENT-SPEC.md` |
| M6 | 包级类型检查 | 阻塞 | 当前仓库未安装 node_modules，待你本地安装后复测 |
| M7 | `web/app` 接入与手动调试 | 待开始 | 由你手动完成 |

## 本次交付清单

- `packages/motion-kit/package.json`
- `packages/motion-kit/tsconfig.json`
- `packages/motion-kit/src/types.ts`
- `packages/motion-kit/src/primitives.ts`
- `packages/motion-kit/src/compose.ts`
- `packages/motion-kit/src/use-icon-motion-kit.ts`
- `packages/motion-kit/src/index.ts`
- `packages/motion-kit/V1-DEVELOPMENT-SPEC.md`
- `packages/motion-kit/V1-PROGRESS.md`

## 你接下来要做的事

1. 在 `web/app` 中手动引入 `@x-icons/motion-kit`。
2. 先迁移 1~2 个 icon（建议 `academic-cap`、`bell-ring`）。
3. 比对迁移前后动画一致性（视觉与交互）。
4. 如果通过，再批量迁移其余 icon。

## 风险与观察点

- `composeVariants` 对同名字段采取后者覆盖策略，需确认是否符合你的预期。
- 引入 `useIconMotionKit` 后，若业务想在 hover 时附加自定义逻辑，建议先验证回调执行顺序。
- 多个 `withTransition` 同时组合时，以最后一次为准（对象同键覆盖）。
