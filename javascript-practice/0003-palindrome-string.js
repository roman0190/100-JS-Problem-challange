// Problem 0003: Palindrome String
// Topic: Strings / Two Pointers | Difficulty: Easy
// Check whether a string reads the same forwards and backwards (case-insensitive).

function isPalindrome(value) {
  const normalized = value.toLowerCase();
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) return false;
    left++;
    right--;
  }
  return true;
}

const assert = require("node:assert/strict");
assert.equal(isPalindrome("Level"), true);
assert.equal(isPalindrome("racecar"), true);
assert.equal(isPalindrome("JavaScript"), false);
assert.equal(isPalindrome(""), true);

console.log("Problem 0003 passed");
module.exports = isPalindrome;
