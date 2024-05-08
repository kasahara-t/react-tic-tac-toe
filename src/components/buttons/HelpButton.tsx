import helpImgUrl from "@/assets/help.png";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import type { FC } from "react";

export const HelpButton: FC = () => {
  const handleButtonClick = () => {
    alert("help is not implement!");
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ImageButton
            imgPath={helpImgUrl}
            imgAlt="Help Button"
            onClick={handleButtonClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Help</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
