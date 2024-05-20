import { useScene } from "@/game/hooks/useScene";
import { GameScene } from "@/scenes/GameScene";
import { ModeSelectScene } from "@/scenes/ModeSelectScene";
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
