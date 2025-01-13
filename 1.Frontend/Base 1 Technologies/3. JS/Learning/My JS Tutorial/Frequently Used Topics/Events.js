console.log("HI From Events.js File :");

// Mouse Events -> click , dblclick , mouseover , mouseout
const button = document.querySelector('.button');
button.addEventListener('click' ,(eventObj) => {
    console.log("Button Clicked !!!");
    console.log(eventObj);
})
button.addEventListener('dblclick' ,(eventObj) => {
    console.log("Button Double Clicked !!!");
    console.log(eventObj);
})
button.addEventListener('mouseover' ,(eventObj) => {
    console.log("Mouseover From Button !!!");
    console.log(eventObj);
})
button.addEventListener('mouseout' ,(eventObj) => {
    console.log("Mouseout From Button !!!");
    console.log(eventObj);
})

// Keyboard Events -> keyup , keydown
const input = document.querySelector('.input');
input.addEventListener('keyup' , (eventObj) => {
    console.log("Keyup : " , eventObj.key);
    console.log(eventObj);
})
input.addEventListener('keydown' , (eventObj) => {
    console.log("Keydown : " , eventObj.key);
    console.log(eventObj);
})

// Form Events -> submit , change , focus , blur
const form = document.querySelector('#myForm');
const nameFeild = document.querySelector('#name');
const emailFeild = document.querySelector('#email');
const passwordFeild = document.querySelector('#password');
form.addEventListener('submit' , (eventObj) => {
    eventObj.preventDefault();
    console.log("Form Submitted...");
    console.log('Form Data:', new FormData(form));
})
nameFeild.addEventListener('change' , (eventObj) => {
    console.log("Name Feild Changed : " , eventObj.target.value);
    console.log(eventObj);
})
emailFeild.addEventListener('change' , (eventObj) => {
    console.log("Email Feild Changes : " , eventObj.target.value);
    console.log(eventObj);
})
passwordFeild.addEventListener('change' , (eventObj) => {
    console.log("Password Feild Changes : " , eventObj.target.value);
    console.log(eventObj);
})
nameFeild.addEventListener('focus' , (eventObj) => {
    console.log("Name Feild Focus...");
    console.log(eventObj);
})
emailFeild.addEventListener('focus' , (eventObj) => {
    console.log("Email Feild Focus...");
    console.log(eventObj);
})
passwordFeild.addEventListener('focus' , (eventObj) => {
    console.log("Password Feild Focus...");
    console.log(eventObj);
})
nameFeild.addEventListener('blur' , (eventObj) => {
    console.log("Name Feild Blurred...");
    console.log(eventObj);
})
emailFeild.addEventListener('blur' , (eventObj) => {
    console.log("Email Feild Blurred...");
    console.log(eventObj);
})
passwordFeild.addEventListener('blur' , (eventObj) => {
    console.log("Password Feild Blurred...");
    console.log(eventObj);
})

// Document / Window Events -> load , resize , scroll
window.addEventListener('load' , (eventObj) => {
    console.log("Page Loaded...");
    console.log(eventObj);
})
window.addEventListener('resize' , (eventObj) => {
    console.log("Page Resized...");
    console.log(eventObj);
})
window.addEventListener('scroll' , (eventObj) => {
    console.log("Page Scrolled...");
    console.log(eventObj);
})
