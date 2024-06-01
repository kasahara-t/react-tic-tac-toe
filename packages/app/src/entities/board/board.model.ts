import type { Cell, CellState } from "@/entities/cell/cell.model";

export const BOARD_SIZE = 3;

export interface BoardCell {
  cell: Cell;
  state: CellState;
}

export interface Board {
  readonly cells: ReadonlyArray<BoardCell>;
}
