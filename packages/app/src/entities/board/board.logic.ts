import type { Cell } from "@/entities/cell";
import { BOARD_SIZE, type Board, type BoardCell } from "./board.model";

export const initializeBoard = (): Board => {
  const cells: Cell[] = Array.from(
    { length: BOARD_SIZE * BOARD_SIZE },
    (_, index) => {
      const x = index % BOARD_SIZE;
      const y = Math.floor(index / BOARD_SIZE);
      return {
        x,
        y,
      } as Cell;
    },
  );

  return {
    cells: cells.map(
      (cell) =>
        ({
          cell,
          state: {
            symbol: "empty",
            remainingTime: 0,
          },
        }) as BoardCell,
    ),
  };
};
