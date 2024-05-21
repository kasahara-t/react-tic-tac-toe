import { AppBackground } from "@/shared/ui/AppBackground";
import { cn } from "@/shared/utils/helpers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { MultiPlayButton } from "./MultiPlayButton";
import { SinglePlayButton } from "./SinglePlayButton";
import { ToggleLangButton } from "./ToggleLangButton";

export const ModeSelectScene: FC = () => {
  const { t } = useTranslation();

  return (
    <AppBackground>
      <div className={cn("flex flex-col gap-4")}>
        <h1 className={cn("text-4xl")}>{t("SelectGameMode")}</h1>
        <div className={cn("flex flex-col gap-2")}>
          <SinglePlayButton />
          <MultiPlayButton />
          <ToggleLangButton />
        </div>
      </div>
    </AppBackground>
  );
};
