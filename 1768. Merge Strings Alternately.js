var mergeAlternately = function (word1, word2) {
  let newWord = [];
  let j = 0;
  let k = 1;
  for (let i = 0; i < word1.length; i++) {
    newWord[j] = word1[i];
    j += 2;
  }
  for (let i = 0; i < word2.length; i++) {
    newWord[k] = word2[i];
    k += 2;
  }
  return newWord.join("");
};

const word1 = "abc",
  word2 = "pqr";

console.log(mergeAlternately(word1, word2));
