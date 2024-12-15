const x = 1357007531;

function Palindrome(x) {
  if (x < 0) return false;
  const val = Array.from(String(x), Number);
  let count = 0;
  let halflength = Math.round(val.length / 2);
  for (let i = 0, j = val.length - 1; i <= j; i++, j--) {
    if (val[i] === val[j]) {
      count++;
    }
  }
  if (count === halflength) {
    return true;
  } else {
    return false;
  }
}

const result = Palindrome(x);

console.log(result);
