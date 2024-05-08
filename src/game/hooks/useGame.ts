import { checkForWin, updateTileStatus } from "@/game/logics/boardLogic";
import { isOTurn, updateGameResults } from "@/game/logics/gameLogic";
import {
  boardAtom,
  currentTurnAtom,
  gameOverAtom,
  gameResultsAtom,
} from "@/game/stores/atoms";
import type { Tile } from "@/game/types/tile";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [results, setResults] = useAtom(gameResultsAtom);

  const resetCurrentTurn = useResetAtom(currentTurnAtom);
  const resetBoard = useResetAtom(boardAtom);
  const resetGameOver = useResetAtom(gameOverAtom);
  const resetResults = useResetAtom(gameResultsAtom);

  const updateGameAndBoard = (tile: Tile) => {
    if (gameOver) return;

    const newBoard = updateTileStatus(currentTurn, board, tile);
    setBoard(newBoard);

    const isGameOver = checkForWin(currentTurn, newBoard);
    if (isGameOver) {
      setGameOver(true);
      const winner = currentTurn.isOTurn ? "O" : "X";
      const newResults = updateGameResults(winner, results);
      setResults(newResults);
    } else {
      setCurrentTurn({
        turn: currentTurn.turn + 1,
        isOTurn: isOTurn(currentTurn.turn + 1),
      });
    }
  };

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
  };

  return {
    currentTurn,
    gameOver,
    board,
    results,
    updateGameAndBoard,
    restartGame,
    resetGame,
  };
};
