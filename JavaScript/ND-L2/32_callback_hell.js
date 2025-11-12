console.log("Callback hell")
setTimeout(function () {
  console.log("One")
  setTimeout(function () {
    console.log("Two")
    setTimeout(function () {
      console.log("Three")
      setTimeout(function () {
        console.log("Four")
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
