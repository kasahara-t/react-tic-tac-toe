import type { CellState } from "./cell.model";

export const getNextCellState = (currentCellState: CellState): CellState => {
  if (currentCellState.symbol !== "empty") {
    const isExpired = currentCellState.remainingTime <= 1;
    return {
      symbol: isExpired ? "empty" : currentCellState.symbol,
      remainingTime: isExpired ? 0 : currentCellState.remainingTime - 1,
    };
  }
  return currentCellState;
};
