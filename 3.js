let picture = ["dsds", "abc", "efc", "wwew"];

function addBorder(picture) {
  let newpic = [];
  for (let i = 0; i < picture.length; i++) {
    newpic = picture.concat("****");
    newpic.unshift("****");
  }
  return newpic;
}
const result = addBorder(picture);

console.log(result);
