let validation = function () {
  let isError = false;

  if (document.querySelector("#first_name").value === "") {
    document.querySelector("#first_name_err").innerHTML =
      "Please Enter First Name!";
    document.querySelector("#first_name").style.border = "2px solid red";
    isError = true;
  } else if (document.querySelector("#first_name").value.length > 50) {
    document.querySelector("#first_name_err").innerHTML =
      "Length of first name should not exceed 50 characters!";
    document.querySelector("#first_name").style.border = "2px solid red";
    isError = true;
  } else {
    document.querySelector("#first_name").style.border = "1px solid #000";
    document.querySelector("#first_name_err").innerHTML = "";
  }

  if (document.querySelector("#last_name").value === "") {
    document.querySelector("#last_name_err").innerHTML =
      "Please Enter Last Name!";
    document.querySelector("#last_name").style.border = "2px solid red";
    isError = true;
  } else {
    document.querySelector("#last_name").style.border = "1px solid #000";
    document.querySelector("#last_name_err").innerHTML = "";
  }

  // Email Validation
  const pattern = /\S+@\S+\.\S+/; // abc@yahoo.com
  if (document.querySelector("#email").value === "") {
    document.querySelector("#email_err").innerHTML =
      "Please Enter Email address!";
    document.querySelector("#email").style.border = "2px solid red";
    isError = true;
  } else if (!pattern.test(document.querySelector("#email").value)) {
    document.querySelector("#email_err").innerHTML =
      "Entered Email address is not valid!";
    document.querySelector("#email").style.border = "2px solid red";
    isError = true;
  } else {
    document.querySelector("#email").style.border = "1px solid #000";
    document.querySelector("#email_err").innerHTML = "";
  }

  let password = document.getElementById("pwd");
  if (password.value === "") {
    document.getElementById("pwd_err").innerHTML =
      "Password could not be blank!";
    password.style.border = "2px solid red";
    isError = true;
  } else if (password.value.length <= 5 || password.value.length > 16) {
    document.getElementById("pwd_err").innerHTML =
      "Length of password should be between 5 and 15";
    password.style.border = "2px solid red";
    isError = true;
  } else {
    password.style.border = "1px solid #000";
    document.getElementById("pwd_err").innerHTML = "";
  }

  let confirmPwd = document.getElementById("confirm_pwd");
  if (password.value !== confirmPwd.value) {
    document.getElementById("confirm_pwd_err").innerHTML =
      "Password and confirm password should be same!";
    password.style.border = "2px solid red";
    isError = true;
  }else{ 
    confirmPwd.style.border = "1px solid #000";
    document.getElementById("confirm_pwd_err").innerHTML = "";
  }

  if (isError === true) {
    document.getElementById("frm_submit_msg").innerHTML = "<div class='alert alert-danger'>Error in form data!</div>"
    return false;
  } else {
    document.getElementById("frm_submit_msg").innerHTML = "<div class='alert alert-success'>Form Submitted successfully</div>"
    return true;
  }
};
