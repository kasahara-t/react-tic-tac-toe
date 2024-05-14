const typescriptTransform = require("i18next-scanner-typescript");

module.exports = {
  input: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.test.{js,jsx,ts,tsx}"],
  output: "./",
  options: {
    func: {
      list: ["i18next.t", "i18n.t", "t"],
    },
    lngs: ["en", "ja"], // サポートする言語
    defaultLng: "ja",
    defaultNs: "translation",
    resource: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
      savePath: "public/locales/{{lng}}/{{ns}}.json", // 保存パス
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: ":", // namespaceとキーを分割するためのセパレータ
    keySeparator: ".", // キー内のネストを分割するためのセパレータ
  },
  transform: typescriptTransform({
    extensions: [".ts", ".tsx"],
    tsOptions: {
      target: "esNext",
    },
  }),
};
