import { atomWithReset } from "jotai/utils";
import type { ResultLog } from "./resultLog.model";

export const resultLogAtom = atomWithReset<ResultLog[]>([]);
