---
description: Figma 设计稿转代码规则。约定 MCP 流程、组件与样式映射，提升还原度。
globs: ['**/*.tsx', '**/*.jsx']
alwaysApply: false
---

# Figma MCP 设计还原规则

本规则在「从 Figma 设计稿生成/还原代码」时生效，用于提升还原度并统一项目风格。

## 必须遵循的流程（不可跳过）

1. **先拉取设计上下文**：对目标节点调用 `get_design_context`（传入 fileKey、nodeId），获取结构化代码与资源信息。
2. **过大或截断时**：先调用 `get_metadata` 拿到节点树，再对需要的节点单独调用 `get_design_context`。
3. **视觉对照**：调用 `get_screenshot` 获取当前节点的截图，作为实现时的视觉参考。
4. **在上述步骤完成后**再下载资源、开始写代码。
5. **适配到本项目**：将 MCP 返回的参考代码（多为 React + Tailwind）改写为本项目的技术栈与约定（见下方）。
6. **完成前校验**：对照 Figma 截图做 1:1 视觉与交互校验。

## 实现原则

- MCP 返回的代码是「设计与行为的参考」，不是最终代码风格；必须按本项目规范重写。
- 组件 **优先用 antd / ProComponents** **其次用 @fe-free/core**。
- **样式**：用 Tailwind；自定义变量参考 `@fe-free/core/src/tailwind.css` 的 tailwind 变量（如边框用 `border-01`）；覆盖第三方组件样式时用强制类名如 `className="text-03!"`。
- **图标**：优先 `@fe-free/icons`；设计稿中的图标资源从 MCP 返回的 assets 使用（若为 localhost 资源则直接使用，不要用占位图或新装 icon 库）。
- **颜色/间距/字体**：尽量映射到项目已有的 token 或 Tailwind 配置，避免硬编码 hex、随意数值。不需要完整的保真还原，只要大致相似即可，关键是要使用项目已有的 token 或 Tailwind 配置。
- 保持与现有路由、状态、请求模式一致；注意文本溢出处理。

## 资源与资源路径

- Figma MCP 提供的图片/SVG 资源需要落盘到本地的资源，可放在当前应用 `src/assets` 或约定好的静态目录；路径与 `common.mdc` 中约定一致（如 svg 在 `src/assets/svgs`，带颜色的在 `assets`）。

## 项目相关约定（与 common 一致）

- 组件优先从 antd / @ant-design/pro-components / @fe-free/core 选用；导出使用 `export { XXX }`。
- 目录与文件名：小写 + 下划线。
- 实现时注意避免文本溢出（truncate / line-clamp 等）。
