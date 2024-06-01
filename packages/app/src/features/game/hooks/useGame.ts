import { useAtom } from "jotai";
import { gameAtom } from "../game.store";

export const useGame = () => {
  const [game] = useAtom(gameAtom);

  return {
    game,
  };
};
