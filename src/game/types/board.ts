import type { Tile } from "./tile";

export type BoardSize = 3 | 6 | 9;

export interface Board {
  readonly size: BoardSize;
  readonly tiles: ReadonlyArray<Tile>;
}
