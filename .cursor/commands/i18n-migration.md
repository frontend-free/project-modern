# i18n-migration

将代码中的中文文本迁移为使用 `t` 函数的多语形式。

## 规则

- 将 `<div>测试</div>` 迁移为 `<div>{t('agent.debug', '测试')}</div>`
- 使用 `const { t } = useTranslation();` 获取翻译
- 自动引入依赖 `import { useTranslation } from 'react-i18next';`

## 规范

### 组件内

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
return <div>{t('@lib/app.helpDoc', '帮助文档')}</div>;
```

- 1 使用 hook `useTranslation` 里面的 `t` 获取翻译.
- 2 `t` 函数的第一个参数是 key，第二个参数是默认值，第三个参数是 options（非必需）
- 3 key 的定义是 `[project.name]`，其中 project 是包名（如 agent、@lib/app），name 是 key 名(骆驼峰，可包含.)

`t` 第二个参数使用默认值的好处是

- 能清晰的知道 key 的含义，不用去 locales 中找，开发方便
- 对于一些没多语的项目适用，比如 agent-tools 不需要多语

### 组件外

```tsx
import { t } from 'i18next';

return <div>{t('enum.InputSchemaType.STRING', 'string')}</div>;
```

- 1 特殊场景如非组件内，没法使用 hook，所以使用 `t` 函数获取翻译。
- 2 其他同组件内
