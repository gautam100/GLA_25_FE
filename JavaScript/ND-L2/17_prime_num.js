function chkPrimeNum() {
  let num = 2;
  let isPrime = true;

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime === true) {
    console.log(num, " is a prime number");
  } else {
    console.log(num, " is not a prime number");
  }
}
chkPrimeNum();

function xyz() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; //skip the printing of 5
    }
    if (i === 8) {
      break; // terminates the loop
    }
    console.log(i);
  }
}
xyz()