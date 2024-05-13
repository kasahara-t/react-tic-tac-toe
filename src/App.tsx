import "./global.css";
import { SceneSwitcher } from "./components/scenes/SceneSwitcher";
import "@/lib/i18n/config";
import type { FC } from "react";

export const App: FC = () => {
  return <SceneSwitcher />;
};
