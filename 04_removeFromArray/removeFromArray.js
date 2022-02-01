const removeFromArray = function() {
  let array = arguments[0]
  for (i = 1; i <= (arguments.length - 1); i++) {
    value = arguments[i];
    for (j = 0; j <= (array.length - 1); j++) {
        if (array[j] === value) {
            array.splice(j, 1);
        }
    }
  }
  return(array)
};

// Do not edit below this line
module.exports = removeFromArray;
