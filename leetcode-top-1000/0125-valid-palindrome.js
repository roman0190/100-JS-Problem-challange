// LeetCode 125: Valid Palindrome
// Difficulty: Easy | Topic: Two Pointers / String
// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) left++;
    while (left < right && !/[a-z0-9]/i.test(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}

const assert = require("node:assert/strict");
assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.equal(isPalindrome("race a car"), false);
assert.equal(isPalindrome(" "), true);
assert.equal(isPalindrome("0P"), false);

console.log("LeetCode 125 passed");
module.exports = isPalindrome;
