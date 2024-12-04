function miniSum(num) {
    let str = num.toString().split("").sort();
    return Number(str[0] + str[2]) + Number(str[1] + str[3]);
  }
  
  const result = miniSum(2932);
  console.log(result);
  