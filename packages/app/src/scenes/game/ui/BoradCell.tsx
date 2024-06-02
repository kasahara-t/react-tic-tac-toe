import circleImageUrl from "@/assets/circle.png";
import crossImageUrl from "@/assets/cross.png";
import type { BoardCell as Tile } from "@/entities/board";
import { isHumanPlayer } from "@/entities/player";
import { useGame, useUpdateGame } from "@/features/game";
import { cn, preloadImages } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

preloadImages(circleImageUrl, crossImageUrl);

export interface TileButtonProps {
  tile: Tile;
}
export const BoardCell: FC<TileButtonProps> = ({ tile }) => {
  const { winner, history, players } = useGame();
  const { updateByPlayer } = useUpdateGame();
  const { t } = useTranslation();

  const lastHistory = history?.at(-1);
  if (!lastHistory) return null;

  const currentPlayer = players?.[lastHistory.currentPlayer];
  if (!currentPlayer) return null;

  const gameOver = Boolean(winner);
  const canClick = !gameOver && isHumanPlayer(currentPlayer);

  const handleClick = () => {
    if (!canClick) return;
    updateByPlayer(tile.cell);
  };

  return (
    <button
      type="button"
      className={cn("size-full flex justify-center items-center text-6xl", {
        "opacity-50": tile.state.remainingTime === 1,
        "cursor-default": !canClick,
      })}
      onClick={handleClick}
    >
      {tile.state.symbol && (
        <img
          src={tile.state.symbol === "circle" ? circleImageUrl : crossImageUrl}
          alt={t("TileButton.Alt", { x: tile.cell.x, y: tile.cell.y })}
          className={cn(
            "w-4/5 h-4/5 object-cover",
            "animate-jump animate-once animate-duration-300 animate-ease-in",
          )}
        />
      )}
    </button>
  );
};
