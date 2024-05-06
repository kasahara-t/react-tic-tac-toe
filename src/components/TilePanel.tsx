import type { FC } from "react";
import type { Tile } from "../game/types";
import "./TilePanel.css";
import { useGame } from "../hooks/useGame";
import circleImageUrl from "./circle.png";
import crossImageUrl from "./cross.png";

export interface TilePanelProps {
  tile: Tile;
}
export const TilePanel: FC<TilePanelProps> = ({ tile }) => {
  const { currentTurn, updateGameAndBoard } = useGame();

  const handleTileClick = () => {
    updateGameAndBoard(tile.x, tile.y);
  };

  return (
    <div
      className={`tile-panel${
        currentTurn - tile.lastChangedTurn >= 5 ? " half-opacity-tile" : ""
      }`}
      onClick={handleTileClick}
    >
      {tile.char && (
        <img src={tile.char === "O" ? circleImageUrl : crossImageUrl} />
      )}
    </div>
  );
};
