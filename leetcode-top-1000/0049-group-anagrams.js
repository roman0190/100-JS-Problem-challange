// LeetCode 49: Group Anagrams
// Difficulty: Medium | Topic: Hash Map / Sorting
// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = [...word].sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }

  return [...groups.values()];
}

const assert = require("node:assert/strict");
const normalize = groups => groups.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
assert.deepEqual(normalize(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])), normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]));
assert.deepEqual(groupAnagrams([""]), [[""]]);
assert.deepEqual(groupAnagrams(["a"]), [["a"]]);

console.log("LeetCode 49 passed");
module.exports = groupAnagrams;
