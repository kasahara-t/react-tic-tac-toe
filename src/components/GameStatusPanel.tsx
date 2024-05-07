import type { FC } from "react";
import { useGame } from "../hooks/useGame";
import { cn } from "@/lib/utils";

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