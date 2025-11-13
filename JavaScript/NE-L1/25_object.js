//Creating student object
let student = {
    name: "Rohit sharma",
    age: 19,
    isIndian: true,
    hobby: ["watching movie","cooking"],
    university: function(){
        console.log("GLA")
    },
    courses:{
        course1: "MBA",
        course2: "BBA",
        course3: "BE",
        course4: "MCA"
    }
}

console.log(Object.keys(student))//printing all keys of student object in array format

let obj = new Object() //Creating object using constructor method

console.log(obj instanceof Object)//true

student.sem = 1; //inserting new value in object

console.log(student) //printing object
