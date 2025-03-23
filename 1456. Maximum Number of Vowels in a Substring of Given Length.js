var maxVowels = function (s, k) {
  let n = s.length;
  let WindowStart = 0;
  let count = 0;
  let maxVowls = 0;
  for (let i = 0; i < n; i++) {
    if (isVowel(s[i])) {
      count++;
    }
    if (i - WindowStart === k - 1) {
      maxVowls = Math.max(maxVowls, count);
      if (isVowel(s[WindowStart])) {
        count--;
      } 
      WindowStart++;
    }
  }

  function isVowel(c) {
    return c === "a" || c === "e" || c === "o" || c === "i" || c === "u";
  }
  return maxVowls;
};

(s = "abciiiidef"), (k = 4);

console.log(maxVowels(s, k));
