// src/store/gameAtom.ts
import { atom, useAtom } from "jotai";
import type { Game } from "../game/types";

const initialGameState: Game = {
  currentTurn: 0,
  isOTurn: true,
  gameOver: false,
};

export const gameAtom = atom<Game>(initialGameState);

// Game状態を更新するためのユーティリティ関数
export const useUpdateGame = () => {
  const [, setGame] = useAtom(gameAtom);

  const updateGame = (newGameState: Partial<Game>) => {
    setGame((prev) => ({
      ...prev,
      ...newGameState,
    }));
  };

  return {
    updateGame,
  };
};
