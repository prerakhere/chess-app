export class InvalidPieceTypeError extends Error {
  constructor() {
    super("Invalid Piece Type");
    this.name = "InvalidPieceTypeError";
  }
}