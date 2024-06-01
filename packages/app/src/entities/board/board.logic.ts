import { type Cell, getNextCellState } from "@/entities/cell";
import type { PlayerId } from "@/features/game/game.model";
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

/**
 * Update the board state with the selected cell
 */
export const updateBoard = (
  currentBoard: Board,
  selectedCell: Cell,
  currentPlayer: PlayerId,
): Board => {
  return {
    cells: currentBoard.cells.map((boardCell) => {
      if (
        boardCell.cell.x === selectedCell.x &&
        boardCell.cell.y === selectedCell.y &&
        boardCell.state.symbol === "empty"
      ) {
        return {
          cell: boardCell.cell,
          state: {
            symbol: currentPlayer === "circle" ? "circle" : "cross",
            remainingTime: 5,
          },
        };
      }
      return {
        cell: boardCell.cell,
        state: getNextCellState(boardCell.state),
      };
    }),
  };
};
