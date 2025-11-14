let obj = {} //blank object

let car = {
    color:"white",
    engine:"1200CC",
    reg_no:"UP16 2210",
    make: "Maruti",
    model: "Baleno"
}
//JSON: JavaScript Object Notation

console.log(car.color) //white
console.log(car.make) //Maruti

for(let key in car){
    console.log("Key :",key,"Value :",car[key])
}

