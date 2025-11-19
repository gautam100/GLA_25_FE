/*
Synchronous


asynchronous 

 - callback
 - promise
 - async await

*/

function Abc() {
  console.log("step 1");

  setTimeout(function () {
    console.log("Step 2");
  }, 1000);

  console.log("step 3");
}

Abc()