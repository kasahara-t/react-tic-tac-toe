import type { BoardCell } from "@/entities/board";
import type { Cell } from "@/entities/cell";
import { getRandomElement } from "@/shared/utils";
import type { Game } from "../game.model";
import { checkWinner } from "./checkWinner";
import { updateGame } from "./updateGame";

/**
 * Get the best move for the CPU player
 */
export const getBestMove = (currentGame: Game): Cell => {
  const lastGameState = currentGame.history.at(-1);
  if (!lastGameState) {
    throw new Error("Game history is empty.");
  }

  const { currentBoard, currentPlayer } = lastGameState;
  const opponentPlayer = currentPlayer === "circle" ? "cross" : "circle";

  // Function to check if a move results in a win
  const isWinningMove = (cell: BoardCell) => {
    const nextGame = updateGame(currentGame, cell.cell);
    return checkWinner(nextGame) === currentPlayer;
  };

  // Function to check if a move blocks the opponent's win
  const isBlockingMove = (cell: BoardCell) => {
    const randomCell = getRandomElement(
      currentBoard.cells.filter((c) => c !== cell),
    );
    if (!randomCell) {
      return false;
    }
    const nextGame = updateGame(currentGame, randomCell.cell);
    const opponentGame = updateGame(nextGame, cell.cell);
    return checkWinner(opponentGame) === opponentPlayer;
  };

  // Find a winning move for the CPU player
  const winningMove = getRandomElement(
    currentBoard.cells.filter(
      (cell) => cell.state.symbol === "empty" && isWinningMove(cell),
    ),
  );
  if (winningMove) {
    return winningMove.cell;
  }

  // Find a blocking move to prevent the opponent from winning
  const blockingMove = getRandomElement(
    currentBoard.cells.filter(
      (cell) => cell.state.symbol === "empty" && isBlockingMove(cell),
    ),
  );
  if (blockingMove) {
    return blockingMove.cell;
  }

  // Choose the center move if available
  const centerCell = currentBoard.cells.find(
    (cell) =>
      cell.cell.x === 1 && cell.cell.y === 1 && cell.state.symbol === "empty",
  );
  if (centerCell) {
    return centerCell.cell;
  }

  // Choose a random move from available cells
  const emptyCells = currentBoard.cells.filter(
    (cell) => cell.state.symbol === "empty",
  );
  const randomMove = getRandomElement(emptyCells);
  if (randomMove) {
    return randomMove.cell;
  }

  throw new Error("No available moves.");
};
