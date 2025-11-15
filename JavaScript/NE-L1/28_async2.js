function greet(data){
    console.log("Good morning!"+data.name)
}

function toDos(){
    console.log("My ToDo List")
    console.log("Meeting with client 1 \n Coding in project 2")
}
let dataFromServer = {name:'john'}
setTimeout(greet,2000,dataFromServer) //here greet is a callback function
toDos()
