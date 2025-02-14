import { ChessPieceFactory } from "./ChessPieceFactory";
import { IClient } from "../clients/IClient";
import { handleAppError } from "../utils/globalErrorHandler";

export class ChessPieceMovesService {
  private client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  getValidMoves(type: string, position: string) {
    try {
      const piece = ChessPieceFactory.createChessPiece(type, position);
      if (piece) {
        const validMoves = piece.computeValidMoves();
        this.client.fetchValidMoves(validMoves);
      }
    }
    catch (err: any) {
      handleAppError(err);
    }
  }
}
