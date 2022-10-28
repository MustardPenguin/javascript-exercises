const palindromes = function (word) {
    let str = word.replace(/[^a-zA-Z]/ig, "").toLowerCase();
    console.log(str);
    for(let i = 0; i < str.length / 2; i++) {
        if(!(str.charAt(i) === str.charAt(str.length - (i + 1)))) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
