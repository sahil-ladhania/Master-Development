/*

1. What is Callback Function ?
Answer :-
* Callback function woh function hai jo doosre function ko
argument ke roop mein diya jata hai.
* Callback function ka basic concept yahi hai ki tu ek function ko dusre function mein argument ke taur par de raha hai, aur jab pehla function apna kaam khatam karega, toh woh dusre function ko call karega.

2. Why it is used ?
Answer :-
* Iska use aksar events ko handle karne, asynchronous
operations ko control karne, ya code ko modular banane ke
liye hota hai.

3. How it is used ?
Answer :-
Iska syntax ek function ko define karke, aur phir usko kisi
aur function mein argument ke roop mein pass karke hota hai.


4. Can you call one function inside another function ?
Answer :-
* Yes , that is only called callback function.

*/

// Syntax of Callback Function
function kuchAsyncKaro(callback) {
    // Kuch asynchronous kaam karna
    // ...

    // Callback function tab execute hoti hai jab kaam pura hota hai
    callback();
}

// Callback Usage
kuchAsyncKaro(function() {

    console.log("Callback execute hua!");
});

// Callback Example
console.log("Shuruat");
setTimeout(() => {
    console.log("Callback ke andar 2000ms ke baad");
    console.log("Callback ke andar 2000ms ke baad");
    },5000);
console.log("Ant");