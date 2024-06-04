import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { Game } from "./game.model";
import { checkWinner } from "./logics/checkWinner";

export const gameAtom = atomWithStorage<Game | undefined>("game", undefined);

export const winnerAtom = atom((get) => {
  const game = get(gameAtom);
  if (!game) {
    return undefined;
  }

  return checkWinner(game);
});
