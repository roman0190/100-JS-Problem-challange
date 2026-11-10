// Problem 0002: Fibonacci Number
// Topic: Loops | Difficulty: Easy
// Return the nth Fibonacci number where F(0) = 0 and F(1) = 1.

function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  let previous = 0;
  let current = 1;
  for (let index = 0; index < n; index++) {
    [previous, current] = [current, previous + current];
  }
  return previous;
}

const assert = require("node:assert/strict");
assert.equal(fibonacci(0), 0);
assert.equal(fibonacci(1), 1);
assert.equal(fibonacci(6), 8);
assert.equal(fibonacci(10), 55);
assert.throws(() => fibonacci(-2), RangeError);

console.log("Problem 0002 passed");
module.exports = fibonacci;
