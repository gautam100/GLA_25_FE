function MyPromise(){
    return new Promise(function(resolve,reject){
        //let isSuccessful = true;//API call will be here
        let isSuccessful = Math.random() > 0.5
        if(isSuccessful){
            setTimeout(function(){
                console.log("Promise Resolved Successfully")
                resolve() //in case of succeessful...& control will go to then block
            },2000)
        }else{
            setTimeout(function(){
                console.log("Promise Rejected!!!")
                reject() //in case of failure ...& control will move to catch block
            },1000)
        }
    })
}

let promise = MyPromise()
.then(function(){
    console.log("Got the result data...let's bind it in UI")
})
.catch(function(){
    console.log("Got Error from API...let talk with backend developer's")
}).finally(function(){
    console.log("The End! Bye-Bye")
})
