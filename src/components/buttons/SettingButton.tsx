import settingImageUrl from "@/assets/setting.png";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { HelpOverlay } from "../ui/HelpOverlay";
import { NeonText } from "../ui/NeonText";

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
