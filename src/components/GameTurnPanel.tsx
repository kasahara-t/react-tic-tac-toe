import { cn } from "@/lib/utils"; // 確実にcn関数が正しくインポートされていることを確認
import { useGame } from "../hooks/useGame";

export const GameTurnPanel = () => {
  const { currentTurn } = useGame();
  return <div className={cn("text-5xl")}>{currentTurn.turn + 1}ターン目</div>;
};
