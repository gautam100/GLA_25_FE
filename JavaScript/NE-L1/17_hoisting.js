anyRandomFunc1()

//Named function -- Hoisting 
function anyRandomFunc1(){
    console.log("Inside anyRandomFunc1")
}



anyRandomFunc2()
// Anynomous function -- Do not Hoist
let anyRandomFunc2 = function(){
    console.log("I am inside anyRandomFunc2")
}

