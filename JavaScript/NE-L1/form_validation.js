function chkValidation() {
  let email = document.getElementById("user_email").value;
  let password = document.getElementById("user_pwd").value;
  let isError = false;

  const pattern = /\S+@\S+\.\S+/; // abc@yahoo.com
  
  if (email === "") {
    document.getElementById("email_err").innerHTML = "Please enter email!";
    document.getElementById("email_err").style.color = "red";
    document.getElementById("user_email").style.border = "2px solid red";
    isError = true;
  } else if (!pattern.test(email)) {
    document.getElementById("email_err").innerHTML =
      "Entered Email address is not valid!";
    document.getElementById("email_err").style.color = "red";
    document.getElementById("user_email").style.border = "2px solid red";
    isError = true;
  } else {
    document.getElementById("email_err").innerHTML = "";
    document.getElementById("user_email").style.border = "1px solid #000";
    isError = false;
  }

  if (password === "") {
    document.getElementById("pwd_err").innerHTML = "Please enter password!";
    document.getElementById("pwd_err").style.color = "red";
    document.getElementById("user_pwd").style.border = "2px solid red";
    isError = true;
  } else {
    document.getElementById("pwd_err").innerHTML = "";
    document.getElementById("user_pwd").style.border = "1px solid #000";
    isError = false;
  }

  if (isError === true) {
    document.getElementById("global_err").style.display = "block";
    document.getElementById("global_err").innerHTML =
      "<strong>Error in form, please fill correct data!</strong>";
    return false;
  } else {
    document.getElementById("global_err").style.display = "none";
    document.getElementById("global_err").innerHTML ="";
    return true;
  }
}
