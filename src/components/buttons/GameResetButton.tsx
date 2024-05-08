import resetButtonImageUrl from "@/assets/reset.png";
import { ImageButton } from "@/components/ui/ImageButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { useGame } from "@/game/hooks/useGame";
import type { FC } from "react";

export const GameResetButton: FC = () => {
  const { resetGame } = useGame();

  const handleButtonClick = () => {
    resetGame();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ImageButton
            imgPath={resetButtonImageUrl}
            imgAlt="Game Reset Button"
            onClick={handleButtonClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Game Reset</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
