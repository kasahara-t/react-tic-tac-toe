import { describe, expect, test } from "bun:test";
import type { BoardSize } from "../types/board";
import { initializeBoard } from "./boardLogic";

describe(initializeBoard.name, () => {
  const testCases: [BoardSize, number][] = [[3, 9]];
  test.each(testCases)(
    "サイズが%pで初期化されたボードには%p個のタイルが生成される",
    (size, expected) => {
      const board = initializeBoard(size as BoardSize);
      expect(board.tiles).toHaveLength(expected as number);
    },
  );
});
