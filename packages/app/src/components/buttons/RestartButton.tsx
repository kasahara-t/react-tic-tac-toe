import { Button } from "@/components/ui/Button";
import { useResetGame } from "@/game/hooks/useResetGame";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { HelpOverlay } from "../ui/HelpOverlay";
import { NeonText } from "../ui/NeonText";

export const RestartButton: FC = () => {
  const { restartGame } = useResetGame();
  const { t } = useTranslation();

  const handleButtonClick = () => {
    restartGame();
  };

  return (
    <HelpOverlay helpText={<NeonText>{t("RestartButton.Help")}</NeonText>}>
      <NeonText asChild>
        <Button variant="panel" size="full" onClick={handleButtonClick}>
          {t("RestartButton.Button")}
        </Button>
      </NeonText>
    </HelpOverlay>
  );
};
