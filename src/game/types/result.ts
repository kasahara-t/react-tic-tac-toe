import type { Player } from "./player";

export interface GameResult {
  winner: Player;
  winCount: number;
}
