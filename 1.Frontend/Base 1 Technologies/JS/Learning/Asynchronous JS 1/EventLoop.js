/*
-----Event Loop-----

1. What is a Call Stack ?
Answer :-
* Call Stack ek virtual stack hai jisme functions ke calls store hote hain.
Jab koi function call hota hai, woh stack mein add hota hai. Jab function
complete hota hai, woh stack se remove hota hai.

2. What are Web APIs ?
Answer :-
* Web APIs provide functionality outside the JavaScript runtime environment.
Examples include DOM, AJAX, setTimeout. They run in the background and
communicate with the browser.

3. What is a Callback Queue ?
Answer :-
* Callback Queue ek line hai jisme events aur messages wait karte hain.
Yeh queue empty hone par messages Call Stack mein move hote hain.

4. How JS engine executes the code using Call Stack ?
Answer :-
* JS Engine ek code ko execute karne wala part hai. Jab code execute hota hai,
functions call stack mein aate hain, aur jab complete hote hain, stack se
remove ho jaate hain.

5. What is the main job of a Call Stack ?
Answer :-
* Call Stack ka main kaam functions ko track karna hai. Jab ek function khatam
ho jata hai, stack se hata diya jata hai.

6. How does JS performs async tasks ?
Answer :-
* JavaScript asynchronous tasks ko handle karne ke liye Web APIs ka use karta hai.
Callbacks aur Promises ismein madad karte hain.

7. What happens behind the scenes in Browser ?
Answer :-
* Browser ke andar, JS Engine, Web APIs, aur Event Loop saath mein work karte hain.
Event Loop continuously check karta hai ki Call Stack empty hai ya nahi.

8. How does setTimeout work behind the scenes in a Browser ?
Answer :-
* setTimeout Web APIs ka use karta hai. Jab time complete hota hai, message
Callback Queue mein jaata hai aur Event Loop usko Call Stack mein daal deta hai.

9. How does Event Listeners Work in JS ?
Answer :-
* Event Listeners Web APIs ka use karte hain. Jab event hota hai, woh callback
function Callback Queue mein jaata hai.

10. Why do we need Event Loop ?
Answer :-
* Event Loop tab kaam aata hai jab asynchronous tasks hote hain. Woh ensure karta
hai ki tasks sahi order mein execute ho.

11. How fetch() Function works in JS ?
Answer :-
* fetch() Web APIs ka ek example hai jo network requests handle karta hai.
Yeh Promises ka use karta hai.

12. What is Micro Task in JS ?
Answer :-
* Micro Tasks chhoti tasks hote hain jo jaldi execute hone wale hote hain.
Promises ismein aata hain.

13. What is Micro Task Queue in JS ?
Answer :-
* Micro Task Queue mein chhoti tasks hote hain, jaise Promises. Yeh tasks jaldi
execute hote hain.

14. What is Starvation of Functions in Callback Queue ?
Answer :-
* Agar ek lambi process hai Callback Queue mein, toh woh Call Stack ko block
kar sakti hai. Isse function ka execution delay ho sakta hai.

15. What is Window in Web APIs ?
Answer :-
* Window Web API ek global object hai jo browser mein available hota hai.
* Ismein browser window ko represent karta hai, jismein hmari webpage load hoti hai.
* Yeh object aapko browser ke saath interaction karne mai help krta hai.
* Window object ke andar bahut se properties aur methods hote hain, jinse aap
various tasks perform kar sakte hain.
* Examples of window object :-
// Direct access
window.alert("Hello!");

// Ya seedha use karein
alert("Hello!");

* Window Web API browser environment ko represent karta hai.
* Iske through aap browser ke saath interact kar sakte hain, jaise alerts,
location change, timeouts, etc.
* Yeh ek powerful tool hai jo aapko client-side scripting mein madad karta hai.

16. What is Event Loop and what is its role of it?
Answer :-
* Event Loop ek continuous process hai jo JavaScript runtime environment mein
chalta rehta hai.
* Iska main kaam hai Call Stack ko monitor karna. Call Stack khali hone par
Event Loop action leta hai.
* Agar Call Stack mein koi function hai, toh Event Loop wait karta hai jab tak
woh complete na ho jaye.

17. What is Callback Queue and what is its role ?
Answer :-
* Callback Queue ek line hai jismein asynchronous functions ka result
(ya callbacks) wait karta hai.
* Jab koi asynchronous task complete hota hai, jaise ki setTimeout ka timer,
uska callback function Callback Queue mein chala jaata hai.
* Callback Queue kaam karta hai First In, First Out (FIFO) principle par,
yani jo pehle aaya woh pehle execute hoga.

18. How does the event loop and async JS works ?
Answer :-
* Call Stack: Yeh ek stack hota hai jismein functions ka order maintain hota hai.
Jab koi function call hota hai, woh stack mein add hota hai. Jab complete hota hai,
stack se remove hota hai.
* Web APIs: Asynchronous tasks, jaise setTimeout, Web APIs ke through run hote hain,
jo browser provide karta hai. Yeh tasks background mein chalte hain.
* Callback Queue: Asynchronous tasks ke results, jaise callbacks, Callback Queue
mein jaate hain.
* Event Loop: Yeh continuously check karta hai ki Call Stack khali hai ya nahi.
Agar khali hai, toh woh dekhta hai ki Callback Queue mein kuch hai ya nahi.
* Execution: Agar Callback Queue mein kuch hai, Event Loop usse Call Stack mein
move karta hai, jisse woh execute ho.

19. What is the difference between Callback Queue and Microtask Queue ?
Answer :-
Callback Queue :
* Asynchronous tasks ka result Callback Queue mein wait karta hai.
* Callback Queue ek FIFO (First In, First Out) structure follow karta hai.
* Examples: setTimeout, DOM events, XMLHttpRequest.
Microtask Queue :
* Chhoti asynchronous tasks ka result Microtask Queue mein wait karta hai.
* Microtask Queue bhi ek FIFO structure follow karta hai.
* Examples: Promises (.then(), .catch(), .finally()), MutationObserver.
Event Loop :
* Event Loop ek continuous process hai jo Call Stack, Callback Queue, aur
Microtask Queue ko monitor karta hai.
* Jab Call Stack empty hota hai, toh Event Loop sabse pehle Microtask Queue ko
dekhta hai.
* Agar Microtask Queue mein tasks hain, toh sabse pehla task Call Stack mein
move hota hai.
* Agar Microtask Queue khali hai, toh Event Loop Callback Queue ko check karta
hai aur waha se task ko Call Stack mein move karta hai.
Prioritization :
* Microtask Queue >>> Callback Queue

*/

