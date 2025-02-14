import { CLI } from "./clients/CLI";
import { AppController } from "./controllers/AppController";

function main() {
  const cliClient = new CLI();

  if (!cliClient.areArgsValid()) {
    cliClient.handleError("2 arguments expected: ChessPieceType CurrentPosition");
    return;
  }

  const [pieceType, currentPosition] = cliClient.getChessPieceTypeAndPositionInput();
  const appController = new AppController(cliClient);
  appController.getValidMoves(pieceType, currentPosition);
}

main();
