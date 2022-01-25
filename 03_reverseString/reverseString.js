const reverseString = function(str) {
  const splitArray = str.split("")
  let output = ''
  for (i = (splitArray.length - 1); i >= 0; i--) {
      output += splitArray[i]    
  }
  return(output)  
};

// Do not edit below this line
module.exports = reverseString;
