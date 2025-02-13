import { IChessPiece } from "./types/IChessPiece";

export class King implements IChessPiece {
  currentPosition: string;

  constructor(currentPosition: string) {
    this.currentPosition = currentPosition;
  }

  computeValidMoves(): string[] {
    return [];
  }
}
