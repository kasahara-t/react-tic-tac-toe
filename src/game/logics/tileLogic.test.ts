import { describe, expect, test } from "bun:test";
import type { BoardSize } from "../types/board";
import { getRemainingTurns } from "./tileLogic";

describe(getRemainingTurns.name, () => {
  const testCases: [BoardSize, number][] = [[3, 7]];
  test.each(testCases)(
    "サイズが%pの場合、タイルは%pターン残る",
    (size, expected) => {
      expect(getRemainingTurns(size)).toBe(expected);
    },
  );
});
