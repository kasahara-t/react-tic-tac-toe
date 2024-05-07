import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import {
  checkForWin,
  initializeBoard,
  updateTileStatus,
} from "../logics/boardLogic";
import { isOTurn } from "../logics/gameLogic";
import type { Board, Tile, Turn } from "../logics/types";

const initialTurn: Turn = {
  turn: 0,
  isOTurn: isOTurn(0),
};
const currentTurnAtom = atom<Turn>(initialTurn);

const BOARD_SIZE = 3;

const boardAtom = atom<Board>(initializeBoard(BOARD_SIZE));
const gameOverAtom = atom((get) =>
  checkForWin(get(currentTurnAtom), get(boardAtom)),
);

const gameLogAtom = atom<string[]>([]);
// 勝利数を記録するアトム
const winsCountAtom = atom<{ O: number; X: number }>({ O: 0, X: 0 });

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [gameLogs, setGameLogs] = useAtom(gameLogAtom);
  const [winsCount, setWinsCount] = useAtom(winsCountAtom);
  const prevGameOver = useRef(gameOver);

  useEffect(() => {
    // ゲームオーバー状態の変化を検出
    if (prevGameOver.current !== gameOver && gameOver) {
      const winner = !currentTurn.isOTurn ? "O" : "X";
      const newWinsCount = { ...winsCount, [winner]: winsCount[winner] + 1 };
      setGameLogs([
        ...gameLogs,
        `${winner}が${newWinsCount[winner]}回目の勝利`,
      ]);
      setWinsCount(newWinsCount);
    }
    prevGameOver.current = gameOver; // 現在の状態を保存
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

  const resetGame = () => {
    setCurrentTurn(initialTurn);
    setBoard(initializeBoard(BOARD_SIZE));
  };

  return {
    currentTurn,
    gameOver,
    board,
    gameLogs,
    updateGameAndBoard,
    resetGame,
  };
};
