import { atom, useAtom } from "jotai";
import {
  checkForWin,
  initializeBoard,
  updateTileStatus,
} from "../game/boardLogic";
import { isOTurn } from "../game/gameLogic";
import type { Board } from "../game/types";

const currentTurnAtom = atom<number>(0);

const isOTurnAtom = atom((get) => isOTurn(get(currentTurnAtom)));

const BOARD_SIZE = 3;

export const boardAtom = atom<Board>(initializeBoard(BOARD_SIZE));
const gameOverAtom = atom((get) => checkForWin(get(boardAtom)));

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [isOTurn] = useAtom(isOTurnAtom);
  const [gameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);

  const updateGameAndBoard = (x: number, y: number) => {
    if (gameOver) return;

    const newBoard = updateTileStatus(
      currentTurn,
      gameOver,
      isOTurn,
      board,
      x,
      y,
    );
    setBoard(newBoard);

    setCurrentTurn(currentTurn + 1);
  };

  const resetGame = () => {
    setCurrentTurn(0);
    setBoard(initializeBoard(BOARD_SIZE));
  };

  return {
    currentTurn,
    gameOver,
    isOTurn,
    board,
    updateGameAndBoard,
    resetGame,
  };
};
