const fibonacci = function(num) {
    num = parseInt(num);
    return num < 0 ? "OOPS" : num === 0 ? 0 : num === 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
