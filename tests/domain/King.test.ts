import { King } from "../../domain/King";

describe("King", () => {
  test("should return all valid moves from the center of the board (E4)", () => {
    const king = new King("E4");
    expect(king.computeValidMoves().sort()).toEqual(
      ["D3", "D4", "D5", "E3", "E5", "F3", "F4", "F5"].sort()
    );
  });

  test("should return correct moves from corner (A1)", () => {
    const king = new King("A1");
    expect(king.computeValidMoves().sort()).toEqual(
      ["A2", "B1", "B2"].sort()
    );
  });

  test("should return correct moves from an edge (H4)", () => {
    const king = new King("H4");
    expect(king.computeValidMoves().sort()).toEqual(
      ["G3", "G4", "G5", "H3", "H5"].sort()
    );
  });

  test("should return correct moves from another edge (D8)", () => {
    const king = new King("D8");
    expect(king.computeValidMoves().sort()).toEqual(
      ["C7", "C8", "D7", "E7", "E8"].sort()
    );
  });

  test("should not include out-of-bounds moves", () => {
    const king = new King("H8");
    expect(king.computeValidMoves().sort()).toEqual(
      ["G7", "G8", "H7"].sort()
    );
  });
});
