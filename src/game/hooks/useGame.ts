import { checkForWin, updateTileStatus } from "@/game/logics/boardLogic";
import { updateGameResults } from "@/game/logics/gameLogic";
import {
  boardAtom,
  currentTurnAtom,
  gameOverAtom,
  gameResultsAtom,
  helpModeAtom,
} from "@/game/stores/atoms";
import type { Tile } from "@/game/types/tile";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useAtom(currentTurnAtom);
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [board, setBoard] = useAtom(boardAtom);
  const [results, setResults] = useAtom(gameResultsAtom);
  const [helpMode, setHelpMode] = useAtom(helpModeAtom);

  const resetCurrentTurn = useResetAtom(currentTurnAtom);
  const resetBoard = useResetAtom(boardAtom);
  const resetGameOver = useResetAtom(gameOverAtom);
  const resetResults = useResetAtom(gameResultsAtom);

  const updateGameAndBoard = (tile: Tile) => {
    if (gameOver) return;

    const newBoard = updateTileStatus(currentTurn, board, tile);
    setBoard(newBoard);

    const isGameOver = checkForWin(currentTurn, newBoard);
    if (isGameOver) {
      setGameOver(true);
      const newResults = updateGameResults(currentTurn.player, results);
      setResults(newResults);
    } else {
      setCurrentTurn({
        turn: currentTurn.turn + 1,
        player: currentTurn.player === "Player1" ? "Player2" : "Player1",
      });
    }
  };

  const toggleHelpMode = () => {
    setHelpMode(!helpMode);
  };

  const restartGame = () => {
    resetCurrentTurn();
    resetBoard();
    resetGameOver();
  };

  const resetGame = () => {
    resetCurrentTurn();
    resetBoard();
    resetGameOver();
    resetResults();
  };

  return {
    currentTurn,
    gameOver,
    board,
    results,
    helpMode,
    toggleHelpMode,
    updateGameAndBoard,
    restartGame,
    resetGame,
  };
};
