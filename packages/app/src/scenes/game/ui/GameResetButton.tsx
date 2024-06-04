import resetButtonImageUrl from "@/assets/reset.png";
import { useResetGame } from "@/features/game";
import { useResultLog } from "@/features/resultLog";
import { useScene } from "@/features/scene";
import {
  HelpOverlay,
  ImageButton,
  NeonText,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui";
import { preloadImages } from "@/shared/utils";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

preloadImages(resetButtonImageUrl);

export const ResetGame: FC = () => {
  const { resetGame } = useResetGame();
  const { resetResultLog } = useResultLog();
  const { goToModeSelect } = useScene();
  const { t } = useTranslation();

  const handleClick = () => {
    resetGame();
    resetResultLog();
    goToModeSelect();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpOverlay
            helpText={<NeonText>{t("GameResetButton.Help")}</NeonText>}
          >
            <ImageButton
              imgPath={resetButtonImageUrl}
              imgAlt={t("GameResetButton.Alt")}
              onClick={handleClick}
            />
          </HelpOverlay>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("GameResetButton.Tooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
