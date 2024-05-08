import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { BoardPanel } from "./BoardPanel";
import { GameStatusPanel } from "./GameStatusPanel";
import { GameTurnPanel } from "./GameTurnPanel";
import { LogPanel } from "./LogPanel";
import { RestartButton } from "./RestartButton";
import { ToolBar } from "./ToolBar";

export const GamePanel: FC = () => {
  const { gameOver } = useGame();
  return (
    <div
      className={cn(
        "overflow-hidden absolute inset-0",
        "flex flex-col justify-center items-center",
        "text-white bg-dark-gradient",
      )}
    >
      <div
        className={cn(
          "grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr]",
          "gap-9",
        )}
      >
        <div className={cn("col-[2] row-[1]")}>
          <GameStatusPanel />
        </div>
        <div className={cn("col-[1] row-[2]")}>
          <LogPanel />
        </div>
        <div className={cn("col-[2] row-[2]")}>
          <BoardPanel />
        </div>
        <div className={cn("col-[3] row-[2]")}>
          <ToolBar />
        </div>
        <div className={cn("col-[2] row-[3]")}>
          {gameOver ? <RestartButton /> : <GameTurnPanel />}
        </div>
      </div>
    </div>
  );
};
