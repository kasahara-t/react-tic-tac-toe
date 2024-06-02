import { atomWithReset } from "jotai/utils";
import type { GameResult } from "./resultLog.model";

export const resultLogAtom = atomWithReset<GameResult[]>([]);
