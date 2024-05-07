import type { Board, Tile, TileState, Turn } from "./types";

export const getTileState = (
  currentTurn: Turn,
  board: Board,
  tile: Tile,
): TileState => {
  const term = board.size * 2;
  const validTurnHistory = tile.changeTurns.findLast(
    (t) => currentTurn.turn - t.turn < term,
  );

  if (!validTurnHistory) {
    return {
      char: "",
      remainingPeriod: 0,
    };
  }

  return {
    char: validTurnHistory.isOTurn ? "O" : "X",
    remainingPeriod: term - (currentTurn.turn - validTurnHistory.turn),
  };
};
