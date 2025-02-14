import { IAppController } from "./IAppController";
import { ChessPieceMovesService } from "../services/ChessPieceMovesService";
import { sanitizePieceType, validatePieceTypeAndPositionInput } from "../utils/inputValidations";
import { handleAppError } from "../utils/globalErrorHandler";
import { IClient } from "../clients/IClient";

export class AppController implements IAppController {

  private chessPieceMovesService: ChessPieceMovesService;

  constructor(client: IClient) {
    this.chessPieceMovesService = new ChessPieceMovesService(client);
  }

  getValidMoves(pieceType: string, position: string): void {
    try {
      const sanitizedPieceType = sanitizePieceType(pieceType);
      validatePieceTypeAndPositionInput(sanitizedPieceType, position);
      this.chessPieceMovesService.getValidMoves(sanitizedPieceType, position);
    } catch (err) {
      handleAppError(err);
    }
  }
}
