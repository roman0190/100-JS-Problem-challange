var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

nums = [1, 2, 3, 4];
const sum = (accum, curr) => {
  return accum + curr;
};
const sum1 = (accum, curr) => {
  return accum + curr * curr;
};
init = 100;

console.log(reduce(nums, sum1, init));
