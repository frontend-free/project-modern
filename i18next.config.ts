import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: ['zh-CN', 'en-US'],
  extract: {
    primaryLanguage: 'zh-CN',
    secondaryLanguages: ['en-US'],
    input: ['./src/**/*.{js,jsx,ts,tsx}'],
    output: './src/locales/{{language}}/{{namespace}}.json',
  },
});
