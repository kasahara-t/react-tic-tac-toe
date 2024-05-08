import { Panel } from "@/components/ui/Panel";
import { useGame } from "@/game/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const LogPanel: FC = () => {
  const { results } = useGame();

  return (
    <Panel className={cn("w-72 h-full rounded-3xl px-4 py-2")}>
      <h3 className={cn("text-3xl flex my-6 justify-center items-center")}>
        Log
      </h3>
      {results.map((result, i) => (
        <p
          key={`${result.winner}-${result.winCount}`}
          className={cn("py-2", {
            "border-t-2 border-white border-opacity-10": i > 0,
          })}
        >
          {`${result.winner}が${result.winCount}回目の勝利`}
        </p>
      ))}
    </Panel>
  );
};
