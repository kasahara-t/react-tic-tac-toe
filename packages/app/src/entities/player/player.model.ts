export interface Player {
  readonly name: string;
}

export interface HumanPlayer extends Player {}

export interface CPUPlayer extends Player {}
