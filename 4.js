const arr = [1, 2, 3, 1];

function almostIncreasingSequance(arr) {
  let count = 0;
  let i;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      count++;
    } else {
      return false;
    }
  }
  if (count >= 1) {
    return true;
  } else {
    return "Arrary size is less than 2";
  }
}

const result = almostIncreasingSequance(arr);

console.log(result);

///exact sequance

const arr1 = [1, 2, 3, 4, 5, 6, 7];

function IncreasingSequance(arr) {
  let count = 0;
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] == i + 1) {
      count++;
    } else {
      return false;
    }
  }
  if (count >= 1) {
    return true;
  }
}

const result1 = IncreasingSequance(arr1);

console.log(result1);
