import { describe, expect, test } from "bun:test";
import type { BoardSize } from "../types/board";
import type { TileSymbol } from "../types/tile";
import { canClickTile, getRemainingTurns } from "./tileLogic";

describe(getRemainingTurns.name, () => {
  const testCases: [BoardSize, number][] = [[3, 7]];
  test.each(testCases)(
    "サイズが%p の場合、タイルは%p ターン残る",
    (size, expected) => {
      expect(getRemainingTurns(size)).toBe(expected);
    },
  );
});

describe(canClickTile.name, () => {
  const testCases: [TileSymbol, boolean][] = [
    ["", true],
    ["O", false],
    ["X", false],
  ];
  test.each(testCases)(
    "シンボルが%p の場合、クリック可能かどうかは%p",
    (symbol, expected) => {
      expect(canClickTile({ symbol, turnsLeft: 0 })).toBe(expected);
    },
  );
});
