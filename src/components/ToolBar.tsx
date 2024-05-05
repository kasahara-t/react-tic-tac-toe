import type { FC } from "react";
import "./ToolBar.css";
import { GameResetButton } from "./GameResetButton";
import { HelpButton } from "./HelpButton";
import { SettingButton } from "./SettingButton";

export const ToolBar: FC = () => {
  return (
    <ul className="toolbar">
      <li>
        <GameResetButton />
      </li>
      <li>
        <SettingButton />
      </li>
      <li>
        <HelpButton />
      </li>
    </ul>
  );
};
