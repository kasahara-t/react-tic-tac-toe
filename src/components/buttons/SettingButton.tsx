import settingImageUrl from "@/assets/setting.png";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import type { FC } from "react";
import HelpOverlay from "../ui/HelpOverlay";
import { NeonText } from "../ui/NeonText";

export const SettingButton: FC = () => {
  const handleButtonClick = () => {
    alert("setting is not implement!");
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpOverlay
            helpText={
              <NeonText>
                ゲームの設定を
                <br />
                変更できます。
              </NeonText>
            }
          >
            <ImageButton
              imgPath={settingImageUrl}
              imgAlt="Setting Button"
              onClick={handleButtonClick}
            />
          </HelpOverlay>
        </TooltipTrigger>
        <TooltipContent>
          <p>Setting</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
