import { AppBackground } from "@/shared/ui";
import { cn } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { MultiPlay } from "./MultiPlay";
import { SinglePlay } from "./SinglePlay";
import { ToggleLang } from "./ToggleLang";

export const ModeSelectScene: FC = () => {
  const { t } = useTranslation();

  return (
    <AppBackground>
      <div className={cn("flex flex-col gap-4")}>
        <h1 className={cn("text-4xl")}>{t("SelectGameMode")}</h1>
        <div className={cn("flex flex-col gap-2")}>
          <SinglePlay />
          <MultiPlay />
          <ToggleLang />
        </div>
      </div>
    </AppBackground>
  );
};
