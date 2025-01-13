console.log("From script.js File !!!");
// Access the Buttons and Input Box in DOM
const inputBox = document.querySelector('.password-input');
const generatePasswordButton = document.querySelector('.generate-password');
const copyPasswordButton = document.querySelector('.copy-password');

// Define Password Generator Function
function generatePassword() {
    inputBox.style.color = 'black';
    const lengthOfPassword = 10;
    const numbers = '0123456789';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*';
    const PasswordString = numbers + lowerCaseLetters + upperCaseLetters + specialCharacters;
    let password = '';
    for (let i = 0; i < lengthOfPassword; i++) {
        const randomIndex = Math.floor(Math.random() * PasswordString.length);
        password = password + PasswordString[randomIndex];
    }
    inputBox.value = password;
}
// Define Copy Password to Clipboard Function
function copyPassword() {
    const password = inputBox.value;
    inputBox.style.color = 'red';
    navigator.clipboard.writeText(password)
        .then(() => {
            console.log("Password Copied to Clipboard !!!");
        })
        .catch((error) => {
            console.log("Failed to Copy Password !!!" , error);
        })
}
// Adding Event Listeners to Both Buttons
generatePasswordButton.addEventListener('click' , generatePassword);
copyPasswordButton.addEventListener('click' , copyPassword);
