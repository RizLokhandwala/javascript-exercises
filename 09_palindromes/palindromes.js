const reverseString = require('../03_reverseString/reverseString')

const palindromes = function (str) {

    str = str.replace(/\s/g, '');
    str = str.replace(/!/g, '');
    str = str.replace(/,/g, '');
    str = str.replace(/\./g, '');

    console.log(str);
    if (str.toLowerCase() === reverseString(str.toLowerCase())) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
