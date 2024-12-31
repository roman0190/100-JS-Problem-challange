var moveZeroes = function (nums) {
  let n = nums.length;
  left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
};

nums = [1, 0, 10, 10, 101, 200, 10, 0, 1];

console.log(moveZeroes(nums));
