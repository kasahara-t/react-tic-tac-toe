import type { Board } from "@/entities/board";
import { type Cell, getNextCellState } from "@/entities/cell";
import type { Game, GameState, PlayerId } from "../game.model";

/**
 * Update the game state
 */
export const updateGame = (currentGame: Game, selectedCell: Cell): Game => {
  const lastGameState = currentGame.history.at(-1);
  if (!lastGameState) {
    throw new Error("Game history is empty.");
  }

  const newGameState = incrementTurn(
    lastGameState,
    updateBoard(
      lastGameState.currentBoard,
      selectedCell,
      lastGameState.currentPlayer,
    ),
  );

  return {
    ...currentGame,
    history: [...currentGame.history, newGameState],
  };
};

const incrementTurn = (state: GameState, nextBoard: Board): GameState => {
  return {
    currentBoard: nextBoard,
    currentTurn: state.currentTurn + 1,
    currentPlayer: state.currentPlayer === "circle" ? "cross" : "circle",
  };
};

/**
 * Update the board state with the selected cell
 */
const updateBoard = (
  currentBoard: Board,
  selectedCell: Cell,
  currentPlayer: PlayerId,
): Board => {
  return {
    cells: currentBoard.cells.map((boardCell) => {
      if (
        boardCell.cell.x === selectedCell.x &&
        boardCell.cell.y === selectedCell.y &&
        boardCell.state.symbol === "empty"
      ) {
        return {
          cell: boardCell.cell,
          state: {
            symbol: currentPlayer === "circle" ? "circle" : "cross",
            remainingTime: 5,
          },
        };
      }
      return {
        cell: boardCell.cell,
        state: getNextCellState(boardCell.state),
      };
    }),
  };
};
