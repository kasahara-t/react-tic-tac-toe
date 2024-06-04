import { atomWithStorage } from "jotai/utils";
import type { GameResult } from "./resultLog.model";

export const resultLogAtom = atomWithStorage<GameResult[]>("result-log", []);
