import { useGame } from "@/features/game";
import type { GameResult } from "@/features/resultLog";
import { NeonText } from "@/shared/ui";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export interface ResultLogTextProps {
  result: GameResult;
}
export const ResultLog: FC<ResultLogTextProps> = ({ result }) => {
  const { players } = useGame();
  const { t } = useTranslation();

  return (
    <NeonText>
      {t("ResultLog", {
        winner: players?.[result.winner].name ?? "",
        count: result.winCount,
      })}
    </NeonText>
  );
};
