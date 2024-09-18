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

-----Error Handeling-----

1. What is Error Handeling ?
Explanation :-
* Error handling involves catching and managing errors to ensure smooth application execution and provide meaningful feedback to users.

2. What is System Errors ?
Explanation :-
* System errors are errors related to the operating system or environment, such as file system issues or network problems.

3. What is User Specified Errors ?
Explanation :-
* User-specified errors are custom errors defined by developers to handle specific conditions in their application.

4. What is Assertion Errors ?
Explanation :-
* Assertion errors occur when an assertion (a statement that checks a condition) fails during code execution.

5. What is JS Errors ?
Explanation :-
* JS errors are built-in errors in JavaScript, such as ReferenceError, TypeError, or SyntaxError.

6. What is Uncaught Exceptions ?
Explanation :-
* Uncaught exceptions are errors that are not handled by any try-catch blocks, causing the application to terminate.

7. How to Handle Async Errors ?
Explanation :-
* Use try-catch with async/await or handle promise rejections using .catch() to manage asynchronous errors.

8. What is Callstack / Stack Trace ?
Explanation :-
* The call stack is a record of function calls, and the stack trace shows the sequence of function calls leading to an error.

9. How to use Debuggers ?
Explanation :-
* Use debugging tools like node inspect, Chrome DevTools, or VS Code’s debugger to set breakpoints and step through code.

-----Async Programming-----

1. What is Event Loop ?
Explanation :-
* The event loop is a mechanism that handles asynchronous operations and ensures that code executes in a non-blocking manner.

2. What is Event Emitter ?
Explanation :-
* The Event Emitter is a core Node.js class that facilitates the creation and handling of custom events.

3. What are Promises ?
Explanation :-
* Promises are objects representing the eventual completion or failure of an asynchronous operation and its result.

4. What is async/await ?
Explanation :-
* async/await is syntactic sugar for working with promises, making asynchronous code look and behave like synchronous code.

5. What are Callbacks ?
Explanation :-
* Callbacks are functions passed as arguments to other functions, executed after the completion of an asynchronous operation.

6. What is setTimeout ?
Explanation :-
* setTimeout schedules a function to execute after a specified delay in milliseconds.

7. What is setInterval ?
Explanation :-
* setInterval repeatedly executes a function at specified intervals in milliseconds.

8. What is setImmediate ?
Explanation :-
* setImmediate schedules a function to execute in the next iteration of the event loop.

9. What is process.nextTick ?
Explanation :-
* process.nextTick schedules a function to execute after the current operation completes and before the event loop continues.

-----Working with Files-----

1. What is __dirname ?
Explanation :-
*  __dirname is a global variable that returns the directory name of the current module.

2. What is __filename ?
Explanation :-
* __filename is a global variable that returns the full path of the current module file.

3. What is process.cwd() ?
Explanation :-
* process.cwd() returns the current working directory of the Node.js process.

4. What is path Module ?
Explanation :-
* The path module provides utilities for working with file and directory paths.

5. What is fs Module ?
Explanation :-
* The fs module provides an API for interacting with the file system, including reading and writing files.

-----Command Line Apps-----

1. What is Exitting / Exit Codes ?
Explanation :-
* Exit codes are integers returned by a process to indicate success (0) or error (non-zero) upon completion.

2. What are Environment Variables ?
Explanation :-
* Environment variables are dynamic values that influence the behavior of processes on the system.

3. What is process.env ?
Explanation :-
* process.env is an object containing environment variables accessible within a Node.js application.

4. What is dotenv Package ?
Explanation :-
* dotenv loads environment variables from a .env file into process.env.

5. How to take input ?
Explanation :-
* Use process.stdin to read input from the command line in Node.js.

6. What is process.stdin ?
Explanation :-
* process.stdin is a readable stream that provides access to standard input.

7. What is Inquirer Package ?
Explanation :-
* inquirer is a package for creating interactive command-line interfaces with user prompts.

8. What is Prompts Package ?
Explanation :-
* prompts is a package for handling user input with simple, customizable prompts.

9. How to print output ?
Explanation :-
* Use console.log() to print output to the console in Node.js.

10. What is stdout / stderr ?
Explanation :-
* stdout is the standard output stream, and stderr is the standard error stream used for logging messages.

11. What is Chalk Package ?
Explanation :-
* chalk is a package for styling terminal string output with colors and formatting.

12. What is Figlet Package ?
Explanation :-
* figlet is a package for generating large text banners in the terminal.

13. What is Cli progress Package ?
Explanation :-
* cli-progress is a package for displaying progress bars in the command line.

14. What is Command Line args ?
Explanation :-
* Command-line arguments are parameters passed to a script when it is executed.

15. What is process.argv ?
Explanation :-
* process.argv is an array containing command-line arguments passed to the Node.js process.

16. What is Commander.js ?
Explanation :-
* commander.js is a package for building command-line interfaces with options and arguments.

-----Building and Consuming APIs-----

1. What is jsonwebtoken ?
Explanation :-
* jsonwebtoken is a package for generating and verifying JSON Web Tokens (JWTs) for authentication.

2. What is http Module ?
Explanation :-
* The http module provides utilities for creating HTTP servers and clients.

-----Monitor Changes-----

1. What is Monitor Changes ?
Explanation :-
* Monitoring changes involves automatically restarting an application when code changes, useful during development.

2. What is Nodemon ?
Explanation :-
* nodemon is a tool that monitors file changes and automatically restarts the Node.js application.

-----Template Engines-----

1. What are Template Engines ?
Explanation :-
* Template engines generate dynamic HTML content by embedding data into templates.

2. What is ejs ?
Explanation :-
* ejs (Embedded JavaScript) is a template engine that allows embedding JavaScript logic into HTML templates.

-----Working with DBs-----

1. How to work with Prisma ORM in NodeJS ?
Explanation :-
* Prisma ORM is an open-source tool that simplifies database access in Node.js by providing a type-safe query builder and schema management.

*/
