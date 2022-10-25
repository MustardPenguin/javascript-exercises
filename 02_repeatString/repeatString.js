const repeatString = function(word, repeats) {
    if(repeats < 0) {
        return "ERROR";
    }
    let str = "";
    for(let i = 0; i < repeats; i++) {
        str += word;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
