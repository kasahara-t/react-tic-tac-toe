import type { FC } from "react";
import { BoardPanel } from "./BoardPanel";
import "./GamePanel.css";
import { GameStatusPanel } from "./GameStatusPanel";
import { GameTurnPanel } from "./GameTurnPanel";
import { LogPanel } from "./LogPanel";
import { ToolBar } from "./ToolBar";

export const GamePanel: FC = () => {
  return (
    <div className="game-panel">
      <div className="game-top">
        <GameStatusPanel />
      </div>
      <div className="game-center">
        <LogPanel />
        <BoardPanel />
        <ToolBar />
      </div>
      <div className="game-bottom">
        <GameTurnPanel />
      </div>
    </div>
  );
};
