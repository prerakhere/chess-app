import { InvalidPieceTypeError } from "../domain/errors/InvalidPieceTypeError";
import { King } from "../domain/King";
import { Pawn } from "../domain/Pawn";
import { Queen } from "../domain/Queen";
import { IChessPiece } from "../domain/types/IChessPiece";

export class ChessPieceFactory {
  static createChessPiece(type: string, position: string): IChessPiece | null {
    switch (type.toLowerCase()) {
      case "king":
        return new King(position);
      case "queen":
        return new Queen(position);
      case "pawn":
        return new Pawn(position);
      default:
        throw new InvalidPieceTypeError();
    }
  }
}