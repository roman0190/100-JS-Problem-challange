var filter = function (arr, fn) {
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      val.push(arr[i]);
    }
  }
  return val;
};

arr = [-2, -1, 0, 1, 20];

const greaterThan10 = (n) => n > 10;

const plusOne = (n) => n + 1;

const firstIndex = (n, i) => i === 0;

const result = filter(arr, firstIndex);

console.log(result);
