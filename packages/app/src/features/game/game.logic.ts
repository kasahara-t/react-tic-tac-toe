import { initializeBoard } from "../board/board.logic";
import { createCPUPlayer, createHumanPlayer } from "../player/player.logic";
import type { Game, GameMode, GameState } from "./game.model";

export const initializeGame = (mode: GameMode): Game => {
  const initialGameState: GameState = {
    currentBoard: initializeBoard(),
    currentTurn: {
      turn: 0,
    },
    currentPlayer: "circle",
  };
  switch (mode) {
    case "single":
      return {
        history: [initialGameState],
        players: {
          circle: createHumanPlayer("You"),
          cross: createCPUPlayer(),
        },
      } as Game;
    case "multi":
      return {
        history: [initialGameState],
        players: {
          circle: createHumanPlayer("Player 1"),
          cross: createHumanPlayer("Player 2"),
        },
      } as Game;
  }
};
