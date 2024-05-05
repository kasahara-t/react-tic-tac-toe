import type { FC } from "react";
import { initializeBoard } from "../game/boardLogic";
import { useUpdateBoard } from "../store/boardAtom";
import { useUpdateGame } from "../store/gameAtom";
import { BaseButton } from "./BaseButton";
import resetButtonImageUrl from "./reset.png";

export const GameResetButton: FC = () => {
  const { updateGame } = useUpdateGame();
  const { updateBoard } = useUpdateBoard();
  const handleButtonClick = () => {
    updateGame({
      currentTurn: 0,
      gameOver: false,
      isOTurn: true,
    });
    updateBoard(initializeBoard(3));
  };
  return (
    <BaseButton imgPath={resetButtonImageUrl} onClick={handleButtonClick} />
  );
};
