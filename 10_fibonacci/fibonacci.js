const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let a = Array(num);
    a[0] = 1;
    a[1] = 1;

    for (i=2; i<num; i++) {
        a[i]=a[i-1]+a[i-2];
    }

    return a[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
