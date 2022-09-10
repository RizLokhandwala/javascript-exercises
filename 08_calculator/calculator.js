const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	answer = 0;
  for (i=0; i<arr.length; i++) {
    answer += arr[i];
  }

  return answer;
};

const multiply = function(arr) {
  answer = 1;
  for (i=0; i<arr.length; i++) {
    answer *= arr[i];
  }

  return answer;
};

const power = function(a, b) {
  if (b == 0) {
    return 1;
  }
  else if (b < 0) {
    return 1/(power(a, -b));
  }
  else {
    let answer = a;
    for (i=1; i<b; i++) {
      answer *= a;
    }


    return answer;
  }
  

};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
  else {
    answer = 1;
    if (a > 0) {
      for (i=1; i<a+1; i++) {
        answer *= i;
    }
  }
    else {
      for (i=a; i>0; i--) {
        answer *= a;
      }
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
