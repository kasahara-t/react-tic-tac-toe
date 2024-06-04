import type { Cell } from "@/entities/cell";
import { createResultLog } from "@/features/resultLog/resultLog.logic";
import { resultLogAtom } from "@/features/resultLog/resultLog.store";
import { useAtom } from "jotai";
import { set } from "zod";
import {
  checkWinner,
  getBestMove,
  initializeGame,
  updateGame,
} from "../game.logic";
import type { Game, GameMode } from "../game.model";
import { gameAtom } from "../game.store";

export const useUpdateGame = () => {
  const [game, setGame] = useAtom(gameAtom);
  const [resultLog, setResultLog] = useAtom(resultLogAtom);

  const startGame = (mode: GameMode) => {
    setGame(initializeGame(mode));
  };

  const restartGame = () => {
    if (!game) {
      return;
    }

    const firstState = game.history.at(0);
    if (!firstState) {
      return;
    }

    const initialGame: Game = {
      ...game,
      history: [firstState],
    };
    setGame(initialGame);
  };

  const updateByPlayer = (selectedCell: Cell) => {
    if (!game) {
      return;
    }

    const newGame = updateGame(game, selectedCell);
    setGame(newGame);

    const winner = checkWinner(newGame);
    if (winner) {
      setResultLog([...resultLog, createResultLog(resultLog, winner)]);
    }
  };

  const updateByCPU = () => {
    if (!game) {
      return;
    }

    const newGame = updateGame(game, getBestMove(game));
    setGame(newGame);

    const winner = checkWinner(newGame);
    if (winner) {
      setResultLog([...resultLog, createResultLog(resultLog, winner)]);
    }
  };

  return {
    startGame,
    restartGame,
    updateByPlayer,
    updateByCPU,
  };
};
