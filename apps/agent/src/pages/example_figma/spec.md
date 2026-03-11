# 华润三九智能体广场 — 技术方案

> 设计稿：Figma [华润三九智能体广场](https://www.figma.com/design/XR8UZSBfydB69MOPk1W6yK/?node-id=66-8542)

## 1. 页面结构

```
页面
├── 顶部导航 (header)
├── 精选轮播 (Banner)
├── 我收藏的智能体 (收藏区)
├── Tab 切换 (全部 / 我的作品)
├── 分类筛选 + 搜索
└── 智能体卡片列表
```

## 2. 组件拆分

### 2.1 Banner 组件

- **实现**：使用 antd `Carousel` 组件
- **布局**：左侧占位图 + 右侧文案
- **文案**：标题 + 描述，描述使用 `line-clamp-2` 两行省略
- **交互**：左右箭头切换，无 dots

### 2.2 Agent 组件集合

| 组件           | 说明                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| **AgentEmpty** | 空状态，虚线边框卡片，图标 + 引导文案                                  |
| **AgentItem**  | 单张智能体卡片，标题 `truncate` 单行省略，描述 `line-clamp-2` 两行省略 |
| **AgentList**  | 使用 Grid 布局，每行 2 张卡片（lg 及以上）；无数据时渲染 AgentEmpty    |

## 3. 功能模块

| 模块               | 实现要点                                              |
| ------------------ | ----------------------------------------------------- |
| **顶部**           | 固定高度 header，标题 +「注册AI智能体创作者」按钮     |
| **Banner**         | 轮播，每项含标题、描述                                |
| **我收藏的智能体** | 展示 `starred === true` 的智能体，空时显示 AgentEmpty |
| **全部/我的作品**  | antd Tabs，切换全部列表 / 仅收藏列表                  |
| **分类筛选**       | Tag 列表，点击切换，选中态用 `color="primary"`        |
| **搜索**           | Input + SearchOutlined，支持按标题、描述过滤          |
| **智能体列表**     | 综合 Tab、分类、搜索后的结果，Grid 2 列展示           |

## 4. 数据与类型

- **数据来源**：假数据，见 `data.ts`
- **类型定义**：

```ts
// 智能体单项
interface AgentItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  stars: number;
  likes: number;
  comments: number;
  categories: string[];
  starred?: boolean;
}

// 轮播项
interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}
```

## 5. 交互逻辑

- **收藏**：点击 AgentItem 星标，切换 `starred`，更新「我收藏的智能体」区域
- **分享**：点击分享图标，预留 `onShare(id)` 回调
- **筛选**：Tab + 分类 + 搜索三者联合过滤，实时更新列表

## 6. 样式约定

- **布局**：`bg-fill-page` 背景，`px-10` 水平内边距
- **边框**：`border-01`、`border-dashed`（空状态）
- **文字**：`text-01` 主色、`text-03` 次要色
- **卡片**：`rounded-xl`、`bg-fill-elevated` / `bg-fill-tertiary`
- **避免文本溢出**：标题 `truncate`，描述 `line-clamp-2`

## 7. Figma 还原流程（参考）

1. 调用 `get_design_context` 获取设计上下文
2. 使用 `get_screenshot` 做视觉对照
3. 按项目技术栈（antd、@fe-free/core、Tailwind）适配实现
4. 样式使用 `@fe-free/core` 的 tailwind 变量，避免硬编码 hex
