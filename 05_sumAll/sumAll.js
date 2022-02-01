const sumAll = function(start, end) {
  let value = 0
  if (!(Number.isInteger(start) && start>0 && Number.isInteger(end) && end>0)) {
      return('ERROR')
  }
  else if (start <= end) {
    for (i = start; i<= end; i++) {
      value += i;  
    }
    return(value)
  }
  else if (start > end) {
    for (i = end; i<= start; i++) {
        value += i;  
    }
    return(value)
  }
};

function isPositiveInteger(num1,num2) {
    if (Number.isInteger(num1) && num1 > 0 && Number.isInteger(num2) && num2 > 0) {
        return('true')
    }
    else {
        return('false')
    }
}

// Do not edit below this line
module.exports = sumAll;
