import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { Panel } from "../ui/Panel";

export const LogPanel: FC = () => {
  const { gameLogs } = useGame();

  return (
    <Panel className={cn("w-72 h-full rounded-3xl px-4 py-2")}>
      <h3 className={cn("text-3xl flex my-6 justify-center items-center")}>
        Log
      </h3>
      {gameLogs.map((log, i) => (
        <p
          key={log}
          className={cn("py-2", {
            "border-t-2 border-white border-opacity-10": i > 0,
          })}
        >
          {log}
        </p>
      ))}
    </Panel>
  );
};
