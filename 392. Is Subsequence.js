var isSubsequence = function (s, t) {
  if (s === "") {
    return true;
  }
  let n = t.length;
  let left = 0;
  for (let i = 0; i < n; i++) {
    if (s[left] === t[i]) {
      left++;
    }
    if (left === s.length) {
      return true;
    }
  }
  return false;
};

const s = "aaa",
  t = "aghbaac";

console.log(isSubsequence(s, t));
