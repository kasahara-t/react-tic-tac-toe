import "./global.css";
import { SceneSwitcher } from "./components/scenes/SceneSwitcher";
import "@/lib/i18n/config";
import i18next from "i18next";
import type { FC } from "react";

export const App: FC = () => {
  i18next.on("languageChanged", (lng) => {
    document.documentElement.setAttribute("lang", lng);
  });

  return <SceneSwitcher />;
};