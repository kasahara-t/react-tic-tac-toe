import { atom } from "jotai";
import type { Game } from "./game.model";

export const gameAtom = atom<Game | undefined>(undefined);
