import { NeonText } from "@/components/ui/NeonText";
import { useGame } from "@/game/hooks/useGame";
import { playersStateAtom } from "@/game/stores/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import type { FC } from "react";

export const GameStatusText: FC = () => {
  const { gameOver, currentTurn } = useGame();
  const [players] = useAtom(playersStateAtom);

  const currentPlayerName = players[currentTurn.player]?.name ?? "";

  return (
    <NeonText className={cn("text-5xl text-center")}>
      {gameOver ? `${currentPlayerName}の勝利` : `${currentPlayerName}のターン`}
    </NeonText>
  );
};
