export interface IClient {
  fetchValidMoves(moves: string[]): void;
  handleError(error: string): void;
}
