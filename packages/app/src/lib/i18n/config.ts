import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // デフォルトの言語を設定
    detection: {
      order: ["queryString", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json", // ロケールファイルのパス
    },
  });

export default i18n;
