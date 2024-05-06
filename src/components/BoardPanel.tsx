import type { FC } from "react";
import { TilePanel } from "./TilePanel";
import "./BoardPanel.css";
import { useGame } from "../hooks/useGame";

export const BoardPanel: FC = () => {
  const { board } = useGame();

  return (
    <div className="board-panel">
      {board.tiles.map((row, i) => (
        <div key={i} className="board-row">
          {row.map((tile, j) => (
            <div key={j} className="board-col">
              <TilePanel tile={tile} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
