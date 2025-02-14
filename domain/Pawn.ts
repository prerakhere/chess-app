import { IChessPiece } from "./types/IChessPiece";
import { getNumericPosition, getChessNotation } from "../utils/chessBoardNotationConvertors";

export class Pawn implements IChessPiece {
  currentPosition: string;

  constructor(currentPosition: string) {
    this.currentPosition = currentPosition;
  }
  computeValidMoves(): string[] {
    const [row, col] = getNumericPosition(this.currentPosition);
    const moves: string[] = [];

    const newRow = row + 1;
    if (newRow < 8) {
      moves.push(getChessNotation(newRow, col));
    }

    return moves;
  }
}
