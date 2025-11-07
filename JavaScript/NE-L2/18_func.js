/*
Arrow function:

*/

let doAdd = function(a=0,b=0){
    return a+b
}
console.log(doAdd(5,10)) //15
console.log(doAdd(15,20)) //35
console.log(doAdd(50)) //50
console.log(doAdd()) //0

//Arrow function
let doSub = (a=0,b=0)=> a-b

console.log(doSub(5,10)) //-5
console.log(doSub(15,20)) //-5
console.log(doSub(50)) //50
console.log(doSub()) //0


