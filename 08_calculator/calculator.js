const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach((num) => sum += num);
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach((num) => sum *= num);
  return sum;
};

const power = function(x, y) {
	let sum = 1;
  for(let i = 0; i < y; i++) { sum*=x; }
  return sum;
};

const factorial = function(x) {
  let product = 1;
	for(let i = x; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
