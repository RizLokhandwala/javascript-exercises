const reverseString = function(str) {
    str2="";
    for (i=str.length; i>0; i--) {
        str2 += str[i-1];
    }
    return str2;
};

// Do not edit below this line
module.exports = reverseString;
