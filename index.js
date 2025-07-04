function pivotIndex(nums) {
  let total = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSide = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSide = total - leftSide - nums[i];
    if (rightSide == leftSide) return i;
    leftSide += nums[i];
  }
  return -1;
}

nums = [2,1,-1];
console.log(pivotIndex(nums));


[1,1,1,1,1]
