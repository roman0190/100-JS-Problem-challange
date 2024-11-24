let str = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    if (i == 0 || i == 4 || j == 0 || j == 3) {
      str += "*";
    }else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
