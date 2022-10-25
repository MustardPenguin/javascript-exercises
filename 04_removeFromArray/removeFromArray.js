const removeFromArray = function(arr, ...args) {
    array = [];

    for(let i = 0; i < arr.length; i++) {
        let skip = false;
        for(let j = 0; j < args.length; j++) {
            if(arr[i] === args[j]) { skip = true; break; }
        }
        if(!skip) { array[array.length] = arr[i]; }
    };

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
