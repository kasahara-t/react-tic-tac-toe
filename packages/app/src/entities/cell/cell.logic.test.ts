import { describe, expect, test } from "bun:test";
import { getNextCellState } from "./cell.logic";
import type { CellState } from "./cell.model";

describe(getNextCellState.name, () => {
  test("セルの状態が空の場合、そのまま返す", () => {
    const currentCellState: CellState = {
      symbol: "empty",
      remainingTime: 0,
    };
    const nextCellState = getNextCellState(currentCellState);
    expect(nextCellState).toEqual(currentCellState);
  });

  test("セルの状態が空でない場合、残り時間が1減る", () => {
    const currentCellState: CellState = {
      symbol: "circle",
      remainingTime: 3,
    };
    const nextCellState = getNextCellState(currentCellState);
    expect(nextCellState).toEqual({
      symbol: "circle",
      remainingTime: 2,
    });
  });

  test("セルの状態が空でない場合、残り時間が0になると空になる", () => {
    const currentCellState: CellState = {
      symbol: "cross",
      remainingTime: 1,
    };
    const nextCellState = getNextCellState(currentCellState);
    expect(nextCellState).toEqual({
      symbol: "empty",
      remainingTime: 0,
    });
  });
});
