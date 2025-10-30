forLoop()//calling the function
console.log("-----")
forLoop2() //?
forLoop3()
//Definition of function
function forLoop() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

function forLoop2(){
    for(let i=20; i>0; i-=2){
        console.log(i)
        i-=1;
    }
}



function forLoop3(){
    for(let i=1,j=10; i<=10; i++,j--){
        console.log(i,j)
    }
}



//Hoisting