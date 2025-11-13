function Abc() {
  let arr1 = [1, 2, 3, [4, 5, 6],10,89,[90]];
  for (let el of arr1) {
    if (typeof el === "object") {
      for (let e of el) {
        console.log(e);
      }
    } else {
      console.log(el);
    }
  }
}

Abc();
