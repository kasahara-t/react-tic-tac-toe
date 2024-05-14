import { useScene } from "@/game/hooks/useScene";
import { useUpdatePlayers } from "@/game/hooks/useUpdatePlayers";
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
  };

  return (
    <Button variant="panel" onClick={handleButtonClick}>
      {t("MultiPlayButton.Button")}
    </Button>
  );
};
