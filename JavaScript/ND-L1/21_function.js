/*
In JS, there are two type of functions

1) Named function
2) Anonymous function
     -Arrow function

     Hoisting
*/
let amt = null;
let cardNo1 = "1234098723456780";
let amount1 = 1001;

amt = atm(cardNo1, amount1);
console.log(amt);


let atm= function(cardNo, amount) {
  if (cardNo.length === 16) {
    if (amount % 100 === 0) {
      return amount;
    }
  }
}
//Here atm variable is also called function expression
