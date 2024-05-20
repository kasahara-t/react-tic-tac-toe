import { useGame } from "@/game/hooks/useGame";
import { NeonText } from "@/shared/ui/NeonText";
import { cn } from "@/shared/utils/helpers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const GameTurnText: FC = () => {
  const { currentTurn } = useGame();
  const { t } = useTranslation();

  return (
    <NeonText className={cn("text-5xl text-center")}>
      {t("TurnNumber", { turn: currentTurn.turn + 1 })}
    </NeonText>
  );
};
