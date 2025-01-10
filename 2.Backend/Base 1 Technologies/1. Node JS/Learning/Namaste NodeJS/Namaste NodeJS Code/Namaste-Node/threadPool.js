const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password" , "salt" , 5000000 , 50 , "sha512" , (err , key) => {
    console.log("1 - pbkdf2 Done");
})

crypto.pbkdf2("password" , "salt" , 5000000 , 50 , "sha512" , (err , key) => {
    console.log("2 - pbkdf2 Done");
})

crypto.pbkdf2("password" , "salt" , 5000000 , 50 , "sha512" , (err , key) => {
    console.log("3 - pbkdf2 Done");
})

crypto.pbkdf2("password" , "salt" , 5000000 , 50 , "sha512" , (err , key) => {
    console.log("4 - pbkdf2 Done");
})

crypto.pbkdf2("password" , "salt" , 5000000 , 50 , "sha512" , (err , key) => {
    console.log("5 - pbkdf2 Done");
})

// Order of Execution is not guaranteed. Whatever thread gives the answer comes first.