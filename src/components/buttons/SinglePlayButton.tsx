import { useScene } from "@/game/hooks/useScene";
import { useUpdatePlayers } from "@/game/hooks/useUpdatePlayers";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

export const SinglePlayButton: FC = () => {
  const { goToGame } = useScene();
  const { t } = useTranslation();
  const { setSinglePlayer } = useUpdatePlayers();

  const handleButtonClick = () => {
    const isPlayerOneCPU = Math.random() < 0.5;
    setSinglePlayer(isPlayerOneCPU);
    goToGame();
  };

  return (
    <Button variant="panel" onClick={handleButtonClick}>
      {t("SinglePlayButton.Button")}
    </Button>
  );
};
