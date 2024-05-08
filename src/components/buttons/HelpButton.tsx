import helpImgUrl from "@/assets/help.png";
import { useHelp } from "@/common/hooks/useHelp";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import type { FC } from "react";

export const HelpButton: FC = () => {
  const { toggleHelpMode } = useHelp();
  const handleButtonClick = () => {
    toggleHelpMode();
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
