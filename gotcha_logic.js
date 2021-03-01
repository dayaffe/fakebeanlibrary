GetEmail = function(){
    return sessionStorage.email;
}

GetPassword = function(){
    return sessionStorage.password;
}

CreatePasswordMods = function(password){
    var passwordMods = [];
    passwordMods.push(password + "123");
    passwordMods.push(password + password[password.length - 1]);
    passwordMods.push(password + password[password.length - 1].repeat(2));
    passwordMods.push(password + password[password.length - 1].repeat(3));
    if (password.length >= 3) {
        passwordMods.push(password + password.slice(password.length - 3));
    }
    return passwordMods;
}

window.onload=function(){
    var email = GetEmail();
    var password = GetPassword();
    var taunt1Obj = document.getElementById('taunt1');
    taunt1Obj.innerText = `How many times have you used the combination of '${email}' and '${password}?'`
    var listOfModsObj = document.getElementById('list_of_mods');
    var passwordMods = CreatePasswordMods(password)
    listOfModsObj.innerHTML = "<p>" + passwordMods.join("</p><p>") + "</p>";
}