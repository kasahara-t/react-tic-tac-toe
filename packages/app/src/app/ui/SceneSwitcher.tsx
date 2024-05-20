import { GameScene } from "@/components/scenes/GameScene";
import { ModeSelectScene } from "@/components/scenes/ModeSelectScene";
import { useScene } from "@/game/hooks/useScene";
import type { FC } from "react";

export const SceneSwitcher: FC = () => {
  const { scene } = useScene();
  switch (scene) {
    case "game":
      return <GameScene />;
    case "mode-select":
      return <ModeSelectScene />;
  }
};
