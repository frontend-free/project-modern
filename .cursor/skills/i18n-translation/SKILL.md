---
name: i18n-translation
description: 根据提供的目录执行 i18n 提取与翻译流程（pnpm i18n-extract、对照 zh-CN 翻译 en-US）。在用户要求「翻译 i18n」「提取并翻译多语」「翻译 en-US」或提供目录做国际化翻译时使用。
---

# i18n-translation

根据提供的目录执行以下步骤

- 1 运行项目 `package.json` 中的 scripts 命令 `pnpm i18n-extract` (此命令会重新生成 `locales/zh-CN` 和 `locales/en-US` 目录)
- 2 对照 zh-CN `locales/zh-CN/translation.json` 来翻译 en-US `locales/en-US/translation.json`
- 3 请一对一翻译，不要增加 xxx_one, xxx_other 这种。
