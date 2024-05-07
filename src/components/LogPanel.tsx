import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const LogPanel: FC = () => {
  const { gameLogs } = useGame();

  return (
    <div
      className={cn(
        "w-72 h-full rounded-3xl px-4 py-2",
        "bg-black bg-opacity-30 shadow-custom",
      )}
    >
      <h3 className={cn("text-3xl flex mt-6 justify-center items-center")}>
        Log
      </h3>
      {gameLogs.map((log, i) => (
        <p key={i}>{log}</p>
      ))}
    </div>
  );
};
