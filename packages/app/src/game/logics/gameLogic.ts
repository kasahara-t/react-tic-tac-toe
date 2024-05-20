import type { PlayerId } from "@/game/types/player";
import type { GameResult } from "@/game/types/result";
import { getRandomElement } from "@/shared/utils/helpers";
import type { Board } from "../types/board";
import type { Tile } from "../types/tile";
import type { Turn } from "../types/turn";
import { updateTileStatus } from "./boardLogic";
import { canClickTile, getTileState } from "./tileLogic";
import { incrementTurn } from "./turnLogic";

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

/**
 * ゲームが終了したかを判定する
 */
export const checkWin = (currentTurn: Turn, board: Board): boolean => {
  // 各タイルに対して、位置情報と状態をオブジェクトとしてマッピング
  const tileStates = board.tiles.map((tile) => ({
    tile: tile,
    state: getTileState(currentTurn, board.size, tile),
  }));

  // 横の行をチェック
  for (let y = 0; y < board.size; y++) {
    const row = tileStates.filter(({ tile }) => tile.y === y);
    if (
      row.every(
        ({ state }) =>
          state.symbol !== "" && state.symbol === row[0].state.symbol,
      )
    ) {
      return true;
    }
  }

  // 縦の列をチェック
  for (let x = 0; x < board.size; x++) {
    const column = tileStates.filter(({ tile }) => tile.x === x);
    if (
      column.every(
        ({ state }) =>
          state.symbol !== "" && state.symbol === column[0].state.symbol,
      )
    ) {
      return true;
    }
  }

  // 斜めのチェック (左上から右下)
  const diagonal1 = tileStates.filter(({ tile }) => tile.x === tile.y);
  if (
    diagonal1.every(
      ({ state }) =>
        state.symbol !== "" && state.symbol === diagonal1[0].state.symbol,
    )
  ) {
    return true;
  }

  // 斜めのチェック (右上から左下)
  const diagonal2 = tileStates.filter(
    ({ tile }) => tile.x === board.size - 1 - tile.y,
  );
  if (
    diagonal2.every(
      ({ state }) =>
        state.symbol !== "" && state.symbol === diagonal2[0].state.symbol,
    )
  ) {
    return true;
  }

  return false;
};

/**
 * 次の最善な手を見つける
 */
export const findBestMove = (currentTurn: Turn, board: Board): Tile => {
  const clickableTiles = board.tiles.filter((tile) =>
    canClickTile(getTileState(currentTurn, board.size, tile)),
  );
  const nextTurn = incrementTurn(currentTurn);

  // 勝つ手を探す
  const winTiles = clickableTiles.filter((tile) => {
    const newBoard = updateTileStatus(currentTurn, board, tile);
    return checkWin(currentTurn, newBoard);
  });
  const winChoice = getRandomElement(winTiles);
  if (winChoice) {
    return winChoice;
  }

  // ブロックする手を探す
  const blockTiles = clickableTiles.filter((tile) => {
    const newBoard = updateTileStatus(nextTurn, board, tile);
    return checkWin(currentTurn, newBoard);
  });
  const blockChoice = getRandomElement(blockTiles);
  if (blockChoice) {
    return blockChoice;
  }

  // 中央を取る
  const centerCoords = Math.floor(board.size / 2);
  const centerTile = clickableTiles.find(
    (tile) => tile.x === centerCoords && tile.y === centerCoords,
  );
  if (centerTile) {
    return centerTile;
  }

  // 角を取る
  const corners = clickableTiles.filter(
    (tile) =>
      (tile.x === 0 || tile.x === board.size - 1) &&
      (tile.y === 0 || tile.y === board.size - 1),
  );
  const cornerChoice = getRandomElement(corners);
  if (cornerChoice) {
    return cornerChoice;
  }

  // ランダムな手
  const randomChoice = getRandomElement(clickableTiles);
  if (randomChoice) {
    return randomChoice;
  }

  throw new Error("No valid move found");
};
