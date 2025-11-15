setTimeout(function () {
  console.log("Step 1");
  setTimeout(function () {
    console.log("Step 2");
    setTimeout(function () {
      console.log("Step 3");
      setTimeout(function () {
        console.log("Step 4");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
