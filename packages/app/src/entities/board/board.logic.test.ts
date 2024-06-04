import { describe, expect, test } from "bun:test";
import { initializeBoard } from "./board.logic";

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
