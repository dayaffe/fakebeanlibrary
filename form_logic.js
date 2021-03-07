GetEmail = function() {
    var emailInputObj = document.getElementById('email_input');
    return emailInputObj.value;
}

GetPassword = function() {
    var passwordInputObj = document.getElementById('password_input');
    return passwordInputObj.value;
}

TestCreateAccount = function(){
    var email = GetEmail();
    var password = GetPassword();
    sessionStorage.email = email;
    sessionStorage.password = password;
    location.href = "./gotcha.html";
}

window.onload = function(){
    var createAccountButton = document.getElementById('create_account_btn');
    createAccountButton.addEventListener("click", TestCreateAccount);
}