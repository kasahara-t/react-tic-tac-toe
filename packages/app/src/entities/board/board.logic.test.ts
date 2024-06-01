import { describe, expect, test } from "bun:test";
import { initializeBoard, updateBoard } from "./board.logic";

describe(initializeBoard.name, () => {
  test("The initialized board has 9 tiles", () => {
    const board = initializeBoard();
    expect(board.cells).toHaveLength(9);
  });

  test("All tiles on the initialized board are empty", () => {
    const board = initializeBoard();
    expect(board.cells.every((cell) => cell.state.symbol === "empty")).toBe(
      true,
    );
  });

  test("All tiles on the initialized board have a remaining time of 0", () => {
    const board = initializeBoard();
    expect(board.cells.every((cell) => cell.state.remainingTime === 0)).toBe(
      true,
    );
  });

  test("All tiles on the initialized board have unique coordinates", () => {
    const board = initializeBoard();
    const uniqueCells = new Set(
      board.cells.map((cell) => `${cell.cell.x},${cell.cell.y}`),
    );
    expect(uniqueCells.size).toBe(9);
  });
});

describe(updateBoard.name, () => {
  test("If the selected cell is empty, it is set to the player's symbol", () => {
    const currentBoard = initializeBoard();
    const selectedCell = currentBoard.cells[0].cell;
    const currentPlayer = "circle";
    const updatedBoard = updateBoard(currentBoard, selectedCell, currentPlayer);
    const selectedCellState = updatedBoard.cells.find(
      (cell) =>
        cell.cell.x === selectedCell.x && cell.cell.y === selectedCell.y,
    )?.state;
    expect(selectedCellState?.symbol).toBe(currentPlayer);
  });
});
