function validate_name() {
    let element = document.getElementById("name");
    let elementError = document.getElementById("nameerror");
    let name = element.value;
    console.log(name);

    let regName = /^[a-zA-Z]+$/;

    if (!name) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Ju lutem vendosni emrin!";
        return false;

    } else if (!regName.test(name)) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Emri duhet te permbaje vetem shkronja!";
        return false;

    } else if (name.length < 3) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Emri duhet te permbaje te pakten 3 shkronja!";
        return false;

    } else {
        element.style.borderColor = "green";
        elementError.innerHTML = "";
        return true;

    }
}

function validate_subject() {
    let element = document.getElementById("subject");
    let elementError = document.getElementById("subjecterror");
    let name = element.value;
    console.log(name);

    let regName = /^[a-zA-Z]+$/;

    if (!name) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Ju lutem vendosni subjektin!";
        return false;

    } else if (!regName.test(name)) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Subjekti duhet te permbaje vetem shkronja!";
        return false;

    } else if (name.length < 3) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Subjekti duhet te permbaje te pakten 3 shkronja!";
        return false;

    } else {
        element.style.borderColor = "green";
        elementError.innerHTML = "";
        return true;
    }
}

function validate_email() {
    let element = document.getElementById("email");
    let elementError = document.getElementById("emailerror");
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

function validate_message() {
    let element = document.getElementById("floatingTextarea2");
    let elementError = document.getElementById("messageerror");
    let message = element.value;
    console.log(message);

    if (!message) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Ju lutem vendosni subjektin!";
        return false;
    } else if (message.length < 3) {
        element.style.borderColor = "red";
        elementError.innerHTML = "Subjekti duhet te permbaje te pakten 3 shkronja!";
        return false;
    } else {
        element.style.borderColor = "green";
        elementError.innerHTML = "";
        return true;
    }
}



function validateForm() {
    let results;
    let r1 = validate_name();
    let r2 = validate_subject();
    let r3 = validate_email();
    let r4 = validate_message();
    results = r1 && r2 && r3 && r4;
    if (results) {
        swal("A e dini se...", "Ne marrim parasysh cdo kritike apo ide per permiresim. Prandaj faleminderit per kohen per te plotesuar kete form!", "success");
    }
}

document.getElementById("btn").addEventListener("click", validateForm, false);


