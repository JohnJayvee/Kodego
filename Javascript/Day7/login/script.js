const loginForm = document.querySelector("#loginForm");
const userName = document.querySelector("#uname");
const password = document.querySelector("#password");
const submitMsg = document.querySelector("#submitMsg");

function isValidInput(input){
    return input && input.value && input.value.trim() !="";
}


function isPasswordValid(loginPassword) {
    const dbPassword = "try";

    return loginPassword === dbPassword;
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // if (userName.value == "admin" && password.value == "123") {
    //     submitMsg.innerHTML = "Login Successful";
    // } else {
    //     submitMsg.innerHTML = "Login Failed";
    // }

    if (isValidInput(userName) && isValidInput(password) && isPasswordValid(password.value)) {
        loginForm.submit();
        submitMsg.classList.remove("error");
        submitMsg.innerHTML = "";
        loginForm.submit();
        alert("Login Successful");

        alert("Nice Pumasok");
    } else {
        submitMsg.innerHTML = "Login Failed";
        submitMsg.classList.add("error");
    }
});