import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import type { Game } from "./game.model";

export const gameAtom = atomWithReset<Game | undefined>(undefined);
