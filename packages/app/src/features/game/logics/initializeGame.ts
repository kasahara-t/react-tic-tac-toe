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
    case "single": {
      // 50% chance to be circle or cross
      const random = Math.random() < 0.5;
      const humanPlayer = createHumanPlayer("You");
      const cpuPlayer = createCPUPlayer();
      return {
        circle: random ? humanPlayer : cpuPlayer,
        cross: random ? cpuPlayer : humanPlayer,
      };
    }
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
