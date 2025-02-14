import { ChessPieceMovesService } from "../../services/ChessPieceMovesService";
import { ChessPieceFactory } from "../../services/ChessPieceFactory";
import { IClient } from "../../clients/IClient";
import { King } from "../../domain/King";
import { handleAppError } from "../../utils/globalErrorHandler";
import { InvalidPieceTypeError } from "../../domain/errors/InvalidPieceTypeError";

jest.mock("../../services/ChessPieceFactory");
jest.mock("../../utils/globalErrorHandler");

describe("ChessPieceMovesService", () => {
  let mockClient: IClient;
  let chessPieceMovesService: ChessPieceMovesService;

  beforeEach(() => {
    jest.clearAllMocks();
    mockClient = { fetchValidMoves: jest.fn() } as unknown as IClient;
    chessPieceMovesService = new ChessPieceMovesService(mockClient);
  });

  test("should call fetchValidMoves with valid moves", () => {
    const mockKing = new King("E4");
    jest.spyOn(mockKing, "computeValidMoves").mockReturnValue(["D3", "D4", "D5"]);

    (ChessPieceFactory.createChessPiece as jest.Mock).mockReturnValue(mockKing);

    chessPieceMovesService.getValidMoves("king", "E4");

    expect(ChessPieceFactory.createChessPiece).toHaveBeenCalledWith("king", "E4");
    expect(mockKing.computeValidMoves).toHaveBeenCalled();
    expect(mockClient.fetchValidMoves).toHaveBeenCalledWith(["D3", "D4", "D5"]);
  });

  test("should handle errors thrown by ChessPieceFactory", () => {
    const error = new InvalidPieceTypeError();
    (ChessPieceFactory.createChessPiece as jest.Mock).mockImplementation(() => {
      throw error;
    });

    chessPieceMovesService.getValidMoves("rook", "E4");

    expect(handleAppError).toHaveBeenCalledWith(error);
    expect(mockClient.fetchValidMoves).not.toHaveBeenCalled();
  });
});
