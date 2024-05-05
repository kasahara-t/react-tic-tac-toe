import { useAtom } from "jotai";
import type { FC } from "react";
import { gameAtom } from "../store/gameAtom";
import "./GameStatusPanel.css";

export const GameStatusPanel: FC = () => {
  const [game] = useAtom(gameAtom);
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
