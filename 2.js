function value(...arr) {
    let total = 0;
    arr.map((element) => {
      total += element;
    });
    return total;
  }
  
  console.log(value(1, 2, 3, 10, "Roman"));
  