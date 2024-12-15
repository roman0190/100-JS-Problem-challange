var expect = function (val) {
  function toBe(x) {
    if (val === x) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  }

  function notToBe(y) {
    if (val !== y) {
        return true;
      } else {
        throw new Error("Equal");
      }
  }
  return {
    toBe,
    notToBe,
  };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
