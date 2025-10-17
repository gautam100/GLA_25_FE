function calculateTotal() { 
    //debugger;
  let eng=0,math=0, sci = 0, total=0, percentage =0, grade="";

  eng = parseInt(document.getElementById("sub1").value);
  math = parseInt(document.getElementById("sub2").value);
  sci = parseInt(document.getElementById("sub3").value);

    if(isNaN(eng)){
        eng=0;
    }
    if(isNaN(math)){
        math=0;
    }
    if(isNaN(sci)){
        sci=0;
    }
    
  
    total = eng + math + sci;
    percentage = total/300 *100

    document.getElementById("total_marks").innerHTML = "Total:"+total;
    document.getElementById("percentage").innerHTML = "Percentage:"+percentage.toFixed(2)``;

    if(percentage >=75){
        grade = "A"
    }else if(percentage<=74 && percentage>=60){
        grade ="B"
    }else if(percentage<=59 && percentage>=45){
        grade = "C"
    }else{
        grade="Fail!!"
    }
    document.getElementById("grade").innerHTML = "Grade:"+grade;


}
