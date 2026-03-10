---
name: i18n
description: 将代码中的中文迁移为 t 函数多语，或执行 i18n 提取与翻译。在用户要求「i18n 迁移」「中文改多语」「迁移到 useTranslation」「翻译 i18n」「提取并翻译多语」「翻译 en-US」或对现有中文做国际化/翻译时使用。
---

# i18n

覆盖两件事：**代码迁移**（中文 → `t()`）与 **提取与翻译**（`pnpm i18n-extract` + 对照 zh-CN 翻译 en-US）。按用户意图执行对应部分。

---

## 一、代码迁移（中文 → t）

将中文文案替换为 `t(key, defaultText)` 或带插值 `t(key, defaultText, { key: value })`。

### 规则

- 组件内：`const { t } = useTranslation();`，并 `import { useTranslation } from 'react-i18next'`。
- 组件外（模块顶层、枚举、工具函数）：`import { t } from 'i18next'`，直接用 `t(...)`。
- 插值格式与 i18next 的 ICU 插值一致，默认使用花括号 `{name}`。
- 所有面向用户的可见中文都要迁移：`children`、`title`、`placeholder`、`label`、`message`、`description`、`aria-*`、`message.success()`、`notification.info()` 等。

### Key 命名

- **格式**：`project[.module.]name`。`module` 可选，每个部分用点分隔，名称使用驼峰。
- **应用内（如 apps/agent）**：建议按功能模块命名，例如 `agent.helpDoc`、`agent.crud.selectedItems`。若使用 @fe-free/core 等库的 key，保持与库一致，如 `@fe-free/core.crud.selectedItems`。
- **原则**：同一语义同一 key，不重复造 key；key 需稳定，避免用易变文案作为 key。

### 写法示例

**组件内：**

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
// ...
{
  t('agent.helpDoc', '帮助文档');
}
{
  t('agent.greeting', 'hello {name}', { name: 'world' });
}
```

**组件外：**

```tsx
import { t } from 'i18next';

export const valueEnumWeek = {
  [EnumWeek.MONDAY]: { text: t('enum.Week.MONDAY', '周一'), value: 'Monday' },
};
```

- `t(key, defaultText, options?)`：第二参数为默认文案，第三为插值等。插值用 i18next 的 ICU 插值格式，默认使用花括号 `{name}`。
- 不迁移：纯调试/日志/注释、仅内部常量、已由库做 i18n 的组件文案。

---

## 二、提取与翻译

当用户需要「提取 key」或「翻译 en-US」等时执行：

1. **提取**：在项目或对应 app 下执行 `pnpm i18n-extract`，生成/更新 `locales/zh-CN` 与 `locales/en-US`。
2. **翻译**：对照 `locales/zh-CN/translation.json` 翻译 `locales/en-US/translation.json`。
3. 一对一翻译，不增加 `xxx_one`、`xxx_other` 等复数形式除非业务需要。

若用户只做了代码迁移，可提醒其需要英文时再执行本节的提取与翻译。
