import { validatePieceTypeAndPositionInput } from "../../utils/inputValidations";
import { ValidationError } from "../../domain/errors/ValidationError";

describe("validatePieceTypeAndPositionInput", () => {

  test("should throw ValidationError for invalid position", () => {
    expect(() => validatePieceTypeAndPositionInput("queen", "M4"))
      .toThrow(ValidationError);
    expect(() => validatePieceTypeAndPositionInput("queen", "M4"))
      .toThrow("Invalid Position: M4");
  });

  test("should throw ValidationError for invalid piece type", () => {
    expect(() => validatePieceTypeAndPositionInput("kingg", "E4"))
      .toThrow(ValidationError);
    expect(() => validatePieceTypeAndPositionInput("kingg", "E4"))
      .toThrow("Invalid Piece Type: kingg");
  });

  test("should throw ValidationError for both invalid position and invalid piece type", () => {
    expect(() => validatePieceTypeAndPositionInput("kingg", "M9"))
      .toThrow(ValidationError);
    expect(() => validatePieceTypeAndPositionInput("kingg", "M9"))
      .toThrow("Invalid Position: M9\nInvalid Piece Type: kingg");
  });

  test("should not throw an error for valid piece type and position", () => {
    expect(() => validatePieceTypeAndPositionInput("queen", "E4")).not.toThrow();
  });
});
