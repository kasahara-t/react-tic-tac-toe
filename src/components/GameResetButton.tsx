import { useGame } from "@/hooks/useGame";
import type { FC } from "react";
import { BaseButton } from "./BaseButton";
import resetButtonImageUrl from "./reset.png";

export const GameResetButton: FC = () => {
  const { resetGame } = useGame();

  const handleButtonClick = () => {
    resetGame();
  };

  return (
    <BaseButton imgPath={resetButtonImageUrl} onClick={handleButtonClick} />
  );
};
