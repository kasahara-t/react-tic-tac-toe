import { describe, expect, test } from "bun:test";
import { initializeBoard } from "./board.logic";

describe(initializeBoard.name, () => {
  test("初期化されたボードには9個のタイルが生成される", () => {
    const board = initializeBoard();
    expect(board.cells).toHaveLength(9);
  });
});
