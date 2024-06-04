export interface Cell {
  readonly x: number;
  readonly y: number;
}

export type CellSymbol = "empty" | "circle" | "cross";
export interface CellState {
  readonly symbol: CellSymbol;
  readonly remainingTime: number;
}
