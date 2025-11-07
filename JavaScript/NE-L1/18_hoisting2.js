function Abc() {
    let a=10;
    console.log(typeof a); //Number

    let x = null
    console.log(typeof x) // object; inbuild error in JS
}

Abc()

//Arrow function
let xyz = (a=0,b=0) => a+b 

console.log(xyz(3,7)) //10
console.log(xyz(10,20)) //30
