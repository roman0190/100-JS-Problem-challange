var findMaxAverage = function (nums, k) {
  let n = nums.length;
  let sum = 0;
  let MaxVag = -Infinity;
  let windowStart = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (i - windowStart === k - 1) {
      let avg = sum / k;
      console.log(avg, sum);
      MaxVag = Math.max(MaxVag, avg);
      sum -= nums[windowStart];
      windowStart++;
    }
  }
  return MaxVag;
};

const nums = [1, 2, 3, 4, 5, 6],
  k = 4;

console.log(findMaxAverage(nums, k));
