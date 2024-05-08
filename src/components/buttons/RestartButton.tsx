import { Button } from "@/components/ui/Button";
import { useGame } from "@/hooks/useGame";
import type { FC } from "react";

export const RestartButton: FC = () => {
  const { restartGame } = useGame();

  const handleButtonClick = () => {
    restartGame();
  };

  return (
    <Button variant="panel" size="full" onClick={handleButtonClick}>
      Click or Space
    </Button>
  );
};
