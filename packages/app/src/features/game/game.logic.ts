import {
  BOARD_SIZE,
  type Board,
  type BoardCell,
  initializeBoard,
} from "@/entities/board";
import { type Cell, type CellSymbol, getNextCellState } from "@/entities/cell";
import { createCPUPlayer, createHumanPlayer } from "@/entities/player";
import { getRandomElement } from "@/shared/utils";
import type { Game, GameMode, GameState, PlayerId } from "./game.model";

export const initializeGame = (mode: GameMode): Game => {
  const players = initializePlayers(mode);
  const history = initializeHistory();
  return {
    players,
    history,
  };
};

export const initializePlayers = (mode: GameMode) => {
  switch (mode) {
    case "single":
      return {
        circle: createHumanPlayer("You"),
        cross: createCPUPlayer(),
      };
    case "multi":
      return {
        circle: createHumanPlayer("Player 1"),
        cross: createHumanPlayer("Player 2"),
      };
  }
};

export const initializeHistory = (): GameState[] => {
  return [
    {
      currentBoard: initializeBoard(),
      currentTurn: 1,
      currentPlayer: "circle",
    },
  ];
};

export const incrementTurn = (
  state: GameState,
  nextBoard: Board,
): GameState => {
  return {
    currentBoard: nextBoard,
    currentTurn: state.currentTurn + 1,
    currentPlayer: state.currentPlayer === "circle" ? "cross" : "circle",
  };
};

/**
 * Update the board state with the selected cell
 */
export const updateBoard = (
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

/**
 * Check if there is a winner
 */
export const checkWinner = (currentGame: Game): PlayerId | undefined => {
  const lastGameState = currentGame.history.at(-1);
  if (!lastGameState) {
    throw new Error("Game history is empty.");
  }

  const { currentBoard } = lastGameState;
  const symbolToPlayerId = (symbol: CellSymbol): PlayerId =>
    symbol === "circle" ? "circle" : "cross";
  const isFilled = (cells: BoardCell[]): boolean =>
    cells.every(
      (cell) =>
        cell.state.symbol !== "empty" &&
        cell.state.symbol === cells[0].state.symbol,
    );

  // check vertical cells
  for (let x = 0; x < BOARD_SIZE; x++) {
    const column = currentBoard.cells.filter((cell) => cell.cell.x === x);
    if (isFilled(column)) {
      return symbolToPlayerId(column[0].state.symbol);
    }
  }

  // check horizontal cells
  for (let y = 0; y < BOARD_SIZE; y++) {
    const row = currentBoard.cells.filter((cell) => cell.cell.y === y);
    if (isFilled(row)) {
      return symbolToPlayerId(row[0].state.symbol);
    }
  }

  // check diagonal cells
  // left-top to right-bottom
  const diagonal1 = currentBoard.cells.filter(
    (cell) => cell.cell.x === cell.cell.y,
  );
  if (isFilled(diagonal1)) {
    return symbolToPlayerId(diagonal1[0].state.symbol);
  }
  // right-top to left-bottom
  const diagonal2 = currentBoard.cells.filter(
    (cell) => cell.cell.x === BOARD_SIZE - 1 - cell.cell.y,
  );
  if (isFilled(diagonal2)) {
    return symbolToPlayerId(diagonal2[0].state.symbol);
  }

  return undefined;
};

/**
 * Get the best move for the CPU player
 */
export const getBestMove = (currentGame: Game): Cell => {
  const lastGameState = currentGame.history.at(-1);
  if (!lastGameState) {
    throw new Error("Game history is empty.");
  }

  const { currentBoard, currentPlayer } = lastGameState;
  // find the winning move
  const winningMoves = currentBoard.cells.filter((cell) => {
    if (cell.state.symbol !== "empty") {
      return false;
    }
    const nextBoard = updateBoard(currentBoard, cell.cell, currentPlayer);
    return (
      checkWinner({
        ...currentGame,
        history: [{ ...lastGameState, currentBoard: nextBoard }],
      }) === currentPlayer
    );
  });
  const winningMove = getRandomElement(winningMoves);
  if (winningMove) {
    return winningMove.cell;
  }

  // find the blocking move
  const blockingMoves = currentBoard.cells.filter((cell) => {
    if (cell.state.symbol !== "empty") {
      return false;
    }
    const nextBoard = updateBoard(
      currentBoard,
      cell.cell,
      currentPlayer === "circle" ? "cross" : "circle",
    );
    return (
      checkWinner({
        ...currentGame,
        history: [{ ...lastGameState, currentBoard: nextBoard }],
      }) === currentPlayer
    );
  });
  const blockingMove = getRandomElement(blockingMoves);
  if (blockingMove) {
    return blockingMove.cell;
  }

  // find the center move
  const centerMove = currentBoard.cells.find(
    (cell) =>
      cell.cell.x === 1 && cell.cell.y === 1 && cell.state.symbol === "empty",
  );
  if (centerMove) {
    return centerMove.cell;
  }

  // find the random move
  const emptyCells = currentBoard.cells.filter(
    (cell) => cell.state.symbol === "empty",
  );
  const randomMove = getRandomElement(emptyCells);
  if (randomMove) {
    return randomMove.cell;
  }

  throw new Error("No available moves.");
};
