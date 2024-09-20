const convertToCelsius = function(fTemp) {
  toCel = (fTemp - 32) * (5 / 9);
  roundC = Math.round(toCel * 10) / 10;
  return roundC
};

const convertToFahrenheit = function(cTemp) {
  toFar = cTemp * (9 / 5) + 32;
  roundF = Math.round(toFar * 10) / 10;
  return roundF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
