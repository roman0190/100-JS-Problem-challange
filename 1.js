let inputArray = [1, 2, 1, 5, 6, 7, 1, 1];

let elementToReplace = 1;
let substrationElem = 3;

function arrayReplace(arr, elementToReplace, substrationElem) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToReplace) {
      output.push(substrationElem);
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}

const result = arrayReplace(inputArray, elementToReplace, substrationElem);

console.log(result);
