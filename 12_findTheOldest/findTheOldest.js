const findTheOldest = function(obj) {
    obj.sort(function(a, b) {
        let ayod = a.yearOfDeath || new Date().getFullYear();
        let ayob = a.yearOfBirth;
        
        let byod = b.yearOfDeath || new Date().getFullYear();
        let byob = b.yearOfBirth;

        return (ayod - ayob) - (byod - byob);
    })
    console.log(obj);
    return obj[obj.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
