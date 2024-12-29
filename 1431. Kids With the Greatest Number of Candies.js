var kidsWithCandies = function (candies, extraCandies) {
  const MaxCandies = Math.max(...candies);
  return candies.map((candie) => candie + extraCandies >= MaxCandies);
};

const candies = [4, 2, 1, 1, 2, 5,6],
  extraCandies = 1;
console.log(kidsWithCandies(candies, extraCandies));
