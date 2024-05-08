import settingImageUrl from "@/assets/setting.png";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import type { FC } from "react";

export const SettingButton: FC = () => {
  const handleButtonClick = () => {
    alert("setting is not implement!");
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ImageButton
            imgPath={settingImageUrl}
            imgAlt="Setting Button"
            onClick={handleButtonClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Setting</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
