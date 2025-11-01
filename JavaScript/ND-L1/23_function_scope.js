let Outer = function(){

    let a = 10;
    Inner()
    function Inner(){
        console.log(a);
    }    

}
Outer()
