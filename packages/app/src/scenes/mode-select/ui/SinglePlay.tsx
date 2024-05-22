import { useScene } from "@/game/hooks/useScene";
import { useUpdatePlayers } from "@/game/hooks/useUpdatePlayers";
import { analytics } from "@/shared/libs/firebase";
import { Button } from "@/shared/ui/Button";
import { logEvent } from "firebase/analytics";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const SinglePlay: FC = () => {
  const { goToGame } = useScene();
  const { t } = useTranslation();
  const { setSinglePlayer } = useUpdatePlayers();

  const handleClick = () => {
    const isPlayerOneCPU = Math.random() < 0.5;
    setSinglePlayer(isPlayerOneCPU);
    goToGame();
    logEvent(analytics, "single_play_button_click");
  };

  return (
    <Button variant="panel" onClick={handleClick}>
      {t("SinglePlayButton.Button")}
    </Button>
  );
};
