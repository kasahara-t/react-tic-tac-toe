import { useUpdateGame } from "@/features/game";
import { useScene } from "@/features/scene";
import { analytics } from "@/shared/libs";
import { Button } from "@/shared/ui";
import { logEvent } from "firebase/analytics";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const SinglePlay: FC = () => {
  const { goToGame } = useScene();
  const { startGame } = useUpdateGame();
  const { t } = useTranslation();

  const handleClick = () => {
    startGame("single");
    goToGame();
    logEvent(analytics, "single_play_button_click");
  };

  return (
    <Button variant="panel" onClick={handleClick}>
      {t("SinglePlayButton.Button")}
    </Button>
  );
};
