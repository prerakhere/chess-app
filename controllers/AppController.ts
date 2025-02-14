import { IAppController } from "./IAppController";
import { ChessPieceMovesService } from "../services/ChessPieceMovesService";
import { CLI } from "../clients/CLI";
import { validatePieceTypeAndPositionInput } from "../utils/inputValidations";
import { handleAppError } from "../utils/globalErrorHandler";

export class AppController implements IAppController {

  private chessPieceMovesService: ChessPieceMovesService;

  constructor() {
    const cli = new CLI();
    this.chessPieceMovesService = new ChessPieceMovesService(cli);
  }

  getValidMoves(pieceType: string, position: string): void {
    try {
      validatePieceTypeAndPositionInput(pieceType, position);
      this.chessPieceMovesService.getValidMoves(pieceType, position);
    } catch (err) {
      handleAppError(err);
    }
  }
}
