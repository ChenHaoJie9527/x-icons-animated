# motion-kit v1 开发规范

## 1. 目标范围

`@x-icons/motion-kit` v1 只解决图标动画的基础构建与控制，保持轻量、纯函数优先、可渐进扩展。

v1 范围内包含：

- 纯函数动画片段：`fade`、`rotate`、`translateX`、`translateY`、`scaleXY`、`pathLength`、`pathOffset`
- 变体组合器：`composeVariants`
- 过渡片段：`withTransition`
- 图标控制 Hook：`useIconMotionKit`

v1 明确不包含：

- DSL 编排器（如 `timeline`、`pipe`、`stagger`）
- 多状态扩展（如 `hover`、`tap`、`exit`）
- 自动迁移 `web/app` 现有图标组件

## 2. 设计原则

- 纯函数优先：所有 primitives 和 compose 都是无副作用函数。
- 约定优先：状态固定为 `normal` / `animate`。
- 副作用集中：与 `motion controls` 交互仅放在 `useIconMotionKit`。
- 向前兼容：未来扩展时不破坏 v1 公开函数签名。

## 3. 目录规范

```text
packages/motion-kit/
  package.json
  tsconfig.json
  src/
    types.ts
    primitives.ts
    compose.ts
    use-icon-motion-kit.ts
```

## 4. API 规范（v1）

### 4.1 primitives（纯函数）

- `fade(normalOpacity?: number, animateOpacity?: number | number[])`
- `rotate(from?: number, to: number | number[])`
- `translateX(from?: number, to: number | number[])`
- `translateY(from?: number, to: number | number[])`
- `scaleXY(fromX?: number, toX: number | number[], fromY?: number, toY: number | number[])`
- `pathLength(from: number, to: number | number[])`
- `pathOffset(from: number, to: number | number[])`
- `withTransition(transition: Transition)`

输出统一为 `DefaultMotionPatch`，只产生 `normal` 与 `animate` 两个状态键。

### 4.2 compose

- `composeVariants(...patches: DefaultMotionPatch[])`
- 组合规则：
  - 同名字段后者覆盖前者
  - 对象字段采用递归合并（用于 `transition` 等对象）
  - 数组按整体覆盖，不做逐项 merge

### 4.3 hook

- `useIconMotionKit(params)`
- 返回值：
  - `controls`
  - `start()` / `stop()`
  - `handleMouseEnter` / `handleMouseLeave`
- `ref` 被绑定时暴露：
  - `startAnimation()`
  - `stopAnimation()`

## 5. 类型与代码风格

- 不使用 `any`，使用显式类型与 `unknown`。
- 禁止使用 barrel 文件，统一使用子路径导出。
- 导出仅通过 `package.json` 的 `exports` 显式维护。
- 文件内注释只保留必要说明，不写冗余注释。
- 保持 ASCII 文本与一致命名。

## 6. 导入规范（子路径）

- `composeVariants` 从 `@x-icons/motion-kit/compose` 导入。
- primitives 从 `@x-icons/motion-kit/primitives` 导入。
- 类型从 `@x-icons/motion-kit/types` 导入。
- hook 从 `@x-icons/motion-kit/use-icon-motion-kit` 导入。

## 7. 验收标准（v1 完成判定）

- 包内 `pnpm --filter @x-icons/motion-kit check-types` 通过。
- API 可被 `web/app` 手动引入并用于构建 `Variants`。
- 不改动 `web/app` 现有图标文件，集成由业务侧手动完成。

## 8. 后续扩展预留

- 支持泛型状态键（如 `initial/hover/tap/exit`）
- 增加预设动画（如 `wobble`、`bounce`）
- 提供更细粒度 transform primitives（如 `skewX`、`pathLength`）
- 提供 timeline/pipeline DSL（v2 讨论）
