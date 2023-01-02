function passwordConfirmation() {
    const password = document.getElementById('password');
    const passwordConfirmation = document.getElementById('confirmPassword');

    console.log(password.value)

    if (password.value == "") {
        password.setCustomValidity("Please enter a password!");
    }

    else if (!(password.value == passwordConfirmation.value)) {
        password.setCustomValidity("Passwords do not match.")
    }
};

const submitButton = document.getElementById('createAccount');
submitButton.addEventListener('click', passwordConfirmation)