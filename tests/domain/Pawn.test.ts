import { Pawn } from "../../domain/Pawn";

describe("Pawn", () => {
  test("should move one step forward from rows 1-7", () => {
    const pawn = new Pawn("E4");
    expect(pawn.computeValidMoves()).toEqual(["E5"]);
  });

  test("should not move forward if on row 8", () => {
    const pawn = new Pawn("A8");
    expect(pawn.computeValidMoves()).toEqual([]);
  });

});
