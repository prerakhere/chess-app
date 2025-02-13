export interface IAppController {
  getValidMoves(pieceType: string, position: string): void;
}