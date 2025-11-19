let ar = [10, 13, 15, 20, 87, 45];

function doSum(callback) {
  let sum = 0;
  for (let temp of ar) {
    sum += temp;
  }
  console.log(sum);

  setTimeout(callback, 1000, sum);
}
function mean(sum) {
  console.log("average:", sum / ar.length);
}
function oddEvenCounter() {
  let odd = 0;
  let even = 0;
  for (let temp of ar) {
    if (temp % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("Total Even No:", even, "Total odd No:", odd);
}

//Here doSum is HOF and mean & oddEvenCounter is callback function
doSum(mean);//190 
doSum(oddEvenCounter); //190
