let myArray = function () {
  let ar = [100, 50, 200.5, 300, "raj", true];
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
  }
  console.log("-----------");

  for (let temp of ar) {
    console.log(temp); //100 50 200.5 300...
  }
};
//myArray()

var arr = new Array();

let myArray2 = function () {
  document.getElementById("result").innerHTML = "";
  let data = document.getElementById("array_data").value;
  arr.push(data);
  console.log(arr, arr.length);
  for (let temp of arr) {
    document.getElementById("result").innerHTML += temp + " ";
  } //for end

  document.getElementById("result2").innerHTML = arr;
}; //myArray2 end
