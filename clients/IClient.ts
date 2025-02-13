export interface IClient {
  getValidMoves(moves: string[]): void;
  handleError(error: string): void;
}
