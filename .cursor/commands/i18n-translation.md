# i18n-translation

根据提供的目录执行以下步骤

- 1 运行项目 `package.json` 中的 scripts 命令 `pnpm i18n-extract` (此命令会重新生成 `locales/zh-CN` 和 `locales/en-US` 目录)
- 2 对照 zh-CN `locales/zh-CN/translation.json` 来翻译 en-US `locales/en-US/translation.json`
- 3 请一对一翻译，不要增加 xxx_one, xxx_other 这种。
