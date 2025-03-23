var longestSubarray = function (nums) {
  const n = nums.length;
  let start = 0;
  let max = 0;
  let count = 0;
  for (let end = 0; end < n; end++) {
    if (nums[end] === 0) {
      count++;
    }
    while (count === 2) {
      if (nums[start] === 0) {
        count--;
      }
      start++;
    }
    max = Math.max(max, end - start);
  }
  return max;
};
nums = [0,1,1,0,1,0,1,1,0,1]

console.log(longestSubarray(nums));
