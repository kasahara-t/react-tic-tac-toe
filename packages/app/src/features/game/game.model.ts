import type { Board } from "@/entities/board";
import type { Player } from "@/entities/player";

export type PlayerId = "circle" | "cross";

export type GameMode = "single" | "multi";

export interface GameState {
  readonly currentBoard: Board;
  readonly currentTurn: number;
  readonly currentPlayer: PlayerId;
}

export interface Game {
  readonly players: Record<PlayerId, Player>;
  readonly history: GameState[];
}
