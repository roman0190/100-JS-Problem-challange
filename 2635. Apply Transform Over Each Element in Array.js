var map = function (arr, fn) {
    let val = []
    for(let i = 0;i<arr.length ; i++){
        val.push(fn(arr[i],i))
    }
    return val
};

arr = [1, 2, 4];
const plusone = (n) => {
  return n + 1;
};
const plusI = (n,i) => {
  return n + i;
};
const constant = (n,i) => {
  return 42;
};
console.log(map(arr,constant));
