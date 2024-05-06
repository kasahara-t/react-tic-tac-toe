import type { FC } from "react";
import { initializeBoard } from "../game/boardLogic";
import { useGame } from "../hooks/useGame";
import { useUpdateBoard } from "../store/boardAtom";
import { BaseButton } from "./BaseButton";
import resetButtonImageUrl from "./reset.png";

export const GameResetButton: FC = () => {
  const { resetGame } = useGame();
  const { updateBoard } = useUpdateBoard();
  const handleButtonClick = () => {
    resetGame();
    updateBoard(initializeBoard(3));
  };
  return (
    <BaseButton imgPath={resetButtonImageUrl} onClick={handleButtonClick} />
  );
};
