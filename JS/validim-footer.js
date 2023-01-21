function validateFooterEmail() {
    let element = document.getElementById("form-email");
    let elementError = document.getElementById("emailerror2");
    let email = element.value;

    let regEmail = /^[A-Za-z0-9+_.-]+@(.+)+\.com$/;

    if (email === '' || email == null) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Ju lutem vendosni emailin!";
        return false;
    } else if (!regEmail.test(email)) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Emaili qe ju vendoset nuk eshte ne formatin e duhur! \n Formati i kerkuar: username@domainname.com";
        return false;
    } else {
        elementError.innerHTML = "";
        element.style.borderColor = "green";
        return true;
    }
}
document.getElementById("form-btn").addEventListener("click", validateFooterEmail, false);
