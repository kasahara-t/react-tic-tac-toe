import { atom, useAtom } from "jotai";
import {
  checkForWin,
  initializeBoard,
  updateTileStatus,
} from "../game/boardLogic";
import type { Board, Game } from "../game/types";

const initialGameState: Game = {
  currentTurn: 0,
  gameOver: false,
};

const gameAtom = atom<Game>(initialGameState);

const isOTurnAtom = atom(
  (get) => get(gameAtom).currentTurn % 2 === 0, // 偶数ターンの時はtrue
);

const BOARD_SIZE = 3;

export const boardAtom = atom<Board>(initializeBoard(BOARD_SIZE));

export const useGame = () => {
  const [game, setGame] = useAtom(gameAtom);
  const [isOTurn] = useAtom(isOTurnAtom);
  const [board, setBoard] = useAtom(boardAtom);

  const updateGameAndBoard = (x: number, y: number) => {
    if (game.gameOver) return;

    const newBoard = updateTileStatus(game, isOTurn, board, x, y);
    setBoard(newBoard);

    setGame({
      currentTurn: game.currentTurn + 1,
      gameOver: checkForWin(newBoard),
    });
  };

  const resetGame = () => {
    setGame(initialGameState);
    setBoard(initializeBoard(BOARD_SIZE));
  };

  return {
    game,
    isOTurn,
    board,
    updateGameAndBoard,
    resetGame,
  };
};
