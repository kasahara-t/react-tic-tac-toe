import settingImageUrl from "@/assets/setting.png";
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

preloadImages(settingImageUrl);

export const SettingButton: FC = () => {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    alert("setting is not implement!");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpOverlay
            helpText={<NeonText>{t("SettingButton.Help")}</NeonText>}
          >
            <ImageButton
              imgPath={settingImageUrl}
              imgAlt={t("SettingButton.Alt")}
              onClick={handleButtonClick}
            />
          </HelpOverlay>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("SettingButton.Tooltip")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
