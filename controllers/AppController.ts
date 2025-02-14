import { IAppController } from "./IAppController";
import { ChessPieceMovesService } from "../services/ChessPieceMovesService";
import { validatePieceTypeAndPositionInput } from "../utils/inputValidations";
import { handleAppError } from "../utils/globalErrorHandler";
import { IClient } from "../clients/IClient";

export class AppController implements IAppController {

  private chessPieceMovesService: ChessPieceMovesService;

  constructor(client: IClient) {
    this.chessPieceMovesService = new ChessPieceMovesService(client);
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
