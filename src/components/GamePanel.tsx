import type { FC } from "react";
import { BoardPanel } from "./BoardPanel";
import "./GamePanel.css";

export const GamePanel: FC = () => {
  return (
    <div className="game-panel">
      <BoardPanel />
    </div>
  );
};
