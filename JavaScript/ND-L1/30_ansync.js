/*
- synchronous 
- **Asynchronous

1) callback
2) promise
3) async/await

*/

function Xyz() {
  console.log("First Line");

  setTimeout(function () {
    console.log("Second Line");
  }, 2000);

  console.log("Third Line");
}

Xyz();
