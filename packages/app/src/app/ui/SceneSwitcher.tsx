import { useScene } from "@/features/scene/scene.hook";
import { GameScene } from "@/scenes/game/ui/GameScene";
import { ModeSelectScene } from "@/scenes/mode-select/ui/ModeSelectScene";
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
