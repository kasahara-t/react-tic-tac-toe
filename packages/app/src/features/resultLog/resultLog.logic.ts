import type { PlayerId } from "@/features/game";
import type { GameResult } from "./resultLog.model";

export const createResultLog = (
  currentLogs: GameResult[],
  winner: PlayerId,
): GameResult => {
  const winCount = currentLogs.reduce((acc, log) => {
    return log.winner === winner ? acc + 1 : acc;
  }, 1);

  const newLog = { winner, winCount };
  return newLog;
};
