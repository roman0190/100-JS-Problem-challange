var reverseVowels = function (s) {
  let i = 0;
  let j = s.length - 1;
  let word = s.split("");
  const vowels = "AaEeIiOoUu";
  while (i < j) {
    if (!vowels.includes(word[i])) {
      i++;
    }
    else if (!vowels.includes(word[j])) {
      j--;
    }
    else{
      [word[i], word[j]] = [word[j], word[i]];
      j--;
      i++;
    }
  }

  return word.join("");
};

const s = "leetcode";

console.log(reverseVowels(s));
