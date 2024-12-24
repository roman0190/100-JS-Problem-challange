var gcdOfStrings = function (str1, str2) {
  const n = str1.length;
  const m = str2.length;
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  const minLen = Math.min(m, n);
  for (let i = minLen; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      return str1.substring(0, i);
    }
  }
};

const str1 = "ABABAB",
  str2 = "ABAB";

console.log(gcdOfStrings(str1, str2));
