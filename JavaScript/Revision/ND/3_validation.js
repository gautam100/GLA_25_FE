let validation = function(){
    if(document.querySelector("#first_name").value === ""){
        //alert("Enter First name!")
        document.querySelector("#first_name_err").innerHTML = "Please Enter First Name!"
        document.querySelector("#first_name").style.border = "2px solid red"
        return false;
    }
    else if(document.querySelector("#last_name").value === ""){
        alert("Enter Last name!")
        return false;
    }
}