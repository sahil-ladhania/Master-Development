// Asynchronous Code
const fs = require('fs');
const https = require('https');

var a = 1078698;
var b = 20986;

fs.readFileSync("./gossip.txt", "utf8");
console.log("Un-Blocked")

https.get("https://jsonplaceholder.typicode.com/todos/1" , (res) => {
    console.log("Fetched Data Successfully");
})

setTimeout(() => {
    console.log("setTimeout called after 5 sec");
}, 5000);

fs.readFile("./gossip.txt" , "utf8" , (data) => {
    console.log("File Data : " , data);
})

function multiplyFn(x , y) {
    const result = a*b;
    return result;
}

var c = multiplyFn(a , b);
console.log(c);
