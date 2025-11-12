function Abc(){

    let arr1 = [10,12,15,5,100]

    let arr2

    //arr2 = arr1 //Shallow copy
    arr2 = [...arr1] //deep copy using ... i.e. Rest operator

    console.log(arr1)
    console.log(arr2)

    arr2[4] = 500

    console.log("--------------")
    console.log(arr1) //10 12 15 5 100
    console.log(arr2) //10 12 15 5 500

}

Abc()