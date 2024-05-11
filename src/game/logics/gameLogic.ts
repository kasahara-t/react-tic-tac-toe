import type { PlayerId } from "@/game/types/player";
import type { GameResult } from "@/game/types/result";
import { getRandomElement } from "@/lib/utils";
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
    state: getTileState(currentTurn, board.size, tile),
  }));

  // 勝つ手を探す
  const winTiles = tileStates.filter(({ tile, state }) => {
    if (state.symbol === "") {
      const newBoard = updateTileStatus(currentTurn, board, tile);
      if (checkForWin(currentTurn, newBoard)) {
        return true;
      }
    }
    return false;
  });
  const winChoice = getRandomElement(winTiles);
  if (winChoice) {
    return winChoice.tile;
  }

  // ブロックする手を探す
  const blockTiles = tileStates.filter(({ tile, state }) => {
    const nextTurn: Turn = {
      turn: currentTurn.turn + 1,
      player: currentTurn.player === "Player1" ? "Player2" : "Player1",
    };
    if (state.symbol === "") {
      const newBoard = updateTileStatus(nextTurn, board, tile);
      if (checkForWin(currentTurn, newBoard)) {
        return true;
      }
    }
    return false;
  });
  const blockChoice = getRandomElement(blockTiles);
  if (blockChoice) {
    return blockChoice.tile;
  }

  // 中央を取る
  const centerTile = tileStates.find(
    ({ tile, state }) => tile.x === 1 && tile.y === 1 && state.symbol === "",
  );
  if (centerTile) {
    return centerTile.tile;
  }

  // 角を取る
  const corners = tileStates.filter(
    ({ tile, state }) =>
      (tile.x === 0 || tile.x === 2) &&
      (tile.y === 0 || tile.y === 2) &&
      state.symbol === "",
  );
  const cornerChoice = getRandomElement(corners);
  if (cornerChoice) {
    return cornerChoice.tile;
  }

  // ランダムな手
  const emptyTiles = tileStates.filter(({ state }) => state.symbol === "");
  const randomChoice = getRandomElement(emptyTiles);
  if (randomChoice) {
    return randomChoice.tile;
  }

  throw new Error("No valid move found");
};
