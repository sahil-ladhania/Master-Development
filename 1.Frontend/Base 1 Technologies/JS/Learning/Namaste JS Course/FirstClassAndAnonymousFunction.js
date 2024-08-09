console.log("From FirstClassAndAnonymousFunction.js File !!!");

// Hoisting
a();
b();

// Function Statement
function a(){
    console.log("This way of creating Function is called Function Statement.");
}

// Function Expression
var b = function (){
    console.log("This way of creating Function is called Function Expression.")
}

// Difference Between Function Statement and Function Expression
    // The majour difference is Hoisting.

// Anonymous Function
// Used in a place where function are used as values.
// function (){

// }
// Function Statement
function a(){
    console.log("This way of creating Function is called Function Statement.");
}

// Function Expression
var b = function (){
    console.log("This way of creating Function is called Function Expression.")
}

// Named Function Expression
var c = function xyz(){
    console.log("This way of creating Function is called Function Expression.")
}

// Difference Between Parameters and Arguments

// First Class Function / First Class Citizens
    // The ability to be used function as values is called First Class Function.

// Arrow Function
