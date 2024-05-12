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
  playersState,
} from "@/game/stores/atoms";
import type { Tile } from "@/game/types/tile";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { incrementTurn } from "../logics/turnLogic";

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [results, setResults] = useAtom(gameResultsAtom);
  const [players] = useAtom(playersState);

  useEffect(() => {
    if (players[currentTurn.player]?.isCPU ?? false) {
      // CPUの場合
      setTimeout(() => {
        const tile = findBestMove(currentTurn, board);
        updateGameAndBoard(tile);
      }, 500);
    }
  }, [currentTurn, players, board]);

  const updateGameAndBoard = (tile: Tile) => {
    if (gameOver) return;

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

  return {
    currentTurn,
    gameOver,
    board,
    results,
    updateGameAndBoard,
  };
};
