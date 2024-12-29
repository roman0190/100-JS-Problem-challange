var increasingTriplet = function (nums) {
  let n = nums.length;
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < n ; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }
  return false;
};

nums = [20, 100, 10, 12, 5, 13];

console.log(increasingTriplet(nums));
