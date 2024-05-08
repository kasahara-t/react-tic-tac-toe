import { useAtom } from "jotai";
import { helpModeAtom } from "../stores/atoms";

export const useHelp = () => {
  const [helpMode, setHelpMode] = useAtom(helpModeAtom);

  const toggleHelpMode = () => {
    setHelpMode((prev) => !prev);
  };

  return {
    helpMode,
    toggleHelpMode,
  };
};
