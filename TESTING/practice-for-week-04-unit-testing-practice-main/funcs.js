function isFive(num) {
  // Your code here
  if (num == 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  // Your code here
  if(typeof(number) !== 'number'){
    throw new Error;
  }

  if(number%2 != 0){
    return true;
  }
  return false;
}



function myRange(min, max, step = 1) {
  // Your code here
  let ans = [];

  if(min > max){
    return ans;
  }
  if (step == 1) {
    for (let i = min; i <= max; i++) {
      ans.push(i);
    }
  } else {
    let i = min;
    while (i <= max) {
      ans.push(i);

      i += step;
    }
  }

  return ans;
}


module.exports = { isFive, isOdd, myRange };
