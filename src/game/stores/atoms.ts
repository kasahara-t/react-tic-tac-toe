import { initializeBoard } from "@/game/logics/boardLogic";
import type { Board, BoardSize } from "@/game/types/board";
import type { GameResult } from "@/game/types/result";
import type { Turn } from "@/game/types/turn";
import { atom } from "jotai";
import { atomWithDefault, atomWithReset } from "jotai/utils";
import type { Player, PlayerId } from "../types/player";

const initialTurn: Turn = {
  turn: 0,
  player: "Player1",
};
export const currentTurnAtom = atomWithReset<Turn>(initialTurn);

export const boardSizeAtom = atom<BoardSize>(3);

export const boardAtom = atomWithDefault<Board>((get) =>
  initializeBoard(get(boardSizeAtom)),
);
export const gameOverAtom = atomWithReset<boolean>(false);

export const gameResultsAtom = atomWithReset<GameResult[]>([]);

export const helpModeAtom = atom<boolean>(false);

export const sceneAtom = atom<"mode-select" | "game">("mode-select");

type PlayersState = Record<PlayerId, Player | null>;

export const playersState = atom<PlayersState>({
  Player1: null,
  Player2: null,
});
