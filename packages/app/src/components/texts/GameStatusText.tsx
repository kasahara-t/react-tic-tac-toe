import { NeonText } from "@/components/ui/NeonText";
import { useGame } from "@/game/hooks/useGame";
import { cn } from "@/shared/utils/helpers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const GameStatusText: FC = () => {
  const { gameOver, currentTurn, players } = useGame();
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
