import { ChessPieceFactory } from "../../services/ChessPieceFactory";
import { King } from "../../domain/King";
import { Queen } from "../../domain/Queen";
import { Pawn } from "../../domain/Pawn";
import { InvalidPieceTypeError } from "../../domain/errors/InvalidPieceTypeError";

describe("ChessPieceFactory", () => {
  test("should return a King instance for 'king'", () => {
    const piece = ChessPieceFactory.createChessPiece("king", "E4");
    expect(piece).toBeInstanceOf(King);
    expect(piece?.currentPosition).toBe("E4");
  });

  test("should return a Queen instance for 'queen'", () => {
    const piece = ChessPieceFactory.createChessPiece("queen", "D1");
    expect(piece).toBeInstanceOf(Queen);
    expect(piece?.currentPosition).toBe("D1");
  });

  test("should return a Pawn instance for 'pawn'", () => {
    const piece = ChessPieceFactory.createChessPiece("pawn", "B2");
    expect(piece).toBeInstanceOf(Pawn);
    expect(piece?.currentPosition).toBe("B2");
  });

  test("should throw an InvalidPieceTypeError for an invalid piece", () => {
    expect(() => ChessPieceFactory.createChessPiece("rook", "E4")).toThrow(InvalidPieceTypeError);
  });
});
