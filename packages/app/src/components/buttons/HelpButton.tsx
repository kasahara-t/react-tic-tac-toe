import helpImgUrl from "@/assets/help.png";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { useHelp } from "@/game/hooks/useHelp";
import { preloadImages } from "@/lib/utils";
import { Tooltip } from "@radix-ui/react-tooltip";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

preloadImages(helpImgUrl);

export const HelpButton: FC = () => {
  const { toggleHelpMode } = useHelp();
  const handleButtonClick = () => {
    toggleHelpMode();
  };
  const { t } = useTranslation();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ImageButton
            imgPath={helpImgUrl}
            imgAlt={t("HelpButton.Alt")}
            onClick={handleButtonClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("HelpButton.Tooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
