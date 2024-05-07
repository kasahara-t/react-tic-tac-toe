import resetButtonImageUrl from "@/components/assets/reset.png";
import { BaseButton } from "@/components/ui/BaseButton";
import { useGame } from "@/hooks/useGame";
import type { FC } from "react";

export const GameResetButton: FC = () => {
  const { resetGame } = useGame();

  const handleButtonClick = () => {
    resetGame();
  };

  return (
    <BaseButton imgPath={resetButtonImageUrl} onClick={handleButtonClick} />
  );
};
