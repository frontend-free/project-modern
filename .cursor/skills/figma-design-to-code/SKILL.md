---
name: figma-design-to-code
description: 从 Figma 设计稿还原为项目代码时使用。在用户提供 Figma 链接、要求「实现设计」「设计稿转代码」「Figma 还原」或从 Figma 生成/还原页面时使用。需连接 Figma MCP。具体流程与约定见 .cursor/rules/figma-design-system.mdc。
---

# Figma 设计稿转代码

当用户要求按 Figma 实现设计、还原页面或提供 Figma 链接时，选用本 skill。

## 执行方式

**严格遵循项目规则**：完整按 `.cursor/rules/figma-design-system.mdc` 中的「Figma MCP 集成流程」与所有实现约定执行（get_design_context → get_screenshot → 适配本项目 → 校验）。勿自行简化或跳过步骤。

## 为其他项目写设计系统规则时

可调用 Figma MCP 的 `create_design_system_rules`（传入 clientFrameworks、clientLanguages）获取模板，再结合该项目的技术栈与约定填入并保存到对应规则文件（如 `.cursor/rules/figma-design-system.mdc`）。
