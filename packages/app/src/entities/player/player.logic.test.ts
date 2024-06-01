import { describe, expect, test } from "bun:test";
import {
  createCPUPlayer,
  createHumanPlayer,
  isCPUPlayer,
  isHumanPlayer,
} from "./player.logic";

describe(createCPUPlayer.name, () => {
  test("A human player is created", () => {
    const player = createHumanPlayer("You");
    expect(player).toEqual({
      type: "human",
      name: "You",
    });
  });

  test("Type guard function can identify a human player", () => {
    const player = createHumanPlayer("You");
    expect(isHumanPlayer(player)).toBe(true);
    expect(isCPUPlayer(player)).toBe(false);
  });

  test("A CPU player is created", () => {
    const player = createCPUPlayer();
    expect(player).toEqual({
      type: "cpu",
      name: "Computer",
    });
  });

  test("Type guard function can identify a CPU player", () => {
    const player = createCPUPlayer();
    expect(isHumanPlayer(player)).toBe(false);
    expect(isCPUPlayer(player)).toBe(true);
  });
});
