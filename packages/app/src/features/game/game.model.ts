import type { Board, Player } from "@/entities";

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
