// Problem 0001: Factorial
// Topic: Loops | Difficulty: Easy
// Return n! for a non-negative integer.

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  let result = 1;
  for (let value = 2; value <= n; value++) result *= value;
  return result;
}

const assert = require("node:assert/strict");
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);
assert.throws(() => factorial(-1), RangeError);

console.log("Problem 0001 passed");
module.exports = factorial;
