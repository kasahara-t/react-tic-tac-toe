import type { FC } from "react";
import "./GameStatusPanel.css";
import { useGame } from "../hooks/useGame";

export const GameStatusPanel: FC = () => {
  const { gameOver, isOTurn } = useGame();

  return (
    <div className="game-status-panel">
      {gameOver
        ? isOTurn
          ? "Xの勝ち"
          : "Oの勝ち"
        : isOTurn
          ? "Oのターン"
          : "Xのターン"}
    </div>
  );
};
