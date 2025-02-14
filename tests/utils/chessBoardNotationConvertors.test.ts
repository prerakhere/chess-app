import { getChessNotation, getNumericPosition } from "../../utils/chessBoardNotationConvertors";

describe("chessBoardNotationConvertors", () => {

  describe("getNumericPosition", () => {
    test("should convert chess notation to numeric (0-indexed) positions", () => {
      expect(getNumericPosition("A1")).toEqual([0, 0]);
      expect(getNumericPosition("D5")).toEqual([4, 3]);
    });
  });

  describe("getChessNotation", () => {
    test("should convert indexed row and column to chess cell notation", () => {
      expect(getChessNotation(1, 2)).toBe("C2");
      expect(getChessNotation(7, 7)).toBe("H8");
    });
  });
});