import { IAppController } from "./IAppController";

export class AppController implements IAppController {

  constructor() { }

  getValidMoves(pieceType: string, position: string): void { }
}
