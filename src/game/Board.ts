// Board インターフェース
export interface Board {
  readonly size: number;
  readonly tiles: ReadonlyArray<ReadonlyArray<Tile>>;
  isOTurn: boolean;
  gameOver: boolean;
}

// Tile インターフェース
export interface Tile {
  readonly x: number;
  readonly y: number;
  char: string;
  lastChangedTurn: number;
}

// ボードの初期化関数
export const initializeBoard = (size: number): Board => {
  const tiles: Tile[][] = Array.from({ length: size }, (_, y) =>
    Array.from(
      { length: size },
      (_, x) =>
        ({
          x,
          y,
          char: "",
          lastChangedTurn: 0,
        }) as Tile,
    ),
  );

  return {
    size,
    tiles,
    isOTurn: true,
    gameOver: false,
  };
};

export const updateBoard = (
  board: Board,
  x: number,
  y: number,
  currentTurn: number,
): Board => {
  if (board.gameOver || board.tiles[y][x].char !== "") return board;

  const newTiles = board.tiles.map((row, rowIndex) => {
    return row.map((tile, tileIndex) => {
      // 既存のタイルをコピーし、条件に応じて更新
      const newTile = { ...tile };

      // タイルが変更される場合
      if (rowIndex === y && tileIndex === x) {
        newTile.char = board.isOTurn ? "O" : "X";
        newTile.lastChangedTurn = currentTurn;
      }

      // 5ターン以上経過しているタイルをリセット
      if (currentTurn - newTile.lastChangedTurn >= 5) {
        newTile.char = "";
      }

      return newTile;
    });
  });

  const newBoard = {
    ...board,
    tiles: newTiles,
    isOTurn: !board.isOTurn,
  };
  newBoard.gameOver = checkForWin(newBoard);

  return newBoard;
};

// ゲームの終了判定関数
export const checkForWin = (board: Board): boolean => {
  // 横の行をチェック
  for (let y = 0; y < board.size; y++) {
    if (
      board.tiles[y].every(
        (tile) => tile.char !== "" && tile.char === board.tiles[y][0].char,
      )
    ) {
      return true;
    }
  }
  // 縦の列をチェック
  for (let x = 0; x < board.size; x++) {
    if (
      board.tiles.every(
        (row) => row[x].char !== "" && row[x].char === board.tiles[0][x].char,
      )
    ) {
      return true;
    }
  }
  // 斜めのチェック
  if (
    board.tiles.every(
      (row, idx) =>
        row[idx].char !== "" && row[idx].char === board.tiles[0][0].char,
    )
  ) {
    return true;
  }
  if (
    board.tiles.every(
      (row, idx) =>
        row[board.size - 1 - idx].char !== "" &&
        row[board.size - 1 - idx].char === board.tiles[0][board.size - 1].char,
    )
  ) {
    return true;
  }
  return false;
};
