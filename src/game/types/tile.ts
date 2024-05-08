import type { Turn } from "./turn";

export type TileType = "" | "O" | "X";

export interface Tile {
  readonly x: number;
  readonly y: number;
  readonly changeTurns: ReadonlyArray<Turn>;
}

export interface TileState {
  readonly char: TileType;
  readonly remainingPeriod: number;
}
