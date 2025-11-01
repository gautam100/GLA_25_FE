/*
WAP in which accept a number and print its factorial value
*/
var readlineSync = require('readline-sync');

function getFactorial(num){
    var fact = 1
    for(let i=1;i<=num;i++){
        fact = fact * i
    }
    return fact
}
let num1 = readlineSync.question('Enter number: ');
let res = getFactorial(num1)
console.log(res)

num1 = readlineSync.question('Enter number: ');
console.log(getFactorial(num1))