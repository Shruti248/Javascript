function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('Done Stretching');
    }, 1000)
  })
}



// stretch().then(() => { console.log('Done Stretching'); }).catch(err => {
//   console.error(err);
// })

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('done running on treadmill');
    }, 500)
  })
}
// runOnTreadmill().then(() => { console.log('done running on treadmill'); }).catch(err => { console.log(err); })

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('done lifting weights');
    }, 2000);
  })
}

// liftWeights().then(() => {
//   console.log('done lifting weights');
// }).catch(err => {
//   console.error(err);
// })


function workout() {
  // Your code here
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => {
      console.log('Done Working Out..');
    }).catch(err => {
      console.error(err)
    })
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
