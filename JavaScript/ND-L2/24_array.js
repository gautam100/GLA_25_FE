let twoDArray = function () {
  let arr1 = [
    [4, 5, 6],
    [7, 8, 9],
  ];

  let arr2 = [
    [10, 20, 30],
    [40, 50, 60],
  ];

  let arr3 = [[],[]];

  for (let row = 0; row < arr1.length; row++) {
    for (let col = 0; col < arr1[0].length; col++) {
      arr3[row][col] = arr1[row][col] + arr2[row][col];
    }
  }

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  //console.log(arr1[0][2]);
  //console.log(arr1[1]);
};

twoDArray();
