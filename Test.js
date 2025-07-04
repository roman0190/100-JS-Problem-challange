// function stringRev(str) {
//   let n = str.length;
//   var news = [];
//   for (let i = 0; i < n; i++) {
//     if (str[i] == " ") {
//       news.push((str[i] = str[i + 1]));
//     } else {
//       news.push(str[i]);
//     }
//   }
//   return news.reverse().join("");
// }

// console.log(stringRev("hello world"));

// const myObject = {};

// for (let i = 1; i <= 4; i++) {
//   myObject[i] = `Value ${i}`;
// }

// console.log(myObject);

// const myMap = new Map();

// for (let i = 1; i <= 4; i++) {
//   myMap.set(i, `Value ${i}`);
// }

// console.log(myMap);

// arr = [1, 2, 3, 4, 5];

// console.log(arr);

// arr.length = 0;

// console.log(arr);

// const myArray = [1, 2, 3, 4, 5];

// myArray[0] = 10;
// console.log(myArray);

// const str = "This is Roman";

// function split(str) {
//   let word = ""
//   for (let i = 0; i < str.length; i++) {
//     if(str[i]==' '){
//       word += "\n"
//     }else{
//       word += str[i]
//     }
//   }
//   return word
// }

// console.log(split(str));

// function doz(...a){
//   return {...a}
// }

// console.log(doz(1,2,3,4,5,6,7))

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.filter((x)=> x<4)

// console.log(newArr)

// const IsAdmin = true
// const admin = IsAdmin ? "Roman" : "j"

// console.log(admin)

// let num = 10;  // Global variable

// // function changeGlobal(a) {
// //   num = num + a;  // Modifies the global 'num'
// //   return num;     // Returns the updated value of 'num'
// // }

// // console.log(changeGlobal(1))

// // console.log(num)

// if(NaN){
//   console.log(num)
// }

// const obj = Object.create({ name: "Roman" });
// obj.age = 20;
// console.log(obj.age);
// delete obj.age;
// console.log(obj.age);

//

function countTotalAmount() {
  let total = 0;

  return {
    cores(amount) {
      total += amount * 10000000000000000000;
      return this;
    },
    lacs(amount) {
      total += amount * 100000;
      return this;
    },
    thausands(amount) {
      total += amount * 1000;
      return this;
    },
    hundreds(amount) {
      total += amount * 100;
      return this;
    },
    value() {
      return total;
    },
  };
}

console.log("This is Roman boss",countTotalAmount().lacs(15).hundreds(5).value());
