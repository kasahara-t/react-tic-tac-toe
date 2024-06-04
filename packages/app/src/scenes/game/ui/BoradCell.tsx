import circleImageUrl from "@/assets/circle.png";
import crossImageUrl from "@/assets/cross.png";
import type { BoardCell as BoardCellData } from "@/entities/board";
import { cn, preloadImages } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

preloadImages(circleImageUrl, crossImageUrl);

export interface BoardCellProps {
  cellData: BoardCellData;
  canClick?: boolean;
  onClick?: () => void;
}
export const BoardCell: FC<BoardCellProps> = ({
  cellData,
  canClick,
  onClick,
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (canClick) {
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      className={cn("size-full flex justify-center items-center text-6xl", {
        "opacity-50": cellData.state.remainingTime === 1,
        "cursor-default": !canClick,
      })}
      onClick={handleClick}
    >
      {cellData.state.symbol !== "empty" && (
        <img
          src={
            cellData.state.symbol === "circle" ? circleImageUrl : crossImageUrl
          }
          alt={t("TileButton.Alt", { x: cellData.cell.x, y: cellData.cell.y })}
          className={cn(
            "w-4/5 h-4/5 object-cover",
            "animate-jump animate-once animate-duration-300 animate-ease-in",
          )}
        />
      )}
    </button>
  );
};
