let func1 = function(){

    let student = {
        roll_no:101,
        name: "Rohit sharma",
        isIndian: true,
        current_sem: function(){
            return 'sem 1'
        },
        hobby: ["Fighting","Time pass","sleeping"],
        family:{
            "father_name":"Mr. Rajendra Pd",
            "home_town": "Agra"
        }
    }
    console.log("Family:",student.family.home_town)
    for(let temp in student){
        console.log(student[temp])
    }

}
func1()

var fe = function(){
    return "any string"
}

let func2 = function(){
    let arr = [10,10.5,"rohit",true, [10,20,"Raj"],{a:1,b:2},fe]
    console.log(arr)
    console.log(arr[4][2])
    console.log(arr[5].a)
    console.log(arr[6]())

}
func2()
