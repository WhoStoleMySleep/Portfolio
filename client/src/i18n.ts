import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
import { translation } from "./locales/ru/translation";

export const resources  = {
  ru: {
    translation: translation
  }
}

const lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage).substr(0, 2).toLowerCase();

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: lang === 'ru' ? 'ru' : 'en',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
  });