import { Queen } from "../../domain/Queen";

describe("Queen", () => {
  test("should return all valid moves from the center of the board (E4)", () => {
    const queen = new Queen("E4");
    expect(queen.computeValidMoves().sort()).toEqual(
      ["D4", "C4", "B4", "A4", "F4", "G4", "H4", "E3", "E2", "E1", "E5", "E6", "E7", "E8", "D3", "C2", "B1", "F5", "G6", "H7", "F3", "G2", "H1", "D5", "C6", "B7", "A8"].sort()
    );
  });

  test("should return correct moves from corner (A1)", () => {
    const queen = new Queen("A1");
    expect(queen.computeValidMoves().sort()).toEqual(
      ["B1", "C1", "D1", "E1", "F1", "G1", "H1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "B2", "C3", "D4", "E5", "F6", "G7", "H8"].sort()
    );
  });
});