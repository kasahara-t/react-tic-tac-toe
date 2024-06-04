import { BOARD_SIZE, type BoardCell } from "@/entities/board";
import type { CellSymbol } from "@/entities/cell";
import type { Game, PlayerId } from "../game.model";

/**
 * Check if there is a winner
 */
export const checkWinner = (currentGame: Game): PlayerId | undefined => {
  const lastGameState = currentGame.history.at(-1);
  if (!lastGameState) {
    throw new Error("Game history is empty.");
  }

  const { currentBoard } = lastGameState;

  // check vertical cells
  for (let x = 0; x < BOARD_SIZE; x++) {
    const column = currentBoard.cells.filter((cell) => cell.cell.x === x);
    if (isFilled(column)) {
      return symbolToPlayerId(column[0].state.symbol);
    }
  }

  // check horizontal cells
  for (let y = 0; y < BOARD_SIZE; y++) {
    const row = currentBoard.cells.filter((cell) => cell.cell.y === y);
    if (isFilled(row)) {
      return symbolToPlayerId(row[0].state.symbol);
    }
  }

  // check diagonal cells
  // left-top to right-bottom
  const diagonal1 = currentBoard.cells.filter(
    (cell) => cell.cell.x === cell.cell.y,
  );
  if (isFilled(diagonal1)) {
    return symbolToPlayerId(diagonal1[0].state.symbol);
  }
  // right-top to left-bottom
  const diagonal2 = currentBoard.cells.filter(
    (cell) => cell.cell.x === BOARD_SIZE - 1 - cell.cell.y,
  );
  if (isFilled(diagonal2)) {
    return symbolToPlayerId(diagonal2[0].state.symbol);
  }

  return undefined;
};

const symbolToPlayerId = (symbol: CellSymbol): PlayerId =>
  symbol === "circle" ? "circle" : "cross";

const isFilled = (cells: BoardCell[]): boolean =>
  cells.every(
    (cell) =>
      cell.state.symbol !== "empty" &&
      cell.state.symbol === cells[0].state.symbol,
  );
