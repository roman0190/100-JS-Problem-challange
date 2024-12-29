var reverseWords = function (s) {
  let arr = [];
  s = s.split(" ").reverse();
  for (let i = 0; i < s.length; i++) {
    if (s[i]) {
      arr.push(s[i]);
    }
  }
  return arr.join(" ");
};

const s = "a good   example";

console.log(reverseWords(s));

