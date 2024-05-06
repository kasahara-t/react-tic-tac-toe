import { useAtom } from "jotai";
import type { FC } from "react";
import { updateTileStatus } from "../game/boardLogic";
import { TilePanel } from "./TilePanel";
import "./BoardPanel.css";
import { useGame } from "../hooks/useGame";
import { boardAtom, useUpdateBoard } from "../store/boardAtom";

export const BoardPanel: FC = () => {
  const { game, updateGame } = useGame();
  const [board] = useAtom(boardAtom);
  const { updateBoard } = useUpdateBoard();

  const handleClick = (x: number, y: number) => () => {
    if (game.gameOver) {
      return;
    }
    const newBoard = updateTileStatus(game, board, x, y);
    updateBoard(newBoard);

    // ゲームの状態を更新
    updateGame(newBoard);
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
