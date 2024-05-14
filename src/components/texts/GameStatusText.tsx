import { NeonText } from "@/components/ui/NeonText";
import { useGame } from "@/game/hooks/useGame";
import { playersStateAtom } from "@/game/stores/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const GameStatusText: FC = () => {
  const { gameOver, currentTurn } = useGame();
  const [players] = useAtom(playersStateAtom);
  const { t } = useTranslation();

  const currentPlayerName = players[currentTurn.player]?.name ?? "";

  return (
    <NeonText className={cn("text-5xl text-center")}>
      {gameOver
        ? t("WinnerIs", { playerName: currentPlayerName })
        : t("TurnOf", { playerName: currentPlayerName })}
    </NeonText>
  );
};
