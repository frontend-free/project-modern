---
description: Figma 设计稿转代码规则。约定 MCP 流程、组件与样式映射，提升还原度。
globs: ['**/*.tsx', '**/*.jsx']
alwaysApply: false
---

# Figma 设计稿转代码（Design-to-Code）

本技能在「从 Figma 设计稿生成/还原代码」时生效，用于提升还原度并统一项目风格。需配合 **Figma MCP 服务**（如 plugin-figma-figma）使用。

## 1. Figma URL 解析

从 Figma 链接中正确提取 `fileKey` 与 `nodeId`，再调用 MCP 工具。

| URL 形式                                                | fileKey                                                   | nodeId                                    |
| ------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| `figma.com/design/:fileKey/:fileName?node-id=1-2`       | `:fileKey`                                                | **`1:2`**（将 `-` 转为 `:`）              |
| `figma.com/design/:fileKey/branch/:branchKey/:fileName` | 使用 **branchKey** 作为 fileKey                           | 从 `node-id` 查询参数解析，同样 `-` → `:` |
| `figma.com/make/:makeFileKey/:makeFileName`             | 使用 **makeFileKey**                                      | 从 URL 或上下文获取                       |
| `figma.com/board/:fileKey/...`                          | FigJam 文件，使用 **get_figjam**，而非 get_design_context | —                                         |

- **nodeId 格式**：工具要求 `123:456` 形式；URL 中多为 `node-id=123-456`，调用前需将 `-` 转为 `:`。

## 2. 必须遵循的流程（不可跳过）

1. **拉取设计上下文**
   对目标节点调用 `get_design_context`，传入 `fileKey`、`nodeId`（及可选 `clientLanguages`/`clientFrameworks`，如 `typescript`、`react`）。获取结构化代码、资源下载 URL 及默认截图。

2. **过大或截断时**
   若返回内容过大或被截断，先调用 `get_metadata` 获取节点树（仅含 ID、类型、名称、位置与尺寸），再对需要的子节点**分别**调用 `get_design_context`，避免单次请求过大。

3. **视觉对照**
   若需单独截图，可再调用 `get_screenshot`（同一 `fileKey`、`nodeId`），作为实现时的 1:1 视觉参考。

4. **资源落盘**
   根据 MCP 返回的 assets 信息，将图片/SVG 等下载到当前应用约定目录（见下文「资源与资源路径」）。不要用占位图替代已有设计资源。

5. **适配到本项目**
   将 MCP 返回的参考代码（多为 React + Tailwind）改写为本项目技术栈与约定（见「实现原则」与 common.mdc）。

6. **完成前校验**
   对照 Figma 截图做视觉与交互校验，并过一遍「完成前校验清单」。

## 3. 实现原则

- MCP 返回的代码是**设计与行为的参考**，不是最终代码风格；必须按本项目规范重写。
- **组件**：优先 **antd / ProComponents**，其次 **@fe-free/core**（如 PageLayout、Tabs 等见 common.mdc）。避免手写等效 HTML 或重复造轮子。
- **样式**：使用 **Tailwind**；语义化变量参考 `@fe-free/core/src/tailwind.css`（如边框 `border-01`、文字 `text-01`/`text-03`、背景 `bg-01`、`bg-fill-elevated`/`bg-fill-tertiary` 等）。覆盖第三方组件时用强制类名：`className="text-03!"`。
- **颜色/间距/字体**：尽量映射到项目已有 token 或 Tailwind 配置，避免硬编码 hex 或随意数值。不追求像素级保真，优先与设计意图一致且使用项目 token。
- **图标**：优先 `@fe-free/icons`；设计稿中的图标/SVG 从 MCP 返回的 assets 使用；若为可访问的 URL 则按「资源与资源路径」落盘后引用。
- **国际化**：面向用户的可见中文需按 common.mdc 做 i18n 迁移（`useTranslation` / `t()`），详见 i18n 技能。
- **文本溢出**：标题等单行用 `truncate`，描述等多行用 `line-clamp-2` 等，避免溢出。
- **路由与状态**：与现有路由（virtual:react-pages）、状态（zustand）、请求（应用内 API / @lib/api）保持一致。

## 4. Code Connect 与设计标注

- 若设计稿已配置 **Code Connect**，MCP 可能返回与代码库组件的映射；优先采用映射到的组件与用法，再按本项目目录与导出约定（`export { XXX }`、路径别名 `@/`）适配。
- 设计中的**注释、说明、约束**应视为实现约束，在适配时一并满足。

## 5. 资源与资源路径

- **需要落盘的资源**：MCP 返回的图片、SVG 等，保存到当前应用 `src/assets` 或项目约定的静态目录。
- **路径约定**（与 common.mdc 一致）：
  - 自定义 SVG（使用时会自动处理颜色）：`src/assets/svgs/`，引用示例：`import IconSvg from '@/assets/svgs/xxx.svg?react';` 配合 `@fe-free/icons` 的 `Icon component={IconSvg}`。
  - 需保留颜色的资源：放在 `src/assets/`，不要放在 `svgs`。
- **命名**：小写 + 下划线，与项目文件名约定一致。
- **localhost 或相对路径资源**：若 MCP 返回的 URL 为本地或相对路径，直接使用该路径或先落盘到上述目录后引用，不要用占位图或额外安装 icon 库。

## 6. 完成前校验清单

- [ ] 与 Figma 截图在布局、层级、主要样式上一致（在 token 允许范围内）。
- [ ] 组件来自 antd / ProComponents / @fe-free/core，无多余手写等效组件。
- [ ] 样式为 Tailwind + 项目 token，无硬编码 hex/随意数值；覆盖第三方时使用强制类名（如 `text-03!`）。
- [ ] 标题/描述等已做溢出处理（truncate / line-clamp）。
- [ ] 可见中文已做 i18n（或已列入后续 i18n 任务）。
- [ ] 图片/图标资源已正确落盘并引用，无占位图替代设计资源。
- [ ] 与现有路由、状态、请求方式一致；导出与路径符合 common.mdc。

## 7. 项目相关约定（与 common 一致）

- 目录与文件名：小写 + 下划线。
- 组件导出：`export { XXX }`；页面入口可为 `export default XXX`。
- 路径别名：`@/`（如 `@/config`、`@/assets/svgs/`）。
- 从 Figma 还原时，若页面较复杂，可先写 `spec.md` 描述结构、组件拆分与数据/交互，再按本技能流程拉设计、落资源、实现并校验。
