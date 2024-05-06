import { atom, useAtom } from "jotai";
import { checkForWin } from "../game/boardLogic";
import type { Board, Game } from "../game/types";

const initialGameState: Game = {
  currentTurn: 0,
  isOTurn: true,
  gameOver: false,
};

const gameAtom = atom<Game>(initialGameState);

export const useGame = () => {
  const [game, setGame] = useAtom(gameAtom);

  const updateGame = (newBoard: Board) => {
    setGame({
      currentTurn: game.currentTurn + 1,
      isOTurn: !game.isOTurn,
      gameOver: checkForWin(newBoard),
    });
  };

  const resetGame = () => {
    setGame(initialGameState);
  };

  return {
    game,
    updateGame,
    resetGame,
  };
};
