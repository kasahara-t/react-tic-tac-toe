import type { PlayerId } from "@/features/game";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { createResultLog } from "./resultLog.logic";
import { resultLogAtom } from "./resultLog.store";

export const useResultLog = () => {
  const [resultLog, setResultLog] = useAtom(resultLogAtom);
  const resetResultLog = useResetAtom(resultLogAtom);

  const addResultLog = (winner: PlayerId) => {
    setResultLog((currentLogs) => {
      return [...currentLogs, createResultLog(currentLogs, winner)];
    });
  };

  return {
    resultLog,
    addResultLog,
    resetResultLog,
  };
};
