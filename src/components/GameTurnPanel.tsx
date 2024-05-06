import { useGame } from "../hooks/useGame";
import "./GameTurnPanel.css";

export const GameTurnPanel = () => {
  const { game } = useGame();
  return <div className="game-turn-panel">{game.currentTurn + 1}ターン目</div>;
};
