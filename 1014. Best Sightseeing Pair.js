var maxScoreSightseeingPair = function (values) {
  let MaxPair = 0;
  let LeftMax = values[0] + 0;
  for (let j = 1; j < values.length; j++) {
    RightMax = values[j] - j;
    MaxPair = Math.max(MaxPair, LeftMax + RightMax);
    LeftMax = Math.max(LeftMax, values[j] + j);
  }
  return MaxPair
};

values = [8, 1, 5, 2, 6];

console.log(maxScoreSightseeingPair(values));
