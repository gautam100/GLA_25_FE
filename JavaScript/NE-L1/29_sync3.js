var arr = [12, 90, 34, 56, 77];

function doSum(callback) {
  var sum = 0;
  for (let temp of arr) {
    sum = sum + temp;
  }
  console.log("Start")
  console.log("Sum is" + sum);
  setTimeout(callback, 2000, sum);
  console.log("End")
}

function getAverage(sum) {
  console.log("Average is:", sum / arr.length);
}

function evenOddCounter() {
  let even = 0,
    odd = 0;
  for (let temp of arr) {
    if (temp % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("Total Even Nos:" + even + "Total odd Nos:" + odd);
}

doSum(getAverage);
doSum(evenOddCounter);
