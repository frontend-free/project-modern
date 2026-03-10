---
name: figma-design-to-code
description: 从 Figma 设计稿还原为项目代码，遵循「先拉设计上下文与截图、再实现、再校验」的 MCP 流程，并适配 antd/ProComponents/Tailwind 与项目约定。在用户提供 Figma 链接、要求「实现设计」「设计稿转代码」「Figma 还原」或从 Figma 生成/还原页面时使用。需连接 Figma MCP。
---

# Figma 设计稿转代码

从 Figma 设计稿生成/还原代码时按本 skill 执行，以提升还原度并统一项目风格。

## 必须遵循的流程（不可跳过）

按顺序执行，不得跳过：

1. **拉取设计上下文**：对目标节点调用 Figma MCP 的 `get_design_context`（传入 fileKey、nodeId），获取结构化代码与资源信息。
2. **过大或截断时**：先调用 `get_metadata` 拿到节点树，再对需要的子节点分别调用 `get_design_context`。
3. **视觉对照**：调用 `get_screenshot` 获取当前节点截图，作为实现时的视觉参考。
4. **上述步骤完成后**再下载资源、开始写代码。
5. **适配到本项目**：将 MCP 返回的参考代码（多为 React + Tailwind）改写为本项目技术栈与约定（见下方）。
6. **完成前校验**：对照 Figma 截图做 1:1 视觉与交互校验。

## 实现原则

- MCP 返回的代码是「设计与行为的参考」，不是最终代码；必须按本项目规范重写。
- **组件**：优先 antd / ProComponents，其次 @fe-free/core。
- **样式**：用 Tailwind；自定义变量参考 `@fe-free/core/src/tailwind.css`（如边框用 `border-01`）；覆盖第三方组件时用强制类名，如 `className="text-03!"`。
- **图标**：优先 `@fe-free/icons`；设计稿图标从 MCP 返回的 assets 使用（localhost 资源直接使用，勿用占位图或新装 icon 库）。
- **颜色/间距/字体**：映射到项目已有 token 或 Tailwind 配置，避免硬编码 hex 与随意数值；大致相似即可，关键是用项目 token/Tailwind。
- 与现有路由、状态、请求模式一致；注意文本溢出（truncate / line-clamp 等）。

## 资源与路径

- Figma MCP 提供的图片/SVG 需落盘时，放在当前应用 `src/assets` 或约定静态目录；与 common 约定一致：svg 在 `src/assets/svgs`，带颜色的在 `assets`。

## 项目约定（与 common 一致）

- 组件从 antd / @ant-design/pro-components / @fe-free/core 选用；导出用 `export { XXX }`。
- 目录与文件名：小写 + 下划线。
- 实现时避免文本溢出。

## 为其他项目写设计系统规则时

- 可调用 Figma MCP 的 `create_design_system_rules`（传入 clientFrameworks、clientLanguages）获取模板，再按上述流程与组件/样式/资源约定填入并保存到对应规则文件（如 `.cursor/rules/figma-design-system.mdc`）。
