import type { FC } from "react";
import type { Tile } from "../game/types";
import "./TilePanel.css";
import { getTileState } from "../game/tileLogic";
import { useGame } from "../hooks/useGame";
import circleImageUrl from "./circle.png";
import crossImageUrl from "./cross.png";

export interface TilePanelProps {
  tile: Tile;
}
export const TilePanel: FC<TilePanelProps> = ({ tile }) => {
  const { currentTurn, board, updateGameAndBoard } = useGame();
  const state = getTileState(currentTurn, board, tile);

  console.log(tile, state);

  const handleTileClick = () => {
    updateGameAndBoard(tile);
  };

  return (
    <div
      className={`tile-panel${
        state.remainingPeriod === 1 ? " half-opacity-tile" : ""
      }`}
      onClick={handleTileClick}
    >
      {state.char && (
        <img src={state.char === "O" ? circleImageUrl : crossImageUrl} />
      )}
    </div>
  );
};
