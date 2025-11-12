var ar = [10, 5, 6, 20, 34, 45]
var sum = 0

function doSum(callback) {
  for (let el of ar) {
    sum += el
  }
  console.log("start...")
  setTimeout(callback,2000)
  console.log("End...")
}


function getAvg(){
    console.log("Average is ", sum/ar.length)
}
function getTotalEvenOdd(){
    let even = 0, odd = 0
    for(let el of ar){
        if(el%2===0){
            even++
        }else{
            odd++
        }
    }
    console.log("Total Even Nos: ",even,"Total odd Nos.",odd)
}

doSum(getAvg)
doSum(getTotalEvenOdd)
