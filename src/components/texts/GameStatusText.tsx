import { useGame } from "@/game/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const GameStatusText: FC = () => {
  const { gameOver, currentTurn } = useGame();

  return (
    <div className={cn("text-5xl text-center")}>
      {gameOver
        ? currentTurn.isOTurn
          ? "Xの勝ち"
          : "Oの勝ち"
        : currentTurn.isOTurn
          ? "Oのターン"
          : "Xのターン"}
    </div>
  );
};