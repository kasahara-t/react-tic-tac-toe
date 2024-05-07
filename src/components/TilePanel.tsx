import type { FC } from "react";
import type { Tile } from "../game/types";
import { getTileState } from "../game/tileLogic";
import { useGame } from "../hooks/useGame";
import circleImageUrl from "./circle.png";
import crossImageUrl from "./cross.png";
import { cn } from "@/lib/utils";

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
      className={cn(
        "w-full h-full flex justify-center items-center text-6xl",
        { "opacity-50": state.remainingPeriod === 1 }
      )}
      onClick={handleTileClick}
    >
      {state.char && (
        <img src={state.char === "O" ? circleImageUrl : crossImageUrl} className={cn(
          "w-4/5 h-4/5 object-cover"
        )}/>
      )}
    </div>
  );
};