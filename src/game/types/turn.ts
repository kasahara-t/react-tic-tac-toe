import type { PlayerId } from "./player";

export interface Turn {
  readonly turn: number;
  readonly player: PlayerId;
}
