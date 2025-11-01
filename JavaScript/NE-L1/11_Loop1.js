function forLoop() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

//forLoop()

function forLoop2(){
    for(let i=20; i>=1; i-=3){
        console.log(i)
        i+=1
    }
}
//forLoop2() // 20 18 16

function forLoop3(){
    for(let i=1, j=20; i<=20; i++, j--){
        console.log(i,j)
    }
}
forLoop3()

