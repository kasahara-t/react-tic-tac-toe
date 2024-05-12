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
