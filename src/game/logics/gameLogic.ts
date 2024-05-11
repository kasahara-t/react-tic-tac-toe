import type { PlayerId } from "@/game/types/player";
import type { GameResult } from "@/game/types/result";
import { getRandomElement } from "@/lib/utils";
import type { Board } from "../types/board";
import type { Tile } from "../types/tile";
import type { Turn } from "../types/turn";
import { checkForWin, updateTileStatus } from "./boardLogic";
import { canClickTile, getTileState } from "./tileLogic";

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
  const clickableTiles = board.tiles.filter((tile) =>
    canClickTile(getTileState(currentTurn, board.size, tile)),
  );

  // 勝つ手を探す
  const winTiles = clickableTiles.filter((tile) => {
    const newBoard = updateTileStatus(currentTurn, board, tile);
    return checkForWin(currentTurn, newBoard);
  });
  const winChoice = getRandomElement(winTiles);
  if (winChoice) {
    return winChoice;
  }

  // ブロックする手を探す
  const blockTiles = clickableTiles.filter((tile) => {
    const nextTurn: Turn = {
      turn: currentTurn.turn + 1,
      player: currentTurn.player === "Player1" ? "Player2" : "Player1",
    };
    const newBoard = updateTileStatus(nextTurn, board, tile);
    return checkForWin(currentTurn, newBoard);
  });
  const blockChoice = getRandomElement(blockTiles);
  if (blockChoice) {
    return blockChoice;
  }

  // 中央を取る
  const centerTile = clickableTiles.find(
    (tile) => tile.x === 1 && tile.y === 1,
  );
  if (centerTile) {
    return centerTile;
  }

  // 角を取る
  const corners = clickableTiles.filter(
    (tile) => (tile.x === 0 || tile.x === 2) && (tile.y === 0 || tile.y === 2),
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
