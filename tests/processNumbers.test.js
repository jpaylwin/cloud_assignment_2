const processNumbers = require("../src/processNumbers.js");

describe("GIVEN we coded the processNumbers function", () => {
  describe("WHEN invoking the function", () => {
    it("THEN it should return a object with 6 and 3", () => {
      const object = {
        numbers:[1,2,3],
      };
      const result = processNumbers(object);
      expect(result.maximumNumber).toBe(3);
      expect(result.sum).toBe(6);
    });
  });
});
