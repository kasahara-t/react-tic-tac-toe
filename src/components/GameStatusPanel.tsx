import type { FC } from "react";
import "./GameStatusPanel.css";
import { useGame } from "../hooks/useGame";

export const GameStatusPanel: FC = () => {
  const { game } = useGame();

  return (
    <div className="game-status-panel">
      {game.gameOver
        ? game.isOTurn
          ? "Xの勝ち"
          : "Oの勝ち"
        : game.isOTurn
          ? "Oのターン"
          : "Xのターン"}
    </div>
  );
};
