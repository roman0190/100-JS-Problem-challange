// LeetCode 121: Best Time to Buy and Sell Stock
// Difficulty: Easy | Topic: Array / Greedy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  let minimumPrice = Infinity;
  let bestProfit = 0;

  for (const price of prices) {
    minimumPrice = Math.min(minimumPrice, price);
    bestProfit = Math.max(bestProfit, price - minimumPrice);
  }
  return bestProfit;
}

const assert = require("node:assert/strict");
assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
assert.equal(maxProfit([2, 4, 1]), 2);
assert.equal(maxProfit([]), 0);

console.log("LeetCode 121 passed");
module.exports = maxProfit;
