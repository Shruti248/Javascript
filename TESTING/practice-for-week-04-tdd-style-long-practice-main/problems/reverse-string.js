module.exports = function reverseString(string) {
  // Your code here
  if(typeof(string) != 'string'){
    throw new TypeError('str must be a string')
  }

  let reverseString = '';

  for(let i = string.length-1 ; i>=0 ; i--){
    reverseString+=string[i];
  }

  return reverseString;

};
