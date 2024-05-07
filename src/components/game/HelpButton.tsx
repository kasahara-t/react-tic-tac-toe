import helpImgUrl from "@/components/assets/help.png";
import { ImageButton } from "@/components/ui/ImageButton";
import { Tooltip } from "@radix-ui/react-tooltip";
import type { FC } from "react";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/Tooltip";

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
