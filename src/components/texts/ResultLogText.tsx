import { playersStateAtom } from "@/game/stores/atoms";
import type { GameResult } from "@/game/types/result";
import { useAtom } from "jotai";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NeonText } from "../ui/NeonText";

export interface ResultLogTextProps {
  result: GameResult;
}
export const ResultLogText: FC<ResultLogTextProps> = ({ result }) => {
  const [players] = useAtom(playersStateAtom);
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
