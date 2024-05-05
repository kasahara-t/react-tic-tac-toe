import { useAtom } from "jotai";
import { gameAtom } from "../store/gameAtom";
import "./GameTurnPanel.css";

export const GameTurnPanel = () => {
  const [game] = useAtom(gameAtom);
  return <div className="game-turn-panel">{game.currentTurn + 1}ターン目</div>;
};
