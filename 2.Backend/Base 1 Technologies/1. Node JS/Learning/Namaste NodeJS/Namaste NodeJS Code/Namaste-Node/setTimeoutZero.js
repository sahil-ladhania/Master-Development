console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(() => {
    console.log("Call me Right Now");
}, 0); // 0 sec after the call stack of main thread is empty.

setTimeout(() => {
    console.log("Call me after 3 seconds");
}, 3000);

function multiplyFn(x , y) {
    const result = a*b;
    return result;
}

var c = multiplyFn(a , b);

console.log(c);