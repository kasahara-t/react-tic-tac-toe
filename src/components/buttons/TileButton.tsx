import circleImageUrl from "@/assets/circle.png";
import crossImageUrl from "@/assets/cross.png";
import { useGame } from "@/game/hooks/useGame";
import { getTileState } from "@/game/logics/tileLogic";
import type { Tile } from "@/game/types/tile";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export interface TileButtonProps {
  tile: Tile;
}
export const TileButton: FC<TileButtonProps> = ({ tile }) => {
  const { currentTurn, board, updateGameAndBoard } = useGame();
  const state = getTileState(currentTurn, board, tile);

  const handleTileClick = () => {
    updateGameAndBoard(tile);
  };

  return (
    <button
      type="button"
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