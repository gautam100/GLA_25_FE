function MyObject() {
    // let fun1 =function(){
    //     console.log("Any random function")
    // }
    // let arr = [100, 50.5, true, [101,102],{a:1,b:2}, fun1]
    // console.log(arr[5]())

    let student = {
        name: "Rohit Sharma",
        age: 19,
        isIndian: true,
        hobby: ["cooking","cricket"],
        qualification: function(){
            return "BE"
        },
        skills: {
            skill1 : "C Programming",
            skill2 : "Java Script",
            skill3 : "Data Base Management System"
        }

    }
    console.log(student.qualification())

    for(let key in student){
        console.log(student[key])
    }

    student.university = "GLA"
    
    console.log(Object.keys(student)) // This will return all keys name in array format
    console.log(Object.values(student))
    
    //let myObj = new Object() //Constructor way
    //let myArr = new Array()

}
MyObject();
