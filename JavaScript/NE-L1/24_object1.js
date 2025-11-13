function MyObject() {
  let car = {
    color: "White",
    make: 2020,
    model: "Baleno",
    engine: "1200CC",
    //Keys:value
  };

  // console.log(car.color); //White
  // console.log(car.make); //2020
  // console.log(car.model); //Baleno
  // console.log(car.engine); //1200CC

  for(let keys in car){
    console.log("Keys:",keys,"value:",car[keys])
  }

}

MyObject()
