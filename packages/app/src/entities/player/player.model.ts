export type PlayerType = "human" | "cpu";

export interface Player {
  readonly type: PlayerType;
  readonly name: string;
}

export interface HumanPlayer extends Player {
  readonly type: "human";
}

export interface CPUPlayer extends Player {
  readonly type: "cpu";
}
