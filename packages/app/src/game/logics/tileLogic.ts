import type { BoardSize } from "@/game/types/board";
import type { Tile, TileState } from "@/game/types/tile";
import type { Turn } from "@/game/types/turn";

export const getTileState = (
  currentTurn: Turn,
  boardSize: BoardSize,
  tile: Tile,
): TileState => {
  const term = getRemainingTurns(boardSize);
  const validTurnHistory = tile.changeTurns.findLast(
    (t) => currentTurn.turn - t.turn < term,
  );

  if (!validTurnHistory) {
    return {
      symbol: "",
      turnsLeft: 0,
    };
  }

  return {
    symbol: validTurnHistory.player === "Player1" ? "O" : "X",
    turnsLeft: term - (currentTurn.turn - validTurnHistory.turn),
  };
};

export const getRemainingTurns = (boardSize: BoardSize) => {
  const remainingTurns: Record<BoardSize, number> = {
    3: 6, // 画面上に自分のタイルが最大4つ存在する
  };
  return remainingTurns[boardSize] ?? 0;
};

export const canClickTile = (state: TileState) =>
  state.symbol === "" && state.turnsLeft === 0;
