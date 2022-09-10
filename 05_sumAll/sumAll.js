const sumAll = function(first, second) {
    answer = 0;

    if (first < 0 || second < 0 || typeof(first+second) != 'number') {
        return "ERROR";
    }

    if (first > second) {
        for (i=second; i<first+1; i++) {
            answer += i;
        }
    }
    else {
        for (i=first; i<second+1; i++) {
            answer += i;
        }
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
