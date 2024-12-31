var compress = function (chars) {
  let n = chars.length;
  let indx = 0;
  for (let i = 0; i < n; ) {
    let count = 0;
    let char = chars[i];
    while (i < n && chars[i] === char) {
      count++;
      i++;
    }
    if (count === 1) {
      chars[indx++] = char;
    } else {
      chars[indx++] = char;
      for (let digit of count.toString()) {
        chars[indx++] = digit;
      }
    }
  }
  return indx;
};

chars = ["a", "a", "a", "b", "b", "c", "c", "c"];

console.log(compress(chars));
