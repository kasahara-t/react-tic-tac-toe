import { Button } from "@/components/ui/Button";
import { useGame } from "@/game/hooks/useGame";
import type { FC } from "react";
import { HelpOverlay } from "../ui/HelpOverlay";
import { NeonText } from "../ui/NeonText";

export const RestartButton: FC = () => {
  const { restartGame } = useGame();

  const handleButtonClick = () => {
    restartGame();
  };

  return (
    <HelpOverlay
      helpText={<NeonText>クリックするとゲームが開始されます。</NeonText>}
    >
      <NeonText asChild>
        <Button variant="panel" size="full" onClick={handleButtonClick}>
          Click to Restart
        </Button>
      </NeonText>
    </HelpOverlay>
  );
};
