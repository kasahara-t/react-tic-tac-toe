import { atom, useAtom } from "jotai";
import {
  checkForWin,
  initializeBoard,
  updateTileStatus,
} from "../game/boardLogic";
import { isOTurn } from "../game/gameLogic";
import type { Board, Tile, Turn } from "../game/types";

const initialTurn: Turn = {
  turn: 0,
  isOTurn: isOTurn(0),
};
const currentTurnAtom = atom<Turn>(initialTurn);

const BOARD_SIZE = 3;

export const boardAtom = atom<Board>(initializeBoard(BOARD_SIZE));
const gameOverAtom = atom((get) =>
  checkForWin(get(currentTurnAtom), get(boardAtom)),
);

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);

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
    updateGameAndBoard,
    resetGame,
  };
};
