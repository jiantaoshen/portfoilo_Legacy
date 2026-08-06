import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";

import cnCommon from "./locales/cn/common.json";
import cnHome from "./locales/cn/home.json";
import cnAbout from "./locales/cn/about.json";

import seCommon from "./locales/se/common.json";
import seHome from "./locales/se/home.json";
import seAbout from "./locales/se/about.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout
      },

      se: {
        common: seCommon,
        home: seHome,
        about: seAbout
      },

      cn: {
        common: cnCommon,
        home: cnHome,
        about: cnAbout
      }
    },


    fallbackLng: "en",

    defaultNS: "common",

    interpolation: {
      escapeValue: false
    },


    detection: {
      order: [
        "localStorage",
        "navigator"
      ],

      caches: [
        "localStorage"
      ]
    }
  });


export default i18n;