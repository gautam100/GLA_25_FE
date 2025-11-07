function array1() {
  let ar1 = [10,100.5,"Raj",true, 900]; //shorcut  

  let ar2 = new Array(10,20,30.5,true,"Rohit") //Constructor

//   console.log(ar1[0])//10
//   console.log(ar1[1])//100.5
//   console.log(ar1[2])//Raj
//   console.log(ar1[3])//true


  for(let i=0; i<ar1.length;i++){
    console.log(ar2[i]) //10 100.5 Raj  true 900
  }
}
array1()