export interface Board {
  readonly size: number;
  readonly tiles: ReadonlyArray<ReadonlyArray<Tile>>;
}

export interface Tile {
  readonly x: number;
  readonly y: number;
  char: string;
  lastChangedTurn: number;
}
