import { useAtom } from "jotai";
import { sceneAtom } from "../stores/atoms";

export const useScene = () => {
  const [scene, setScene] = useAtom(sceneAtom);

  const goToGame = () => setScene("game");
  const goToModeSelect = () => setScene("mode-select");

  return {
    scene,
    goToGame,
    goToModeSelect,
  };
};
