import { AppController } from "./controllers/AppController";

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error("2 arguments expected: ChessPieceType CurrentPosition");
    return;
  }

  const [pieceType, currentPosition] = args;
  const appController = new AppController();
  appController.getValidMoves(pieceType, currentPosition);
}

main();
