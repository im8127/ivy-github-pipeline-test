const add = (num1, num2) => {
  return num1 + num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const subtract = (num1, num2) => {
  return num2 - num1;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const exponent = (num1, num2) => {
  return num1 ** num2;
};

module.exports = {
  add,
  divide,
  subtract,
  multiply,
  exponent,
};
