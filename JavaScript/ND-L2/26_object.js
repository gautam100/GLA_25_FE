let func1 = () => {
  let car = {
    color: "red",
    engine: "1200 CC",
    make: "Maruti",
    model: "Swift",
  };

  for (let temp in car) {
    console.log("Key is", temp, " value is", car[temp]);
  }
};
func1();

console.log("----------");
let func2 = () => {
    let raj = {
        name: "Raj Singh",
        age:17,
        isIndian: true,
        hobby: ["Gardening","cooking"],
        course: function(){
            return 'Btech'
        },
        specialization: {a:'Full Stack', b: 'Cloud Computing', c: 'AI/ML'}
    }
    // JSON: Java Script Object Notation
    
    for(let temp in raj){
        console.log(raj[temp])
    }
    console.log(raj.course())
};
func2();
