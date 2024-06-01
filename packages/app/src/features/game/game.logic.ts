import { initializeBoard } from "../board/board.logic";
import type { Board } from "../board/board.model";
import { createCPUPlayer, createHumanPlayer } from "../player/player.logic";
import type { Game, GameMode, GameState } from "./game.model";

export const initializeGame = (mode: GameMode): Game => {
  const initialGameState: GameState = {
    currentBoard: initializeBoard(),
    currentTurn: 1,
    currentPlayer: "circle",
  };
  const players = initializePlayers(mode);
  return {
    players,
    history: [initialGameState],
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
