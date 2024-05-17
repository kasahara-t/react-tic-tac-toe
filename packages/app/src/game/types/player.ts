export type PlayerId = "Player1" | "Player2";

export interface Player {
  readonly name: string;
  readonly isCPU: boolean;
}
