function waitAndPrint(message, delay) {
  return new Promise((resolve, reject) => {
    
    let flag = true;

    if (flag === true) {
      setTimeout(function () {
        console.log(message); //One
        resolve(); //this will call then
      }, delay);
    }else{
      console.log("Promise Failed")
      reject() //control will go to catch() 
    }
  });
}

waitAndPrint("One", 2000)
  .then(() => waitAndPrint("Two", 2000)).catch(()=> console.log("Flag was false1"))
  .then(() => waitAndPrint("Three", 2000)).catch(()=> console.log("Flag was false2"))
  .then(() => waitAndPrint("Four", 2000)).catch(()=> console.log("Flag was false3"));
