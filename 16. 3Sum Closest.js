var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let colsest_sum = Infinity;
  for (let i = 0; i < n - 2; i++) {
    let start = i + 1;
    let end = n - 1;
    while (start < end) {
      sum = nums[i] + nums[start] + nums[end];
      if (sum === target) {
        return (colsest_sum = sum);
      }
      if (sum < target) {
        start++;
      } else {
        end--;
      }
      if (Math.abs(target - sum) < Math.abs(target - colsest_sum)) {
        colsest_sum = sum;
      }
    }
  }
  return colsest_sum;
};

(nums = nums = [-7, -3, 2, 3, 11]), (target = 5);

console.log(threeSumClosest(nums, target));
