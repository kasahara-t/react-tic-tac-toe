import helpImgUrl from "@/assets/help.png";
import { useHelp } from "@/features/help/help.hook";
import {
  ImageButton,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui";
import { preloadImages } from "@/shared/utils";
import { Tooltip } from "@radix-ui/react-tooltip";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

preloadImages(helpImgUrl);

export const ShowHelp: FC = () => {
  const { toggleHelpMode } = useHelp();
  const { t } = useTranslation();

  const handleClick = () => {
    toggleHelpMode();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ImageButton
            imgPath={helpImgUrl}
            imgAlt={t("HelpButton.Alt")}
            onClick={handleClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("HelpButton.Tooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
