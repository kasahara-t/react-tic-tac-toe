import { Button } from "@/components/ui/Button";
import { useGame } from "@/game/hooks/useGame";
import type { FC } from "react";
import { NeonText } from "../ui/NeonText";

export const RestartButton: FC = () => {
  const { restartGame } = useGame();

  const handleButtonClick = () => {
    restartGame();
  };

  return (
    <NeonText asChild>
      <Button variant="panel" size="full" onClick={handleButtonClick}>
        Click or Space
      </Button>
    </NeonText>
  );
};
