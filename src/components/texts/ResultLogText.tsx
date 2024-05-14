import { useGame } from "@/game/hooks/useGame";
import type { GameResult } from "@/game/types/result";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NeonText } from "../ui/NeonText";

export interface ResultLogTextProps {
  result: GameResult;
}
export const ResultLogText: FC<ResultLogTextProps> = ({ result }) => {
  const { players } = useGame();
  const { t } = useTranslation();

  return (
    <NeonText>
      {t("ResultLog", {
        winner: players[result.winner]?.name ?? "",
        count: result.winCount,
      })}
    </NeonText>
  );
};
