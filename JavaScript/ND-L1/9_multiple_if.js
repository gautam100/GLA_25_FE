function generateReportCard(){
    //debugger;
    let eng = parseInt(document.getElementById("sub1").value)||0
    let math = parseInt(document.getElementById("sub2").value)||0
    let sci = parseInt(document.getElementById("sub3").value)||0

    let total = 0, percentage=0, grade=undefined;
    /*if(isNaN(eng)){
        eng = 0
    }
    if(isNaN(math)){
        math = 0
    }
    if(isNaN(sci)){
        sci = 0
    }*/
    total = eng + math + sci
    percentage = total/300*100
    document.getElementById("total").innerHTML = "<b>Totak Marks:"+total+"</b>" 
    document.getElementById("percentage").innerHTML = "<b>Percentage:"+percentage.toFixed(2)+"</b>" 
    if(percentage>=75){
        grade= "A"
    }else if(percentage>=60 && percentage<75){
        grade= "B"
    }else if(percentage>=45 && percentage<60){
        grade = "C"
    }else{
        grade= "Fail"
    }
    document.getElementById("grade").innerHTML = "<b>Grade:"+grade+"</b>" 


}