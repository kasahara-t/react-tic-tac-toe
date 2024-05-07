export interface Turn {
  readonly turn: number;
  readonly isOTurn: boolean;
}

export type BoardSize = 3 | 6 | 9;

export interface Board {
  readonly size: BoardSize;
  readonly tiles: ReadonlyArray<ReadonlyArray<Tile>>;
}

export interface Tile {
  readonly x: number;
  readonly y: number;
  readonly changeTurns: ReadonlyArray<Turn>;
}

export interface TileState {
  readonly char: "" | "O" | "X";
  readonly remainingPeriod: number;
}
