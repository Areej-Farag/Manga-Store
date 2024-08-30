let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");
let logEmail = document.getElementById("email");
let logPassword = document.getElementById("password");
let logIn = document.getElementById("submit");
// logIn.value= 1;
logIn?.addEventListener("click", function(e) {
    e.preventDefault();
    if(logEmail.value.trim() === storedEmail.trim() && logPassword.value.trim() === storedPassword.trim()){
        setTimeout(function(){
            window.location.href = "index.html";
            } , 1000) 
    }
    else{
        alert("Login Failed");
    }
})