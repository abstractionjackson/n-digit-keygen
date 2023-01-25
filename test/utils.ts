import { getStringOfNRandDigits } from "./src/lib/utils";
describe("utils", () => {
  describe("getStringOfNRandDigits", () => {
    it("should return a string of n random digits", () => {
      const n = 5;
      const result = getStringOfNRandDigits(n);
      expect(result).toHaveLength(n);
      expect(result).toMatch(/^\d+$/);
    });
  });
});
