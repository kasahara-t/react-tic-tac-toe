import type { Player } from "@/entities/player/player.model";
import type { Board } from "@/features/board/board.model";
import type { PlayerId } from "../player/player.model";

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
