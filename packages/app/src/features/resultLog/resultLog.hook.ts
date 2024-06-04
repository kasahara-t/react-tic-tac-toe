import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { resultLogAtom } from "./resultLog.store";

export const useResultLog = () => {
  const [resultLog] = useAtom(resultLogAtom);
  const resetResultLog = useResetAtom(resultLogAtom);

  return {
    resultLog,
    resetResultLog,
  };
};
