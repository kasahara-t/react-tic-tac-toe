import { cn } from "@/lib/utils";
import type { FC } from "react";
import { GameResetButton } from "./GameResetButton";
import { HelpButton } from "./HelpButton";
// import { SettingButton } from "./SettingButton";

export const ToolBar: FC = () => {
  return (
    <ul
      className={cn(
        "w-72 h-full",
        "flex flex-col justify-between items-center gap-8",
      )}
    >
      <li>
        <GameResetButton />
      </li>
      {/* <li>
        <SettingButton />
      </li> */}
      <li>
        <HelpButton />
      </li>
    </ul>
  );
};
