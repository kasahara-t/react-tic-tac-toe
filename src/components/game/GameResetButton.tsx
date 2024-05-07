import resetButtonImageUrl from "@/components/assets/reset.png";
import { ImageButton } from "@/components/ui/ImageButton";
import { useGame } from "@/hooks/useGame";
import type { FC } from "react";

export const GameResetButton: FC = () => {
  const { resetGame } = useGame();

  const handleButtonClick = () => {
    resetGame();
  };

  return (
    <ImageButton
      imgPath={resetButtonImageUrl}
      imgAlt="Game Reset Button"
      onClick={handleButtonClick}
    />
  );
};
