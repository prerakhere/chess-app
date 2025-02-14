import { AppController } from "../../controllers/AppController";
import { ChessPieceMovesService } from "../../services/ChessPieceMovesService";
import { sanitizePieceType, validatePieceTypeAndPositionInput } from "../../utils/inputValidations";
import { handleAppError } from "../../utils/globalErrorHandler";
import { IClient } from "../../clients/IClient";
import { ValidationError } from "../../domain/errors/ValidationError";

jest.mock("../../services/ChessPieceMovesService");
jest.mock("../../utils/inputValidations");
jest.mock("../../utils/globalErrorHandler");

describe("AppController", () => {
  let mockClient: IClient;
  let mockChessPieceMovesService: jest.Mocked<ChessPieceMovesService>;
  let appController: AppController;

  beforeEach(() => {
    jest.clearAllMocks();
    mockClient = {} as IClient;
    mockChessPieceMovesService = new ChessPieceMovesService(mockClient) as jest.Mocked<ChessPieceMovesService>;
    appController = new AppController(mockClient);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should call getValidMoves function on service for valid input", () => {
    (sanitizePieceType as jest.Mock).mockImplementation((pieceType) =>
      pieceType.endsWith(",") ? pieceType.slice(0, -1) : pieceType
    );
    (validatePieceTypeAndPositionInput as jest.Mock).mockImplementation(() => { });

    const mockGetValidMoves = jest.spyOn(appController["chessPieceMovesService"], "getValidMoves");

    appController.getValidMoves("Queen,", "E4");

    expect(sanitizePieceType).toHaveBeenCalledWith("Queen,");
    expect(validatePieceTypeAndPositionInput).toHaveBeenCalledWith("Queen", "E4");
    expect(mockGetValidMoves).toHaveBeenCalledWith("Queen", "E4");
  });

  test("should handle validation errors", () => {
    const error = new ValidationError("Invalid position");
    (sanitizePieceType as jest.Mock).mockImplementation((pieceType) =>
      pieceType.endsWith(",") ? pieceType.slice(0, -1) : pieceType
    );
    (validatePieceTypeAndPositionInput as jest.Mock).mockImplementation(() => {
      throw error;
    });

    appController.getValidMoves("Queen,", "Z9");

    expect(handleAppError).toHaveBeenCalledWith(error);
  });

  test("should handle unexpected errors", () => {
    (sanitizePieceType as jest.Mock).mockImplementation((pieceType) =>
      pieceType.endsWith(",") ? pieceType.slice(0, -1) : pieceType
    );
    (validatePieceTypeAndPositionInput as jest.Mock).mockImplementation(() => { });

    const error = new Error("Unexpected error");
    jest.spyOn(appController["chessPieceMovesService"], "getValidMoves").mockImplementation(() => {
      throw error;
    });

    appController.getValidMoves("queen,", "E4");

    expect(handleAppError).toHaveBeenCalledWith(error);
  });
});