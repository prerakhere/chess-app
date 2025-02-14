import { CLI } from "../../clients/CLI";

describe("CLI Client", () => {
  let cli: CLI;
  let consoleLogSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => { });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should return true for areArgsValid() when exactly two arguments are provided", () => {
    process.argv = ["node", "script.js", "queen", "E4"];
    cli = new CLI();
    expect(cli.areArgsValid()).toBe(true);
  });

  test("should return false for areArgsValid() when arguments are missing", () => {
    process.argv = ["node", "script.js", "queen"];
    cli = new CLI();
    expect(cli.areArgsValid()).toBe(false);
  });

  test("should return correct chess piece type and position", () => {
    process.argv = ["node", "script.js", "pawn", "B2"];
    cli = new CLI();
    expect(cli.getChessPieceTypeAndPositionInput()).toEqual(["pawn", "B2"]);
  });

  test("should log valid moves correctly", () => {
    cli = new CLI();
    cli.fetchValidMoves(["E5", "F6", "G7"]);
    expect(consoleLogSpy).toHaveBeenCalledWith("E5, F6, G7");
  });

  test("should log 'No moves possible!' when moves array is empty", () => {
    cli = new CLI();
    cli.fetchValidMoves([]);
    expect(consoleLogSpy).toHaveBeenCalledWith("No moves possible!");
  });

  test("should log errors using handleError()", () => {
    cli = new CLI();
    cli.handleError("Invalid input");
    expect(consoleErrorSpy).toHaveBeenCalledWith("Invalid input");
  });
});
