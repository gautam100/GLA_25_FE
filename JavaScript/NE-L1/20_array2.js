let ar = [];
let sumOfArray = function () {
  sum = 0
  for (let i = 0; i < ar.length; i++) {
    if(typeof ar[i] === "number"){
        sum = sum + ar[i]
    }
  }
  document.getElementById("sum_result").innerHTML = sum;
};

let pushElem = function(){
    let elem = parseFloat(document.getElementById("num").value)
    ar.push(elem)
    console.log(ar)
}
