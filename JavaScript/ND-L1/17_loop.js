function checkPrimeNum(){
    num = 8
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