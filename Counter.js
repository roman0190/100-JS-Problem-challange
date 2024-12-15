var createCounter = function (n) {
  let count = -1;
  return function () {
    count++;
    return n + count;
  };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
