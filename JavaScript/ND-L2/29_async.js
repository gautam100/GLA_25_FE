/*

- Synchronous

- Asynchronous
1) callback
2) promise
3) async-await

*/
function Abc(){
    console.log("Step 1")
    console.log("Step 2")
    setTimeout(function(){
        console.log("step 3")
    },1000)
    console.log("Step 4")
}

Abc()