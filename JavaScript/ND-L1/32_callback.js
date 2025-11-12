var ar = [10, 20, 31, 41, 50];
var sum = 0;

// Main Function
function sumOfArray(callback) {
  for (let temp of ar) {
    sum = sum + temp;
  }
  console.log("---Execution Begins--")
  setTimeout(callback,1000)
  console.log("---Execution Ends--")

}

// Callback function 1
function doAverage(){
    let avg = sum/ar.length
    console.log("Average is ",avg)
}

// Callback function 2
function isSumEvenOdd(){
    if(sum%2 ===0){
        console.log("Sum is a even number")
    }else{
        console.log("Sum is a odd number")
    }
}

sumOfArray(doAverage)
sumOfArray(isSumEvenOdd)