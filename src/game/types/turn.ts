import type { Player } from "./player";

export interface Turn {
  readonly turn: number;
  readonly player: Player;
}
