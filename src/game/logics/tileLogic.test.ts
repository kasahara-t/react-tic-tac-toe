import { describe, expect, test } from "bun:test";
import type { BoardSize } from "../types/board";
import type { TileState } from "../types/tile";
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
  const testCases: [string, boolean, TileState][] = [
    [
      "タイルのシンボルが空文字で残存ターン数が0",
      true,
      { symbol: "", turnsLeft: 0 },
    ],
    [
      "タイルのシンボルは空文字だが残存ターン数が0以外",
      false,
      { symbol: "", turnsLeft: 1 },
    ],
    [
      "タイルのシンボルが空文字以外で残存ターン数が0",
      false,
      { symbol: "O", turnsLeft: 0 },
    ],
    [
      "タイルのシンボルが空文字以外で残存ターン数が0以外",
      false,
      { symbol: "O", turnsLeft: 1 },
    ],
  ];
  test.each(testCases)(
    "%sの場合、クリック可能かどうかは%p",
    (_label, expected, state) => {
      expect(canClickTile(state)).toBe(expected);
    },
  );
});
