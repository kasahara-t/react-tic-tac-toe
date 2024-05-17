import type { Turn } from "../types/turn";

export const incrementTurn = (currentTurn: Turn): Turn => {
  return {
    turn: currentTurn.turn + 1,
    player: currentTurn.player === "Player1" ? "Player2" : "Player1",
  };
};
