import { useScene } from "@/game/hooks/useScene";
import { cn } from "@/lib/utils";
import type { FC } from "react";
import { AppBackground } from "../ui/AppBackground";
import { Button } from "../ui/Button";

export const ModeSelectScene: FC = () => {
  const { goToGame } = useScene();
  const handleSinglePlayer = () => {
    goToGame();
  };
  const handleMultiPlayer = () => {
    goToGame();
  };

  return (
    <AppBackground>
      <div className={cn("flex flex-col gap-4")}>
        <h1 className={cn("text-4xl")}>Select a mode</h1>
        <div className={cn("flex flex-col gap-2")}>
          <Button variant="panel" onClick={handleSinglePlayer}>
            Single player
          </Button>
          <Button variant="panel" onClick={handleMultiPlayer}>
            Multi player
          </Button>
        </div>
      </div>
    </AppBackground>
  );
};
