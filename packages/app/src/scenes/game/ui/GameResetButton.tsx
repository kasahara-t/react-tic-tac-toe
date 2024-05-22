import resetButtonImageUrl from "@/assets/reset.png";
import { useResetGame } from "@/game/hooks/useResetGame";
import { useScene } from "@/game/hooks/useScene";
import { HelpOverlay } from "@/shared/ui/HelpOverlay";
import { ImageButton } from "@/shared/ui/ImageButton";
import { NeonText } from "@/shared/ui/NeonText";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/Tooltip";
import { preloadImages } from "@/shared/utils/helpers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

preloadImages(resetButtonImageUrl);

export const ResetGame: FC = () => {
  const { resetGame } = useResetGame();
  const { goToModeSelect } = useScene();
  const { t } = useTranslation();

  const handleClick = () => {
    resetGame();
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
