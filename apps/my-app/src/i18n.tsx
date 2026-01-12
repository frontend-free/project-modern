import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ICU from 'i18next-icu';
import { I18nextProvider, initReactI18next } from 'react-i18next';

enum EnumLanguage {
  ZH_CN = 'zh-CN',
  EN_US = 'en-US',
}

const valueEnumLanguage = {
  [EnumLanguage.ZH_CN]: {
    text: '中文',
    value: EnumLanguage.ZH_CN,
  },
  [EnumLanguage.EN_US]: {
    text: '英文',
    value: EnumLanguage.EN_US,
  },
};

const listLanguage = Object.keys(valueEnumLanguage).map((key) => {
  const item = valueEnumLanguage[key];

  return {
    value: item.value !== undefined ? item.value : key,
    label: item.text,
    originData: item.data,
  };
});

function initI18n({ enTranslation }) {
  const cacheLng = localStorage.getItem('i18nextLng') || EnumLanguage.ZH_CN;
  const lng = listLanguage.find((item) => item.value === cacheLng) ? cacheLng : EnumLanguage.ZH_CN;

  console.log('initI18n', 'cacheLng', cacheLng, 'lng', lng);

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(ICU)
    .init({
      resources: {
        [EnumLanguage.ZH_CN]: {
          translation: {},
        },
        [EnumLanguage.EN_US]: {
          translation: {
            ...enTranslation,
          },
        },
      },
      lng,
      fallbackLng: EnumLanguage.ZH_CN,
      interpolation: {
        escapeValue: false,
      },
    });
}

function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

// @ts-ignore
window._i18n = i18n;

export { EnumLanguage, I18nProvider, initI18n, listLanguage, valueEnumLanguage };
