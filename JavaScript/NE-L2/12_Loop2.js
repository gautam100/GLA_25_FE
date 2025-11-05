function factorial() {
  let num = 5;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log("Factorial is ", fact);
}
factorial();

function printTable() {
  let tab = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(tab, "X", i, "=", tab * i);
  }
}
printTable();
//---------------------------------------
function seriesOfNum() {
  for (let i = 1, j = 20; i <= 20; i++, j--) {
    console.log(i, j);
  }
}
seriesOfNum()
//---------------------------------------
function series2(){
    //debugger;
    for(let i=1;i<=25; i+=2){
        console.log(i)
        i--
    }
}
series2()