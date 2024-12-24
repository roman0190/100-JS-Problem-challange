var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }

  return nums;
};

nums = [1, 2, 2, 2, 2,3,4];

console.log(removeDuplicates(nums));
