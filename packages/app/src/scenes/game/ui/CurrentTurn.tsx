import { useGame } from "@/features/game";
import { NeonText } from "@/shared/ui";
import { cn } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const CurrentTurn: FC = () => {
  const { history } = useGame();
  const { t } = useTranslation();

  const lastHistory = history?.at(-1);
  if (!lastHistory) return null;

  const { currentTurn } = lastHistory;

  return (
    <NeonText className={cn("text-5xl text-center")}>
      {t("TurnNumber", { turn: currentTurn })}
    </NeonText>
  );
};
