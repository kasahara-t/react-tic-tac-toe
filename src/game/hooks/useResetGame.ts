import {
  boardAtom,
  currentTurnAtom,
  gameOverAtom,
  gameResultsAtom,
  playersState,
} from "@/game/stores/atoms";
import { useResetAtom } from "jotai/utils";

export const useResetGame = () => {
  const resetCurrentTurn = useResetAtom(currentTurnAtom);
  const resetBoard = useResetAtom(boardAtom);
  const resetGameOver = useResetAtom(gameOverAtom);
  const resetResults = useResetAtom(gameResultsAtom);
  const resetPlayers = useResetAtom(playersState);

  const restartGame = () => {
    resetCurrentTurn();
    resetBoard();
    resetGameOver();
  };

  const resetGame = () => {
    resetCurrentTurn();
    resetBoard();
    resetGameOver();
    resetResults();
    resetPlayers();
  };

  return {
    restartGame,
    resetGame,
  };
};
