import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { TilePanel } from "./TilePanel";

export const BoardPanel: FC = () => {
  const { board } = useGame();

  return (
    <div
      className={cn(
        "flex flex-col h-full aspect-square",
        "p-6 rounded-3xl bg-black bg-opacity-30",
        "shadow-custom",
      )}
    >
      {board.tiles.map((row, i) => (
        <div
          key={i}
          className={cn("flex h-[33.3%]", {
            "border-b-4 border-white border-opacity-10":
              i < board.tiles.length - 1,
          })}
        >
          {row.map((tile, j) => (
            <div
              key={j}
              className={cn("w-[33.3%] h-full", {
                "border-r-4 border-white border-opacity-10": j < row.length - 1,
              })}
            >
              <TilePanel tile={tile} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
