import { checkForWin, updateTileStatus } from "@/game/logics/boardLogic";
import { findBestMove, updateGameResults } from "@/game/logics/gameLogic";
import {
  boardAtom,
  currentTurnAtom,
  gameOverAtom,
  gameResultsAtom,
  playersState,
} from "@/game/stores/atoms";
import type { Tile } from "@/game/types/tile";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import type { Turn } from "../types/turn";

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [results, setResults] = useAtom(gameResultsAtom);
  const [players] = useAtom(playersState);

  const resetCurrentTurn = useResetAtom(currentTurnAtom);
  const resetBoard = useResetAtom(boardAtom);
  const resetGameOver = useResetAtom(gameOverAtom);
  const resetResults = useResetAtom(gameResultsAtom);

  useEffect(() => {
    if (players[currentTurn.player]?.isCPU ?? false) {
      // CPUの場合
      const tile = findBestMove(currentTurn, board);
      updateGameAndBoard(tile);
    }
  }, [currentTurn, players, board]);

  const updateGameAndBoard = (tile: Tile) => {
    if (gameOver) return;

    const newBoard = updateTileStatus(currentTurn, board, tile);
    setBoard(newBoard);

    const isGameOver = checkForWin(currentTurn, newBoard);
    if (isGameOver) {
      setGameOver(true);
      const newResults = updateGameResults(currentTurn.player, results);
      setResults(newResults);
    } else {
      const nextTurn: Turn = {
        turn: currentTurn.turn + 1,
        player: currentTurn.player === "Player1" ? "Player2" : "Player1",
      };
      setCurrentTurn(nextTurn);
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
