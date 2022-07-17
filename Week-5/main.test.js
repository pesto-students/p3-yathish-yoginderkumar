const mathOperations = require("./mathOps");

describe("Math addition tests", () => {
  test("adding 2 + 2 should return 4", () => {
    expect(mathOperations.add(2, 2)).toBe(4);
  });

  test("subtracting 10 from 2 should return 8", () => {
    expect(mathOperations.subtract(10, 2)).toBe(8);
  });

  test("multiplying 2 and 8 should return 16", () => {
    expect(mathOperations.multiply(2, 8)).toBe(16);
  });
});
