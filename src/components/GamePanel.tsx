import { cn } from "@/lib/utils";
import type { FC } from "react";
import { BoardPanel } from "./BoardPanel";
import { GameStatusPanel } from "./GameStatusPanel";
import { GameTurnPanel } from "./GameTurnPanel";
import { LogPanel } from "./LogPanel";
import { ToolBar } from "./ToolBar";

export const GamePanel: FC = () => {
  return (
    <div
      className={cn(
        "overflow-hidden absolute inset-0",
        "flex flex-col justify-center items-center py-12",
        "text-white bg-dark-gradient",
      )}
    >
      <div className={cn("flex flex-col justify-center")}>
        <GameStatusPanel />
      </div>
      <div
        className={cn(
          "flex-grow flex flex-row justify-center items-center",
          "gap-x-12 py-12",
        )}
      >
        <LogPanel />
        <BoardPanel />
        <ToolBar />
      </div>
      <div className={cn("flex flex-col justify-center")}>
        <GameTurnPanel />
      </div>
    </div>
  );
};
