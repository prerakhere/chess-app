import { IChessPiece } from "./types/IChessPiece";
import { getNumericPosition, getChessNotation } from "../utils/chessMovesUtils";

export class Queen implements IChessPiece {
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
      let newRow = row + xDirection;
      let newCol = col + yDirection;
      while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        moves.push(getChessNotation(newRow, newCol));
        newRow += xDirection;
        newCol += yDirection;
      }
    }

    return moves;
  }
}
