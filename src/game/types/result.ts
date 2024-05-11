import type { PlayerId } from "./player";

export interface GameResult {
  winner: PlayerId;
  winCount: number;
}
