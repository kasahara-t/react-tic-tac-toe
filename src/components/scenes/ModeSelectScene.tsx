import { useScene } from "@/game/hooks/useScene";
import { playersState } from "@/game/stores/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import type { FC } from "react";
import { AppBackground } from "../ui/AppBackground";
import { Button } from "../ui/Button";

export const ModeSelectScene: FC = () => {
  const { goToGame } = useScene();
  const [, setPlayers] = useAtom(playersState);

  const handleModeChange = (mode: "single" | "multi") => () => {
    if (mode === "single") {
      setPlayers({
        Player1: { name: "Human", isCPU: false },
        Player2: { name: "Computer", isCPU: true },
      });
    } else {
      setPlayers({
        Player1: { name: "Player 1", isCPU: false },
        Player2: { name: "Player 2", isCPU: false },
      });
    }
    goToGame();
  };

  return (
    <AppBackground>
      <div className={cn("flex flex-col gap-4")}>
        <h1 className={cn("text-4xl")}>Select a mode</h1>
        <div className={cn("flex flex-col gap-2")}>
          <Button variant="panel" onClick={handleModeChange("single")}>
            Single player
          </Button>
          <Button variant="panel" onClick={handleModeChange("multi")}>
            Multi player
          </Button>
        </div>
      </div>
    </AppBackground>
  );
};
