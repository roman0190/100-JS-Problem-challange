// LeetCode 20: Valid Parentheses
// Difficulty: Easy | Topic: Stack
// https://leetcode.com/problems/valid-parentheses/

function isValid(s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const character of s) {
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else if (stack.pop() !== pairs[character]) {
      return false;
    }
  }
  return stack.length === 0;
}

const assert = require("node:assert/strict");
assert.equal(isValid("()"), true);
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("(]"), false);
assert.equal(isValid("([)]"), false);
assert.equal(isValid("{[]}"), true);
assert.equal(isValid(""), true);

console.log("LeetCode 20 passed");
module.exports = isValid;
