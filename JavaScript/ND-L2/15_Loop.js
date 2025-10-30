
// Type of functions in JS
// 1) named function
// 2)Anonymous function

let x = function(){
    let baseNum = 5
    let expNum = 2
    let res=1;
    for(let i=1;i<=expNum;i++){
        res = res*baseNum
    }
    //console.log(res)
    return res;
}
let data = x() //Here x is function expression
console.log(data)