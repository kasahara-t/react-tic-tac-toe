// src/store/boardAtom.ts
import { atom, useAtom } from "jotai";
import { initializeBoard } from "../game/boardLogic";
import type { Board } from "../game/types";

const BOARD_SIZE = 3;

export const boardAtom = atom<Board>(initializeBoard(BOARD_SIZE));

export const useUpdateBoard = () => {
  const [, setBoard] = useAtom(boardAtom);

  const updateBoard = (newBoard: Board) => {
    setBoard(newBoard);
  };

  return { updateBoard };
};
