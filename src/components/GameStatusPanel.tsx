import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const GameStatusPanel: FC = () => {
  const { gameOver, currentTurn } = useGame();

  return (
    <div className={cn("text-5xl")}>
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
