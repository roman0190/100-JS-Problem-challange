let arr = [4, 1, 7, 3, 11, 15];
const target = 18;

function TwoSum(arr, target) {
  let Value = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let firstVal = arr[i];
    let secondVal = target - firstVal;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == secondVal) {
        Value.push(firstVal, secondVal);
        return Value;
      }
    }
  }
}

const result = TwoSum(arr, target);
console.log(result);

