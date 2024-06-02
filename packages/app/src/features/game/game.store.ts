import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { checkWinner } from "./game.logic";
import type { Game } from "./game.model";

export const gameAtom = atomWithReset<Game | undefined>(undefined);

export const winnerAtom = atom((get) => {
  const game = get(gameAtom);
  if (!game) {
    return undefined;
  }

  return checkWinner(game);
});
