const shift_function = function(char, shift) { // returns char
    let uni = char.charCodeAt(0);

    if (uni >= 65 && uni <= 90) { //capital letter
        if (shift > 0 && uni + shift > 90) {
            let extraShift = (uni + shift) - 90;
            return shift_function("A", extraShift-1);
        }
        else if (shift < 0 && uni + shift < 65) {
            let extraShift = (uni + shift) - 65;
            return shift_function("Z", extraShift+1);
        }
        else {
            uni = uni + shift;
            return String.fromCharCode(uni);
        }
    }
    else if (uni >= 97 && uni <= 122) { //lowercase letter
        if (shift > 0 && uni + shift > 122) {
            let extraShift = (uni + shift) - 122;
            return shift_function("a", extraShift-1);
        }
        else if (shift < 0 && uni + shift < 97) {
            let extraShift = (uni + shift) - 97;
            return shift_function("z", extraShift+1);
        }
        else {
            uni = uni + shift;
            return String.fromCharCode(uni);
        }
    }
    else { //symbol
        uni = uni + shift;
        return String.fromCharCode(uni);
    }
};

const caesar = function(str, shift) {
    let encrypted_str="";

    for(i=0; i<str.length; i++) {
        
        if (!!str[i].match(/^[,!]/) || !!str[i].match(/\s/g)) { // if char is puncuation or space, do not shift.
            encrypted_str = encrypted_str + str[i];
        }
        else {
            encrypted_str = encrypted_str + shift_function(str[i], shift);
        }
    }

    return encrypted_str;
};

// Do not edit below this line
module.exports = caesar;
