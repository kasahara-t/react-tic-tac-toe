import type { FC } from "react";
import { GameResetButton } from "./GameResetButton";
import { HelpButton } from "./HelpButton";
import { SettingButton } from "./SettingButton";
import { cn } from "@/lib/utils";

export const ToolBar: FC = () => {
  return (
    <ul className={cn("w-72 h-full flex flex-col justify-between items-center")}>
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