var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let left = 0,
    right = n - 1,
    sum = 0,
    count = 0;
  while (left < right) {
    sum = nums[left] + nums[right];
    console.log(sum);
    if (sum < k) {
      left++;
    } else if (sum > k) {
      right--;
    } else {
      count++;
      left++;
      right--;
    }
  }
  return count;
};

const nums = [1, 2, 3, 4,5,0],
  k = 5;

console.log(maxOperations(nums, k));
