import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import type { Game } from "./game.model";
import { checkWinner } from "./logics/checkWinner";

export const gameAtom = atomWithReset<Game | undefined>(undefined);

export const winnerAtom = atom((get) => {
  const game = get(gameAtom);
  if (!game) {
    return undefined;
  }

  return checkWinner(game);
});
