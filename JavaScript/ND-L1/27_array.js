function addMatrix() {
  let arr1 = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  let arr2 = [
    [6, 7, 8],
    [11, 12, 13]
  ];
  let arr3 = [[], []];

  for (let row = 0; row < arr1.length; row++) {
    for (let col = 0; col < arr1[row].length; col++) {
      arr3[row][col] = arr1[row][col] + arr2[row][col];
    }//col ends
  }//row ends

  console.log(arr1)
  console.log(arr2)
  console.log(arr3)
}

addMatrix();
