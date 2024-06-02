import { useUpdateGame } from "@/features/game";
import { Button, HelpOverlay, NeonText } from "@/shared/ui";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const RestartGame: FC = () => {
  const { restartGame } = useUpdateGame();
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
