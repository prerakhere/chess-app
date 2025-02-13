export interface IChessPiece {
  currentPosition: string;
  computeValidMoves(): string[];
}