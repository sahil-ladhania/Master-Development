/*
1. setTimeout
Explanation :-
* setTimeout ek function hai jo ek function ya kisi code ko nirdharit samay ke liye rokta hai.
* Iska istemal tab hota hai jab aap kisi code ko thoda sa der ke liye rokna chahte hain.
* Syntax : setTimeout(function, delay);
* Note :
    function woh code hai jo aap execute karna chahte hain, aur delay woh samay hai jiska intezaar karna hai (milliseconds mein).

2. setInterval
Explanation :-
* setInterval ek function hai jo ek function ya kisi code ko nirdharit samay ke ant tak baar-baar chalata hai.
* Iska istemal tab hota hai jab aap kisi code ko regular intervals mein chalana chahte hain.
* Syntax : setInterval(function, interval);
* Note :
    function woh code hai jo aap baar-baar chalana chahte hain, aur interval woh samay hai jiske antaral mein yeh chalta hai (milliseconds mein).

3. clearInterval
Explanation :-
* clearInterval ek function hai jo setInterval dwara shuru kiye gaye interval ko rokta hai.
* Iska istemal tab hota hai jab aap ek running interval ko rukwana chahte hain.
* Syntax : clearInterval(intervalId);
* Note :
    intervalId woh ID hai jo setInterval ne diya hai.

4. Closure
Explanation :-
* Ek function ke andar doosre function ko define karne ka tareeka hai.
* Closure ka use karke, hum ek function ke andar ek naya scope bana sakte hain jo us function ke variables ko access kar sakta hai, lekin dusre functions se alag hota hai.

*/

// Example For setTimeout
setTimeout(() => {
    console.log("2000 milliseconds ke baad delayed execution");
}, 2000)

// Example For setInterval and clearInterval
let counter = 0;
const intervalId = setInterval(() => {
    console.log("Interval:", counter++);
    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared after 5 iterations");
    }
}, 1000);

// Syntax of Closure
function outerFunction(outerVariable) {
    // Outer function ke andar inner function define karte hain
    function innerFunction(innerVariable) {
        // Inner function ke andar outer function ke variables ko access karte hain
        console.log(outerVariable + innerVariable);
    }
    // Inner function ko return karte hain
    return innerFunction;
}
// Outer function ko call karte hain aur uska return value (inner function) ko ek variable mein store karte hain
const closureFunction = outerFunction(10);
// Closure function ko call karte hain
closureFunction(5);
