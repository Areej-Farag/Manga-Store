let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");



submit?.addEventListener("click", function(e){
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "" || confirmPassword.value == ""){
        alert("Please fill all the fields");
    }
    else{

        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);  

        setTimeout(function(){
            window.location.href = "login.html";
            } , 1000) 
    }  
   
})



