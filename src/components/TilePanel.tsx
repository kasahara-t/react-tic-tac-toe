import type { FC } from "react";
import type { Tile } from "../game/types";
import "./TilePanel.css";
import circleImageUrl from "./circle.png";
import crossImageUrl from "./cross.png";

export interface TilePanelProps {
  tile: Tile;
}
export const TilePanel: FC<TilePanelProps> = ({ tile }) => {
  return (
    <div className="tile-panel">
      {tile.char && (
        <img src={tile.char === "O" ? circleImageUrl : crossImageUrl} />
      )}
    </div>
  );
};
