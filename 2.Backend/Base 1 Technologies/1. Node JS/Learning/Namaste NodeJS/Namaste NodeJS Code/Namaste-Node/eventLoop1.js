const fs = require('fs');
const a = 1000;

setImmediate(() => {
    console.log("setImmediate");
})

fs.readFile("./gossip.txt" , "utf8" , (data) => {
    console.log("File Reading Done");
})

setTimeout(() => {
    console.log("Timer Expired");
}, 0);

function printA() {
    console.log("a =" ,  a);
}
printA();

console.log("Last Line");