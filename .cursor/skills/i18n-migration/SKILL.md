---
name: i18n-migration
description: 将代码中的中文文本迁移为使用 t 函数的多语形式。在用户要求「i18n 迁移」「中文改多语」「迁移到 useTranslation」或对现有中文文案做国际化时使用。
---

# i18n-migration

将代码中的中文文本迁移为使用 `t` 函数的多语形式，便于后续用 i18n-extract 提取并翻译（参见 i18n-translation skill）。

## 规则

- 将中文文案替换为 `t(key, defaultText)` 或带插值时 `t(key, defaultText, { key: value })`。
- 组件内使用 `useTranslation()` 的 `t`；组件外（模块顶层、工具函数、枚举常量等）使用 `import { t } from 'i18next'` 的 `t`。
- 自动补充依赖：组件内 `import { useTranslation } from 'react-i18next'`，组件外 `import { t } from 'i18next'`。
- 所有面向用户的可见中文都要迁移：包括 `children`、`title`、`placeholder`、`label`、`message`、`description`、`aria-*`、antd 的 `message.success()` / `notification.info()` 等。

## Key 命名规范

- **格式**：`project[.module.]name`。`module` 可选，每个部分用点分隔，名称使用驼峰。
- **应用内（如 apps/agent）**：建议按功能模块命名，例如 `agent.helpDoc`、`agent.crud.selectedItems`。若使用 @fe-free/core 等库的 key，保持与库一致，如 `@fe-free/core.crud.selectedItems`。
- **原则**：同一语义同一 key，不重复造 key；key 需稳定，避免用易变文案作为 key。

## 组件内写法

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      {t('agent.helpDoc', '帮助文档')}
      {t('agent.greeting', 'hello {name}', { name: 'world' })}
    </div>
  );
}
```

- 使用 hook `useTranslation()` 返回的 `t`。
- `t(key, defaultText, options?)`：第一个参数为 key，第二个为默认文案，第三个为插值等 options（可选）。
- 插值格式与 i18next 的 ICU 插值一致，默认使用花括号 `{name}`。

## 组件外写法

在非 React 组件内（模块顶层、常量、工具函数、枚举等）无法使用 hook，直接使用 i18next 的 `t`：

```tsx
import { t } from 'i18next';

// 枚举/常量
export const valueEnumWeek = {
  [EnumWeek.MONDAY]: { text: t('enum.Week.MONDAY', '周一'), value: 'Monday' },
};

// 工具函数内
export function getMessage() {
  return t('common.confirm', '确定');
}
```

- 仅在此类场景使用 `import { t } from 'i18next'`，其它同组件内规范。

## 默认值（第二个参数）的意义

- 开发时无需查 locales 即可理解 key 含义。
- 未配置多语或未翻译时仍能显示合理文案。
- 对暂不需要多语的包（如部分 agent-tools）也可直接使用 `t(key, defaultText)` 而不必维护 locale 文件。

## 不需要迁移的情况

- 纯调试、日志、注释中的中文。
- 已明确仅内部使用的常量（如与多语无关的枚举 value）。
- 第三方库或 @fe-free/core 等已封装好的、本身已做 i18n 的组件文案（不要重复包一层 t）。

## 迁移后建议

- 在应用根目录或对应 app 下执行 `pnpm i18n-extract`，生成/更新 `locales/zh-CN` 与 `locales/en-US`。
- 需要英文等多语时，使用 i18n-translation skill 对照 zh-CN 翻译 en-US 等语言。
