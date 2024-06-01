import type { PlayerId } from "@/features/game";

export interface ResultLog {
  readonly winner: PlayerId;
  readonly winCount: number;
}
