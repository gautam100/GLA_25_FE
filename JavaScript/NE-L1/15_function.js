/*
In JS there are two types of Function

1) Named function
Ex: 
function funName(){

}

2) Anonymous function
let myFunc = function(){

}
*/

function add(a=0,b=0){
    let sum = a+b
    return sum
}
// let addition = add(10,20)
// console.log(addition)//30

// let addition2 = add(100,20)
// console.log(addition2)//120

// let addition3 = add()
// console.log("Here:",addition3)//0




let doSum = function(){
    a = parseInt(document.getElementById("first_num").value)
    b = parseInt(document.getElementById("second_num").value)
    let sum = a+b
    document.getElementById("add_result").innerHTML = sum;
}
doSum()