import { useScene } from "@/game/hooks/useScene";
import { playersStateAtom } from "@/game/stores/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppBackground } from "../ui/AppBackground";
import { Button } from "../ui/Button";

export const ModeSelectScene: FC = () => {
  const { goToGame } = useScene();
  const [, setPlayers] = useAtom(playersStateAtom);
  const { t } = useTranslation();

  const handleModeChange = (mode: "single" | "multi") => () => {
    if (mode === "single") {
      const isPlayerOneCPU = Math.random() < 0.5;

      setPlayers({
        Player1: {
          name: isPlayerOneCPU ? "CPU" : "Human",
          isCPU: isPlayerOneCPU,
        },
        Player2: {
          name: !isPlayerOneCPU ? "CPU" : "Human",
          isCPU: !isPlayerOneCPU,
        },
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
            {t("SinglePlay")}
          </Button>
          <Button variant="panel" onClick={handleModeChange("multi")}>
            {t("MultiPlay")}
          </Button>
        </div>
      </div>
    </AppBackground>
  );
};
