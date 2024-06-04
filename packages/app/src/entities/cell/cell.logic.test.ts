import { describe, expect, test } from "bun:test";
import { getNextCellState } from "./cell.logic";
import type { CellState } from "./cell.model";

describe(getNextCellState.name, () => {
  test("If the cell state is empty, return it as is", () => {
    const currentCellState: CellState = {
      symbol: "empty",
      remainingTime: 0,
    };
    const nextCellState = getNextCellState(currentCellState);
    expect(nextCellState).toEqual(currentCellState);
  });

  test("If the cell state is not empty, decrease the remaining time by 1", () => {
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

  test("If the cell state is not empty and the remaining time reaches 0, it becomes empty", () => {
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
