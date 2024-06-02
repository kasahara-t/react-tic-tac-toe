import { BOARD_SIZE } from "@/entities/board";
import { isCPUPlayer } from "@/entities/player";
import { useGame, useUpdateGame } from "@/features/game";
import { NeonText, Panel } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { type FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BoardCell } from "./BoradCell";

export const BoardPanel: FC = () => {
  const { history, players } = useGame();
  const { updateByCPU } = useUpdateGame();
  const { t } = useTranslation();

  const lastHistory = history?.at(-1);
  if (!lastHistory) return null;

  const currentPlayer = players?.[lastHistory.currentPlayer];
  if (!currentPlayer) return null;

  useEffect(() => {
    if (isCPUPlayer(currentPlayer)) {
      setTimeout(() => {
        updateByCPU();
      }, 500);
    }
  }, [currentPlayer, updateByCPU]);

  return (
    <Panel
      className={cn(
        "grid h-full aspect-square",
        `grid-cols-${BOARD_SIZE} grid-rows-${BOARD_SIZE}`, // not working???
        "p-6",
      )}
      style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
      }}
      helpText={<NeonText>{t("BoardPanel.Help")}</NeonText>}
    >
      {lastHistory.currentBoard.cells.map((tile) => (
        <div
          key={`${tile.cell.x}-${tile.cell.y}`}
          className={cn(
            "flex justify-center items-center",
            `col-[${tile.cell.x + 1}] row-[${tile.cell.y + 1}]`,
            {
              "border-l-4 border-white border-opacity-10": tile.cell.x > 0,
              "border-t-4 border-white border-opacity-10": tile.cell.y > 0,
            },
          )}
        >
          <BoardCell tile={tile} />
        </div>
      ))}
    </Panel>
  );
};
