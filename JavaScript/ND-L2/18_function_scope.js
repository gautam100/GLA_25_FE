
let Outer = function(){
    let a = 12

    let Inner = function(){
        console.log(a)
    }
    Inner()
}

Outer();
