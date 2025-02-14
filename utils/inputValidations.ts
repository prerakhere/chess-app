import { VALID_CHESS_PIECE_TYPES } from "../domain/constants/constants";
import { ValidationError } from "../domain/errors/ValidationError";

function isValidCellPosition(position: string): boolean {
  if (position.length !== 2) return false;

  const columnIndex = position[0].toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
  const rowIndex = parseInt(position[1], 10) - 1;

  return rowIndex >= 0 && rowIndex < 8 && columnIndex >= 0 && columnIndex < 8;
}

function isValidChessPieceType(pieceType: string): boolean {
  return VALID_CHESS_PIECE_TYPES.includes(pieceType.toLowerCase());
}


export function sanitizePieceType(pieceType: string) {
  // remove trailing comma
  return pieceType.endsWith(",") ? pieceType.slice(0, -1) : pieceType;
}

export function validatePieceTypeAndPositionInput(pieceType: string, position: string): void {
  const errors: string[] = [];

  if (!isValidCellPosition(position)) {
    errors.push(`Invalid Position: ${position}`);
  }
  if (!isValidChessPieceType(pieceType)) {
    errors.push(`Invalid Piece Type: ${pieceType}`);
  }

  if (errors.length > 0) {
    throw new ValidationError(errors.join("\n"));
  }
}