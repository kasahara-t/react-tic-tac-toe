import { useGame } from "@/features/game";
import { NeonText } from "@/shared/ui";
import { cn } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const GameStatus: FC = () => {
  const { history, players, winner } = useGame();
  const { t } = useTranslation();

  const lastHistory = history?.at(-1);
  if (!lastHistory) return null;

  const { currentPlayer } = lastHistory;
  const currentPlayerName = players?.[currentPlayer].name ?? "";

  const winnerName = (winner && players?.[winner].name) ?? "";

  return (
    <NeonText className={cn("text-5xl text-center")}>
      {winner
        ? t("WinnerIs", { playerName: winnerName })
        : t("TurnOf", { playerName: currentPlayerName })}
    </NeonText>
  );
};
