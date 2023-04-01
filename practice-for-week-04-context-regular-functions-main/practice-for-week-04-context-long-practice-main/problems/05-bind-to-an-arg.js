function bindToAnArg(func, arg) {
  // Your code here
  return function(){
    return func.call(this , arg);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
