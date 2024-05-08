import type { Turn } from "./turn";

export interface Tile {
  readonly x: number;
  readonly y: number;
  readonly changeTurns: ReadonlyArray<Turn>;
}

export interface TileState {
  readonly char: "" | "O" | "X";
  readonly remainingPeriod: number;
}
