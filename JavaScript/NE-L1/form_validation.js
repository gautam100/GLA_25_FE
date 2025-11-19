function chkValidation(){
    let email = document.getElementById("user_email").value
    let password = document.getElementById("user_pwd").value
    let isError = false
    // alert(email+"---"+password)
    if(email === ""){
        document.getElementById("email_err").innerHTML = "Please enter email!"
        document.getElementById("email_err").style.color = "red"
        document.getElementById("user_email").style.border = "2px solid red"
        isError = true
    }else{
        document.getElementById("email_err").innerHTML = ""
        document.getElementById("user_email").style.border = "1px solid #000"
        isError = false
    }
    if(password === ""){
        document.getElementById("pwd_err").innerHTML = "Please enter password!"
        document.getElementById("pwd_err").style.color = "red"
        document.getElementById("user_pwd").style.border = "2px solid red"
        isError = true
    }else{
        document.getElementById("pwd_err").innerHTML = ""
        document.getElementById("user_pwd").style.border = "1px solid #000"
        isError = true

    }

    if(isError === true){
        return false
    }else{
        return true
    }
}