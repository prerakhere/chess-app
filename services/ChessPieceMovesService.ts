import { ChessPieceFactory } from "./ChessPieceFactory";
import { IClient } from "../clients/IClient";
import { ChessBoard } from "../domain/ChessBoard";
import { handleAppError } from "../utils/globalErrorHandler";

export class ChessPieceMovesService {
  private board: ChessBoard;
  private client: IClient;

  constructor(client: IClient) {
    this.board = new ChessBoard();
    this.client = client;
  }

  getValidMoves(type: string, position: string) {
    try {
      const piece = ChessPieceFactory.createChessPiece(type, position);
      if (piece) {
        const validMoves = piece.computeValidMoves().filter(move => this.board.isValidPosition(move));
        this.client.fetchValidMoves(validMoves);
      }
    }
    catch (err: any) {
      handleAppError(err);
    }
  }
}
