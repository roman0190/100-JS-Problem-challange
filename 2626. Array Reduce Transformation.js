var reduce = function (nums, fn, init) {
    let accum = init
  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  return accum;
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
