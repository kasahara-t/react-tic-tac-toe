import { updateTileStatus } from "@/game/logics/boardLogic";
import {
  checkWin,
  findBestMove,
  updateGameResults,
} from "@/game/logics/gameLogic";
import {
  boardAtom,
  currentTurnAtom,
  gameOverAtom,
  gameResultsAtom,
} from "@/game/stores/atoms";
import type { Tile } from "@/game/types/tile";
import { useAtom } from "jotai";
import { incrementTurn } from "../logics/turnLogic";

export const useUpdateGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [results, setResults] = useAtom(gameResultsAtom);

  const updateBoard = (tile: Tile) => {
    const newBoard = updateTileStatus(currentTurn, board, tile);
    setBoard(newBoard);

    const isGameOver = checkWin(currentTurn, newBoard);
    if (isGameOver) {
      setGameOver(true);
      const newResults = updateGameResults(currentTurn.player, results);
      setResults(newResults);
    } else {
      const nextTurn = incrementTurn(currentTurn);
      setCurrentTurn(nextTurn);
    }
  };

  const updateBoardByCPU = () => {
    if (gameOver) return;
    const tile = findBestMove(currentTurn, board);
    updateBoard(tile);
  };

  const updateBoardByPlayer = (tile: Tile) => {
    if (gameOver) return;
    updateBoard(tile);
  };

  return {
    updateBoardByPlayer,
    updateBoardByCPU,
  };
};
