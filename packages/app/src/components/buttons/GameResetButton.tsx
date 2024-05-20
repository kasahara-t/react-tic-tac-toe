import resetButtonImageUrl from "@/assets/reset.png";
import { useResetGame } from "@/game/hooks/useResetGame";
import { useScene } from "@/game/hooks/useScene";
import { ImageButton } from "@/shared/ui/ImageButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/Tooltip";
import { preloadImages } from "@/shared/utils/helpers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { HelpOverlay } from "../../shared/ui/HelpOverlay";
import { NeonText } from "../../shared/ui/NeonText";

preloadImages(resetButtonImageUrl);

export const GameResetButton: FC = () => {
  const { resetGame } = useResetGame();
  const { goToModeSelect } = useScene();
  const { t } = useTranslation();

  const handleButtonClick = () => {
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
              onClick={handleButtonClick}
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
