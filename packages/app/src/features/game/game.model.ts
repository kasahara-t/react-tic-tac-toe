import type { Player } from "@/entities/player/player.model";
import type { Board } from "@/features/board/board.model";
import type { Turn } from "@/features/turn/turn.model";

export interface GameState {
  readonly currentBoard: Board;
  readonly currentTurn: Turn;
  readonly currentPlayer: Player;
}
