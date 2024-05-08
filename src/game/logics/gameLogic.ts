import type { Player } from "@/game/types/player";
import type { GameResult } from "@/game/types/result";

export const updateGameResults = (
  winner: Player,
  results: GameResult[],
): GameResult[] => {
  const winCount = results.reduce(
    (pre, cre) => (cre.winner === winner ? Math.max(pre, cre.winCount) : pre),
    0,
  );
  return [...results, { winner, winCount: winCount + 1 }];
};
