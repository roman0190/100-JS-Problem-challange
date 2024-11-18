const num = 10;

function primesum(num) {
  let primetotal = 0;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < num; j++) {
      if (i === j) {
        primetotal += i;
      }
      if (i % j === 0) {
        break;
      }
    }
  }

  return primetotal;
}

const result = primesum(num);
console.log(result);

// const num = 10;

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// function primeSum(num) {
//   let value = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       value = value + i;
//     }
//   }
//   return value;
// }

// const result = primeSum(num);

// console.log(result);
