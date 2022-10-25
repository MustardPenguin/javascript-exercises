const sumAll = function(x, y) {
    if(Number.isInteger(x) && Number.isInteger(y) && x > -1 && y > -1) {
        let sum = 0;
        let largest = x > y ? x : y;
        for(let i = 0; i < largest; i++) {
            sum += (i + 1);
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
