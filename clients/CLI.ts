import { IClient } from "./IClient";

export class CLI implements IClient {
  fetchValidMoves(moves: string[]) {
    if (moves.length === 0) console.log("No moves possible!");
    console.log(moves.join(", "));
  }

  handleError(error: string) {
    console.error(error);
  }
}
