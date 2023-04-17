function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done Stretching');
      console.log('Done Stretching');
    }, 1000)
  })
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done running on treadmill');
      console.log('done running on treadmill');
    }, 500)
  })
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done lifting weights');
      console.log('done lifting weights');
    }, 2000);
  })
}


function workout(totalTime) {
  timeLeft = totalTime;

  // let s = stretch(timeLeft);
  // let runOnTreadmill = runOnTreadmill(timeLeft);
  // let liftWeights = liftWeights(timeLeft);

  return new Promise((resolve, reject) => {
    if (timeLeft < 1000) {
      reject('Error : you dont have enough time to stretch')
    } else if (timeLeft < 1500) {
      stretch(timeLeft).then(() => {
        reject('Error:  you dont have enough time to run on treadmill')
      })

    } else if (timeLeft <= 2000) {
      stretch(timeLeft).then(() => {
        timeLeft -= 1000;
        runOnTreadmill(timeLeft).then(() => {
          reject('Error:  you dont have enough time to lift weights')
        })

      })

    } else {
      stretch(timeLeft).then(() => {
        timeLeft -= 1000;
        runOnTreadmill(timeLeft).then(() => {
          timeLeft -= 500;
          liftWeights(timeLeft).then(() => {
            timeLeft -= 2000;
            console.log(`done working out with ${timeLeft} seconds left`);
            resolve();
          })
        })
      })


    }
  })
}


/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch


// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(5500);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
