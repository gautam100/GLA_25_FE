function MyPromise(){
    return new Promise((resolve,reject)=>{
        let isSucess = Math.random() >= 0.5
        if(isSucess === true){
            resolve() //It calls then block
        }else{
            reject() //It calls catch block
        }
    })
}

MyPromise()
.then(function(){
    console.log("Promise is successful")
}).catch(function(){
    console.log("Promise is not successful")
})
