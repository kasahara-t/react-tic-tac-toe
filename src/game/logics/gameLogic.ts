import type { GameResult } from "@/game/types/result";

export const isOTurn = (currentTurn: number): boolean => {
  return currentTurn % 2 === 0;
};

export const updateGameResults = (
  winner: "O" | "X",
  results: GameResult[],
): GameResult[] => {
  const lastResult = results.find((result) => result.winner === winner);
  if (lastResult) {
    // 前回の勝利回数に基づいて更新
    return results.map((result) =>
      result.winner === winner
        ? { ...result, winCount: result.winCount + 1 }
        : result,
    );
  }
  // 新しい勝利者の追加
  return [...results, { winner, winCount: 1 }];
};
