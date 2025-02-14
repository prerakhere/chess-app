import { IClient } from "./IClient";

export class CLI implements IClient {
  private args: string[];
  private areArgumentssValid = true;

  constructor() {
    this.args = process.argv.slice(2);
    if (this.args.length !== 2) this.areArgumentssValid = false;
  }

  areArgsValid() {
    return this.areArgumentssValid;
  }

  getChessPieceTypeAndPositionInput() {
    return [this.args[0], this.args[1]];
  }

  fetchValidMoves(moves: string[]) {
    if (moves.length === 0) console.log("No moves possible!");
    console.log(moves.join(", "));
  }

  handleError(error: string) {
    console.error(error);
  }
}
