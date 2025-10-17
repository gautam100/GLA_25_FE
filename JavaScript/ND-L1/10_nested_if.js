function chlDrinkCate() {
    //debugger;
  let age = parseInt(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;

  if (age < 18) {
    if (gender === "male") {
      document.getElementById("result").innerHTML = "Enjoy your Coke";
    }else{
        document.getElementById("result").innerHTML = "Enjoy your pepsi"
    }
  } else {
    if (gender === "male") {
      document.getElementById("result").innerHTML = "Enjoy your Moito";
    } else {
      document.getElementById("result").innerHTML =
        "Enjoy your Blueberry Drink!";
    }
  }
}
