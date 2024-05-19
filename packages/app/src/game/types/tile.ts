import type { Turn } from "./turn";

export type TileSymbol = "" | "O" | "X";

export interface Tile {
  readonly x: number;
  readonly y: number;
  readonly changeTurns: ReadonlyArray<Turn>;
}

export interface TileState {
  readonly symbol: TileSymbol;
  readonly turnsLeft: number;
}
