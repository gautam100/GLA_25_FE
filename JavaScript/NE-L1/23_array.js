function Func1(){
    let arr = [10,20,30,"Kaif",true]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
    console.log("-----------")
    for(let temp of arr){
        console.log(temp)
    }
}

Func1()