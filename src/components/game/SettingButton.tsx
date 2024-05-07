import settingImageUrl from "@/components/assets/setting.png";
import { ImageButton } from "@/components/ui/ImageButton";
import type { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/Tooltip";

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