// 1. Code to Check How call stack works :-
function a() {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
}
a() ;
console.log("End" );
function b() {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
}
b() ;
console.log("End" );

// 2. Code to Check How setTimeout works behind the scenes in Browsers ?
console. log ("Start");
setTimeout (function cb() {
    console. log ("Callback");
    console. log ("Callbackk");
    console. log ("Callbackkk");
    console. log ("Callbackkkk");
    console. log ("Callbackkkkk");
    }, 5000);
console.log ("End");

// 3. Code to Check How Event Listeners works behind the scenes in Browsers ?
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
        }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
    }, 5000);

console.log("Welcome to loupe.");

// 4. Code to Check How Fetch() works behind the scenes in Browsers ?
console.log("Start");

setTimeout(function cbT() {
    console.log("CB SetTimeout");
    }, 5000);

fetch("https://api.netflix.com")
  .then(function cbF() {
      console.log("CB Netflix");
  });

console.log("End");

// 5. Code to Check How Priority is given to Microtask and Callback Queue works
// behind the scenes in Browsers ?
console.log("Start");

setTimeout(function cbTimeout() {
    console.log("Callback Queue - Timeout");
    }, 0);

Promise.resolve().then(function cbMicrotask() {
    console.log("Microtask Queue - Promise");
});

console.log("End");