var largestAltitude = function (gain) {
  let max = 0, altitude = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i]; 
    max = Math.max(max, altitude);
  }

  return max;
};

gain = [-4,-3,-2,-1,4,3,2]

console.log(largestAltitude(gain));
