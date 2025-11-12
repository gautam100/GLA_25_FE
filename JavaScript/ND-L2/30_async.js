function greet(data){
    console.log("Good morning!",data.name)
}
function toDos(){
    console.log("My Todo List--")
    console.log("Meeting with Client 1 \n Coading in Project 2")
}

let dataFromServer = {name:"john"} //this is json
setTimeout(greet,2000, dataFromServer)
toDos()