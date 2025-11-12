function Abc(){
    let arr1 = [12,10,50,30,101]
    let arr2

    //arr2 = arr1 //shallow copy
    arr2 = [...arr1] //Deep copy using rest operator

    arr2[4] = 500+1;

    console.log(arr1) // 12 10 50 30 500
    console.log(arr2) // 12 10 50 30 500


}

Abc()