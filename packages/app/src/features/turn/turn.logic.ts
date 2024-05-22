import type { Turn } from "./turn.model";

export const incrementTurn = (turn: Turn): Turn => ({
  turn: turn.turn + 1,
});
