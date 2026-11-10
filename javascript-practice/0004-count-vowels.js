// Problem 0004: Count Vowels
// Topic: Strings | Difficulty: Easy
// Count English vowels in a string (case-insensitive).

function countVowels(value) {
  const matches = value.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

const assert = require("node:assert/strict");
assert.equal(countVowels("Hello World"), 3);
assert.equal(countVowels("AEIOU"), 5);
assert.equal(countVowels("rhythm"), 0);
assert.equal(countVowels(""), 0);

console.log("Problem 0004 passed");
module.exports = countVowels;
