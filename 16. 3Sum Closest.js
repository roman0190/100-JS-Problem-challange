// var threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   const n = nums.length;
//   let sum = 0;

//   for (let i = n - 1; i > 0; i--) {
//     let lst1 = i - 1;
//     let lst2 = i - 2;
//     if (lst2 === -1) {
//         break;
//     }
//     sum = nums[lst2] + nums[lst1] + nums[i];
//     console.log("last", nums[i], "last1", nums[lst1], "last2", nums[lst2],"sum",sum);

//     if (sum === target-1 || sum === target+2 || sum === target) {
//       return sum;
//     }
//   }

// };

// (nums = nums = [-7, -3, 0, 0, 4]), (target = 5);

// console.log(threeSumClosest(nums, target));

