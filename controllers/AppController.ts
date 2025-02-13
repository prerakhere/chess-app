import { IAppController } from "./IAppController";
import { ChessPieceMovesService } from "../services/ChessPieceMovesService";
import { CLI } from "../clients/CLI";
import { isValidPosition } from "../utils/chessMovesUtils";

export class AppController implements IAppController {

  private chessPieceMovesService: ChessPieceMovesService;

  constructor() {
    const cli = new CLI();
    this.chessPieceMovesService = new ChessPieceMovesService(cli);
  }

  getValidMoves(pieceType: string, position: string): void {
    if (!isValidPosition(position)) {
      console.log("invalid position from controller");
      return;
    }
    this.chessPieceMovesService.getValidMoves(pieceType, position);
  }
}
