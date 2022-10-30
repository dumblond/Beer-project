const form = document.querySelector("#contact-form");
const nameField = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subjectField = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const emailField = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const addressField = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const messageField = document.querySelector(".message");

function validateForm() {
    event.preventDefault();

    if (validateLength(nameField.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateLength(subjectField.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(emailField.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateLength(addressField.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateLength(nameField.value, 1) && validateLength(subjectField.value, 10) && validateEmail(emailField.value) && validateLength(addressField.value, 25)) {
        messageField.innerHTML = message("success", "Form submitted");
        form.reset();
        setTimeout(function () {
            messageField.innerHTML = "";
        }, 2000);
    }
}
form.addEventListener("submit", validateForm);

function validateLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}