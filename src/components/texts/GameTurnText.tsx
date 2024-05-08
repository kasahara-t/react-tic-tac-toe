import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const GameTurnText: FC = () => {
  const { currentTurn } = useGame();
  return (
    <div className={cn("text-5xl text-center")}>
      {currentTurn.turn + 1}ターン目
    </div>
  );
};
