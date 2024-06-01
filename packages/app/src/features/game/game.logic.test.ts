import { describe, expect, test } from "bun:test";
import { initializeBoard } from "@/entities/board";
import { updateBoard } from "./game.logic";

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
