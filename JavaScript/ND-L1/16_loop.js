// Named function
function factNum() {
  let num = 4;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factNum()); //<<24

//Anonymous function
let fact = function () {
  let num = 5;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};
console.log(fact()); //Function expression

