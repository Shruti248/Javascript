// Using Google Sheets ---

function addNums(n) {
    total = 0;

    for (let i = 1 ; i <= n ; i++) {
      total += i;
    }

    return total;
  }



let increment = 1000000
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}


// 23
// 44
// 69
// 83
// 106
// 160
// 289
// 172
// 163
// 184

// Copy the Output in Google Sheet & Visualize the Graph----
