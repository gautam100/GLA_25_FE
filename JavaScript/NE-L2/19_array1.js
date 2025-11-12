function myArray(){
    let arr1 = [10, 10.5, "Rohit", true, undefined] //Generic method or short hand method
    console.log(arr1.toString())
    //let arr2 = new Array(11,"Raj",false, 50.5, "This is array") //Constructor method
    //console.log(arr1[0]) //10
    //console.log(arr2[0]) //11

    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i])
    }
    console.log(i) //5


    // let arrayStr = ''
    // for(let temp of arr1){
    //     arrayStr = arrayStr+temp+" "
    // }
    // console.log(arrayStr)


}

myArray()