import type { Player } from "@/entities/player/player.model";

export type PlayerId = "circle" | "cross";

export interface HumanPlayer extends Player {}

export interface CPUPlayer extends Player {}
