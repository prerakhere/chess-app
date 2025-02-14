import { IChessPiece } from "./types/IChessPiece";
import { getNumericPosition, getChessNotation } from "../utils/chessBoardNotationConvertors";

export class King implements IChessPiece {
  currentPosition: string;

  constructor(currentPosition: string) {
    this.currentPosition = currentPosition;
  }

  computeValidMoves(): string[] {
    const [row, col] = getNumericPosition(this.currentPosition);
    const moves: string[] = [];

    const directions = [
      [0, -1], [0, 1],
      [-1, 0], [1, 0],
      [-1, -1], [1, 1],
      [-1, 1], [1, -1]
    ];

    for (const [xDirection, yDirection] of directions) {
      const newRow = row + xDirection;
      const newCol = col + yDirection;
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        moves.push(getChessNotation(newRow, newCol));
      }
    }

    return moves;
  }
}
