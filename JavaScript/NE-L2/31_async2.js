function greet(data){
    console.log("Good Morning...",data.name,data.age,data.qualification)
}
function toDos(){
    console.log("ToDo List")
    console.log("Meeting with Client 1\n Coading in Project 2")
}

dataFromServer = {name:"john",age:19,qualification:"BE"}

setTimeout(greet,2000,dataFromServer)

toDos()