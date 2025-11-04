let func1 = ()=>{

    let arr = ["Delhi","Noida","Banglore","Gurgaon", "Hydrabad"]
    let elem1 = document.getElementById("result1")
    let elem2 = document.getElementById("result2")

    elem1.innerHTML = arr.length
    arr.push("Mumbai") //added element in the last of array
    loop(arr,elem2)
    arr.pop() // remove last element from array
    loop(arr,elem2)

    let slicedArray = arr.slice(1,4)
    slicedArray = slicedArray.toString()
    document.getElementById("result3").innerHTML = slicedArray + " Data type:-"+typeof(slicedArray)
}//func1() ends

let loop = function(arr,elem2){

    elem2.innerHTML = ""
    for(let temp of arr){
        elem2.innerHTML += temp+ " "
    }

}
//func1()
