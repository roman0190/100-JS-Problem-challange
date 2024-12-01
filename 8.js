//inverted Half Pyramid
let start = "";

// for (let row = 0; row < 5; row++) {
//   for (let col = 5; col > row; col--) {
//     start += "*";
//   }
//   start += "\n";
// }
// console.log(start);

// Half Pyramid

for (let row = 0; row < 5; row++) {
  for (let col = 0; col <= row; col++) {
    start += "*";
  }
  start += "\n";
}
console.log(start);
