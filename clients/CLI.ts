import { IClient } from "./IClient";

export class CLI implements IClient {
  getValidMoves(moves: string[]) {
    console.log(moves.join(", "));
  }

  handleError(error: string) {
    console.error(error);
  }
}
