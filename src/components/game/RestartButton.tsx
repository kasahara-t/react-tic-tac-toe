import { useGame } from "@/hooks/useGame";
import type { FC } from "react";
import { Button } from "../ui/Button";

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
