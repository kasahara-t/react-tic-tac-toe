import { useGame } from "@/features/game";
import { AppBackground } from "@/shared/ui";
import { cn } from "@/shared/utils";
import type { FC } from "react";
import { BoardPanel } from "./BoardPanel";
import { CurrentTurn } from "./CurrentTurn";
import { GameStatus } from "./GameStatus";
import { LogPanel } from "./LogPanel";
import { RestartGame } from "./RestartButton";
import { ToolBar } from "./ToolBar";

export const GameScene: FC = () => {
  const { winner } = useGame();
  const gameOver = Boolean(winner);

  return (
    <AppBackground>
      <div
        className={cn(
          "grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr]",
          "gap-9",
        )}
      >
        <div className={cn("col-[2] row-[1]")}>
          <GameStatus />
        </div>
        <div className={cn("col-[1] row-[2]")}>
          <LogPanel />
        </div>
        <div
          className={cn("col-[2] row-[2]")}
          style={{
            height: "50vh",
          }}
        >
          <BoardPanel />
        </div>
        <div className={cn("col-[3] row-[2]")}>
          <ToolBar />
        </div>
        <div className={cn("col-[2] row-[3]")}>
          {gameOver ? <RestartGame /> : <CurrentTurn />}
        </div>
      </div>
    </AppBackground>
  );
};
