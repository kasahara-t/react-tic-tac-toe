import { useResetGame } from "@/game/hooks/useResetGame";
import { Button } from "@/shared/ui/Button";
import { HelpOverlay } from "@/shared/ui/HelpOverlay";
import { NeonText } from "@/shared/ui/NeonText";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const RestartGame: FC = () => {
  const { restartGame } = useResetGame();
  const { t } = useTranslation();

  const handleClick = () => {
    restartGame();
  };

  return (
    <HelpOverlay helpText={<NeonText>{t("RestartButton.Help")}</NeonText>}>
      <NeonText asChild>
        <Button variant="panel" size="full" onClick={handleClick}>
          {t("RestartButton.Button")}
        </Button>
      </NeonText>
    </HelpOverlay>
  );
};
