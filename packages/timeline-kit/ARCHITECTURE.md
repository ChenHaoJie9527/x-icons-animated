# Timeline Kit 架构说明

## 组件架构图

```mermaid
flowchart TD
  A[AnimationTimelineProvider<br/>props: value?: Partial<TimelineDefaults>, children] --> B[AnimationTimelineContext<br/>全局默认动画配置]

  C[TimelineRoot<br/>props: value?, autoPlay?, className?, children<br/>ref: TimelineController(start/stop/reset)] --> D[TimelineRootContext<br/>defaults, autoPlay, nextIndex, registerItem]

  B --> C
  D --> E[Timeline 子项 #1]
  D --> F[Timeline 子项 #2]
  D --> G[Timeline 子项 #N]

  E --> H[buildTimelineVariant<br/>合并 defaults + item props + index]
  F --> H
  G --> H

  H --> I[motion 控制器<br/>start/stop/reset]
  I --> J[渲染 motion 组件]

  C -.registerItem.-> I
  K[父组件 / Playground] -- ref 调用 --> C
```

## 关键 Props 与 Ref

- `AnimationTimelineProvider`
  - **Props**: `value?: Partial<TimelineDefaults>`、`children`
  - **作用**: 提供全局 timeline 默认配置。

- `TimelineRoot`
  - **Props**: `value?: Partial<TimelineDefaults>`、`autoPlay?: boolean`、`className?: string`、`children`
  - **Ref**: `TimelineController`
    - `start(): Promise<void>`
    - `stop(): void`
    - `reset(): void`
  - **作用**: 统一管理子项顺序、注册子项控制器、编排播放状态。

- `Timeline`
  - **Props**: `at`、`index`、`direction`、`distance`、`duration`、`ease`、`as`、`className`、`children`、`...rest`
  - **作用**: 构建动画变体并绑定 motion 控制器。

## API 分层图

```mermaid
flowchart TB
  subgraph L1[第 1 层：配置层]
    P1[AnimationTimelineProvider]
    P2[AnimationTimelineContext]
    P1 --> P2
  end

  subgraph L2[第 2 层：编排控制层]
    R1[TimelineRoot]
    R2[TimelineRootContext]
    R3[TimelineController<br/>start / stop / reset]
    R1 --> R2
    R3 --> R1
  end

  subgraph L3[第 3 层：执行层]
    T1[Timeline]
    T2[buildTimelineVariant]
    T3[motion controls]
    T1 --> T2
    T2 --> T3
  end

  subgraph L4[第 4 层：业务接入层]
    U1[Playground / 业务组件]
    U1 --> R3
    U1 --> T1
  end

  P2 --> R1
  R2 --> T1
```

## 时序图（Hover 交互）

```mermaid
sequenceDiagram
  participant 用户
  participant App as Playground App
  participant RootRef as TimelineRoot Ref
  participant Root as TimelineRoot
  participant Item as Timeline 子项
  participant Motion as motion 控制器

  用户->>App: mouseenter timeline-up trigger
  App->>RootRef: start()
  RootRef->>Root: start()
  Root->>Item: reset() 全部子项
  Root->>Item: start() 全部子项
  Item->>Motion: controls.start(animate + transition)
  Motion-->>Item: 动画完成
  Item-->>Root: Promise resolved
  Root-->>RootRef: Promise resolved
  RootRef-->>App: Promise resolved

  用户->>App: mouseleave trigger
  App->>RootRef: reset()
  RootRef->>Root: reset()
  Root->>Item: reset() 全部子项
  Item->>Motion: controls.set(initial 可见初始态)
```

## 时序图（按钮点击函数触发）

```mermaid
sequenceDiagram
  participant 用户
  participant Button as 按钮(onClick)
  participant App as 业务组件(App)
  participant RootRef as TimelineRoot Ref
  participant Root as TimelineRoot
  participant Item as Timeline 子项
  participant Motion as motion 控制器

  用户->>Button: click start 按钮
  Button->>App: onClick 回调
  App->>RootRef: start()
  RootRef->>Root: start()
  Root->>Item: reset() 全部子项
  Root->>Item: start() 全部子项
  Item->>Motion: controls.start(animate + transition)
  Motion-->>Item: 动画完成
  Item-->>Root: Promise resolved
  Root-->>RootRef: Promise resolved

  用户->>Button: click stop 按钮
  Button->>App: onClick 回调
  App->>RootRef: stop()
  RootRef->>Root: stop()
  Root->>Item: stop() 全部子项

  用户->>Button: click reset 按钮
  Button->>App: onClick 回调
  App->>RootRef: reset()
  RootRef->>Root: reset()
  Root->>Item: reset() 全部子项
  Item->>Motion: controls.set(initial 可见初始态)
```
