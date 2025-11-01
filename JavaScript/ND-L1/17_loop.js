var readlineSync = require('readline-sync');

function checkPrimeNum(){
    var num = readlineSync.question('Enter Number: ');
    isPrime = true;
    for(i=2;i<num;i++){
        if(num%i === 0){
            isPrime = false
            break
        }
    }
    if(isPrime === true){
        console.log(num,"is prime number")
    }else{
        console.log(num,"is not a prime number")

    }
}

checkPrimeNum();