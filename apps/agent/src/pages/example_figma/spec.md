# 华润三九智能体广场 — 简化说明

- 设计稿：Figma [华润三九智能体广场](https://www.figma.com/design/XR8UZSBfydB69MOPk1W6yK/?node-id=66-8542)

- 页面结构
  - 顶部导航（header）
  - 精选轮播（Banner）
  - 我收藏的智能体（收藏区）
  - Tab 切换（全部 / 我的作品）
  - 分类筛选 + 搜索
  - 智能体卡片列表

- 组件
  - Banner：antd `Carousel`，左图右文案，左右箭头切换（无 dots）
  - AgentEmpty：空状态卡片（虚线边框 + 图标 + 引导文案）
  - AgentItem：单卡片，标题 `truncate`，描述 `line-clamp-2`
  - AgentList：Grid 布局（lg 及以上 2 列），空时渲染 `AgentEmpty`

- 功能
  - 顶部：标题 +「注册AI智能体创作者」按钮。固定顶部，不随滚动条滚动。
  - Banner：轮播展示标题与描述
  - 收藏区：展示 `starred === true` 项，空时显示 `AgentEmpty`，超过两个的时候标题右侧有“查看更多”
  - Tabs：全部 / 我的作品切换，url 参数控制，默认全部
  - 分类筛选：Tag 点击切换，选中态 `color="primary"`
  - 搜索：按标题、描述过滤
  - 列表：Tab + 分类 + 搜索联合过滤后的结果

- 数据与类型
  - 数据来源：`data.ts` 造假数据，banner 数据造4个
  - 数据类型 AgentItem、CarouselItem

- 交互
  - 收藏：点击星标切换 `starred`，同步更新收藏区
  - 分享：点击分享图标，预留 `onShare(id)`
  - 筛选：Tab + 分类 + 搜索实时联动
