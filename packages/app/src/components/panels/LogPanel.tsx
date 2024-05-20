import { useGame } from "@/game/hooks/useGame";
import { Panel } from "@/shared/ui/Panel";
import { cn } from "@/shared/utils/helpers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NeonText } from "../../shared/ui/NeonText";
import { ResultLogText } from "../texts/ResultLogText";

export const LogPanel: FC = () => {
  const { results } = useGame();
  const { t } = useTranslation();

  return (
    <Panel
      className={cn("w-72 h-full rounded-3xl px-4 py-2")}
      helpText={<NeonText>{t("LogPanel.Help")}</NeonText>}
    >
      <NeonText asChild>
        <h3 className={cn("text-3xl flex my-6 justify-center items-center")}>
          {t("LogPanel.Title")}
        </h3>
      </NeonText>
      {results.map((result, i) => (
        <div
          key={`${result.winner}-${result.winCount}`}
          className={cn("py-2", {
            "border-t-2 border-white border-opacity-10": i > 0,
          })}
        >
          <ResultLogText result={result} />
        </div>
      ))}
    </Panel>
  );
};
