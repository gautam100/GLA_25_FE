let objectFunc = () => {
  let car = {
    color: "White",
    engine: "1200 CC",
    model: 2020,
    manufacturer: "Maruti",
  };
  // Key:value format is also called JSON - JavaScript Object Notation

  console.log(car.color); // White
  console.log(car.manufacturer); // Maruti
  console.log("------------");
  for (let temp in car) {
    console.log("keys:", temp, "values:", car[temp]);
  }
};

objectFunc();
