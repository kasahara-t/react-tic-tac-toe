import {
  checkForWin,
  initializeBoard,
  updateTileStatus,
} from "@/game/logics/boardLogic";
import { isOTurn } from "@/game/logics/gameLogic";
import type { Board, BoardSize } from "@/game/types/board";
import type { Tile } from "@/game/types/tile";
import type { Turn } from "@/game/types/turn";
import { atom, useAtom } from "jotai";
import { atomWithDefault, atomWithReset, useResetAtom } from "jotai/utils";
import { useEffect, useRef } from "react";

const initialTurn: Turn = {
  turn: 0,
  isOTurn: isOTurn(0),
};
const currentTurnAtom = atomWithReset<Turn>(initialTurn);

const boardSizeAtom = atom<BoardSize>(3);

const boardAtom = atomWithDefault<Board>((get) =>
  initializeBoard(get(boardSizeAtom)),
);
const gameOverAtom = atom((get) =>
  checkForWin(get(currentTurnAtom), get(boardAtom)),
);

const gameLogAtom = atomWithReset<string[]>([]);
const winsCountAtom = atomWithReset<{ O: number; X: number }>({ O: 0, X: 0 });

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [gameLogs, setGameLogs] = useAtom(gameLogAtom);
  const [winsCount, setWinsCount] = useAtom(winsCountAtom);
  const prevGameOver = useRef(gameOver);

  const resetCurrentTurn = useResetAtom(currentTurnAtom);
  const resetBoard = useResetAtom(boardAtom);
  const resetGameLogs = useResetAtom(gameLogAtom);
  const resetWinsCount = useResetAtom(winsCountAtom);

  useEffect(() => {
    if (prevGameOver.current !== gameOver && gameOver) {
      const winner = !currentTurn.isOTurn ? "O" : "X";
      const newWinsCount = { ...winsCount, [winner]: winsCount[winner] + 1 };
      setGameLogs([
        ...gameLogs,
        `${winner}が${newWinsCount[winner]}回目の勝利`,
      ]);
      setWinsCount(newWinsCount);
    }
    prevGameOver.current = gameOver;
  }, [
    gameOver,
    currentTurn.isOTurn,
    gameLogs,
    setGameLogs,
    setWinsCount,
    winsCount,
  ]);

  const updateGameAndBoard = (tile: Tile) => {
    if (gameOver) return;

    const newBoard = updateTileStatus(currentTurn, board, tile);
    setBoard(newBoard);

    setCurrentTurn({
      turn: currentTurn.turn + 1,
      isOTurn: isOTurn(currentTurn.turn + 1),
    });
  };

  const restartGame = () => {
    resetCurrentTurn();
    resetBoard();
  };

  const resetGame = () => {
    resetCurrentTurn();
    resetBoard();
    resetGameLogs();
    resetWinsCount();
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
