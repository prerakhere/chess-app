import { InvalidPieceTypeError } from "../domain/errors/InvalidPieceTypeError";
import { ValidationError } from "../domain/errors/ValidationError";

export function handleAppError(error: unknown): void {
  if (error instanceof ValidationError) {
    console.error(`${error.message}`);
  } else if (error instanceof InvalidPieceTypeError) {
    console.error(`${error.message}`);
  } else {
    console.error(`Unexpected Error: ${error instanceof Error ? error.message : error}`);
  }
}
