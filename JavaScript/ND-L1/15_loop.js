function getCalculation() {
  let base_num = 2;
  let exp_num = 3;
  let result = 1;
  for (let i = 1; i <= exp_num; i++) {
    result = result * base_num
  }
  console.log(result);
}
getCalculation()