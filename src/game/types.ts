export interface Turn {
  readonly turn: number;
  readonly isOTurn: boolean;
}

export interface Board {
  readonly size: number;
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
