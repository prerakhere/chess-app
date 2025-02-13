import { IChessPiece } from "./types/IChessPiece";

export class Queen implements IChessPiece {
  currentPosition: string;

  constructor(currentPosition: string) {
    this.currentPosition = currentPosition;
  }

  computeValidMoves(): string[] {
    return [];
  }
}
