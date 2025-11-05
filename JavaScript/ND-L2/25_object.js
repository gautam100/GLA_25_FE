let myObj = {
    "name":"Raj",
    "age":18,
    "qualification": ["BE","ME"],
    "isIndian": true
}

console.log(myObj.name) //Raj
console.log(myObj.age) //18
console.log(myObj.qualification[0]) //BE
console.log("-----")
for(let temp in myObj){
    console.log("Key is:",temp," Value is:",myObj[temp])
}

console.log(typeof myObj) // object
console.log(Object.keys(myObj)) //print all keys of object
console.log(myObj.constructor.name) //Object

