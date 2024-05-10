import { useScene } from "@/game/hooks/useScene";
import type { FC } from "react";
import { GameScene } from "./GameScene";
import { ModeSelectScene } from "./ModeSelectScene";

export const SceneSwitcher: FC = () => {
  const { scene } = useScene();
  switch (scene) {
    case "game":
      return <GameScene />;
    case "mode-select":
      return <ModeSelectScene />;
  }
};
