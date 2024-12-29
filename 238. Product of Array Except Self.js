var productExceptSelf = function (nums) {
  let n = nums.length;
  res = [];
  let left =1 ,right =1
  for (let i = 0; i < n; i++) {
    res[i] = left
    left *= nums[i]
  }
  for(let i=n-1;i>=0 ;i--){
    res[i] *= right
    right *=nums[i]
  }
  return res;
};

nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

// res[1,8,16,48]
