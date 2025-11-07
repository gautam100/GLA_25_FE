// --- Hoisting in JS
func1();

//Named function
function func1() {
  let b;
  console.log(a);
  console.log(b);
  var a = 10;

  console.log("I am inside func1");
}
func2();

// Anonymous function
var func2 = function () {
  console.log("I am inside func2");
};
// Here func2 variable will act as function name
// The variable which holds any function is called function expression

/*
Important Points:--

Difference between var and let
Difference between named function and anonymous function
What is hoisting
Does hoisting works with let
What is TDZ
*/
