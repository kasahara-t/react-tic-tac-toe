import type { PlayerId } from "@/features/game";

export interface GameResult {
  readonly winner: PlayerId;
  readonly winCount: number;
}
