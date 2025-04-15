const classificationInput = document.getElementById('classificationInput');
const nameInput = document.getElementById('nameInput');
const nameLabel = document.getElementById('nameLabel');

const passwordInput = document.getElementById('passwordInput');
const passwordConfirmInput = document.getElementById('passwordConfirmInput');

//! Add on change event listener to the classification input
classificationInput.addEventListener('change', () => {
    const classificationValue = classificationInput.value;

    if (classificationValue == 'Band') {
        nameLabel.innerText = 'Band Name';
        nameInput.placeholder = 'Enter band name';
    } else if (classificationValue == 'Artist') {
        nameLabel.innerText = 'Artist Name';
        nameInput.placeholder = 'Enter artist name';
    } else {
        nameLabel.innerText = 'Venue Name';
        nameInput.placeholder = 'Enter Venue name';
    }
});

//! Add on change event listener to the password input and confirm password input

const validatePasswords = () => {
    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters long');
        passwordConfirmInput.value = '';
        passwordInput.value = '';
        passwordConfirmInput.focus();
    } else if (passwordInput.value !== passwordConfirmInput.value && passwordConfirmInput.value.length > 0) {
        alert('Passwords do not match');
        passwordConfirmInput.value = '';
        passwordConfirmInput.focus();
    }
};

passwordInput.addEventListener('change', validatePasswords);
passwordConfirmInput.addEventListener('change', validatePasswords);