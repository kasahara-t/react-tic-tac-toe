import { useGame } from "@/game/hooks/useGame";
import { useUpdateGame } from "@/game/hooks/useUpdateGame";
import { NeonText, Panel } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { type FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BoardCell } from "./BoradCell";

export const BoardPanel: FC = () => {
  const { board, currentTurn, players } = useGame();
  const { updateBoardByCPU } = useUpdateGame();
  const { t } = useTranslation();

  useEffect(() => {
    if (players[currentTurn.player]?.isCPU) {
      setTimeout(() => {
        updateBoardByCPU();
      }, 500);
    }
  }, [currentTurn, players, updateBoardByCPU]);

  return (
    <Panel
      className={cn(
        "grid h-full aspect-square",
        `grid-cols-${board.size} grid-rows-${board.size}`, // not working???
        "p-6",
      )}
      style={{
        gridTemplateColumns: `repeat(${board.size}, 1fr)`,
        gridTemplateRows: `repeat(${board.size}, 1fr)`,
      }}
      helpText={<NeonText>{t("BoardPanel.Help")}</NeonText>}
    >
      {board.tiles.map((tile) => (
        <div
          key={`${tile.x}-${tile.y}`}
          className={cn(
            "flex justify-center items-center",
            `col-[${tile.x + 1}] row-[${tile.y + 1}]`,
            {
              "border-l-4 border-white border-opacity-10": tile.x > 0,
              "border-t-4 border-white border-opacity-10": tile.y > 0,
            },
          )}
        >
          <BoardCell tile={tile} />
        </div>
      ))}
    </Panel>
  );
};
