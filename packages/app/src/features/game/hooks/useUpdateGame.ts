import { updateBoard } from "@/entities/board/board.logic";
import type { Cell } from "@/entities/cell/cell.model";
import { useAtom } from "jotai";
import { incrementTurn, initializeGame } from "../game.logic";
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

      return {
        ...prevGame,
        history: [prevGame.history.at(0)],
      };
    });
  };

  const updateGame = (selectedCell: Cell) => {
    setGame((prevGame) => {
      if (!prevGame) {
        return prevGame;
      }

      const lastGameState = prevGame.history.at(-1);
      const newGameState = incrementTurn(
        lastGameState,
        updateBoard(
          lastGameState.currentBoard,
          selectedCell,
          lastGameState.currentPlayer,
        ),
      );

      return {
        ...prevGame,
        history: [...prevGame.history, newGameState],
      };
    });
  };

  return {
    startGame,
    restartGame,
    updateGame,
  };
};
