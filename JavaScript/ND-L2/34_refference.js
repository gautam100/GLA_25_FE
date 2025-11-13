function Abc(){
    let arr1 = [10,20,15,50,100]
    //let arr2 = arr1 // Shallow copy
    let arr2 = [...arr1]//Deep copy (... is known as rest operator)
    
    console.log(arr1) //10 20 15 50 100
    console.log(arr2) //10 20 15 50 100

    arr2[4] = 500

    console.log(arr1) //10 20 15 50 500
    console.log(arr2) //10 20 15 50 500


}

Abc()