import { useAtom } from "jotai";
import { playersStateAtom } from "../stores/atoms";

export const useUpdatePlayers = () => {
  const [, setPlayers] = useAtom(playersStateAtom);

  const setSinglePlayer = (isPlayerOneCPU: boolean) => {
    setPlayers({
      Player1: {
        name: isPlayerOneCPU ? "CPU" : "Human",
        isCPU: isPlayerOneCPU,
      },
      Player2: {
        name: !isPlayerOneCPU ? "CPU" : "Human",
        isCPU: !isPlayerOneCPU,
      },
    });
  };

  const setMultiPlayer = () => {
    setPlayers({
      Player1: { name: "Player 1", isCPU: false },
      Player2: { name: "Player 2", isCPU: false },
    });
  };

  return {
    setSinglePlayer,
    setMultiPlayer,
  };
};
