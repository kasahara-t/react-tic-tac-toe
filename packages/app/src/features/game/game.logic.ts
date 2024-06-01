import { initializeBoard } from "../../entities/board/board.logic";
import type { Board } from "../../entities/board/board.model";
import {
  createCPUPlayer,
  createHumanPlayer,
} from "../../entities/player/player.logic";
import type { Game, GameMode, GameState } from "./game.model";

export const initializeGame = (mode: GameMode): Game => {
  const players = initializePlayers(mode);
  const history = initializeHistory();
  return {
    players,
    history,
  };
};

export const initializePlayers = (mode: GameMode) => {
  switch (mode) {
    case "single":
      return {
        circle: createHumanPlayer("You"),
        cross: createCPUPlayer(),
      };
    case "multi":
      return {
        circle: createHumanPlayer("Player 1"),
        cross: createHumanPlayer("Player 2"),
      };
  }
};

export const initializeHistory = (): GameState[] => {
  return [
    {
      currentBoard: initializeBoard(),
      currentTurn: 1,
      currentPlayer: "circle",
    },
  ];
};

export const incrementTurn = (
  state: GameState,
  nextBoard: Board,
): GameState => {
  return {
    currentBoard: nextBoard,
    currentTurn: state.currentTurn + 1,
    currentPlayer: state.currentPlayer === "circle" ? "cross" : "circle",
  };
};
