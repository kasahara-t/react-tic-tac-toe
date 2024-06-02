import { useAtom } from "jotai";
import { gameAtom, winnerAtom } from "../game.store";

export const useGame = () => {
  const [game] = useAtom(gameAtom);
  const [winner] = useAtom(winnerAtom);

  return {
    ...game,
    winner,
  };
};
