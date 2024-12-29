var canPlaceFlowers = function (flowerbed, n) {
  const l = flowerbed.length;
  for (let i = 0; i < l; i++) {
    if (flowerbed[i] === 0) {
      let left = i === 0 || flowerbed[i - 1] === 0; //false
      let right = l - 1 === 0 || flowerbed[i + 1] === 0; //true

      if (left && right) {
        flowerbed[i];
        n--;
      }
    }
  }
  return n <= 0;
};

const flowerbed = [0, 0, 0],
  n = 2;

console.log(canPlaceFlowers(flowerbed, n));
