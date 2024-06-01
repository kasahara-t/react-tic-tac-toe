import { useGame } from "@/game/hooks/useGame";
import { NeonText } from "@/shared/ui";
import { cn } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const GameStatus: FC = () => {
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
