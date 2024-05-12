import type { PlayerId } from "./player";

export interface GameResult {
  readonly winner: PlayerId;
  readonly winCount: number;
}
