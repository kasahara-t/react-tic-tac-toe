import { describe, expect, test } from "bun:test";
import type { Turn } from "../types/turn";
import { incrementTurn } from "./turnLogic";

describe(incrementTurn.name, () => {
  const testCases: [Turn, Turn][] = [
    [
      { turn: 0, player: "Player1" },
      { turn: 1, player: "Player2" },
    ],
    [
      { turn: 1, player: "Player2" },
      { turn: 2, player: "Player1" },
    ],
  ];
  test.each(testCases)(
    "ターンを進めるとプレイヤーが入れ替わり、ターン数が1増加する",
    () => {
      const currentTurn: Turn = { turn: 0, player: "Player1" };
      const nextTurn = incrementTurn(currentTurn);
      expect(nextTurn).toEqual({ turn: 1, player: "Player2" });
    },
  );
});
