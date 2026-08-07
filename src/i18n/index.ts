import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enProject from "./locales/en/project.json";

import zhCommon from "./locales/zh/common.json";
import zhHome from "./locales/zh/home.json";
import zhAbout from "./locales/zh/about.json";
import zhProject from "./locales/zh/project.json";

import svCommon from "./locales/sv/common.json";
import svHome from "./locales/sv/home.json";
import svAbout from "./locales/sv/about.json";
import svProject from "./locales/sv/project.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        project: enProject
      },

      sv: {
        common: svCommon,
        home: svHome,
        about: svAbout,
        project: svProject
      },

      zh: {
        common: zhCommon,
        home: zhHome,
        about: zhAbout,
        project: zhProject
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