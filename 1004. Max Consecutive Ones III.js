var longestOnes = function (nums, k) {
  let n = nums.length;
  let MaxLength = 0;
  let ZeroCount = 0;
  let start = 0;
  for (let end = 0; end < n; end++) {
    if (nums[end] == 0) {
      ZeroCount++;
    }
    while (ZeroCount > k) {
      if (nums[start] == 0) {
        ZeroCount--;
      }
      start++;
    }
    MaxLength = Math.max(MaxLength, end - start + 1);
  }
  return MaxLength;
};

const nums = [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1];
const k = 2;
console.log(longestOnes(nums, k));
