function whileLoop() {
  let i = 1; //initilization
  while (i < 11) {
    //condition
    console.log(i);
    i++; //updation
  }
}
//whileLoop()

function whileLoop2(){
    let x = 1
    while('5'== 5){
        console.log(x)
        x++
    }
}
//whileLoop2()


function doWhile(){
    let i=1;
    do{
        console.log(i) // 1
        j = ++i
        console.log(j,i) // 2 2
    }while(i<=10)
}
doWhile()