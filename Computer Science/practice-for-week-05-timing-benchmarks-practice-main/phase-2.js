const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let ans = [];
  for (let i = 1; i <= 10; i += increment) {
    ans.push(addNums(i));
  }

  return ans;
}

addNums10(1);


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Left --- Tesdt Failing
  let res = [];

  if (increment == 0) {

    for (let i = 1; i <= 10; i++) {
      res.push(addManyNums(i));
    }

  } else {
    for (let i = 1; i <= 10; i += increment) {
      res.push(addManyNums(i));
    }
  }

  console.log(res);
  return res;
}




module.exports = [addNums10, addManyNums10];
