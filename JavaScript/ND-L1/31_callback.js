function greeting(data){
    console.log("Good Morning from ...",data.name)
}

function toDos(){
    console.log("My ToDo List --")
    console.log("1. Meeting with Client 1\n 2. Coding in project 2")
}

let dataFromServer = {name:"John"}
setTimeout(greeting,2000,dataFromServer) // This will execute second

toDos() //this will execute firt