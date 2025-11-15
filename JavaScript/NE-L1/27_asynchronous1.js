function async1(){
    console.log("Step 1")
    console.log("Step 2")
    
    setTimeout(function(){
        console.log("Step 3")
    },3000)
    console.log("Step 4")
}

async1()

/*
callback
promise
async-await
*/