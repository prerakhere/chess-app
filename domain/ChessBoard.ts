import { getNumericPosition } from "../utils/chessBoardNotationConvertors";
import { IChessBoard } from "./types/IChessBoard";

export class ChessBoard implements IChessBoard {

  constructor() { }

  isValidPosition(position: string): boolean {
    const [row, col] = getNumericPosition(position);
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}
