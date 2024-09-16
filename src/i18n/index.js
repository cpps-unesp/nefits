import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationPortuguese from "./locales/pt/translation.json";
import translationEnglish from "./locales/en/translation.json";

const resources = {
    en: {
        translation: translationEnglish
    },
    pt: {
        translation: translationPortuguese
    }
};

i18n
  .use(detector) // i18next-browser-languagedetector is a plugin that detects user's language.

  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "pt", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "pt", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;