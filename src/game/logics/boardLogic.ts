import type { Board, BoardSize } from "@/game/types/board";
import type { Tile } from "@/game/types/tile";
import type { Turn } from "@/game/types/turn";
import { getTileState } from "./tileLogic";

/**
 * ボードを作成する
 */
export const initializeBoard = (size: BoardSize): Board => {
  const tiles: Tile[] = Array.from({ length: size * size }, (_, index) => {
    const x = index % size;
    const y = Math.floor(index / size);
    return {
      x,
      y,
      changeTurns: [],
    };
  });

  return {
    size,
    tiles,
  };
};

/**
 * ボードの状況を更新する
 */
export const updateTileStatus = (
  currentTurn: Turn,
  board: Board,
  clickedTile: Tile,
): Board => {
  if (getTileState(currentTurn, board.size, clickedTile).symbol !== "")
    return board;

  const newTiles = board.tiles.map((tile) => {
    if (tile.x === clickedTile.x && tile.y === clickedTile.y) {
      // クリックされたタイルを更新
      return {
        ...tile,
        changeTurns: [...tile.changeTurns, currentTurn],
      };
    }
    return tile;
  });

  const newBoard = {
    ...board,
    tiles: newTiles,
  };

  return newBoard;
};

/**
 * ゲームが終了したかを判定する
 */
export const checkForWin = (currentTurn: Turn, board: Board): boolean => {
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
