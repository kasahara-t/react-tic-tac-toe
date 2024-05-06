import { getTileState } from "./tileLogic";
import type { Board, Tile, Turn } from "./types";

/**
 * ボードを作成する
 */
export const initializeBoard = (size: number): Board => {
  const tiles: Tile[][] = Array.from({ length: size }, (_, y) =>
    Array.from(
      { length: size },
      (_, x) =>
        ({
          x,
          y,
          changeTurns: [],
        }) as Tile,
    ),
  );

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
  if (getTileState(currentTurn, board, clickedTile).char !== "") return board;

  const newTiles = board.tiles.map((row, rowIndex) => {
    return row.map((tile, colIndex) => {
      if (rowIndex === clickedTile.y && colIndex === clickedTile.x) {
        return { ...tile, changeTurns: [...tile.changeTurns, currentTurn] };
      }
      return tile;
    });
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
  const tileStates = board.tiles.map((row) =>
    row.map((tile) => getTileState(currentTurn, board, tile)),
  );

  // 横の行をチェック
  for (let y = 0; y < board.size; y++) {
    if (
      tileStates[y].every(
        (tile) => tile.char !== "" && tile.char === tileStates[y][0].char,
      )
    ) {
      return true;
    }
  }
  // 縦の列をチェック
  for (let x = 0; x < board.size; x++) {
    if (
      tileStates.every(
        (row) => row[x].char !== "" && row[x].char === tileStates[0][x].char,
      )
    ) {
      return true;
    }
  }
  // 斜めのチェック
  if (
    tileStates.every(
      (row, idx) =>
        row[idx].char !== "" && row[idx].char === tileStates[0][0].char,
    )
  ) {
    return true;
  }
  if (
    tileStates.every(
      (row, idx) =>
        row[board.size - 1 - idx].char !== "" &&
        row[board.size - 1 - idx].char === tileStates[0][board.size - 1].char,
    )
  ) {
    return true;
  }
  return false;
};
