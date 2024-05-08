import circleImageUrl from "@/components/assets/circle.png";
import crossImageUrl from "@/components/assets/cross.png";
import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import { getTileState } from "@/logics/tileLogic";
import type { Tile } from "@/logics/types";
import type { FC } from "react";

export interface TilePanelProps {
  tile: Tile;
}
export const TilePanel: FC<TilePanelProps> = ({ tile }) => {
  const { currentTurn, board, updateGameAndBoard } = useGame();
  const state = getTileState(currentTurn, board, tile);

  const handleTileClick = () => {
    updateGameAndBoard(tile);
  };

  return (
    <button
      className={cn("size-full flex justify-center items-center text-6xl", {
        "opacity-50": state.remainingPeriod === 1,
      })}
      onClick={handleTileClick}
    >
      {state.char && (
        <img
          src={state.char === "O" ? circleImageUrl : crossImageUrl}
          alt="Tile"
          className={cn("w-4/5 h-4/5 object-cover")}
        />
      )}
    </button>
  );
};
