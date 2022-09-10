const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    solution = "";

    for (i=0; i<num; i++) {
        solution += str;
    }

    return solution;
};

// Do not edit below this line
module.exports = repeatString;
