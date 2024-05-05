import React, { useState } from "react";
import type { FC } from "react";
import { type Board, initializeBoard, updateBoard } from "./game/Board";

export const BoardComponent: FC = () => {
  const [board, setBoard] = useState<Board>(() => initializeBoard(3));
  const [currentTurn, setCurrentTurn] = useState(0); // ターン数を追加

  const handleClick = (x: number, y: number) => () => {
    if (board.gameOver) {
      return;
    }
    const newBoard = updateBoard(board, x, y, currentTurn);
    setBoard(newBoard);
    setCurrentTurn(currentTurn + 1); // ターン数を更新
    if (newBoard.gameOver) {
      setTimeout(() => {
        alert(`${board.isOTurn ? "O" : "X"} is win!`);
        setBoard(initializeBoard(3));
      }, 0); // レンダリングされた後に表示
    }
  };

  const cellStyle = {
    width: "80px",
    height: "80px",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "24px",
  };

  return (
    <table border={1} style={{ borderCollapse: "collapse" }}>
      <tbody>
        {board.tiles.map((row, i) => (
          <tr key={i}>
            {row.map((tile, j) => (
              <td
                key={j}
                style={cellStyle}
                onClick={handleClick(tile.x, tile.y)}
              >
                {tile.char}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
