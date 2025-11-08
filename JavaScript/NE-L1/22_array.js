let func1 = () => {
  let arr = [10, 11, 12, 13, 14, 15]
  let even = 0, odd = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even = even+arr[i]
    } else {
      odd = odd+arr[i]
    }
  }

  console.log("Sum of Even numbers:",even)
  console.log("Sum of Odd numbers:",odd)

}

func1()
