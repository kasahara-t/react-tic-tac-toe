import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { Panel } from "../ui/Panel";
import { TilePanel } from "./TilePanel";

export const BoardPanel: FC = () => {
  const { board } = useGame();

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
    >
      {board.tiles.flat().map((tile) => (
        <div
          key={`${tile.x}-${tile.y}`} // タイルのx座標とy座標を組み合わせてキーを生成
          className={cn(
            "flex justify-center items-center",
            `col-[${tile.x + 1}] row-[${tile.y + 1}]`,
            {
              "border-l-4 border-white border-opacity-10": tile.x > 0,
              "border-t-4 border-white border-opacity-10": tile.y > 0,
            },
          )}
        >
          <TilePanel tile={tile} />
        </div>
      ))}
    </Panel>
  );
};
