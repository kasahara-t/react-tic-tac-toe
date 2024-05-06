import { useGame } from "../hooks/useGame";
import "./GameTurnPanel.css";

export const GameTurnPanel = () => {
  const { currentTurn } = useGame();
  return <div className="game-turn-panel">{currentTurn + 1}ターン目</div>;
};
