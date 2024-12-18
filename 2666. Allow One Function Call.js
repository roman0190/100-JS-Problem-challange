var once = function (fn) {
  let one = 1;
  return function (...args) {
    if (one === 1) {
      ++one;
      return (args = fn(...args));
    }
  };
};
let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3, 4, 6));
console.log(onceFn(2, 3, 6));
