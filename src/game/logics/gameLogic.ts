import type { PlayerId } from "@/game/types/player";
import type { GameResult } from "@/game/types/result";
import type { Board } from "../types/board";
import type { Tile } from "../types/tile";
import type { Turn } from "../types/turn";
import { checkForWin, updateTileStatus } from "./boardLogic";
import { getTileState } from "./tileLogic";

export const updateGameResults = (
  winner: PlayerId,
  results: GameResult[],
): GameResult[] => {
  const winCount = results.reduce(
    (pre, cre) => (cre.winner === winner ? Math.max(pre, cre.winCount) : pre),
    0,
  );
  return [...results, { winner, winCount: winCount + 1 }];
};

export const findBestMove = (currentTurn: Turn, board: Board): Tile => {
  const tileStates = board.tiles.map((tile) => ({
    tile,
    state: getTileState(currentTurn, board, tile),
  }));

  // 勝つ手を探す
  for (const { tile, state } of tileStates) {
    if (state.char === "") {
      const newBoard = updateTileStatus(currentTurn, board, tile);
      if (checkForWin(currentTurn, newBoard)) {
        return tile;
      }
    }
  }

  // ブロックする手を探す
  for (const { tile, state } of tileStates) {
    const nextTurn: Turn = {
      turn: currentTurn.turn + 1,
      player: currentTurn.player === "Player1" ? "Player2" : "Player1",
    };
    if (state.char === "") {
      const newBoard = updateTileStatus(nextTurn, board, tile);
      if (checkForWin(currentTurn, newBoard)) {
        return tile;
      }
    }
  }

  // 中央を取る
  const centerTile = tileStates.filter(
    ({ tile, state }) => tile.x === 1 && tile.y === 1 && state.char === "",
  );
  if (centerTile.length > 0) {
    return centerTile[0].tile;
  }

  // 角を取る
  const corners = tileStates.filter(
    ({ tile, state }) =>
      (tile.x === 0 || tile.x === 2) &&
      (tile.y === 0 || tile.y === 2) &&
      state.char === "",
  );
  for (const corner of corners) {
    return corner.tile;
  }

  // ランダムな手
  const emptyIndices = tileStates.filter(({ state }) => state.char === "");
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)].tile;
};
