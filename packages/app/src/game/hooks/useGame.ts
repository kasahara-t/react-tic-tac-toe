import {
  boardAtom,
  currentTurnAtom,
  gameOverAtom,
  gameResultsAtom,
  playersStateAtom,
} from "@/game/stores/atoms";
import { useAtom } from "jotai";

export const useGame = () => {
  const [currentTurn] = useAtom(currentTurnAtom);
  const [gameOver] = useAtom(gameOverAtom);
  const [board] = useAtom(boardAtom);
  const [results] = useAtom(gameResultsAtom);
  const [players] = useAtom(playersStateAtom);

  return {
    currentTurn,
    gameOver,
    board,
    results,
    players,
  };
};
