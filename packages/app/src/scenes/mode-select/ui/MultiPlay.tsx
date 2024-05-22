import { useScene } from "@/game/hooks/useScene";
import { useUpdatePlayers } from "@/game/hooks/useUpdatePlayers";
import { analytics } from "@/shared/libs/firebase";
import { Button } from "@/shared/ui/Button";
import { logEvent } from "firebase/analytics";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const MultiPlay: FC = () => {
  const { goToGame } = useScene();
  const { setMultiPlayer } = useUpdatePlayers();
  const { t } = useTranslation();

  const handleClick = () => {
    setMultiPlayer();
    goToGame();
    logEvent(analytics, "multi_play_button_click");
  };

  return (
    <Button variant="panel" onClick={handleClick}>
      {t("MultiPlayButton.Button")}
    </Button>
  );
};
