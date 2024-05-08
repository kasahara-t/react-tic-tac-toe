import type { Board } from "@/game/types/board";
import type { Tile, TileState } from "@/game/types/tile";
import type { Turn } from "@/game/types/turn";

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
    char: validTurnHistory.player === "Player1" ? "O" : "X",
    remainingPeriod: term - (currentTurn.turn - validTurnHistory.turn),
  };
};
