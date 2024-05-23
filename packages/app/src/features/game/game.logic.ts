import { initializeBoard } from "../board/board.logic";
import type { CPUPlayer, HumanPlayer } from "../player/player.model";
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
          circle: {
            name: "Player",
          } as HumanPlayer,
          cross: {
            name: "Computer",
          } as CPUPlayer,
        },
      } as Game;
    case "multi":
      return {
        history: [initialGameState],
        players: {
          circle: {
            name: "Player 1",
          } as HumanPlayer,
          cross: {
            name: "Player 2",
          } as HumanPlayer,
        },
      } as Game;
  }
};
