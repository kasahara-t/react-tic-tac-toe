import { TileButton } from "@/components/buttons/TileButton";
import { Panel } from "@/components/ui/Panel";
import { useGame } from "@/game/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { NeonText } from "../ui/NeonText";

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
      helpText={
        <NeonText>
          相手より先にタテ・ヨコ・ナナメいずれかのラインを先に揃えたら勝利です。
          <br />
          <br />
          一度取ったマスの表示ターンは5ターンです。
          <br />
          <br />
          表示ターンに気をつけて、相手より先に ラインを完成させましょう！
        </NeonText>
      }
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
          <TileButton tile={tile} />
        </div>
      ))}
    </Panel>
  );
};
