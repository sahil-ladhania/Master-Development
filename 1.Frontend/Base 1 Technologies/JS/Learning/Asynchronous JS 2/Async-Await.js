/*

1. What is async ?
Answer :-
* Async ka use ek function ko asynchronous banane ke liye hota hai.
* Ye function ko allow karta hai ki woh asynchronously operate kare, bina code ki execution
ko block kare.

2. What is await ?
Answer :-
* Await, ek async function ke ander use hota hai taki woh promise settle ho jane ke baad
code execution ko continue kare.

3. Why it is used ?
Answer :-
* Async-Await ka use Promises se related code ko elegant taur par handle karne ke liye hota
hai.
* Ye syntax ko simplify karta hai aur code ko read karne mein madad karta hai.

4. When Promises was there , Why did async await was Introduced ?
Answer :-
* Async-Await ko introduce karne ka motive Promises ke callback hell problem ko address
karna tha.
* Ye asynchronous code ki readability ko badhaata hai, jisse woh synchronous code ki
tarah dikhe.

5. What is try Block ?
Answer :-
* try block ka use hota hai code ke us hisse mein jahan par exceptions ya errors expected
hote hain.
* Jab bhi aap koi risky code likhte hain, jaise ki file reading ya network operations,
to aap usko try block mein rakh sakte hain.

6. What is catch Block ?
Answer :-
* catch block tab kaam aata hai jab koi exception ya error try block ke andar occur hota hai.
* Yeh block specify karta hai ki kaise handle karna hai exception ko.
* Isme aap error ko log kar sakte hain ya phir specific actions le sakte hain.

*/

// Syntax of async await
async function meriAsyncFunction() {
    // Yahaan code hoga
}
const result = await koiAsyncOperation();
// Example of async await
// Assume karo ki ye ek asynchronous operation hai jo promise return karta hai.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data has been fetched!");
            }, 2000);
    });
}
// Async function
async function getData() {
    try {
        console.log("Fetching data...");

        // Await ka use asynchronous operation ke result ka wait karne ke liye
        const result = await fetchData();

        // Ye line execute hoga jab fetchData ka promise resolve ho jata hai
        console.log(result);

        console.log("Data fetched successfully!");
    } catch (error) {
        // Error handling
        console.error("Error fetching data:", error);
    }
}
// Call Async function
getData();
/*
Note :
Is example mein fetchData ek asynchronous operation hai jo 2 seconds ke baad data fetch
karta hai. getData ek async function hai jo is asynchronous operation ka wait karega aur
uske baad result ko log karega. try-catch block ka use error handling ke liye kiya gaya
hai.
*/

// Example of try catch Block
try {
    // Risky code jo exception throw kar sakta hai
    const result = 10 / 0;  // Divide by zero, a common cause of an exception
    console.log(result);   // This line won't be executed if an exception occurs
} catch (error) {
    // Yahaan aayega agar try block mein koi exception hua
    console.error("An error occurred:", error);
} finally {
    // Ye block optional hota hai, aur hamesha execute hota hai chahe exception ho ya na ho
    console.log("Finally block: This will always be executed.");
}