import { handleAppError } from "../../utils/globalErrorHandler";
import { ValidationError } from "../../domain/errors/ValidationError";
import { InvalidPieceTypeError } from "../../domain/errors/InvalidPieceTypeError";

describe("handleAppError()", () => {
  let consoleErrorMock: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorMock = jest.spyOn(console, "error").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  test("should log validation error message", () => {
    const error = new ValidationError("Invalid position");
    handleAppError(error);
    expect(consoleErrorMock).toHaveBeenCalledWith("Invalid position");
  });

  test("should log invalid piece type error message", () => {
    const error = new InvalidPieceTypeError();
    handleAppError(error);
    expect(consoleErrorMock).toHaveBeenCalledWith("Invalid Piece Type");
  });

  test("should log unexpected error message", () => {
    const error = new Error("Some unexpected issue");
    handleAppError(error);
    expect(consoleErrorMock).toHaveBeenCalledWith("Unexpected Error: Some unexpected issue");
  });

  test("should log unexpected error for non-error values", () => {
    handleAppError("This is a string error");
    expect(consoleErrorMock).toHaveBeenCalledWith("Unexpected Error: This is a string error");

    handleAppError(42);
    expect(consoleErrorMock).toHaveBeenCalledWith("Unexpected Error: 42");

    handleAppError(null);
    expect(consoleErrorMock).toHaveBeenCalledWith("Unexpected Error: null");
  });
});
