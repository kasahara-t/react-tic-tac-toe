import type { CPUPlayer, HumanPlayer } from "./player.model";

export const createHumanPlayer = (name: string): HumanPlayer => ({
  name,
});

export const createCPUPlayer = (): CPUPlayer => ({
  name: "Computer",
});
