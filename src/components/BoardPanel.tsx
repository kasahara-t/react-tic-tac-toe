import { useAtom } from "jotai";
import React, { useState } from "react";
import type { FC } from "react";
import { checkForWin, initializeBoard, updateBoard } from "../game/boardLogic";
import type { Board } from "../game/types";
import { gameAtom, useUpdateGame } from "../store/gameAtom";
import { TilePanel } from "./TilePanel";
import "./BoardPanel.css";

export const BoardPanel: FC = () => {
  const [game] = useAtom(gameAtom);
  const { updateGame } = useUpdateGame();
  const [board, setBoard] = useState<Board>(() => initializeBoard(3));

  const handleClick = (x: number, y: number) => () => {
    if (game.gameOver) {
      return;
    }
    const newBoard = updateBoard(game, board, x, y);
    setBoard(newBoard);

    const isGameOver = checkForWin(newBoard);
    // ゲームの状態を更新
    updateGame({
      currentTurn: game.currentTurn + 1,
      isOTurn: !game.isOTurn,
      gameOver: isGameOver,
    });

    if (isGameOver) {
      setTimeout(() => {
        alert(`${game.isOTurn ? "O" : "X"} is win!`);
        setBoard(initializeBoard(3));
        updateGame({
          currentTurn: 0,
          isOTurn: true,
          gameOver: false,
        });
      }, 100); // レンダリングされた後に表示
    }
  };

  return (
    <div className="board-panel">
      {board.tiles.map((row, i) => (
        <div key={i} className="board-row">
          {row.map((tile, j) => (
            <div
              key={j}
              className="board-col"
              onClick={handleClick(tile.x, tile.y)}
            >
              <TilePanel tile={tile} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
