/*

-----Introduction to NodeJS-----

1. What is NodeJS ?
Explanation :-
* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* Maintained by the OpenJS Foundation.
* Node.js allows JavaScript to be executed outside of a web browser.
* This means that while JavaScript is traditionally associated with the web and browsers, Node.js extends its reach, allowing you to run JavaScript code on servers, desktops, and even embedded systems.
* This is why Node.js is often described with the phrase "Run JavaScript Everywhere."
* Node.js features an event-driven architecture and supports asynchronous I/O (non-blocking I/O).

2. Why use NodeJS ?
Explanation :-
* Because of few Reasons :
    Non-Blocking, Asynchronous I/O -
        Node.js ek event-driven architecture ko follow karta hai jo non-blocking, asynchronous I/O operations support karta hai.
        Iska matlab hai ki jab Node.js kisi I/O operation (like reading a file) ko execute karta hai, toh woh operation complete hone ka wait nahi karta.
        Instead, woh ek callback function ko register karta hai aur next operations ko execute karta hai.
        Ex -
            Agar aapko ek file read karni hai aur us file ke contents ko process karna hai, toh Node.js file reading ko asynchronously handle karega. Jab file read ho jayegi, tab callback function execute hoga, jo process karna hai woh kar sakte hain.
    Single Programming Language  -
        Node.js mein aap server-side logic aur client-side code dono ko JavaScript mein likh sakte hain.
        Isse development process simpler aur more consistent hoti hai, kyunki aapko alag-alag programming languages seekhni nahi padti.
        Ex -
            Aap frontend (React) aur backend (Express.js) dono ko JavaScript mein likh sakte hain, jo ki code maintain karna aur debug karna asaan banaata hai.
    High Performance -
        Node.js ka underlying runtime, V8 engine, JavaScript code ko native machine code mein compile karta hai, jo performance ko enhance karta hai.
        Plus, asynchronous nature bhi performance ko boost karta hai kyunki I/O tasks parallelly handle hote hain.
        Ex -
            Ek chat application jahan multiple users simultaneously messages send kar rahe hain, Node.js efficiently handle kar sakta hai due to its non-blocking nature.
    Scalable -
        Node.js microservices architecture ko support karta hai, jisme aap multiple small services ko independently develop aur scale kar sakte hain.
        Isse aap large applications ko easily manage kar sakte hain.
        Ex -
            Ek e-commerce application jahan different services (like payment, user management, product catalog) ko independently scale kar sakte hain.
    Large Ecosystem -
        Node.js ka npm (Node Package Manager) ek vast collection of packages aur libraries provide karta hai jo aapke development needs ko fulfill kar sakte hain.
        Aap easily third-party libraries aur tools ko integrate kar sakte hain.
        Ex -
            Express.js (web framework), mongoose (MongoDB ORM), aur lodash (utility library) jaise popular libraries npm ke through install kiye ja sakte hain.
    Real-Time Applications -
        Node.js real-time applications (like chat apps, live streaming) ke liye perfect hai due to its event-driven architecture.
        Aap real-time data easily handle kar sakte hain.
        Ex -
            Ek live chat application jahan users messages instantaneously dekh sakte hain.

3. What is the history of NodeJS ?
Explanation :-
* Created by Ryan Dahl in 2009.
* To run the JS, you always need an JS engine.
* Everywhere you write JS code, there is an JS engine, that executes the code.
* Ryan started with the Spider-Monkey Js Engine, which is found on Firefox, but in two days he tried using v8 and never looked back.
* Earlier, Ryan was working independently, but there was a company named Joyent, and this company was working on something similar to NodeJS. and they hire Ryan to work under us, we will fund your project, big contribution to Joyent Company.
* The earlier name of Node.js was Web.js, but Ryan Dahl later renamed it to Node.js because it was intended to be used for more than just web servers.
* Apache HTTP Server was a blocking server, so Ryan wanted to create a non- blocking server, which is why Node.js is a non-blocking I/O.The advantage of a non-blocking server is that it can handle multiple requests with a smaller number of threads.
* In 2010, NPM (Node Package Manager) was introduced.
* NPM is a package manager for Node.js, and it played a critical role in the success of Node.js.
* Without NPM, Node.js might not have become as successful as it is today.
* Initially, Node.js was built only for macOS and Linux, but in 2011, it gained support for Microsoft Windows as well.
* In 2012, Isaac Z. Schlueter began maintaining Node.js, he is also the creator of NPM.
* In 2014, a developer named Fedor created a fork of Node.js called io.js, which led to controversy within the company.
* As a result, 3 to 4 developers began maintaining the io.js branch.
* In September 2015, Node.js and io.js were merged, and the combined project was named the Node.js Foundation.

-----JS on Server-----

1. What is a server ?
Explanation :-
* A server is a software or hardware system that provides services or resources to other programs or devices, typically over a network.
* A server is essentially a remote computer.
* You can think of it as a computer whose CPU works remotely.
* Servers can be accessed over a network to provide resources and services to other computer programs.
* A server is a computer or system that provides data, services, resources, or programs to other computers, known as clients, over a network.
* Behind the Scenes -
    When a computer needs to communicate with a server, it sends a request to the server using its IP address.
    Initially, JavaScript could only be executed within web browsers, limiting its use to client-side tasks.
    However, with the introduction of Node.js, JavaScript can now also be executed on servers, allowing developers to use the same language for both client-side and server-side programming.

2. What is IP address ?
Explanation :-
* An IP address, or Internet Protocol address, is a unique number that identifies every device connected to the internet.

3. What is v8 ?
Explanation :-
* V8 is a JavaScript engine developed by Google that executes JavaScript code in Node.js and Chrome.
* The V8 JavaScript engine is written in C++.
* V8 can be embedded into any C++ program, which is a crucial feature.
* The process works as follows -
    JavaScript code is executed by V8 (written in C++, which then compiles it down to machine code that the computer can execute.

4. Can we say that NodeJS is a C++ application with v8 embedded into it ?
Explanation :-
* ECMAScript is a standard for scripting languages, including JavaScript, JScript, and ActionScript.
* It is best known as the standard that defines JavaScript.
* ECMAScript standards are followed by JavaScript engines like V8, SpiderMonkey, Chakra, and others to ensure consistent behavior across different environments.
* so , v8 engines has to follow this ECMA standards.
* And Node.js has v8 engines, but Node.js also has some superpowers, such as api calls on servers, which make it more powerful than v8 engines alone, which cannot do database connections, api calls, etc. Because of ECMA standards.
* And this is known as the JS runtime.
* V8 is C++ code.
* Ever wonder how your JavaScript code comes to life -
    We write JS, and then the V8 engine translates it into machine and assembly code—also known as low- level code—so the machine can understand it.
    It's amazing how our high-level scripts transform into the instructions that power our apps.
* Low-level code refers to programming languages or code that is closer to machine language and hardware.
* It provides little abstraction from the computer's architecture and allows for fine-grained control over system resources.
* Here are some key points about low-level code :
    Machine Language -
        The most basic form of low-level code, consisting of binary 0s and 1s) instructions that the computer's CPU can directly execute.
    Assembly Language -
        A step above machine language, assembly language uses symbolic representations (mnemonics) for operations and memory addresses, making it somewhat easier for humans to read and write.
        Each assembly instruction corresponds to a specific machine language instruction.

-----Writting Some Code-----

1. What is REPL in NodeJS ?
Explanation :-
* REPL (Read-Eval-Print Loop) -
    Interactive shell that evaluates JavaScript expressions, allowing quick testing and debugging.
    Ye ek interactive shell hai jo Node.js ke saath aata hai.
    REPL ka use karke tum Node.js commands ko directly execute kar sakte ho bina kisi file ko likhe.
* REPL ka kaam kaise hota hai -
    •	Read - Tum jo input karte ho (code ya statement), REPL usse read karta hai.
	•	Eval - Us input ko evaluate karta hai, yaani execute karta hai.
	•	Print - Execution ka result tumhe screen pe print karke dikhata hai.
	•	Loop - Ye process loop mein chalta rehta hai jab tak tum exit nahi karte.
* How to enter REPL - node
* REPL runs in a Node runtime environment.
* NodeJS is a JS runtime environment, and behind the scenes, it is using the v8 engine.
* Its similar to a browser console.

2. What is Global Objects in NodeJS ?
Explanation :-
* Node.js mein Global Objects wo objects hote hain jo har jagah, kisi bhi file ya module mein directly accessible hote hain, bina unhe import kiye.
* Ye objects Node.js ke environment ka ek part hote hain aur system-level functionality provide karte hain.
* Global objects are built-in objects available globally in Node.js, such as global, process, __dirname, and __filename.
* Global objects ka use karne ke liye tumhe koi require() ya import karne ki zarurat nahi hoti.
* Ye automatically available hote hain.
* Kuch Common Global Objects :
    __dirname -
        Ye current directory ka absolute path return karta hai jisme tumhara file execute ho raha hai.
        Ex -
            console.log(__dirname); -----> Output: /Users/sahil/my-node-app
    __filename -
        Ye current file ka absolute path return karta hai, including the file name.
        Ex -
            console.log(__filename); -----> Output: /Users/sahil/my-node-app/app.js
    process -
        Ye current Node.js process ke baare mein information deta hai, jaise ki environment variables, arguments, etc.
        Ex -
            console.log(process.env);
            console.log(process.argv); -----> Command line arguments ko print karta hai
    Buffer -
        Ye binary data ko handle karne ke liye hota hai.
        Normally, tumhe files ya streams ke saath kaam karte waqt buffers ka use karna padta hai.
        Ex -
            const buf = Buffer.from('Sahil');
            console.log(buf); -----> Prints the binary buffer for the string 'Sahil'
    global -
        Node.js mein global object JavaScript ke window object jaisa hota hai, jo globally accessible cheezein store karta hai.
        Isme tum globally accessible variables define kar sakte ho, lekin ye generally achha practice nahi hota.
        Ex -
            global.myGlobalVar = "Hello";
            console.log(myGlobalVar); -----> Output: Hello
    setTimeout() -
        Ye function specific time ke baad ek function ko execute karta hai.
        Ye JavaScript ke setTimeout() function jaisa hi hota hai.
        Ex -
            setTimeout(() => {
                console.log('3 seconds later...');
            }, 3000);
    setInterval() -
        Ye function specific intervals ke baad repeatedly ek function ko execute karta hai.
        Ex -
            setInterval(() => {
                console.log('Every 2 seconds...');
            }, 2000);
    clearTimeout() -
        setTimeout() aur setInterval() ko cancel karne ke liye ye functions use hote hain.
    clearInterval() -
        setTimeout() aur setInterval() ko cancel karne ke liye ye functions use hote hain.
* Note -
    Node.js mein directly global object se kaam karna ek achha practice nahi hota kyunki it can lead to confusion and conflicts with variable names.
    Hamesha try karo ki tum apne variables aur functions ko module-level pe define karo, jo global scope se alag hote hain.
    The window object is a global object provided by the browser, not by the V8 engine.
    Now ,In Node.js, the global object is known as global , which is equivalent to the window object in the browser.
    A global object is not a part of the V8 engine; instead, itʼs a feature provided by Node.js.
    This global object offers various functionalities, such as setTimeout() , setInterval() , and more.
* When we do this -
    console.log(this); -----> Outputs: {}
    When you use console.log(this); at the global level in Node.js, it will log an empty object, indicating that this does not refer to the global object in this context.

3. What is 'this' and 'globalThis' in context of Global Object ?
Explanation :-
* In JavaScript, "this" ka meaning depend karta hai ki tumhara code kis context mein execute ho raha hai.
* Jab tum this ko global scope mein (i.e., outside any function) use karte ho, Node.js mein ye thoda alag behave karta hai compared to browsers.
* this in Node.js Global Scope -
    Jab tum Node.js ke global scope mein this ko use karte ho, toh ye global object ko refer nahi karta hai.
    Balki, ye ek empty object ({}) ko refer karta hai.
    Ex -
        console.log(this); -----> Output: {}
* Agar tum browser mein yehi code run karoge, toh this global window object ko refer karega.
* But Node.js mein, this module-scoped hota hai, isliye {} return hota hai.
* globalThis in Node.js Global Scope -
    Always a global object, regardless of where it is accessed.
    It was introduced in ECMAScript 2020 to provide a standardized way to refer to the global object in any environment (browsers, Node.js, etc.).
    globalThis ek standardized global object hai jo har environment (Node.js, browser, web workers, etc.) mein global scope ko represent karta hai.
    Iska purpose ye hai ki tum environment ke hisaab se global ya window ka use na karo; instead, tum directly globalThis ka use karke globally accessible values ko access kar sakte ho.
    In browsers, global is equivalent to window .
    In Node.js, globalThis is equivalent to global .
    It provides a consistent way to access the global object without worrying about the environment.
    Ex -
        console.log(globalThis); -----> Output: Global object in Node.js
        globalThis ensures that tumhara code cross-platform ho sakta hai, chahe tum browser mein run karo ya Node.js mein. Tum directly global variables ko access kar sakte ho without worrying about the specific environment.
* Node.js mein -
    globalThis == global
* Browser mein -
    globalThis == window
* Why is console.log(this) an empty object {} -
    Node.js har file ko ek module ke andar run karta hai.
    Aur ye module basically encapsulated hota hai.
    Yani, this jab global scope mein hota hai toh wo file-specific context ka part hota hai, isliye {} print hota hai.
    JavaScript mein har file ko apne scope mein execute karna ek achha practice hai to avoid global scope pollution.
    Agar tum file ke andar this ka use function ke context mein karoge, toh uska behavior change ho jayega.
    Ex -
        function showThis() {
            console.log(this);
        }
        showThis(); -----> Output: [global object] in non-strict mode

4. How to run NodeJS Code ?
Explanation :-
* Save your code in a .js file and run it using the node filename.js command in the terminal.

5. What is the relation between NodeJS and Browser ?
Explanation :-
* Node.js aur Browser dono JavaScript ko execute karte hain, lekin inka environment aur purpose bilkul alag hota hai. Samajhne ke liye, hum inko different perspectives se compare karte hain.
    JavaScript Engine
    Environment/Platform
    Global Objects
    APIs/Modules
    Event Loop
    Purpose/Use-cases
    Common Ground - Same Language (JavaScript)
* JavaScript Engine :
    Browser (ex - Chrome, Firefox, Safari) -
        Browsers use JavaScript engines like V8 (Chrome), SpiderMonkey (Firefox) to execute JavaScript code.
        JavaScript in browsers ka primary purpose hai client-side web development.
        It helps in manipulating the DOM (Document Object Model), handling events, and interacting with the user.
    Node.js -
        Node.js bhi V8 engine (same as Chrome) ko use karta hai to execute JavaScript, lekin browser ke comparison mein server-side mein.
        Iska purpose hai backend tasks handle karna, jaise ki file system access karna, databases se interaction karna, network requests handle karna, etc.
* Environment/Platform :
    Browser (ex - Chrome, Firefox, Safari) -
        JavaScript runs inside a browser window. Yahaan tumhare pass window, document, location jaise browser-specific objects hote hain jo web pages se interact karne ke liye use hote hain.
        Ex -
            console.log(window.location.href); -----> Prints current URL of the page
    Node.js -
        Node.js ek runtime environment hai jo browser ke bahar execute hota hai.
        Yahaan tumhe window ya document jaise objects nahi milte, lekin tumhare pass system-level objects hote hain, jaise fs (file system), process, global, etc.
        Ex -
            const fs = require('fs');
                fs.readFile('example.txt', 'utf8', (err, data) => {
                    if (err) {
                        throw err;
                    }
                    console.log(data);
            });
* Global Objects :
    Browser (ex - Chrome, Firefox, Safari) -
        Browser ka global object hota hai window. Sabhi globally defined functions aur variables window object ka part hote hain.
        Ex -
            console.log(window.alert); -----> Shows the alert method of window
    Node.js -
        Node.js mein global object hota hai global, jisme tum globally accessible cheezein define kar sakte ho.
        Ex -
            global.myVar = 'Hello';
            console.log(global.myVar); -----> Outputs: Hello
* APIs/Modules :
    Browser (ex - Chrome, Firefox, Safari) -
        Browser mein tumhe JavaScript ke built-in APIs milti hain, jaise ki DOM API , Fetch API , Event Handling.
    Node.js -
        Node.js mein tumhe built-in modules milte hain jo server-side operations ko handle karte hain, jaise fs , http , path.
* Event Loop :
    Browser (ex - Chrome, Firefox, Safari) -
        Browser ke event loop ka kaam mostly UI events (like button clicks, mouse movements) aur asynchronous operations (like fetch calls) ko handle karna hota hai.
    Node.js -
        Node.js ka event loop bhi asynchronous operations ko handle karta hai, lekin yahaan file I/O, network requests, timers jaise tasks zyada important hote hain.
        Node.js ko non-blocking I/O ki wajah se asynchronous tasks efficiently handle karne ke liye jaana jaata hai.
* Purpose/Use-cases :
    Browser (ex - Chrome, Firefox, Safari) -
        JavaScript in browsers ka main purpose hai frontend development karna.
    Node.js -
        Node.js ka main purpose hai server-side operations handle karna.
* Common Ground - Same Language (JavaScript) :
    Same Language, Different Context -
        Browser aur Node.js ka relationship yeh hai ki dono mein tum JavaScript use kar rahe ho, lekin context alag hota hai.
        Browser ke liye tum UI-related tasks aur client-side interactivity handle karte ho, jabki Node.js mein tum backend functionality implement karte ho.

-----Modules-----

1. What are Modules ?
Explanation :-
* Modules ka matlab hota hai ek tarika jisme tum apne code ko different files ya parts mein tod sakte ho.
* Har file ek independent module ki tarah behave karti hai jisme functions, objects, ya variables ko define kiya jaata hai, aur phir tum inko kisi aur module/file mein use kar sakte ho.
* Modules are reusable pieces of code in Node.js, encapsulated in separate files.
* Node.js mein module ek file hoti hai jisme kuch functionality encapsulate hoti hai, aur tum usko dusre modules ke saath share kar sakte ho.

2. What is the need of Modules ?
Explanation :-
* Modules ki zarurat tab padti hai jab tumhare code kaafi bada ho jata hai, aur tum chahte ho ki usko manage karna aasaan ho.
* Modules ka fayda :
    Code Reusability -
        Tum ek module ko kai jagah use kar sakte ho bina code dubara likhe.
    Maintainability -
        Code ko maintain karna aasaan ho jaata hai kyunki tumhari functionality alag-alag parts mein divided hoti hai.
    Abstraction -
        Tum apne internal implementation details ko hide kar sakte ho aur sirf necessary parts expose kar sakte ho (public interface).
    Avoid Global Scope Pollution -
        Modules ka use karke tum variables aur functions ko global scope se bacha sakte ho, taaki unka accidentally overwrite na ho.

3. How do you make two modules work together ?
Explanation :-
* Do modules ko kaam karane ke liye, tum ek module ko dusre module mein import ya require kar sakte ho.
* Ek module ko dusre module ke saath export-import ka use karke connect karte ho.
* Exporting Module -
    Tum jis module ko dusre file mein use karna chahte ho usko export karte ho.
* Importing Module -
    Jis module ko use karna hai, usme tum dusre module ko import ya require karte ho.

4. What are the types of Module ?
Explanation :-
* Node.js mein mainly do types ke modules hote hain :
    Built-in Modules -
        Yeh Node.js ke sath predefined aate hain jaise fs, http, path, etc.
        Tum inko directly use kar sakte ho bina installation ke.
    User-defined Modules -
        Yeh tumhare khud ke banaye huye modules hote hain jo tum apne app ki functionality ko divide karne ke liye likhte ho.

5. What are the differences between CJS and ESM Module ?
Explanation :-
* CJS :
    Uses require() and module.exports
    By Default used in NodeJS.
    Older Way.
    Synchronous.
    Non-Strict.
* ESM :
    Uses import export.
    By Default used in react or angular.
    Newer Way.
    Asynchronous.
    Strict.
* There are two major differences between these two module systems that are important to note :
    Synchronous vs. Asynchronous -
        CommonJS requires modules in a synchronous manner, meaning the next line of code will execute only after the module has been loaded.
        In contrast, ES modules load modules asynchronously, allowing for more efficient and flexible code execution.
        This distinction is a powerful feature and an important point to remember for interviews.
    Non-Strict vs. Strict -
        Another significant difference is that CommonJS code runs in non-strict mode, while ES modules execute in strict mode.
        This means that ES modules enforce stricter parsing and error handling, making them generally safer and more reliable.

6. What are the 2 Main Module System in NodeJS ?
Explanation :-
* CJS
* ESM

7. Which one is better CJS or ESM ?
Explanation :-
* ESM (ECMAScript Modules) is considered better for modern JavaScript because :
        •	Asynchronous module loading allows for better performance.
        •	Works natively in browsers and Node.js, providing consistency.
        •	It’s the standard for JavaScript as defined by ECMAScript, making it more future-proof.
* But CJS is still widely used in Node.js projects because :
        •	Simpler to use.
        •	Backward compatible with older Node.js projects.

8. What is CJS and How to use it ?
Explanation :-
* CommonJS (CJS) Node.js ka default module system hai.
* Ismein tum require() aur module.exports ka use karke modules ko import-export karte ho.
* Importing in CJS :
    const fs = require('fs'); -----> Built-in module
    const myModule = require('./myModule'); -----> User-defined module
* Exporting in CJS :
    function greet() {
        return 'Hello';
    }
    module.exports = { greet };

9. What is ESM and How to use it ?
Explanation :-
* ESM (ECMAScript Modules) JavaScript ke official module system hai jo browser aur Node.js dono mein kaam karta hai.
* Ismein tum import aur export keywords ka use karte ho.
* Importing in ESM :
    import fs from 'fs'; -----> Built-in module
    import { greet } from './myModule'; -----> User-defined module
* Exporting in ESM :
    export function greet() {
        return 'Hello';
    }

10. What is the required function ?
Explanation :-
* The require function is a built-in function in Node.js used to import modules into your code.
* Purpose -
    To load and use external modules (both built-in and user-defined).
* Usage -
    When you need to include code from other files or modules into your script.
* Syntax -
    const moduleName = require('module-name');
* Note :
    When using the following import statement - const { x, calculateSum } = require("/sum");
    Because, you can omit the .js extension, and it will still work correctly.
    Node.js automatically resolves the file extension for you.

11. What is module.exports ?
Explanation :-
* module.exports is a special object in Node.js used to export functions, objects, or variables from a module so that they can be used in other modules.
* Purpose -
    To define what a module should expose for other files to use.
* Default Export -
    By default, module.exports is an empty object {}, but you can assign any value to it.
* Syntax -
    module.exports = value; -----> `value` can be a function, object, or any other data type

13. What are Nested Modules ?
Explanation :-
* Nested modules refer to modules that are imported within other modules, creating a hierarchy of dependencies.

14. Why CJS Module System is Synchronous ?
Explanation :-
* CommonJS (CJS) module system synchronous hota hai kyunki yeh modules ko ek blocking manner mein load karta hai.
* Matlab, jab tum require function use karte ho ek module ko load karne ke liye, Node.js tab tak rukta hai jab tak module puri tarah se load aur execute nahi ho jata.
* Loading Mechanism -
    CJS synchronous I/O operations use karta hai.
    Jab tum require function call karte ho, Node.js us waqt tak block ho jata hai jab tak module load nahi hota aur uski exports available nahi ho jati.
* Single-threaded Nature -
    Node.js ek single-threaded event loop pe chalta hai, jisme synchronous module loading achha work karta hai kyunki yeh complex asynchronous state management avoid karta hai.
* Use Case -
    Yeh synchronous approach server-side environments ke liye suitable hai jahan modules ek baar load hote hain application start hone ke time pe, aur runtime ke dauran baar-baar nahi load hote.
* Ex -
    const math = require('./math'); -----> Yeh blocking operation hai
    console.log('Module loaded');
    console.log(math.add(5, 3));
    Yahan, console.log('Module loaded') tabhi execute hota hai jab require('./math') module load ho jata hai.

15. Why ESM Module System is Asynchronous ?
Explanation :-
* ECMAScript Modules (ESM) asynchronous isliye hote hain kyunki yeh modern JavaScript environments, including browsers ko support karte hain, jo module loading ko asynchronously handle karte hain taaki performance aur responsiveness improve ho sake.
* Loading Mechanism -
    ESM asynchronous operations use karta hai (jaise browsers mein network requests).
    Yeh non-blocking behavior JavaScript engine ko allow karta hai ki wo dusre code ko execute kare jab tak module load ho raha hota hai.
* Support for Dynamic Imports -
    ESM dynamic import() syntax ko support karta hai, jo ek promise return karta hai.
    Iska matlab hai tum modules ko on-demand load kar sakte ho, aur code ke execution ko block nahi karte.

16. Will you be able to access "console.log(a)" value :
function x () {
    const a = 10;
function b () {
    console.log("b");
}
console.log(a);
Explanation :-
* Output : a is not defined
* You cannot access a value outside the function x because it is defined within the function's scope.
* Each function creates its own scope, so variables inside a function are not accessible from outside that function.

17. Why you cant access variables or functions of one file in another file or Why do we even need module.export ?
Explanation :-
* Modules in Node.js work similarly to function scopes.
* When you require a file, Node.js wraps the code from that file inside a function.
* This means that all variables and functions in the module are contained within that functionʼs scope and cannot be accessed from outside the module unless explicitly exported.
* To expose variables or functions to other modules, you use module.exports .
* This allows you to export specific elements from the module, making them accessible when required elsewhere in your application.
* All the code of a module is wrapped inside a function when you call require .
* This function is not a regular function, itʼs a special type known as an IIFE (Immediately Invoked Function Expression).
* Hereʼs how it works :
    (function () {
        All the code of the module runs inside here...
    })();
* In this pattern, you create a function and then immediately invoke it.
* This is different from a normal function in JavaScript, which is defined and then called separately :
    function x() {}
    x();
* In Node.js, before passing the code to the V8 engine, it wraps the module code inside an IIFE.
* The purpose of IIFE is to :
    Immediately Invoke Code -
        The function runs as soon as it is defined.
    Keep Variables and Functions Private -
        By encapsulating the code within the IIFE, it prevents variables and functions from interfering with other parts of the code.
        This ensures that the code within the IIFE remains independent and private.
* Using IIFE solves multiple problems by providing scope isolation and immediate execution.

18. How are variables and functions private in different modules ?
Explanation :-
* Because of IIFE and the requirement (statement) wrapping code inside IIFE.

19. How do you get access to module.exports ? Where does this module comefrom ?
Explanation :-
* In Node.js, when your code is wrapped inside a function, this function has a parameter named
module .
* This parameter is an object provided by Node.js that includes module.exports.
* The below function is IIFE.
    (function(module) {
        // All the code of the module runs inside here
    }(module));
* When you use module.exports , you're modifying the exports object of the current module.
* Node.js relies on this object to determine what will be exported from the module when it's required in another file.
* The module object is automatically provided by Node.js and is passed as a parameter to the function that wraps your code.
* This mechanism allows you to define which parts of your module are accessible externally.

20. How require() Works Behind the Scenes ?
Explanation :-
* Resolving the Module -
    Node.js first determines the path of the module.
    It checks whether the path is a local file ( ./local ), a JSON file ( .json ), or a module from the node_modules directory, among other possibilities.
* Loading the Module -
    Once the path is resolved, Node.js loads the file content based on its type.
    The loading process varies depending on whether the file is JavaScript, JSON, or another type.
* Wrapping Inside an IIFE -
    The module code is wrapped in an Immediately Invoked Function Expression "IIFE".
    This wrapping helps encapsulate the module's scope, keeping variables and functions private to the module.
* Code Evaluation and Module Exports -
    After wrapping, Node.js evaluates the moduleʼs code.
    During this evaluation, module.exports is set to export the module's functionality or data.
    This step essentially makes the module's exports available to other files.
* Caching(very imp) -
    Caching is crucial for performance.
    Node.js caches the result of the require() call so that the module is only loaded and executed once.
* Scenario :
    Suppose you have three files: sum.js , app.js , and multiply.js .
    All three files require a common module named xyz .
    Initial Require -
        When sum.js first requires xyz with require('./xyz') , Node.js performs the full require() process for xyz :
            Resolving the path to xyz.
            Loading the content of xyz.
            Wrapping the code in an IIFE.
            Evaluating the code and setting module.exports.
            Caching is the result.
            Node.js creates a cached entry for xyz that includes the evaluated module exports.
    Subsequent Requires -
        When app.js and multiply.js later require xyz using require('./xyz') , Node.js skips the initial loading and evaluation steps.
        Instead, it retrieves the module from the cache.
        This means that for app.js and multiply.js , Node.js just returns the cached module.exports without going through the resolution, loading, and wrapping steps again.
* Impact on Performance :
    If caching did not exist, each require('./xyz') call would repeat the full module loading and evaluation process.
    This would result in a performance overhead, especially if xyz is a large or complex module and is required by many files.
    With caching, Node.js efficiently reuses the moduleʼs loaded and evaluated code, significantly speeding up module resolution and reducing overhead.

-----Exploring NodeJS Codebase-----

* NodeJs is an open-source Project.
* I will now show you how the V8 JavaScript engine is integrated within the Node.js GitHub repository to illustrate its role and interaction with Node.js.
* when i say there are superpowers, what are this superpowers? This is all the code for the superpowers.
* Libuv is the most amazing superpower.
* Node.js is popular just because of libuv.
* libuv plays a critical role in enabling Node.js's high performance and scalability.
* It provides the underlying infrastructure for asynchronous I/O, event handling, and cross-platform compatibility.
* Note -
    In the Node.js repository, if you navigate to the lib directory, you'll find the core JavaScript code for Node.js.
    This lib folder contains the source code for various built-in modules like http , fs , path , and more.
    Each module is implemented as a JavaScript file within this directory.

-----libuv & async IO-----

1. What is NodeJS ?
Explanation :-
* I hope you remember that in the first episode, we read through the Node.js Wikipedia page.
* One of the key points we came across was the statement that "Node.js has an event-driven architecture capable of asynchronous I/O.ˮ

2. What is Thread ?
Explanation :-
* A thread is the smallest unit of execution within a process in an operating system.
* It represents a single sequence of instructions that can be managed independently by a scheduler.
* Multiple threads can exist within a single process, sharing the same memory space but executing independently.
* This allows for parallel execution of tasks within a program, improving efficiency and responsiveness.
* Threads can be either :
    Single-threaded
    Multi-threaded

3. What type of threading does JavaScript use ?
Explanation :-
* JavaScript is a synchronous, single-threaded language, meaning there is only one thread in which the JavaScript engine (such as the V8 engine) runs.
* In JavaScript, code is executed line by line within this single thread.
* In other languages like C or Java, code can be executed across multiple threads.
* For example, a portion of the code might be executed in one thread, while another part runs simultaneously in a different thread.
* However, JavaScript handles this process more straightforwardly—executing code one line after the other in sequence.
* So, if you're executing line 2 in JavaScript, it will only run after line 1 has finished executing.
* This is the essence of synchronous execution - each task is performed one after the other, without overlap.

4. What is a Synchronous System ?
Explanation :-
* In a synchronous system, tasks are completed one after another.

5. What is an Asynchronous System ?
Explanation :-
* In this system, tasks are completed independently.

6. Is JS Synchronous or Asynchronous ?
Explanation :-
* So, JavaScript itself is synchronous, but with the power of Node.js, it can handle asynchronous operations, allowing JavaScript to perform multiple tasks concurrently.

6. What are the portions inside the JS engine and How synchronous code is executed By JS Engine ?
Explanation :-
* The JavaScript engine operates with a single call stack, and all the code you write is executed within this call stack.
* The engine runs on a single thread, meaning it can only perform one operation at a time.
* In addition to the call stack, the JavaScript engine also includes a memory heap.
* This memory heap stores all the variables, numbers, and functions that your code uses.
* One key feature of the JavaScript V8 engine is its garbage collector.
* The garbage collector automatically identifies and removes variables that are no longer in use, freeing up memory. * Unlike languages like C++, where developers need to manually allocate and deallocate memory, JavaScript handles this process automatically.
* This means you don't have to worry about memory management—it's all taken care of by the engine.
* Code :
    console.log("Hello World");
    var a = 1078698;
    var b = 20986;
    function multiplyFn(x , y) {
        const result = a*b;
        return result;
    }
    var c = multiplyFn(a , b);
    console.log(c);
* Now, lets see how code is executed inside :
    Step 1: Global Execution Context Creation -
        As soon as the JavaScript engine begins executing the code, it creates a Global Execution Context.
        This is the main environment where the top-level code is executed.
        The global execution context is unique and is always the first to be pushed onto the call stack.
    Step 2: Memory Creation Phase -
        Before any code is executed, the JavaScript engine enters the memory creation phase.
        During this phase :
            Variables a and b are declared in memory and initialized to undefined .
            The function multiplyFn is also stored in memory, with its value set to the entire function definition.
    Step 3: Code Execution Phase -
        Once the memory creation phase is complete, the engine moves to the code execution phase :
            Execution of let a = 10786; and let b = 20987;.
            The variables a and b are now assigned their respective values.
            Execution of let c = multiplyFn(a, b);
            The function multiplyFn is invoked, creating a new execution context specifically for this function.
    Step 4: Function Execution Context Creation -
        When multiplyFn(a, b) is called, the JavaScript engine :
            Creates a new execution context for multiplyFn and pushes it onto the top of the call stack.
            In this new context, the parameters x and y are assigned the values of a and b.
    Step5: MemoryCreationandCodeExecutionInside multiplyFn -
        Inside multiplyFn , the memory creation phase initializes result in memory with undefined.
            Execution of const result = a * b;
            The multiplication is performed, and result is assigned the value 226215682.
            Execution of return result;
            The function returns 226215682 , and the multiplyFn execution context is popped off the call stack.
    Step 6: Resuming Global Execution Context -
        Back in the global execution context, the returned value from multiplyFn ( 226215682 ) is assigned to the variable c .
    Step 7: Once the entire code is executed, the global execution context is also popped out, and the call stack becomes empty.

7. How asynchronous code executed ?
Explanation :-
* The JavaScript engine cannot do this alone; it needs superpowers.
* This is where Node.js comes into the picture, giving it the ability to interact with operating system functionalities.
* The JS engine gains its superpowers from Node.js.
* Node.js grants these powers through a library named Libuv—our superhero.
* The JS engine cannot directly access OS files, so it calls on Libuv.
* Libuv, being very cool and full of superpowers, communicates with the OS, performs all the necessary tasks, and then returns the response to the JS engine.
* He offloads the work and does wonders behind the scene.
* Code :
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
* The variables let a and let b are executed within the GEC (Global Execution Context) during the synchronous phase of the code execution process.
* However, when the code encounters an API call, the V8 engine, while still operating within the GEC, recognizes that it's dealing with an asynchronous operation.
* At this point, the V8 engine signals libuv —the superhero of Node.js —to handle this API call.
* What happens next is that libuv registers this API call, including its associated callback function (name - A, within its event loop, allowing the V8 engine to continue executing the rest of the code without waiting for the API call to complete.
* Next, when the code encounters a setTimeout function, a similar process occurs.
* The V8 engine identifies this as another asynchronous operation and once again notifies libuv .
* Following this, when the code reaches a file operation (like reading or writing a file), the process is similar.
* The V8 engine recognizes this as another asynchronous task and alerts libuv .
* libuv then registers the file operation and its callback in the event loop.
* Next, when the code executes,
    let c = multiplyFn(a, b);
JavaScript engine creates a new function context for multiplyFn and pushes it onto the call stack.
* The function takes two parameters, x and y , and within the function, the engine multiplies these values ( a * b ) and
stores the result in the result variable.
* The JavaScript engine handles this operation as part of the synchronous code execution.
* Next, when the code executes
let c = multiplyFn(a, b); , the JavaScript engine creates a new function context for multiplyFn and pushes it onto the call stack.
* Once the multiplyFn completes its execution and returns the result, the function context is popped off the call stack, and the result is assigned to the variable c.
* Note -
    When the function execution context is popped off the call stack, the garbage collector may clear any memory allocated for that context in the memory heap, if it is no longer needed.
    After console.log(c) is executed and the value of c is printed to the console, the global execution context will also eventually be removed from the call stack if the code execution is complete.
    With the global context popped off the call stack, the JavaScript engine has finished processing, and the program ends.
    Now the call stack becomes empty, the JavaScript engine can relax, as there is no more code to execute.
    At this point, libuv takes over the major tasks. It handles operations such as processing timers, managing file system calls, and communicating with the operating system.
    libuv performs these heavy tasks in the background, ensuring that asynchronous operations continue to be managed effectively.
    In summary, Node.js excels in handling asynchronous I/O operations, thanks to its non-blocking I/O model.

-----npm-----

1. What is npm ?
Explanation :-
* npm (Node Package Manager) is a package manager for Node.js, used to install and manage libraries and dependencies.

2. What is npx ?
Explanation :-
* npx is a tool that runs Node.js binaries from the npm registry without needing to install them globally.

3. What is Semantic Versioning ?
Explanation :-
* Semantic Versioning (SemVer) is a versioning scheme that uses three numbers (major.minor.patch) to indicate the level of changes in a package.

4. What is Global Installation ?
Explanation :-
* Global installation installs packages system-wide, making them available from any directory using the -g flag.

5. What is Local Installation ?
Explanation :-
* Local installation installs packages in the node_modules directory of a project, making them available only within that project.

6. How to update Packages ?
Explanation :-
* Use npm update to update installed packages to their latest versions.

7. How to Run Scripts ?
Explanation :-
* Define scripts in package.json and run them using npm run script-name.

8. What is npm Workspaces ?
Explanation :-
* npm Workspaces allow managing multiple packages within a single repository, facilitating development and dependency management.

9. How to create Packages ?
Explanation :-
* Create a package by initializing a project with npm init, defining dependencies, and creating a package.json file.

-----sync, async, setTimeoutZero-----

1. What does this mean?
Explanation :-
* Sync (Synchronous) -
    Jab ek task complete hone ke baad doosra task hota hai, toh isko synchronous kehte hain.
    Ex - Tumne ek file read kiya, jab tak wo file read complete nahi hoti, agla code execute nahi hoga.
* Async (Asynchronous) -
    Isme ek task chal raha hota hai, but agla task wait nahi karta.
    Jaise tumne server se data fetch karna shuru kiya, data aane tak dusra kaam bhi ho sakta hai.
* setTimeout(0) -
    Iska matlab hai ki ek function ko event loop mein daala gaya hai, but bina kisi delay ke.
    Yeh code tab execute hoga jab event loop ke synchronous tasks complete ho jayenge.
* The V8 engine is responsible for executing JavaScript code, but it cannot offload this task to Libuv (which handles asynchronous operations like I/O tasks).
* Think of it like an ice cream shop where the owner insists on serving each customer one at a time, without moving on to the next until the current customer has been fully served.
* This is what happens when you use synchronous methods like fs.readFileSync() — the main thread is blocked until the file is completely read.

2. Why is this important?
Explanation :-
* Sync aur async code ka difference samajhna zaroori hai kyunki async mein code ka flow break ho sakta hai.
* JavaScript ek single-threaded language hai, toh event loop ka role bahut important hota hai.
* As a developer, it’s important to understand that while Node.js and the V8 engine give you the capability to block the main thread using synchronous methods, this is generally not recommended.
* Synchronous methods like fs.readFileSync() are still available in Node.js, but using them can cause performance issues because the code execution will be halted at that point until the file reading operation is complete.
* Note -
    Avoid using synchronous methods in production code whenever possible, especially in performance-critical applications, because they can slow down your application by blocking the event loop.
    Instead, use asynchronous methods like fs.readFile() that allow other operations to continue while the file is being read, keeping the application responsive.

3. What is crypto ?
Explanation :-
* Node.js mein crypto ek module hai jo tumhe encryption, hashing jaise secure cheezein karne deta hai.
* Node.js has a core library known as crypto , which is used for cryptographic operations like generating secure keys, hashing passwords, and more.
* The crypto module is one of the core modules provided by Node.js, similar to other core modules like https , fs (file system), and zlib (used for compressing files).
* These core modules are built into Node.js, so when you write require('crypto') , you're importing a module that is already present in Node.js.
* You can also import it using require('node:crypto') to explicitly indicate that it’s a core module, but this is optional.
* Ex -
    Tumhe passwords ko hash karna hoga toh tum crypto use kar sakte ho.
    One of the functions provided by the crypto module is pbkdf2Sync , which stands for Password-Based Key Derivation.
* Note -
    When you see Sync at the end of a function name (like pbkdf2Sync ), it means that the function is synchronous and will block the main thread while it’s running.
    This is something you should be cautious about, especially in performance-sensitive applications.

4. Why Does This Matter?
Explanation :-
* Crypto security ke liye matter karta hai.
* Jab bhi tum secure data handle karte ho (passwords, sensitive info), tumhe encryption aur hashing use karna chahiye.
* Blocking Behavior -
    The synchronous version of pbkdf2 ( pbkdf2Sync ) will block the event loop, preventing any other code from executing until the key generation is complete.
    This can cause your application to become unresponsive if used inappropriately.
* Asynchronous Alternative -
    Node.js also provides an asynchronous version ( pbkdf2 without the Sync suffix), which offloads the operation to Libuv.
    This allows the event loop to continue processing other tasks while the key is being generated.

5. What will be the output of the following code?
console.log("Start");
setTimeout(() => {
    console.log("Inside Timeout");
}, 0);
console.log("End");
Explanation :-
* You might wonder why the setTimeout(0) callback is executed after other code, like the multiplication result, even though we set the delay to 0 milliseconds.
* Output -
    Start
    End
    Inside Timeout

6. Why is setTimeout(0) Executed After the Multiplication Result?
Explanation :-
* setTimeout(0) ko event loop ke asynchronous phase mein daala jaata hai.
* Pehle synchronous code (like console.log('End')) execute hoga, uske baad asynchronous tasks handle kiye jaate hain, chahe timeout 0 hi kyu na ho.
* Asynchronous Operation -
    setTimeout is an asynchronous function, meaning it doesn't block the execution of the code.
    When you call setTimeout , the callback function is passed to Libuv (Node.js's underlying library), which manages asynchronous operations.
* Event Loop and Call Stack -
    The callback function from setTimeout(0) is added to the event queue.
    However, it won't be executed until the current call stack is empty.
    This means that even if you specify a 0-millisecond delay, the callback will only execute after the global execution context is done.
* Trust Issues with setTimeout(0) -
    When you ask the code to run after 0 milliseconds, it doesn't necessarily run immediately after that time.
    It runs only when the call stack is empty.
    This introduces some "terms and conditions," meaning that the actual execution timing is dependent on the state of the call stack.

-----Deep dive into v8 JS Engine-----

1. What happens Behind the Scenes in V8 Engine ?
Explanation :-
* V8 JavaScript Engine, jo Chrome aur Node.js mein use hota hai, yeh JavaScript code ko machine code mein convert karta hai jisse CPU usko efficiently samajh sake.
* When JavaScript code is executed, it goes through several stages in the V8 engine.
* The first stage is parsing, which includes lexical analysis and tokenization.

2. What is 1st Stage : Parsing Stage - Lexical Analysis and Tokenization ?
Explanation :-
* Is stage mein code ko characters (tokens) mein todha jaata hai.
* Example - var x = 10; ko 5 tokens mein todha jaata hai (var, x, =, 10, ;).
* Lexical Analysis :
    Purpose -
        The main goal of lexical analysis is to break down the raw JavaScript code into manageable pieces called tokens.
    Process -
        Input Code: var a = 10;
        Tokenization: The code is scanned to identify individual tokens.
    Ex -
        For the code var a = 10; , the tokens might be -
            var (keyword)
            a (identifier)
            = (operator)
            10 (literal)
            ; (punctuation)
* Tokenization :
    Tokenization is the process of converting code into a series of tokens.
    Each token represents a fundamental element of the language, such as keywords, operators, identifiers, and literals.
    Why Tokenization -
        Tokenization helps the V8 engine to read and understand the code more effectively by breaking it down into smaller, more manageable pieces.
        This step is crucial for further analysis and compilation.
* Output :
    Tokens -
        The result of tokenization is a list of tokens that the V8 engine uses in subsequent stages of parsing.
* Note -
    In the parsing stage, lexical analysis breaks down JavaScript code into tokens.
    This process helps the V8 engine understand and process the code by converting it into a format that can be easily analyzed and optimized in later stages.

3. What is 2nd Stage : Syntax Analysis and Abstract Syntax Tree (AST) ?
Explanation :-
* Tokens ko parse karke ek tree structure (AST) banaya jaata hai.
* Yeh tree code ki grammar ko samajhne ke liye use hota hai.
* After the lexical analysis and tokenization stages, the next step in the parsing process is syntax analysis.
* In this stage, the tokens are converted into an Abstract Syntax Tree (AST).
* This process is crucial for transforming the flat list of tokens into a structured representation of the code.
* Syntax Analysis -
    To analyze the syntactic structure of the tokens and build the Abstract Syntax Tree (AST).
    The tokens are analyzed according to the grammar rules of JavaScript to create a hierarchical tree structure that represents the code.
* Abstract Syntax Tree (AST) -
    The AST is a tree-like data structure that represents the syntactic structure of the source code.
    Each node in the tree corresponds to a construct in the code, such as variables, expressions, or statements.
* Note -
    You can explore AST structures using tools like AST Explorer, which provides a visual representation of the AST for various pieces of code.
    Link - https://astexplorer.net/
    Syntax Errors -
        When the V8 engine reads code, it processes tokens one by one.
        If an unexpected token is encountered that does not fit the grammar rules, a syntax error occurs.
        This is because the AST cannot be generated if the code does not adhere to the expected syntax, indicating that something is wrong with the structure of the code.
        In the syntax analysis stage, the tokens are analyzed to create an Abstract Syntax Tree (AST), which provides a structured and hierarchical representation of the code.
        This tree structure helps the V8 engine understand and process the code more effectively.
        Syntax errors occur when the engine encounters unexpected tokens that prevent the generation of a valid AST.

4. What is Interpreter and Compilation ?
Explanation :-
* Interpreter code ko line-by-line execute karta hai, jabki compiler code ko puri tarah se machine code mein convert karta hai.
* V8 pehle code ko interpret karta hai, fir frequently used code ko compile karke fast machine code banata hai.
* Interpreted Languages -
    These languages are executed line by line.
    The interpreter reads and executes the code directly, which can lead to slower execution times compared to compiled languages.
    Pros - Faster to start executing code, easier to debug.
    Cons - Slower execution compared to compiled languages because of the line- by-line interpretation.
    Ex - Python
* Compiled Languages -
    These languages are first translated into machine code (binary code) through a process called compilation.
    The machine code is then executed by the computer’s hardware, leading to faster execution times.
    Pros - Faster execution because the code is pre-compiled into machine code.
    Cons - Longer initial compilation time, more complex debugging process.
    Ex -  C , C++

5. Is JavaScript interpreted or compiled language?
Explanation :-
* JavaScript dono hai, interpreted bhi aur compiled bhi.
* Pehle interpret hoti hai, phir optimization ke liye compiled ho jaati hai.
* JavaScript is neither purely interpreted nor purely compiled.
* It utilizes a combination of both techniques.
* Interpreter
    Initial Execution -
        JavaScript uses an interpreter to execute code quickly and start running the script.
        This allows for rapid execution of scripts and immediate feedback.
* Compiler
    Just-In-Time (JIT) Compilation -
        JavaScript engines like V8 use JIT compilation to improve performance.
        JIT compilation involves compiling code into machine code at runtime, just before execution.
        This process optimizes performance by compiling frequently executed code paths into optimized machine code.
* Abstract Syntax Tree (AST) to Bytecode
    AST to Bytecode -
        After parsing the code and generating the AST, the code is passed to the interpreter.
        In the V8 engine, this interpreter is called Ignition.
        Ignition -
            Converts the AST into bytecode.
            Bytecode is a lower-level, intermediate representation of the code that the JavaScript engine can execute more efficiently than raw source code.
            Execution - Ignition reads and executes the bytecode line by line.
* Just-In-Time (JIT) Compilation
    TurboFan -
        A compiler within the V8 engine that optimizes frequently executed (hot) code paths.
        When Ignition identifies a portion of the code that runs frequently (hot code), it sends this code to TurboFan for optimization.
        Optimization -
            TurboFan converts the bytecode into optimized machine code, which improves performance for repeated executions.
* Hot Code Optimization and Deoptimization
    Hot Code - Refers to code that is executed frequently.
    TurboFan focuses on optimizing hot code to improve performance.
    Optimization Assumptions -
        TurboFan makes certain assumptions during optimization based on the types and values it encounters.
        For example, if a function is optimized with the assumption that it only processes numbers, it will run very efficiently for such cases.
    Deoptimization -
        Scenario -
            If TurboFan’s assumptions are incorrect (e.g., a function that was optimized for numbers receives strings), the optimization may fail.
        Process -
            In such cases, TurboFan will deoptimize the code and revert it to a less optimized state.
            The code is then sent back to Ignition for further interpretation and possible re-optimization.
* Key Terms -
    Inline Caching - A technique used to speed up property access by caching the results of lookups.
    Copy Elision - An optimization technique that eliminates unnecessary copying of objects
* Note -
    For optimal performance, try to pass consistent types and values to functions.
    For example, if a function is optimized for numeric calculations, avoid passing strings to prevent deoptimization.
    All of these processes work differently in each JavaScript engine, such as SpiderMonkey or others, but the V8 engine is considered the best on the market.
    Understanding the structure of the V8 engine is very beneficial for you.
    Now, I’ll show you what bytecode looks like. Your task is to explore this code using ChatGPT.
    Link - https://github.com/v8/v8/blob/master/test/cctest/interpreter/bytecode_exp
    Link - https://v8.dev/

-----libuv & Event Loop-----

1. What is libuv ?
Explanation :-
* libuv ek library hai jo Node.js mein asynchronous I/O operations handle karti hai, jaise file reading, network requests, etc.
* Yeh event loop ko manage karti hai.
* Understanding how libuv manages the event loop, callback queues, and thread pools is crucial, especially for non-blocking I/O tasks.
* The event loop in libuv is the heart of how Node.js handles asynchronous operations.
* It allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded.
* Tasks that are offloaded to libuv include file system operations, DNS lookups, and network requests, among others.
* The callback queue is where callbacks are stored after an asynchronous operation is completed.
* The event loop processes this queue to execute the callbacks when the call stack is empty.
* The thread pool, on the other hand, is used for handling more time-consuming tasks that cannot be handled within the event loop without blocking it, such as file system operations or cryptographic functions.
* When a task is offloaded to libuv , libuv internally performs several operations.
* For instance, if you initiate a file read operation, once the data is received back from the operating system (OS), it is libuv 's responsibility to handle the callback function and eventually send it to the call stack for execution.
* Now, imagine there are millions of lines of JavaScript code running within the JavaScript engine.
* If an asynchronous task like an API call returns data very quickly from the OS to libuv , that API call must wait in the callback queue within libuv until the V8 engine is free to process it.
* This ensures that the non-blocking nature of Node.js is maintained, as the V8 engine can continue executing other code without being blocked by these asynchronous operations.
* So, let's say multiple asynchronous tasks, like an API call returning results, a setTimeout , and a file read operation, are completed simultaneously.
* To manage this, libuv maintains separate callback queues for different types of tasks, such as timers, API calls, and file reads.
* This is where the event loop comes into play.
* The event loop continuously monitors the call stack, checking if it's empty.
* If the stack is empty, the event loop takes tasks from the callback queues and pushes them onto the call stack for execution.
* The event loop's main responsibility is to ensure that all pending tasks in the callback queues are executed at the appropriate time and in the correct order of priority.
* But how does the event loop prioritize these tasks -
* How does it manage the timing and efficient execution of tasks behind the scenes -

2. What is Event Loop ?
Explanation :-
* Event loop ek mechanism hai jo asynchronous code ko synchronous code ke baad execute karta hai.
* Jab synchronous kaam khatam ho jata hai, tab event loop async callbacks ko execute karta hai.

3. How things work behind the scene ?
Explanation :-
* Synchronous code directly execute hota hai. Async tasks (like file read, network calls) event loop mein daal diye jaate hain, aur jab unka kaam complete ho jata hai toh wo callback queue se utha ke execute hote hain.

4. What are the four major phases in which event loop in LIBUV operates ?
Explanation :-
* Timers Phase -
    SetTimeout, setInterval callbacks execute hote hain.
    In this phase, all callbacks that were set using setTimeout or setInterval are executed.
    These timers are checked, and if their time has expired, their corresponding callbacks are added to the callback queue for execution.
* I/O Callbacks Phase -
    Asynchronous I/O operations ke callbacks handle hote hain.
    After timers, the event loop enters the Poll phase, which is crucial because it handles I/O callbacks.
    For instance, when you perform a file read operation using fs.readFile , the callback associated with this I/O operation will be executed in this phase.
    The Poll phase is responsible for handling all I/O- related tasks, making it one of the most important phases in the event loop.
* Poll Phase -
    Wait karta hai naye events ke liye (file reads, network requests).
    Next is the Check phase, where callbacks scheduled by the setImmediate function are executed.
    This utility API allows you to execute callbacks immediately after the Poll phase, giving you more control over the order of operations.
* Check Phase -
    Immediate functions (like setImmediate()) ko execute karta hai.
    Finally, in the Close Callbacks phase, any callbacks associated with closing operations, such as socket closures, are handled.
    This phase is typically used for cleanup tasks, ensuring that resources are properly released.

5. What is Event Loop Cycle with process.nextTick() and Promises ?
Explanation :-
* Before the event loop moves to each of its main phases (Timers, I/O Callbacks , Poll , Check , and Close Callbacks) , it first processes any pending microtasks.
* Microtasks include tasks scheduled using process.nextTick() and Promise callbacks.
* This ensures that these tasks are handled promptly before moving on to the next phase.
* Note -
    When the event loop is empty and there are no more tasks to execute, it enters the poll phase and essentially waits for incoming events.

-----Thread pool in libuv-----

1. What is Thread Pool ?
Explanation :-
* Thread pool ek set of threads ka collection hai jo blocking tasks (like file system operations, crypto operations) ko handle karta hai without blocking the main event loop.
* Whenever there's an asynchronous task, V8 offloads it to libuv.
* For example, when reading a file, libuv uses one of the threads in its thread pool.
* The file system (fs) call is assigned to a thread in the pool, and that thread makes a request to the OS.
* While the file is being read, the thread in the pool is fully occupied and cannot perform any other tasks.
* Once the file reading is complete, the engaged thread is freed up and becomes available for other operations.
* For instance, if you're performing a cryptographic operation like hashing, it will be assigned to another thread.
* There are certain functions for which libuv uses the thread pool.

2. When does libuv use the thread pool ?
Explanation :-
* libuv thread pool ka use tab karta hai jab I/O tasks, heavy computations, ya file system operations execute karne hote hain, jo main thread ko block kar sakte hain.
* Whenever you perform tasks like file system (fs) operations, DNS lookups (Domain Name System), or cryptographic methods, libuv uses the thread pool.

3. Is Node.js single- threaded or multi-threaded ?
Explanation :-
* If you're dealing with synchronous code, Node.js is single-threaded.
* But if you're dealing with asynchronous tasks, it utilizes libuv's thread pool, making it multi- threaded.
* The order of execution is not gauranteed over here which thread executes first will win.

4. Can you change the size of the thread pool?
Explanation :-
* Haan, tum Node.js thread pool ki size badal sakte ho by setting UV_THREADPOOL_SIZE environment variable.
* Default size 4 hoti hai.
* In Node.js, the default size of the thread pool is 4 threads -
    UV_THREADPOOL_SIZE=4
* Now, suppose you make 5 simultaneous file reading calls.
* What happens is that 4 file calls will occupy 4 threads, and the 5th one will wait until one of the threads is free.
* Yes, you can change the size of the thread pool by setting the -
UV THREADPOOL__SIZE environment variable.
* For example, you can set it to 8 like this - process.env.UV_THREADPOOL_SIZE = 8;
* If your production system involves heavy file handling or other tasks that benefit from additional threads, you can adjust the thread pool size accordingly to better suit your needs.

5. Suppose you have a server with many incoming requests, and users are hitting APIs. Do these APIs use the thread pool?
Explanation :-
* No.
* In the libuv library, when it interacts with the OS for networking tasks, it uses sockets.
* Networking operations occur through these sockets.
* Each socket has a socket descriptor, also known as a file descriptor (although this has nothing to do with the file system).
* When an incoming request arrives on a socket, and you want to write data to this connection, it involves blocking operations.
* To handle this, a thread is created for each request. However, creating a separate thread for each connection is not practical, especially when dealing with thousands of requests. Instead, the system uses efficient mechanisms provided by the OS, such as epoll (on Linux) or kqueue (on macOS).
* These mechanisms handle multiple file descriptors (sockets) without needing a thread per connection.
* Here’s how it works -
    epoll (Linux) and kqueue (macOS) are notification mechanisms used to manage many connections efficiently.
    When you create an epoll or kqueue descriptor, it monitors multiple file descriptors (sockets) for activity.
    The OS kernel manages these mechanisms and notifies libuv of any changes or activity on the sockets.
    This approach allows the server to handle a large number of connections efficiently without creating a thread for each one.
* The kernel-level mechanisms, like epoll and kqueue , provide a scalable way to manage multiple connections, significantly improving performance and resource utilization in a high-concurrency environment.

6. What are File Descriptors (fds) and Socket Descriptors ?
Explanation :-
* File descriptors -
    Ek integer value hote hain jo ek open file ya socket ko represent karte hain.
    Integral to Unix-like operating systems, including Linux and macOS.
    Used by the operating system to manage open files, sockets, and other I/O resources.
    Operating system file descriptors ka use karke I/O resources manage karta hai.
* Socket descriptors -
    Are a special type of file descriptor used to manage network connections.
    Essential for network programming, allowing processes to communicate over a network.

7. What are Event Emitters ?
Explanation :-
* EventEmitter ek class hai jo events emit karne aur listen karne ka mechanism deti hai.
* Node.js ka core kaafi had tak event-driven architecture par based hai.
* Event Emitters are a core concept in Node.js, used to handle asynchronous events.
* They allow objects to emit named events that can be listened to by other parts of the application.
* The EventEmitter class is provided by the Node.js events module.
* Here's a brief overview -
    Creating an EventEmitter - You create an instance of EventEmitter and use the on method to register event listeners.
    Emitting Events - Use the emit method to trigger events and pass data to listeners.
    Handling Events - Listeners (functions) handle the emitted events and perform actions based on the event data.

8. What are Streams ?
Explanation :-
* Streams ek way hain large data ko chunk mein handle karne ka (like reading files, data from network).
* Yeh asynchronous aur memory-efficient hote hain.
* Streams in Node.js are objects that facilitate reading from or writing to a data source in a continuous fashion.
* Streams are particularly useful for handling large amounts of data efficiently.

9. What are Buffers ?
Explanation :-
* Buffers ek temporary storage hote hain jo binary data ko store karte hain (like file data, network packets) jab tak usko process na kiya jaaye.
* Buffers are used to handle binary data in Node.js.
* They provide a way to work with raw memory allocations and are useful for operations involving binary data, such as reading files or network communications.

10. What are Pipes in Node.js ?
Explanation :-
* Pipes ek mechanism hain jo ek readable stream ko directly ek writable stream se connect karte hain, taaki data ek jagah se dusri jagah jaaye bina manually handle kiye.
* Ex - File read stream ko file write stream se pipe karna.
* Pipes in Node.js are a powerful feature for managing the flow of data between streams.
* They simplify the process of reading from a readable stream and writing to a writable stream, facilitating efficient and seamless data processing.

-----About Server-----

1. What is a server?
Explanation :-
* Server ek computer ya system hai jo resources (jaise files, data, applications) ko clients ko provide karta hai jab client request bhejte hain.
* Yeh request-response model pe kaam karta hai.
* The term "server" can refer to both hardware and software, depending on the context.
    Hardware - A physical machine (computer) that provides resources and services to other computers (clients) over a network.
    Software - An application or program that handles requests and delivers data to clients.
* Deploying an Application on a Server -
    When someone says "deploy your app on a server," they usually mean -
        Hardware Aspect -
            You need a physical machine (server) to run your application.
            This machine has a CPU, RAM, storage, etc.
        Operating System (OS) -
            The server hardware runs an operating system like Linux or Windows.
            Your application runs on this OS.
        Server Software -
            The software (e.g - a web server like Apache or an application server built with Node.js) that handles requests from users.
* AWS and Cloud Computing -
    AWS (Amazon Web Services) provides cloud-based resources, including servers.
        EC2 Instance -
            When you launch an EC2 instance, you’re essentially renting a virtual server from AWS.
            AWS manages the underlying hardware, and you deploy your application on the virtual server.
        Scalability -
            AWS allows you to easily scale your resources.
            For example, you can increase the memory or processing power of your server with a few clicks, which is not as straightforward on a physical laptop or desktop.
        Reliability -
            AWS servers are equipped with constant power, internet backup, and redundant systems to ensure high availability, which is difficult to achieve with a personal computer.

2. Can You Use Your Own Laptop as a Server?
Explanation :-
* Yes, but with limitations :
    Hardware Constraints -
        Your laptop likely has limited RAM, CPU, and storage, which may not be sufficient for handling a large number of requests.
    Internet Connectivity -
        A home internet connection is typically less reliable and has dynamic IP addresses, making it less suitable for hosting a publicly accessible server.
    Power and Maintenance -
        Ensuring that your laptop is always on, connected to the internet, and has backup power is challenging.
        AWS handles all these concerns for you.
* Haan, tum apne laptop ko server bana sakte ho.
* Agar tum apne laptop par software install karo jo client requests handle kar sake (jaise Apache, Nginx, ya Node.js), toh tumhara laptop bhi server ke tarah kaam karega.
* Software Servers in Node.js -
    When you create an HTTP server in Node.js, you’re building an application that listens for requests from clients and responds to them.
    This is an example of a software server.

3. What is Client-Server Architecture?
Explanation :-
* Client-Server architecture ek model hai jisme clients request bhejte hain aur server unhe response deta hai.
* Clients ko jo cheezein chahiye (jaise web pages, data) wo server se milti hain.
* Example - Browser is a client, and a website’s backend is the server.
* The term "client" refers to someone accessing a server.
* Imagine a user sitting at a computer wanting to access a file from a server.
* For this, the client needs to open a socket connection (not to be confused with WebSocket).
* Every client has an IP address, and every server has an IP address as well.
* The client could be a web browser.
* To access the file, the client opens a socket connection.
* On the server side, there should be an application that is listening for such requests, retrieves the requested file, and sends it back to the client.
* There can be multiple clients, and each client creates a socket connection to get data.
* After the data is received, the socket connection is closed.
* If the client needs to make another request, a new socket connection is created, data is retrieved, and the connection is closed again.
* Sockets operate using the TCP/IP protocol (Transmission Control Protocol/Internet Protocol).

4. What is a protocol?
Explanation :-
* A protocol is a set of rules that define how computers communicate with each other.
* Protocols determine the format in which data is sent between devices.
    FTP (File Transfer Protocol) - Used for transferring files.
    SMTP (Simple Mail Transfer Protocol) - Used for sending emails.
* When we talk about a web server, we usually mean an HTTP server.
* HTTP (HyperText Transfer Protocol) is a language or set of rules that defines how clients and servers communicate.
* Essentially, when we create a server, it's often built using HTTP to handle basic data exchanges.
* Toward the end, I'll demonstrate how to create a server
* Protocol ek set of rules hote hain jo define karte hain ki data kaise exchange hoga between devices.
* Common protocols hain HTTP (web ke liye), FTP (file transfer ke liye), SMTP (email ke liye).

5. When you make a server request, how is data sent?
Explanation :-
* Jab tum server ko request bhejte ho, data packets mein send hota hai.
* HTTP request mein data request headers aur body mein jaata hai. Server request ko receive karta hai, process karta hai, aur response bhejta hai.
* Data is sent in chunks, and these smaller units are known as packets.
* Whenever data is transmitted, it's broken down into these packets.
* Remember the term "packets." The TCP/IP protocol is responsible for sending these packets and ensuring that the data transmission is properly managed.
* In Node.js, there are concepts of streams and buffers that are used for handling and writing code related to data transmission.
* We don't generally communicate using IP addresses; instead, we use domain names like youtube.com.
* However, at the end of the day, everything maps to an IP address.
* As humans, we don’t easily understand or remember IPs, similar to how we save contacts with names instead of memorizing phone numbers.
* Similarly, when we request a URL like youtube.com, internally, it is translated into an IP address.
* This is where the Domain Name System (DNS) comes into play.
* A DNS server manages the mapping between domain names and IP addresses.
* When you request a website, your browser calls a DNS server to resolve the domain name into an IP address.
* Once the IP is resolved, a call is made to the server.
* As a user, you don’t see what happens behind the scenes.
* When you request an IP, it goes to the server where an HTTP server processes the request and sends back the video data.
* This data is sent in chunks, known as streams, and the process involves buffers, which is why you sometimes see the video buffering.

6. Can I create multiple servers?
Explanation :-
* Yes, you can create multiple HTTP servers.
* Now, suppose a user is sending a request.
* How do we know which server it should go to -
    When I mention creating an HTTP server, it means we are setting up two different Node.js applications.
    The distinction between these servers is defined by a port, which is a 4-digit number (e.g., port 3000).
    For example, suppose an HTTP server with IP address 102.209.1.3 is running on port 3000 .
    This combination of IP address and port number ( 102.209.1.3:3000 ) indicates which specific HTTP server the request should be routed to.
    Essentially, this means there’s a single computer (the server) that can run multiple applications, each with its internal servers.
    The port number determines which application or server the request is directed to.
* Haan, tum multiple servers bana sakte ho.
* Tum ek laptop ya machine par bhi multiple servers run kar sakte ho, bas different ports pe unko allocate karna hota hai.
* Ex - port 3000, 4000, etc.

7. How to Map Domain Names, IPs, Ports, and Paths to Applications ?
Explanation :-
* When you enter a domain name like youtube.com , it gets mapped to an IP address by a DNS (Domain Name System) server. * The IP address identifies the specific server where the website is hosted.
* Now, when you combine the IP address with a port number, you can direct the request to a specific application running on that server.
* The port number acts as a gateway to different applications or services on the same server.
* Ex -
    102.209.1.3:3000 could point to a React application.
    102.209.1.3:3001 could point to a Node.js application.
* But there's more! If you add a path to the URL, you can create specific API routes.
* Ex -
    If you enter youtube.com , the server might direct you to the React application running on port 3000.
    If you enter youtube.com/api/... , it might direct the request to a Node.js application running on port 3001.
* Let's consider a scenario with namastedev.com.
* Suppose you have two applications -
    A React application running on port 3000 .
    A Node.js application running on port 3001.
* You can set it up so -
    Requests to namastedev.com go to the React application on port 3000.
    Requests to namastedev.com/node go to the Node.js application on port 3001.
* This way, you can manage multiple applications on the same server and direct users based on the path they enter in the URL.
* In large companies, the architecture is often distributed across multiple servers rather than relying on a single server.
* This approach helps manage different aspects of the application efficiently and ensures scalability, reliability, and performance.

8. What is Distributed Server Architecture ?
Explanation :-
* Distributed server architecture mein ek kaam ko multiple servers par distribute kiya jata hai.
* Isse load balancing hoti hai aur redundancy increase hoti hai, toh agar ek server fail ho jaaye, dusre servers kaam karte rehte hain.
* Separation of Concerns
    Frontend Server -
        This server handles the user interface (UI) of the application.
        It serves the HTML, CSS, and JavaScript files that the browser needs to render the website.
        For example, namastedev.com could be hosted on an AWS server that serves both the frontend and backend.
    Backend Server -
        This server processes the logic, handles requests, and interacts with the database.
        Even though the backend might be on the same server as the frontend in some cases, it’s often separated in larger systems for better performance and security.
* Dedicated Database Server -
    The database is typically hosted on a separate, powerful server that is optimized for storing and managing data.
    When a client makes a request that involves data retrieval or storage, the backend server interacts with this database server to fulfill the request.
* Media and File Servers -
    Large files like videos, images, and other media are often stored on specialized servers.
    These servers are optimized for handling large amounts of data and delivering it quickly.
    When you request a video from namastedev.com , the video might be fetched from a dedicated media server.
    Images might also be stored on a different server, often managed by a content delivery network (CDN) to ensure fast delivery to users worldwide.
* Inter-Server Communication -
    When a client makes a request, the frontend or backend server might need to communicate with other servers to get the necessary data.
    For example, if you request a video on namastedev.com , the server might make an API call to another server that hosts the video content, retrieve it, and then send it to the client.

9. What is Socket ?
Explanation :-
* Socket ek endpoint hota hai jiske through client aur server ke beech communication hota hai.
* Yeh ek unique combination hota hai IP address aur port ka, jo network communication ko handle karta hai.
* When a user makes a request to a website, a socket connection is established between the client and the server.
* This connection is typically used for a single request-response cycle: the client sends a request, the server processes it, sends back the response, and then the socket is closed.
* This process involves opening a new connection for each request.

10. What is WebSockets ?
Explanation :-
* WebSocket ek protocol hai jo persistent connection create karta hai client aur server ke beech.
* Yeh real-time, full-duplex communication allow karta hai, jo regular HTTP se different hota hai kyunki HTTP mein har request pe naya connection banta hai.
* On the other hand, WebSockets introduce a more efficient method by allowing the connection to remain open.
* This means that after the initial connection is established, it stays active, allowing for continuous communication between the client and server.
* Both the client and server can send and receive data at any time without the need to re-establish the connection.
* This persistent connection is ideal for real-time applications, where continuous interaction is required, such as in chat applications, online gaming, or live updates.

11. What is the difference between Socket and WebSockets ?
Explanation :-
* Socket ek endpoint hai jo communication handle karta hai.
* WebSocket ek protocol hai jo continuous, real-time communication allow karta hai, unlike traditional HTTP requests jo ek one-time request-response model pe kaam karte hain.

-----Databases : SQL & NoSQL-----

1. What is a database ?
Explanation :-
* Database ek organized collection hoti hai data ki, jisme tum data ko efficiently store, retrieve, aur manage kar sakte ho.

2. What are the types of databases ?
Explanation :-
* Relational DB - MySQL, PostgreSQL
    Relational databases like MySQL and PostgreSQL use structured tables with predefined schemas, making them ideal for handling complex queries and transactions.
    They ensure data integrity through ACID properties and are widely used for applications requiring robust, relational data models.
* NoSQL DB - MongoDB
    MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas.
    It's highly scalable and ideal for handling large volumes of unstructured or semi-structured data, making it popular for modern web applications.
* In-memory DB - Redis
    Redis is an in-memory database known for its high-speed data processing capabilities.
    It supports various data structures like strings, hashes, and lists, making it suitable for caching, real-time analytics, and message brokering.
* Distributed SQL DB - CockroachDB
    CockroachDB is a distributed SQL database designed to scale horizontally across multiple nodes while providing strong consistency and ACID transactions.
    It's ideal for applications requiring high availability and resilience across different geographic locations.
* Time Series DB - InfluxDB
    InfluxDB is a time series database optimized for handling high write and query loads, particularly for time-stamped data.
    It's commonly used for monitoring, real-time analytics, and IoT applications where time-based data is crucial.
* OO DB - db4o
    db4o is an object-oriented database that stores data as objects, closely aligning with object-oriented programming languages.
    It simplifies development by allowing direct storage and retrieval of objects without the need for conversion to relational tables.
* Graph DB - Neo4j
    Neo4j is a graph database that excels at handling complex relationships between data entities.
    It uses a graph structure with nodes, relationships, and properties, making it ideal for applications like social networks, recommendation engines, and fraud detection.
* Hierarchical DB - IBM IMS
    IBM IMS is a hierarchical database that organizes data in a tree-like structure with parent-child relationships.
    It's used primarily in legacy systems for high- performance transaction processing and is known for its reliability in handling large-scale, mission-critical applications.
* Network DB - IDMS
    IDMS (Integrated Database Management System) is a network database that represents data using a graph of record types and set relationships.
    It allows more complex relationships than hierarchical databases and is often used in legacy systems requiring high performance.
* Cloud DB - Amazon RDS
    Amazon RDS (Relational Database Service) is a managed cloud database service that supports multiple relational database engines, including MySQL, PostgreSQL, and Oracle.
    It automates tasks like backups, patching, and scaling, making it easy to deploy and manage databases in the cloud.
* Most commonly used databases are -
    Relational DB -
        Structured data store karta hai, jisme tables aur rows use hote hain.
        Ex - MySQL, PostgreSQL.
    NoSQL DB -
        Unstructured ya semi-structured data ko handle karta hai.
        Ex - MongoDB, Cassandra.

3. What is EF Codd and Codd’s 12 Rules ?
Explanation :-
* EF Codd was a scientist who introduced a concept known as Codd’s 12 Rules.
* Interestingly, the rules are numbered from 0 to 12, making them a total of 13 rules.
* These rules were designed to determine whether a database qualifies as a relational database, which means it must have different tables and relationships between those tables.
* EF Codd ne relational database model ki theory banayi thi aur usne 12 rules diye the jisse define kiya ja sake ki ek relational database kaise behave karega.
* Kuch important rules -
    •	Data ko tables mein organize karna.
	•	Data ko uniquely identify karna (primary key).
	•	Null values handle karna.

4. What is the story of MYSQL and PostgreSQL ?
Explanation :-
* MySQL was developed by a scientist named Michael Widenius.
* The name "MySQL" comes from his first daughter’s name, My.
* Michael also named another database after his second daughter, Max, calling it MaxDB, and he named a fork of MySQL after his third daughter, Maria, resulting in MariaDB.
* MySQL was eventually acquired by Sun Microsystems, which was later acquired by Oracle.
* Currently, MySQL is managed by Oracle. After the acquisition, Michael and others created a fork of MySQL, known as MariaDB.
* PostgreSQL was created by Michael Stonebraker, who was working on a project called Ingres at the University of California.
* He later began developing a project called Post Ingres, which eventually evolved into PostgreSQL because it utilized SQL (Structured Query Language) in the project.
* SQL is essential for interacting with relational databases, as it provides a structured way to query and manage data.

5. How many types of NoSQL DBs are there ?
Explanation :-
* NoSQL DBs ke 4 main types hain -
	Document-based -
        Data ko documents (JSON format) mein store karte hain.
        Ex - MongoDB.
	Key-Value -
        Key aur value pairs ke form mein data store hota hai.
        Ex - Redis.
	Column-based -
        Data ko columns ke form mein organize kiya jata hai.
        Ex - Cassandra.
	Graph-based -
        Data ko nodes aur edges ke form mein represent karta hai.
        Ex - Neo4j.
* MongoDB, a popular NoSQL database, was created in 2009 around the same time as Node.js.
* It’s a coincidence that both have gained popularity together, as MongoDB works exceptionally well with JSON and JavaScript objects.
* MongoDB was developed by a company named 10gen, and the name "MongoDB" comes from the word "humongous," reflecting its ability to handle massive amounts of data.
* The company later renamed itself MongoDB Inc., which continues to manage MongoDB today.
* MongoDB is known for significantly increasing developer productivity.

5. What is the difference between RDBMS(SQL) and NoSQL ?
Explanation :-
* RDBMS (SQL) -
    Structured data store karta hai, jo predefined schema ke according hota hai.
    Tables mein organize kiya jata hai aur queries SQL language se hoti hain.
    Structure -
        RDBMS uses a table-based structure, organizing data into rows and columns, similar to a spreadsheet or Excel sheet.
        Each table represents a different entity, and the columns represent attributes of the entity.
    Relationships -
        In RDBMS, relationships between tables are established using foreign keys.
        For example, if you want to store user hobbies, you would create separate tables for users and hobbies and then map them using a user ID.
        This design often requires the use of joins to retrieve related data.
    Normalization -
        Data normalization is a key concept in RDBMS.
        It involves organizing data to minimize redundancy and improve data integrity.
        This often requires multiple related tables and complex join operations to assemble a complete dataset.
* NoSQL -
    Flexible aur schema-less hota hai.
    Yeh unstructured ya semi-structured data ko handle karta hai.
    It’s better for large-scale, distributed data systems.
    Structure -
        NoSQL document databases, such as MongoDB, use a flexible, schema-less structure.
        Data is stored in documents, which are similar to JSON objects.
        Each document is a collection of key-value pairs and can have nested structures.
    Collections -
        Instead of tables, MongoDB uses collections.
        A collection is a group of documents, analogous to a table in RDBMS.
        Each document in a collection can have a different structure, which allows for more flexible data modeling.
    Data Storage -
        In MongoDB, you can store related data within a single document.
        For example, instead of creating separate tables for users and their hobbies, you can store a user's hobbies as an array within the user's document.
        This eliminates the need for joins and complex queries.
    Ease of Use -
        MongoDB and other document databases are designed to work well with JavaScript.
        Since documents are similar to JSON objects, they integrate seamlessly with JavaScript code, making it easier to work with data in web applications.
    Schema Flexibility -
        NoSQL databases offer schema flexibility, allowing you to add or modify fields without affecting existing documents.
        This makes it easy to adapt to changing requirements and store diverse types of data.
    Table Structure -
        RDBMS organizes data into tables with rows and columns.
        In contrast, NoSQL document databases use collections of documents, where each document can have a flexible and nested structure.
    Data Organization -
        RDBMS has a structured format, while NoSQL offers a flexible schema, allowing documents to vary in structure.
    Schema -
        RDBMS requires a fixed schema, meaning the structure must be predefined and is not easily changeable.
        NoSQL databases have a schema-less design, allowing for easy changes and adaptability.
    Query Language -
        RDBMS uses SQL for querying, which is a standardized language for relational databases.
        NoSQL databases have their own query mechanisms, which can vary depending on the database system.
    Scaling -
        RDBMS generally faces challenges with horizontal scaling (scaling out across multiple servers).
        NoSQL databases are designed for easier horizontal scaling, making them more suitable for distributed environments.
    Relationships -
        RDBMS uses foreign keys and joins to manage relationships between tables.
        NoSQL document databases handle relationships by embedding related data within documents or using references.
    Use Case -
        RDBMS is often used in scenarios requiring complex transactions and strong consistency, such as banking systems.
        NoSQL databases are preferred for applications needing flexible data models and high-performance, such as content management systems and real-time data processing.
    Examples -
        RDBMS examples include banking applications that need ACID compliance and complex transactions.
        NoSQL examples include systems like content management and real-time analytics platforms, where flexibility and scalability are key.

-----Error Handeling-----

1. What is Error Handeling ?
Explanation :-
* Error handling involves catching and managing errors to ensure smooth application execution and provide meaningful feedback to users.
* Error handling ka matlab hota hai ki jab program me koi galti (error) aati hai, toh usko properly handle karna.
* Isse program smoothly chalti rehti hai aur user ko meaningful feedback milta hai.

2. What is System Errors ?
Explanation :-
* System errors are errors related to the operating system or environment, such as file system issues or network problems.
* System errors wo errors hote hain jo operating system ya environment se related hote hain, jaise file system ka issue ya network ka problem.

3. What is User Specified Errors ?
Explanation :-
* User-specified errors are custom errors defined by developers to handle specific conditions in their application.
* User-specified errors wo hote hain jo developer khud define karta hai apne specific conditions ko handle karne ke liye. Jaise agar koi data valid nahi hai, toh aap custom error throw kar sakte ho.

4. What is Assertion Errors ?
Explanation :-
* Assertion errors occur when an assertion (a statement that checks a condition) fails during code execution.
* Assertion errors tab aate hain jab aapka ek assertion (a condition check) fail ho jata hai.
* Jaise aap expect kar rahe ho ki koi variable true hoga, par wo false nikla.

5. What is JS Errors ?
Explanation :-
* JS errors are built-in errors in JavaScript, such as ReferenceError, TypeError, or SyntaxError.
* JavaScript errors, jaise ReferenceError, TypeError, ya SyntaxError, language ke built-in errors hote hain jo tab aate hain jab aapne galat syntax likha ho ya koi reference nahi mil raha ho.

6. What is Uncaught Exceptions ?
Explanation :-
* Uncaught exceptions are errors that are not handled by any try-catch blocks, causing the application to terminate.
* Uncaught exceptions wo errors hain jo kisi bhi try-catch block me handle nahi hote.
* Agar ye errors handle nahi hote, toh aapka program crash kar sakta hai.

7. How to Handle Async Errors ?
Explanation :-
* Use try-catch with async/await or handle promise rejections using .catch() to manage asynchronous errors.
* Asynchronous errors ko async/await ke sath try-catch ka use karke handle karte hain.
* Promises ko handle karne ke liye .catch() ka use karte hain.

8. What is Callstack / Stack Trace ?
Explanation :-
* The call stack is a record of function calls, and the stack trace shows the sequence of function calls leading to an error.
* Callstack ek record hota hai ki kaunse function calls ho rahe hain, aur stack trace batata hai ki error kaunse function ke sequence me aayi hai.

9. How to use Debuggers ?
Explanation :-
* Use debugging tools like node inspect, Chrome DevTools, or VS Code’s debugger to set breakpoints and step through code.
* Debuggers jaise node inspect, Chrome DevTools, ya VS Code ka debugger use karke aap code me breakpoints set kar sakte ho aur step-by-step code ka execution dekh sakte ho.

-----Async Programming-----

1. What is Event Loop ?
Explanation :-
* The event loop is a mechanism that handles asynchronous operations and ensures that code executes in a non-blocking manner.
* Event loop Node.js ka core mechanism hai jo asynchronous operations ko handle karta hai.
* Isse code non-blocking tarike se execute hota hai.

2. What is Event Emitter ?
Explanation :-
* The Event Emitter is a core Node.js class that facilitates the creation and handling of custom events.
* Event Emitter ek Node.js class hai jo aapko custom events create karne aur handle karne me help karta hai.
* Aap emit() aur on() methods ka use karte ho.

3. What are Promises ?
Explanation :-
* Promises are objects representing the eventual completion or failure of an asynchronous operation and its result.
* Promises ek object hoti hain jo asynchronous operation ke eventual success ya failure ko represent karti hain, aur result ya error ko handle karti hain.

4. What is async/await ?
Explanation :-
* async/await is syntactic sugar for working with promises, making asynchronous code look and behave like synchronous code.
* async/await promises ko handle karne ka ek easy syntax hai, jo asynchronous code ko synchronous jaisa dikhata hai aur use karna simple banata hai.

5. What are Callbacks ?
Explanation :-
* Callbacks are functions passed as arguments to other functions, executed after the completion of an asynchronous operation.
* Callbacks wo functions hote hain jo kisi doosre function me argument ke roop me pass kiye jaate hain, aur asynchronous operation ke complete hone par call hote hain.

6. What is setTimeout ?
Explanation :-
* setTimeout schedules a function to execute after a specified delay in milliseconds.
* setTimeout ek function hai jo aapke code ko ek certain delay (milliseconds me) ke baad execute karne ka kaam karta hai.

7. What is setInterval ?
Explanation :-
* setInterval repeatedly executes a function at specified intervals in milliseconds.
* setInterval ek function hai jo baar-baar ek certain interval me code execute karta hai, jab tak aap usse stop na karo.

8. What is setImmediate ?
Explanation :-
* setImmediate schedules a function to execute in the next iteration of the event loop.
* setImmediate ek function hai jo code ko event loop ke next iteration me run karne ke liye schedule karta hai, bina kisi delay ke.

9. What is process.nextTick ?
Explanation :-
* process.nextTick schedules a function to execute after the current operation completes and before the event loop continues.
* process.nextTick ek function hai jo current operation ke complete hone ke baad, aur event loop ke continue hone se pehle ek function ko execute karta hai.

-----Working with Files-----

1. What is __dirname ?
Explanation :-
*  __dirname is a global variable that returns the directory name of the current module.
* __dirname ek global variable hai jo current module ka directory name return karta hai.

2. What is __filename ?
Explanation :-
* __filename is a global variable that returns the full path of the current module file.
* __filename current module ka full path return karta hai.

3. What is process.cwd() ?
Explanation :-
* process.cwd() returns the current working directory of the Node.js process.
* process.cwd() current working directory ka path return karta hai jaha se Node.js process run ho raha hai.

4. What is path Module ?
Explanation :-
* The path module provides utilities for working with file and directory paths.
* path module file aur directory ke paths ke sath kaam karne ke utilities provide karta hai.

5. What is fs Module ?
Explanation :-
* The fs module provides an API for interacting with the file system, including reading and writing files.
* fs module file system ke sath interact karne ke liye functions provide karta hai, jaise file read/write karna.

-----Command Line Apps-----

1. What is Exitting / Exit Codes ?
Explanation :-
* Exit codes are integers returned by a process to indicate success (0) or error (non-zero) upon completion.
* Jab program complete hota hai, toh ek integer return karta hai jo success (0) ya error (non-zero) ko indicate karta hai. Ye exit codes hote hain.

2. What are Environment Variables ?
Explanation :-
* Environment variables are dynamic values that influence the behavior of processes on the system.
* Environment variables dynamic values hote hain jo system ya process ke behavior ko influence karte hain.
* Ye operating system ke through set kiye jaate hain.

3. What is process.env ?
Explanation :-
* process.env is an object containing environment variables accessible within a Node.js application.
* process.env ek object hai jo Node.js application ke environment variables ko access karne ke liye use hota hai.

4. What is dotenv Package ?
Explanation :-
* dotenv loads environment variables from a .env file into process.env.
* dotenv ek package hai jo .env file se environment variables ko load karta hai process.env me, taaki aap easily environment-specific settings configure kar sako.

5. How to take input ?
Explanation :-
* Use process.stdin to read input from the command line in Node.js.
* Node.js me process.stdin ka use karke command line se input liya ja sakta hai.

6. What is process.stdin ?
Explanation :-
* process.stdin is a readable stream that provides access to standard input.
* Node.js me process.stdin ka use karke command line se input liya ja sakta hai.

7. What is Inquirer Package ?
Explanation :-
* inquirer is a package for creating interactive command-line interfaces with user prompts.
* inquirer ek package hai jo interactive command-line prompts create karne me madad karta hai, jaha users se inputs liye jaate hain.

8. What is Prompts Package ?
Explanation :-
* prompts is a package for handling user input with simple, customizable prompts.
* prompts ek lightweight package hai jo user input handle karne ke liye customizable prompts provide karta hai.

9. How to print output ?
Explanation :-
* Use console.log() to print output to the console in Node.js.
* console.log() ka use karke output ko console me print kiya ja sakta hai.

10. What is stdout / stderr ?
Explanation :-
* stdout is the standard output stream, and stderr is the standard error stream used for logging messages.
* stdout standard output stream hoti hai jo program ka output dikhati hai.
* stderr standard error stream hoti hai jo error messages ko dikhati hai.

11. What is Chalk Package ?
Explanation :-
* chalk is a package for styling terminal string output with colors and formatting.
* chalk ek package hai jo terminal me text ko colors aur formatting ke sath style karne ke liye use hota hai.

12. What is Figlet Package ?
Explanation :-
* figlet is a package for generating large text banners in the terminal.
* figlet ek package hai jo terminal me large ASCII text banners generate karne ke liye use hota hai.

13. What is Cli progress Package ?
Explanation :-
* cli-progress is a package for displaying progress bars in the command line.
* cli-progress ek package hai jo command line me progress bars dikhane ke liye use hota hai, jaise kisi task ka status dikhana.

14. What is Command Line args ?
Explanation :-
* Command-line arguments are parameters passed to a script when it is executed.
* Command-line arguments wo parameters hote hain jo script ko execute karte waqt pass kiye jaate hain.

15. What is process.argv ?
Explanation :-
* process.argv is an array containing command-line arguments passed to the Node.js process.
* process.argv ek array hota hai jo command-line arguments ko store karta hai jo Node.js process ko pass kiye gaye hain.

16. What is Commander.js ?
Explanation :-
* commander.js is a package for building command-line interfaces with options and arguments.
* commander.js ek package hai jo command-line interfaces banane ke liye use hota hai, jaha options aur arguments handle kiye jaate hain.

-----Building and Consuming APIs-----

1. What is jsonwebtoken ?
Explanation :-
* jsonwebtoken is a package for generating and verifying JSON Web Tokens (JWTs) for authentication.
* jsonwebtoken ek package hai jo JSON Web Tokens (JWTs) generate aur verify karta hai authentication ke liye, especially REST APIs me.

2. What is http Module ?
Explanation :-
* The http module provides utilities for creating HTTP servers and clients.
* http module Node.js ka core module hai jo HTTP servers aur clients create karne ke liye use hota hai.
* Isse aap apni APIs bana sakte ho.

-----Monitor Changes-----

1. What is Monitor Changes ?
Explanation :-
* Monitoring changes involves automatically restarting an application when code changes, useful during development.
* Development ke time me aapko baar-baar apne application ko manually restart karne ki zaroorat padti hai jab bhi code me changes aate hain.
* Monitoring tools ye automatically karte hain.

2. What is Nodemon ?
Explanation :-
* nodemon is a tool that monitors file changes and automatically restarts the Node.js application.
* nodemon ek tool hai jo file changes ko monitor karta hai aur automatically Node.js application ko restart karta hai jab bhi code me koi changes hote hain.

-----Template Engines-----

1. What are Template Engines ?
Explanation :-
* Template engines generate dynamic HTML content by embedding data into templates.
* Template engines dynamic HTML content generate karte hain.
* Ye aapko data ko HTML ke andar embed karne ka option dete hain taaki aap easily dynamic pages bana sako.

2. What is ejs ?
Explanation :-
* ejs (Embedded JavaScript) is a template engine that allows embedding JavaScript logic into HTML templates.
* ejs (Embedded JavaScript) ek template engine hai jo aapko HTML templates ke andar JavaScript logic ko embed karne ki suvidha deta hai.
* Isse aap dynamic web pages create kar sakte ho.

*/
