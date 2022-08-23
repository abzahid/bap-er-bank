// Login form validation using js

document.getElementById ('login-btn').addEventListener('click',function (){
    const emailField = document.getElementById ('user-email');
    const email = emailField.value ;
    const passwordField = document.getElementById ('user-pass');
    const pass = passwordField.value ;
  if (email == "abdullahalzahidbd@gmail.com" && pass == 123456){
    location.href = "bank.html"
  }
  else {
   alert ("your login credential is wrong.Try again")
  }
   
})