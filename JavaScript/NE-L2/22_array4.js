/*
WAP in which create an array and check 
 - how many numbers are there
 - how many string are there 
 - & how many booleans are there
*/
function checkDataTypes() {
  let arr = [true, 10, 8, "Raj", false, "Rohit",[],undefined,null];
  let str = 0,
    Num = 0,
    bool = 0,
    other = 0
  for (let el of arr) {
    //console.log(typeof el)
    if (typeof el === "string") {
      str++;
    } else if (typeof el === "number") {
      Num++;
    } else if (typeof el === "boolean") {
      bool++;
    } else {
      other++;
    }
  } //for ends
  console.log("Total Strings: ", str)
  console.log("Total Numbers: ", Num)
  console.log("Total Booleans: ", bool)
  console.log("Total Others: ", other)
}

checkDataTypes()