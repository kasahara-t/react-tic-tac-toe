import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { playersStateAtom } from "../stores/atoms";

export const useUpdatePlayers = () => {
  const [, setPlayers] = useAtom(playersStateAtom);
  const { t } = useTranslation();

  const setSinglePlayer = (isPlayerOneCPU: boolean) => {
    const CPUName = t("CPUName");
    const humanName = t("HumanName");

    setPlayers({
      Player1: {
        name: isPlayerOneCPU ? CPUName : humanName,
        isCPU: isPlayerOneCPU,
      },
      Player2: {
        name: !isPlayerOneCPU ? CPUName : humanName,
        isCPU: !isPlayerOneCPU,
      },
    });
  };

  const setMultiPlayer = () => {
    const player1Name = t("Player1Name");
    const player2Name = t("Player2Name");

    setPlayers({
      Player1: { name: player1Name, isCPU: false },
      Player2: { name: player2Name, isCPU: false },
    });
  };

  return {
    setSinglePlayer,
    setMultiPlayer,
  };
};
