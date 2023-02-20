const { add, subtract, multiply, divide, exponent } = require("./app");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 5 from 10 to equal 5", () => {
  expect(subtract(5, 10)).toBe(5);
});

test("multiplies 10 by 10 to equal 100", () => {
  expect(multiply(10, 10)).toBe(100);
});

test("divides 50 by 2 to equal 25", () => {
  expect(divide(50, 2)).toBe(25);
});

test("expect 2 to the power of 4 to equal 16", () => {
  expect(exponent(2, 4)).toBe(16);
});
