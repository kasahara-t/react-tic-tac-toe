import { NeonText } from "@/components/ui/NeonText";
import { useGame } from "@/game/hooks/useGame";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export const GameStatusText: FC = () => {
  const { gameOver, currentTurn } = useGame();

  return (
    <NeonText className={cn("text-5xl text-center")}>
      {gameOver
        ? `${currentTurn.player}の勝利`
        : `${currentTurn.player}のターン`}
    </NeonText>
  );
};
