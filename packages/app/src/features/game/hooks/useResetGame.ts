import { useResetAtom } from "jotai/utils";
import { gameAtom } from "../game.store";

export const useResetGame = () => {
  const resetGame = useResetAtom(gameAtom);

  return {
    resetGame,
  };
};
