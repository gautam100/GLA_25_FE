/*
    WAP in which find factorial of any number
    5 * 4 * 3 * 2 * 1 = 120
*/

function getFactorial(){
    let num = 5
    let fact = 1
    for(let i=1; i<=num; i++){
        fact = fact * i
    }
    console.log("Factorial of ",num," is ", fact)
}

getFactorial()