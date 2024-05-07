import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import HelpOverlay from "../ui/HelpOverlay";
import { TilePanel } from "./TilePanel";

export const BoardPanel: FC = () => {
  const { board } = useGame();

  return (
    <HelpOverlay
      helpText={
        <>
          相手より先にタテ・ヨコ・ナナメいずれかの
          ラインを先に揃えたら勝利です。
          <br />
          <br />
          一度取ったマスの表示ターンは5ターンです。
          <br />
          <br />
          表示ターンに気をつけて、相手より先に ラインを完成させましょう！
        </>
      }
      className="h-full"
    >
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
            className={cn("flex", `h-1/${board.size}`, {
              "border-b-4 border-white border-opacity-10":
                i < board.tiles.length - 1,
            })}
          >
            {row.map((tile, j) => (
              <div
                key={j}
                className={cn("h-full", `w-1/${board.size}`, {
                  "border-r-4 border-white border-opacity-10":
                    j < row.length - 1,
                })}
              >
                <TilePanel tile={tile} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </HelpOverlay>
  );
};
