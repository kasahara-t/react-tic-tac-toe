import { initializeBoard } from "@/entities/board";
import { createCPUPlayer, createHumanPlayer } from "@/entities/player";
import type { Game, GameMode, GameState } from "../game.model";

export const initializeGame = (mode: GameMode): Game => {
  const players = initializePlayers(mode);
  const history = initializeHistory();
  return {
    players,
    history,
  };
};

const initializePlayers = (mode: GameMode) => {
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

const initializeHistory = (): GameState[] => {
  return [
    {
      currentBoard: initializeBoard(),
      currentTurn: 1,
      currentPlayer: "circle",
    },
  ];
};
