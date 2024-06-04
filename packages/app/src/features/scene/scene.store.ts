import { atomWithStorage } from "jotai/utils";
import type { Scene } from "./scene.model";

export const sceneAtom = atomWithStorage<Scene>("scene", "mode-select");
