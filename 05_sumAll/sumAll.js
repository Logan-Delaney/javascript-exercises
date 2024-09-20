const sumAll = function (num1, num2) {
  let increment = num1;
  for (i = num1; i < num2; i++) {
    increment = increment + i + 1;
  }
  return increment;
};

// Do not edit below this line
module.exports = sumAll;
