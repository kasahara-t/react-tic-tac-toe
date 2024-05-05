import type { FC } from "react";
import type { Tile } from "../game/types";
import "./TilePanel.css";
import { useAtom } from "jotai";
import { gameAtom } from "../store/gameAtom";
import circleImageUrl from "./circle.png";
import crossImageUrl from "./cross.png";

export interface TilePanelProps {
  tile: Tile;
}
export const TilePanel: FC<TilePanelProps> = ({ tile }) => {
  const [game] = useAtom(gameAtom);
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
