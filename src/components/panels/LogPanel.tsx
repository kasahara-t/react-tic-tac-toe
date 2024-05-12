import { Panel } from "@/components/ui/Panel";
import { useGame } from "@/game/hooks/useGame";
import { playersStateAtom } from "@/game/stores/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import type { FC } from "react";
import { NeonText } from "../ui/NeonText";

export const LogPanel: FC = () => {
  const { results } = useGame();
  const [players] = useAtom(playersStateAtom);

  return (
    <Panel
      className={cn("w-72 h-full rounded-3xl px-4 py-2")}
      helpText={
        <NeonText>
          勝利回数などの
          <br />
          システムチャットが表示
          <br />
          されます。
          <br />
          <br />
          ゲームをリセットすると
          <br />
          ログもリセットされます。
        </NeonText>
      }
    >
      <NeonText asChild>
        <h3 className={cn("text-3xl flex my-6 justify-center items-center")}>
          Log
        </h3>
      </NeonText>
      {results.map((result, i) => (
        <NeonText
          key={`${result.winner}-${result.winCount}`}
          className={cn("py-2", {
            "border-t-2 border-white border-opacity-10": i > 0,
          })}
        >
          {`${players[result.winner]?.name ?? ""}が${
            result.winCount
          }回目の勝利`}
        </NeonText>
      ))}
    </Panel>
  );
};
