import circleImageUrl from "@/assets/circle.png";
import crossImageUrl from "@/assets/cross.png";
import { useGame } from "@/game/hooks/useGame";
import { useUpdateGame } from "@/game/hooks/useUpdateGame";
import { canClickTile, getTileState } from "@/game/logics/tileLogic";
import type { Tile } from "@/game/types/tile";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export interface TileButtonProps {
  tile: Tile;
}
export const TileButton: FC<TileButtonProps> = ({ tile }) => {
  const { currentTurn, board, gameOver, players } = useGame();
  const { updateBoardByPlayer } = useUpdateGame();
  const { t } = useTranslation();

  const state = getTileState(currentTurn, board.size, tile);
  const canClick =
    canClickTile(state) && !players[currentTurn.player]?.isCPU && !gameOver;

  const handleTileClick = () => {
    if (!canClick) return;
    updateBoardByPlayer(tile);
  };

  return (
    <button
      type="button"
      className={cn("size-full flex justify-center items-center text-6xl", {
        "opacity-50": state.turnsLeft === 1,
        "cursor-default": !canClick,
      })}
      onClick={handleTileClick}
    >
      {state.symbol && (
        <img
          src={state.symbol === "O" ? circleImageUrl : crossImageUrl}
          alt={t("TileButton.Alt", { x: tile.x, y: tile.y })}
          className={cn(
            "w-4/5 h-4/5 object-cover",
            "animate-jump animate-once animate-duration-300 animate-ease-in",
          )}
        />
      )}
    </button>
  );
};
