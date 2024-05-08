import { RestartButton } from "@/components/buttons/RestartButton";
import { ToolBar } from "@/components/buttons/ToolBar";
import { BoardPanel } from "@/components/panels/BoardPanel";
import { LogPanel } from "@/components/panels/LogPanel";
import { GameStatusText } from "@/components/texts/GameStatusText";
import { GameTurnText } from "@/components/texts/GameTurnText";
import { useGame } from "@/game/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const GameScene: FC = () => {
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
          <GameStatusText />
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
          {gameOver ? <RestartButton /> : <GameTurnText />}
        </div>
      </div>
    </div>
  );
};
