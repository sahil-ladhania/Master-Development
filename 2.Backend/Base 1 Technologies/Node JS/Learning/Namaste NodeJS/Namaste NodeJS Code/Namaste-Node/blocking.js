const crypto = require('crypto');

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous Function (Blocking Code)
console.log("Thread Blocked");
crypto.pbkdf2Sync("password" , "salt" , 50000000 , 50 , "sha512");
console.log("Thread Un-Blocked");

// Asynchronous Function
crypto.pbkdf2("password" , "salt" , 500000 , 50 , "sha512" , (err , key) => {
    console.log("Key is Generated");
})

function multiplyFn(x , y) {
    const result = a*b;
    return result;
}

var c = multiplyFn(a , b);

console.log(c);