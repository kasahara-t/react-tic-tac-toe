import { checkForWin, updateTileStatus } from "@/game/logics/boardLogic";
import { isOTurn } from "@/game/logics/gameLogic";
import {
  boardAtom,
  currentTurnAtom,
  gameLogAtom,
  gameOverAtom,
  winsCountAtom,
} from "@/game/stores/atoms";
import type { Tile } from "@/game/types/tile";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [gameLogs, setGameLogs] = useAtom(gameLogAtom);
  const [winsCount, setWinsCount] = useAtom(winsCountAtom);

  const resetCurrentTurn = useResetAtom(currentTurnAtom);
  const resetBoard = useResetAtom(boardAtom);
  const resetGameLogs = useResetAtom(gameLogAtom);
  const resetWinsCount = useResetAtom(winsCountAtom);
  const resetGameOver = useResetAtom(gameOverAtom);

  const updateGameAndBoard = (tile: Tile) => {
    if (gameOver) return;

    const newBoard = updateTileStatus(currentTurn, board, tile);
    setBoard(newBoard);

    const isGameOver = checkForWin(currentTurn, newBoard);
    if (isGameOver) {
      setGameOver(true);
      setGameLogs([...gameLogs, `${currentTurn.isOTurn ? "O" : "X"}の勝ち`]);
      setWinsCount({
        ...winsCount,
        [currentTurn.isOTurn ? "O" : "X"]:
          winsCount[currentTurn.isOTurn ? "O" : "X"] + 1,
      });
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
    resetGameLogs();
    resetWinsCount();
    resetGameOver();
  };

  return {
    currentTurn,
    gameOver,
    board,
    gameLogs,
    updateGameAndBoard,
    restartGame,
    resetGame,
  };
};
