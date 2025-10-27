function checkEquality(){
    var a = 5;
    var b = '5';
    console.log(typeof a); // number
    console.log(typeof b); //string
    
    if(a === b){
        console.log("Both are same")
    }else{
        console.log("Both are different")
    }
}

//checkEquality()