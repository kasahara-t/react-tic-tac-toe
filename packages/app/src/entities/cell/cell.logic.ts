import type { CellState } from "./cell.model";

/**
 * 次のセルの状態を取得する
 */
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
