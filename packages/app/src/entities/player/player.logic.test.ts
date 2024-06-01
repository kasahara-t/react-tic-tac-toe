import { describe, expect, test } from "bun:test";
import {
  createCPUPlayer,
  createHumanPlayer,
  isCPUPlayer,
  isHumanPlayer,
} from "./player.logic";

describe(createCPUPlayer.name, () => {
  test("人間プレイヤーが生成される", () => {
    const player = createHumanPlayer("You");
    expect(player).toEqual({
      type: "human",
      name: "You",
    });
  });

  test("型ガード関数で人間プレイヤーを判定できる", () => {
    const player = createHumanPlayer("You");
    expect(isHumanPlayer(player)).toBe(true);
    expect(isCPUPlayer(player)).toBe(false);
  });

  test("CPUプレイヤーが生成される", () => {
    const player = createCPUPlayer();
    expect(player).toEqual({
      type: "cpu",
      name: "Computer",
    });
  });

  test("型ガード関数でCPUプレイヤーを判定できる", () => {
    const player = createCPUPlayer();
    expect(isHumanPlayer(player)).toBe(false);
    expect(isCPUPlayer(player)).toBe(true);
  });
});
