import { ChessPieceFactory } from "./ChessPieceFactory";
import { IClient } from "../clients/IClient";
import { ChessBoard } from "../domain/ChessBoard";

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
      if (!piece) {
        throw new Error("Invalid piece type");
      }
      const validMoves = piece.computeValidMoves().filter(move => this.board.isValidPosition(move));
      this.client.getValidMoves(validMoves);
    }
    catch (err: any) {
      if (err.message === "Invalid piece type") {
        this.client.handleError("Invalid Piece Type!");
      }
      else this.client.handleError(err.message);
    }
  }
}
