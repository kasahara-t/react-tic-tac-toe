import { describe, expect, test } from "bun:test";
import { initializeBoard, updateBoard } from "./board.logic";

describe(initializeBoard.name, () => {
  test("初期化されたボードには9個のタイルが生成される", () => {
    const board = initializeBoard();
    expect(board.cells).toHaveLength(9);
  });

  test("初期化されたボードのタイルは全て空である", () => {
    const board = initializeBoard();
    expect(board.cells.every((cell) => cell.state.symbol === "empty")).toBe(
      true,
    );
  });

  test("初期化されたボードのタイルは全て残り時間が0である", () => {
    const board = initializeBoard();
    expect(board.cells.every((cell) => cell.state.remainingTime === 0)).toBe(
      true,
    );
  });

  test("初期化されたボードのタイルは全て異なる座標を持つ", () => {
    const board = initializeBoard();
    const uniqueCells = new Set(
      board.cells.map((cell) => `${cell.cell.x},${cell.cell.y}`),
    );
    expect(uniqueCells.size).toBe(9);
  });
});

describe(updateBoard.name, () => {
  test("選択されたセルが空の場合、そのセルにプレイヤーのシンボルが設定される", () => {
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
