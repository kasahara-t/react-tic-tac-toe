import { useScene } from "@/game/hooks/useScene";
import { useUpdatePlayers } from "@/game/hooks/useUpdatePlayers";
import { analytics } from "@/shared/libs/firebase";
import { logEvent } from "firebase/analytics";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

export const MultiPlayButton: FC = () => {
  const { goToGame } = useScene();
  const { setMultiPlayer } = useUpdatePlayers();
  const { t } = useTranslation();

  const handleButtonClick = () => {
    setMultiPlayer();
    goToGame();
    logEvent(analytics, "multi_play_button_click");
  };

  return (
    <Button variant="panel" onClick={handleButtonClick}>
      {t("MultiPlayButton.Button")}
    </Button>
  );
};
