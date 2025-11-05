function chkPrimeNum(){
    let num = 8
    let isPrime = true
    for(let loop=2;loop<num;loop++){
        if(num%loop === 0){
            isPrime = false
            break
        }
    }//for

    if(isPrime === true){
        console.log(num, " is prime number")
    }else{
        console.log(num, " is not prime number")
    }
}

chkPrimeNum()
