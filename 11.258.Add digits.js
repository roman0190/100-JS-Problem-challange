function addDigits(num) {
    if (num < 10) return num;
    let digits = Array.from(String(num), Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    return addDigits(sum);
  }
  
  const result = addDigits(38);
  console.log(result);
  