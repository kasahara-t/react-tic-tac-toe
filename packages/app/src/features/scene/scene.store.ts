import { atom } from "jotai";
import type { Scene } from "./scene.model";

export const sceneAtom = atom<Scene>("mode-select");
