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
  const { game } = useGame();
  return (
    <div
      className={`tile-panel${
        game.currentTurn - tile.lastChangedTurn >= 5 ? " half-opacity-tile" : ""
      }`}
    >
      {tile.char && (
        <img src={tile.char === "O" ? circleImageUrl : crossImageUrl} />
      )}
    </div>
  );
};
