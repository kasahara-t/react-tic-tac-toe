import type { CPUPlayer, HumanPlayer, Player } from "./player.model";

export const createHumanPlayer = (name: string): HumanPlayer => ({
  type: "human",
  name,
});

export const isHumanPlayer = (player: Player): player is HumanPlayer =>
  player.type === "human";

export const createCPUPlayer = (name: string): CPUPlayer => ({
  type: "cpu",
  name,
});

export const isCPUPlayer = (player: Player): player is CPUPlayer =>
  player.type === "cpu";
