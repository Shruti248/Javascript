function allTheArgs(func, ...args) {
  // Your code here
  return function(...callTimeArgs) {
    return func(...args, ...callTimeArgs);
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
