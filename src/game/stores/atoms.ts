import { initializeBoard } from "@/game/logics/boardLogic";
import { isOTurn } from "@/game/logics/gameLogic";
import type { Board, BoardSize } from "@/game/types/board";
import type { GameResult } from "@/game/types/result";
import type { Turn } from "@/game/types/turn";
import { atom } from "jotai";
import { atomWithDefault, atomWithReset } from "jotai/utils";

const initialTurn: Turn = {
  turn: 0,
  isOTurn: isOTurn(0),
};
export const currentTurnAtom = atomWithReset<Turn>(initialTurn);

export const boardSizeAtom = atom<BoardSize>(3);

export const boardAtom = atomWithDefault<Board>((get) =>
  initializeBoard(get(boardSizeAtom)),
);
export const gameOverAtom = atomWithReset<boolean>(false);

export const gameResultsAtom = atomWithReset<GameResult[]>([]);
