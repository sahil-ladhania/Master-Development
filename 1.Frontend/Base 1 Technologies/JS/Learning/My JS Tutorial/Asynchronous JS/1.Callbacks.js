console.log("From Callbacks.js File :");
/*

1. What is Callback Function ?
Explanation :-
* Callback function woh function hai jo doosre function ko argument ke roop mein diya jata hai.
* Callback function ka basic concept yahi hai ki tu ek function ko dusre function mein argument ke taur par de raha hai, aur "Jab pehla function apna kaam khatam karega, toh woh dusre function ko call karega".

2. Why it is used ?
Explanation :-
* Iska use aksar "Events ko handle karne", "Asynchronous operations ko control karne", ya code ko modular banane ke liye hota hai.

3. How it is used ?
Explanation :-
* Iska syntax ek function ko define karke, aur phir usko kisiaur function mein argument ke roop mein pass karke hota hai.

4. Can you call one function inside another function ?
Explanation :-
* Yes , that is only called Callback Function.

*/

// Syntax of Callback Function
// function kuchAsyncKaro(callback) {
//     // Kuch asynchronous kaam karna...
//     // Callback function tab execute hota hai jab kaam pura hota hai.
//     callback();
// }

// Callback Usage
// kuchAsyncKaro(function() {
//     console.log("Callback execute hua!");
// });

// Callback Example
// console.log("Shuruaat");
// setTimeout(() => {
//     console.log("Callback ke andar 2000ms ke baad");
//     console.log("Callback ke andar 2000ms ke baad");
//     },5000);
// console.log("Ant");

// Exploring Callbacks
// 1. Create a simple function that accepts a callback and calls it.
function greet(name , callback) {
    callback(name);
}
function printGreeting(name) {
    console.log(`Hello , ${name}!`);
}
greet("Sahil Ladhania" , printGreeting);

// 2. Use callbacks to perform simple operations after a delay.
// 3. Learn how to handle errors using callbacks.
// 4. Experience “Callback Hell” and understand its drawbacks.
// 5. Refactor the nested callbacks to improve readability.
// 6. Understand the limitations of callbacks and get a brief introduction to Promises.
