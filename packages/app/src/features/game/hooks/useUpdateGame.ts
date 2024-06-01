import type { Cell } from "@/entities";
import { useAtom } from "jotai";
import { getBestMove, initializeGame, updateGame } from "../game.logic";
import type { GameMode } from "../game.model";
import { gameAtom } from "../game.store";

export const useUpdateGame = () => {
  const [_game, setGame] = useAtom(gameAtom);

  const startGame = (mode: GameMode) => {
    setGame(initializeGame(mode));
  };

  const restartGame = () => {
    setGame((prevGame) => {
      if (!prevGame) {
        return prevGame;
      }
      const firstState = prevGame.history.at(0);
      if (!firstState) {
        return prevGame;
      }

      return {
        ...prevGame,
        history: [firstState],
      };
    });
  };

  const updateByPlayer = (selectedCell: Cell) => {
    setGame((prevGame) => {
      if (!prevGame) {
        return prevGame;
      }

      updateGame(prevGame, selectedCell);
    });
  };

  const updateByCPU = () => {
    setGame((prevGame) => {
      if (!prevGame) {
        return prevGame;
      }

      const bestMove = getBestMove(prevGame);
      updateGame(prevGame, bestMove);
    });
  };

  return {
    startGame,
    restartGame,
    updateByPlayer,
    updateByCPU,
  };
};
