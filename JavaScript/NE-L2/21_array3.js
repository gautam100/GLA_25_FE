function myArray() {
  let arr = [10, 21, 13, "raj", 18, 200, "smith", 198];
  let even = 0, odd = 0;
  for (let el of arr) {
    if (typeof el === "String") {
      continue
    }
    if (el % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("Total Even Nos. ",even)
  console.log("Total Odd Nos. ",odd)
}

myArray()