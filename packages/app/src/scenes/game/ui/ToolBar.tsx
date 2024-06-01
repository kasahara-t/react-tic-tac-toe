import { cn } from "@/shared/utils";
import type { FC } from "react";
import { ResetGame } from "./GameResetButton";
import { ShowHelp } from "./ShowHelp";

export const ToolBar: FC = () => {
  return (
    <ul
      className={cn(
        "w-72 h-full",
        "flex flex-col justify-between items-center gap-8",
      )}
    >
      <li>
        <ResetGame />
      </li>
      <li>
        <ShowHelp />
      </li>
    </ul>
  );
};
