var chunk = function (arr, size) {
  let chunkarr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkarr.push(arr.slice(i, i + size));
  }
  return chunkarr;
};

(arr = [1, 2, 3, 4, 5]), (size = 3);

console.log(chunk(arr, size));
