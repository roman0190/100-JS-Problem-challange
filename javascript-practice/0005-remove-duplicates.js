// Problem 0005: Remove Duplicates
// Topic: Arrays / Set | Difficulty: Easy
// Return a new array containing the first occurrence of each value.

function removeDuplicates(values) {
  return [...new Set(values)];
}

const assert = require("node:assert/strict");
assert.deepEqual(removeDuplicates([1, 2, 1, 3, 2]), [1, 2, 3]);
assert.deepEqual(removeDuplicates(["a", "a", "b"]), ["a", "b"]);
assert.deepEqual(removeDuplicates([]), []);

console.log("Problem 0005 passed");
module.exports = removeDuplicates;
