/*

-----Core Concepts-----

1. What are different types of Errors ?
Explanation :-
* Syntax Errors - 
    Yeh errors tab hote hain jab code likhne mein kuch galti ho jaaye jo syntax ke rules ke against ho.
    Syntax errors ko program execute hone se pehle hi detect kiya jaa sakta hai.
    Ex - 
        Missing a bracket, comma, or semicolon.    
        console.log("Hello World" ---> Missing closing parenthesis
* Runtime Errors - 
    Yeh errors tab hote hain jab program run kar raha ho aur koi unexpected situation aajaye.
    Ex - 
        Undefined variable access, division by zero.
        let num = 10;
        console.log(num / 0); ---> Division by zero
* Logical Errors - 
    Yeh errors program ke output ko galat bana dete hain, lekin code technically correct hota hai.
    Logical errors ko detect karna mushkil hota hai kyunki yeh runtime ya syntax se related nahi hote.
    Ex - 
        function add(a, b) {
            return a - b; ---> Logical error, it should be a + b
        }
        console.log(add(5, 3)); ---> Wrong output


2. What are some Built-in Error Types ?
Explanation :-
* ReferenceError - 
    Tab aata hai jab aap kisi undefined variable ko access karte ho.
    Ex - 
        console.log(x); ---> x is not defined
* TypeError -
    Tab hota hai jab variable ka type galat ho ya aap invalid operation perform karte ho.
    Ex - 
        let num = 10;
        num.toUpperCase(); ---> TypeError
* RangeError -
    Jab value allowed range ke bahar ho jaaye.
    Ex -    
        let arr = new Array(-1); ---> Invalid array length
* SyntaxError -
    Jab code syntax ke rules ko follow nahi karta.
    Ex - 
        eval("alert('Hello"); ---> Missing closing quote
* EvalError -
    Jab eval() function galat tarike se use hota hai.
    Modern JavaScript mein rarely use hota hai 


3. What is an Error Objects ?
Explanation :-
* Error objects JavaScript mein special objects hote hain jo error ki details ko represent karte hain. 
* Yeh humein error ko samajhne aur debug karne mein madad karte hain.
* Anatomy of an Error Object - 
    Error object ke kuch important properties hote hain jo humein error ke baare mein information dete hain , such as :
        name - Error ka type batata hai.
        message - Error ka description deta hai.
        stack - Error ka stack trace batata hai (code mein kaha-kaha error hua hai).
* Ex - 
    try {
        console.log(undefinedVariable); ---> Undefined variable
    }
    catch (error) {
        console.log("Name:", error.name);  ---> Error type
        console.log("Message:", error.message); ---> Error description
        console.log("Stack:", error.stack);     ---> Error location
    }
    Output -
        Name: ReferenceError
        Message: undefinedVariable is not defined
        Stack: ReferenceError: undefinedVariable is not defined at <anonymous>:2:15
* Custom Errors - 
    Kabhi-kabhi built-in errors se zyada specific errors ki zarurat hoti hai, tab hum custom errors banate hain. 
    Isme hum Error class ko extend karte hain aur apne properties add karte hain.
    Ex - 
        class ValidationError extends Error {
            constructor(message) {
                super(message); ---> Parent Error class ka constructor call karna zaroori hai
                this.name = "ValidationError"; ---> Custom error ka name
            }
        }
        // Custom error throw karte hain
        try {
            let age = -5;
            if (age < 0) {
                throw new ValidationError("Age cannot be negative!");
            }
        } 
        catch (error) {
            console.log("Name:", error.name); ---> ValidationError
            console.log("Message:", error.message); ---> Age cannot be negative!
        }


4. What are some Error Handeling Mechanism ?
Explanation :-
* Error handling ke through hum apne code mein hone wale unexpected situations ko gracefully manage karte hain. 
* JavaScript mein error handle karne ke kuch core mechanisms hote hain.
    try Block - 
        Isme woh code likha jata hai jo error throw kar sakta hai. 
        Agar koi error hoti hai, toh try block turant stop ho jata hai aur catch block execute hota hai.
    catch Block -
        Isme error ko handle kiya jata hai. 
        Yeh block error object ko access kar sakta hai.
    finally Block -
        Yeh block hamesha execute hota hai, chahe error aaye ya na aaye. 
        Cleanup operations (e.g., resource release) ke liye useful hai.
* Ex - 
    try {
        let result = 10 / 0; ---> No error here
        console.log("Result:", result);
        console.log(undefinedVariable); ---> This will throw an error
    } 
    catch (error) {
        console.log("Caught an error!");
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
    } 
    finally {
        console.log("This block will always execute!");
    }
* Throwing Errors - 
    throw keyword se hum manually errors ko throw kar sakte hain. 
    Iska use tab hota hai jab hum specific conditions ke basis par error generate karna chahein.
    Ex - 
        function divide(a, b) {
            if (b === 0) {
            throw new Error("Cannot divide by zero!"); ---> Manually throwing an error
        }
            return a / b;
        }
        try {
            console.log(divide(10, 0));
        } 
        catch (error) {
            console.log("Error caught:", error.message);
        }
* Asynchronous Error Handling - 
    Asynchronous operations (like API calls, file reads) ke errors handle karne ke liye different methods hote hain.
        async/await with try...catch -
            Async functions mein error ko handle karne ke liye try...catch block use hota hai.
            Ex - 
                async function fetchData() {
                    try {
                        let response = await fetch("https://invalidurl.com"); ---> Invalid URL
                        let data = await response.json();
                        console.log(data);
                    } 
                    catch (error) {
                        console.log("Error while fetching data:", error.message);
                    }
                }
                fetchData();
        Promises with .catch() -
            Promises ka error handle karne ke liye .catch() method use hota hai.
            Ex - 
                let promise = new Promise((resolve, reject) => {
                    reject("Something went wrong!");
                });
                promise
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log("Caught error in promise:", error);
                    });


5. What is Error Propogation ?
Explanation :-
* Error propagation ka matlab hai ki jab ek function mein error hoti hai, toh woh error kaise aur kahaan tak propagate (spread) hoti hai. 
* JavaScript mein errors propagate karne ke do main scenarios hote hain.
    Synchronous Error Propagation
	Asynchronous Error Propagation
* Synchronous Error Propagation -
    Jab ek function ke andar koi error throw hoti hai aur woh function kisi aur function ke andar call hua hota hai, toh error “upar” ke calling functions tak propagate hoti hai. 
    Agar kisi level par try...catch block nahi hai, toh error global scope tak chali jaati hai.
    Ex - 
        function level1() {
            level2(); ---> Calling level2
        }
        function level2() {
            throw new Error("An error occurred in level2!"); ---> Error thrown here
        }
        try {
            level1(); ---> Start of the call stack
        } 
        catch (error) {
            console.log("Caught error:", error.message);
        }
        Output -
            Caught error: An error occurred in level2!
        Explanation -
	        •	level2() ne error throw kiya.
	        •	Error level1() tak propagate hua.
	        •	level1() ke bahar try...catch block tha, toh error handle ho gaya.
* Asynchronous Error Propagation - 
    Asynchronous operations (like setTimeout, API calls) mein errors turant propagate nahi hoti. 
    Yeh error promises ya callbacks ke andar hoti hai aur unhein alag handle karna padta hai.
    Ex : Without Handling Asynchronous Error -
        function asyncOperation() {
            setTimeout(() => {
                throw new Error("Async error occurred!");
            }, 1000);
        }
        try {
            asyncOperation();
        } 
        catch (error) {
            console.log("Caught error:", error.message); ---> Won't catch this
        }
        Output -
	        Console mein koi error catch nahi hoga.
	        Global error uncaught rahega.
* Key Takeaways -
	Synchronous errors automatically propagate upar ke call stack tak, jab tak kisi level par try...catch block ho.
	Asynchronous errors ko manually handle karna padta hai using try...catch, .catch(), ya callbacks.
	Agar asynchronous errors ko handle nahi kiya, toh yeh global uncaught errors ban jaate hain.


6. What is Error Bubbling ?
Explanation :-
* Error bubbling ka matlab hai ki jab ek error kisi function ke andar throw hoti hai, toh woh “bubble up” karti hai call stack ke through upar ke calling functions tak, jab tak usse handle na kiya jaye. 
* Agar error handle nahi hoti, toh woh global scope tak pahunch jaati hai aur program crash ho sakta hai.
* Key Points About Error Bubbling -
	Default Behavior - Errors automatically bubble up unless explicitly caught.
	Propagation Path - Errors propagate from the innermost function (jahan error throw hoti hai) to the outermost function (global scope).
	Effect on the Call Stack - Jab tak error kisi try...catch block ke andar handle nahi hoti, woh call stack ke through upar propagate karti hai.
* Example: Error Bubbling in Synchronous Code - 
    function innerFunction() {
        throw new Error("An error occurred in innerFunction!");
    }
    function middleFunction() {
        innerFunction();
    }
    function outerFunction() {
        try {
            middleFunction();
        } 
        catch (error) {
            console.log("Caught error:", error.message);
        }
    }
    outerFunction();
    Output - 
        Caught error: An error occurred in innerFunction!
    Explanation -
	    •	innerFunction() ne error throw kiya.
	    •	Error bubble up karke middleFunction() tak gaya, fir outerFunction() tak.
	    •	outerFunction() ke andar try...catch block tha, isliye error handle ho gaya.
* Example: Error Bubbling Without Handling - 
    function innerFunction() {
        throw new Error("Uncaught error in innerFunction!");
    }
    function middleFunction() {
        innerFunction();
    }
    function outerFunction() {
        middleFunction();
    }
    outerFunction(); ---> No try-catch block
    Output -
        Uncaught Error: Uncaught error in innerFunction!
            at innerFunction
            at middleFunction
            at outerFunction
    Explanation -
	    •	Koi bhi try...catch block nahi tha, isliye error global scope tak bubble up ho gayi.
* Error Bubbling in Asynchronous Code - 
    Asynchronous code mein errors bubble up karne ka default behavior nahi hota. 
    Errors ko manually handle karna padta hai.
* Example: Without Handling Asynchronous Error -
    function asyncOperation() {
        setTimeout(() => {
            throw new Error("Uncaught async error!");
        }, 1000);
    }
    asyncOperation();
    Output - 
        Uncaught Error: Uncaught async error!
    Explanation -
        Error bubble up nahi hoti kyunki asynchronous operations ka nature hi alag hota hai.
* When Does Error Bubbling Stop -
    Error bubbling tabhi stop hoti hai jab.
	    Error ko kisi try...catch block mein handle kar diya jaye.
	    Error ko explicitly handle na karne par woh global error ban jaati hai.
* Best Practices for Handling Bubbling -
	Always Use Try-Catch Blocks - Jahan error hone ki possibility zyada ho, wahan try...catch block lagayein.
	Global Error Handlers - Backend apps mein uncaught errors ko process.on ya middleware se handle karein.
	Centralized Error Handling - Especially for frameworks like Express, error middleware ka use karein.


7. What is the difference between res.status().send() and throw new Error ?
Explanation :-
* See the Image in the folder.


8. What is the difference between Error Propogation and Error Bubbbling ?
Explanation :-
* See the Image in the folder.

9. When we use throw new Error , Which concept is being used Error Propogation or Error Bubbling ?
Explanation :-
* When you use throw new Error, the concept being used depends on how and where the error is handled. 
* It can lead to either Error Propagation or Error Bubbling based on the situation.
* Scenario 1: Error Propagation -
    If you explicitly handle or forward the error to another part of the system (e.g., middleware, higher-order functions), it is Error Propagation.
    Ex - 
        function firstFunction() {
            try {
                secondFunction();
            } 
            catch (err) {
                throw new Error("Error propagated to higher level: " + err.message); ---> Explicit propagation
            }
        }
        function secondFunction() {
            throw new Error("Something went wrong!"); ---> Error starts here
        }
        try {
            firstFunction();
        } 
        catch (err) {
            console.error(err.message); ---> Error is explicitly passed up
        }
        Explanation - 
            Yahan error ko explicitly firstFunction se propagate kiya gaya.
* Scenario 2: Error Bubbling -
    If you throw an error and let it automatically move up the call stack without explicitly forwarding it, it is Error Bubbling.
    Ex - 
        function secondFunction() {
            throw new Error("Something went wrong!"); ---> Automatic bubbling
        }
        try {
            secondFunction(); ---> Error bubbles up to this try/catch
        } 
        catch (err) {
            console.error(err.message); ---> Error caught here after bubbling
        }
        Explanation - 
            Yahan error automatically bubble hoke call stack ke upar wale handler tak pahuchti hai.
* Which Concept is Used -
	Error Propagation - 
        Jab aap throw new Error ka use karte hain aur error ko manually kisi higher layer me forward karte hain (e.g., next(err) in Express or re-throw in a catch block).
	Error Bubbling - 
        Jab aap error throw karte hain aur usse handle karne ke liye rely karte hain ki woh automatically call stack ke through bubble kare.
* Key Point -
	throw new Error is just a tool to generate an error.
	Whether it is Error Propagation or Error Bubbling depends on what happens after the error is thrown.


-----Backend Specific Error Handling-----

1. What is Express Error Middleware ?
Explanation :-
* Express applications mein error handling ko simplify aur centralize karne ke liye special error-handling middleware ka use hota hai. 
* Ye middleware application ke kisi bhi route ya middleware ke errors ko efficiently manage karta hai aur ek consistent response structure provide karta hai.
* Key Points About Express Error Middleware - 
    Error Middleware Structure - 
        Error-handling middleware ka signature 4 arguments hota hai.
        (err, req, res, next) => { ... }
            •	err: Error object jo throw ya pass kiya gaya hai.
	        •	req & res: Request aur response objects.
	        •	next: Error ko propagate karne ke liye.
    Placement in Code - 
        Error middleware ko hamesha sabse last mein define karna chahiye, kyunki middleware stack sequentially execute hota hai.
    Use Cases - 
        Invalid routes handle karna.
	    Centralized error logging aur response formatting.
	    Validation ya authentication errors ko manage karna.


2. What is Global Error Handlers ?
Explanation :-
* Global error handlers ka use hum apne application me unhandled errors ko catch karne ke liye karte hain. 
* Ye handlers humare app ke liye ek last line of defense hote hain, jo unexpected errors ko catch karke, unhe user-friendly way me handle karte hain.
* Global error handling ka main aim ye hai ki humare app me koi bhi error, chhota ho ya bada, controlled manner me handle ho aur users ko appropriate feedback mile.
* Key Concepts of Global Error Handlers - 
    Unhandled Exceptions - 
        •	Ye wo errors hote hain jo humare code me catch nahi kiye jate (i.e., try/catch block ke bahar).
	    •	Example: Database query failure, network errors, etc.
    Unhandled Promise Rejections - 
        •	Promises jo reject hote hain aur unka .catch() block attached nahi hota, wo unhandled promise rejections kehlate hain.
	    •	Node.js me agar unhandled promise rejection hoti hai, toh app crash ho sakta hai, agar usko handle nahi kiya jaye.
    Centralized Error Handling - 
        •	Global error handlers ko centralized tarike se define karte hain, jisme hum application-wide error handling manage karte hain.
	    •	It helps in maintaining a clean and structured error management system.
    Process Events -
        •	Node.js me process-level errors ko handle karne ke liye hum process.on ka use karte hain.
	    •	Jaise: process.on('uncaughtException'), process.on('unhandledRejection').

3. How Does Error Handling Middleware Work Under the Hood ?
Explanation :-
* Here’s how things work when you use error handling middleware.
	Route or Service throws an error - 
        When an error occurs in your controller or service (e.g., network issues, database issues, etc.), you simply throw the error (throw new Error(...)).
        Jab aapke controller ya service mein koi error hota hai (jaise database ka connection fail hona, network error, etc.), toh aap throw keyword ka use karke error ko throw karte hain.
        Jaise - throw new Error('Something went wrong');
        Jab error throw hota hai, toh Express us error ko directly handle nahi karta. 
        Instead, wo error bubble up karna start karta. Matlab, wo error propagate hota hai middleware chain ke through.
        Express ki ek default error propagation mechanism hoti hai. Jab koi error throw hota hai, wo error us particular route handler ya service ke andar handle nahi hota. 
        Instead, wo next middleware tak propagate ho jata hai.
	Error Propagation - 
        Express, by default, has an error propagation mechanism. When an error is thrown, it doesn’t get caught by your controller or service but instead “bubbles up” to the next middleware function.
        Express ki ek default error propagation mechanism hoti hai. Jab koi error throw hota hai, wo error us particular route handler ya service ke andar handle nahi hota. 
        Instead, wo next middleware tak propagate ho jata hai.
        Example to Show Propagation - 
            	•	Jab aap throw new Error() karte ho, toh wo error Express ko next function ke through pass ho jata hai.
	            •	Agar aap error ko handle nahi karte ho, toh wo next middleware ko pass ho jata hai, jab tak ki error handler middleware tak nahi pahuncht.
                •	Ex -
                    // Controller
                    app.get('/user', async (req, res, next) => {
                        try {
                            const user = await getUserFromDB();
                            res.status(200).json(user);
                        } catch (error) {
                            ---> Agar yahan catch block mein error ho, toh wo throw karenge aur middleware ko pass hoga
                            next(error);
                        }
                    });
                    •	next(error) is used to pass the error to the next middleware (which is the error handler middleware).
	Global Error Handler - 
        The first middleware that matches this error is your error-handling middleware. This middleware will automatically receive the error object as the first argument, and it’s responsible for sending the appropriate response to the client.
        Error ko bubble karne ke baad, Express apne middleware stack mein us error ko error-handling middleware tak pass kar dega. 
        Yeh middleware automatically us error ko first argument ke roop mein accept karega.
        Ex - 
            // Global error handler middleware
            app.use((err, req, res, next) => {
                console.error(err); ---> Log the error (for debugging)
                
                res.status(500).json({
                    message: "Something went wrong!",
                    error: err.message ---> Just sending the error message to the client
                });
            });
            Yahan:
	            •	err parameter mein woh error aayega jo kisi bhi route handler ne throw kiya tha.
	            •	Aap us error ko log kar sakte ho ya response bhej sakte ho.
	Express Error Handling Order - 
        Middleware in Express is executed in the order it’s defined. By placing your error-handling middleware at the end (after all route handlers), you ensure that if any route handler (or service) throws an error, the global error handler will catch it.
        Express mein middleware order bahut important hai. Middleware execute hone ka sequence aapke app.use() ya route handler ke order pe depend karta hai.
	        •	Routes sabse pehle run hoti hain.
	        •	Uske baad agar koi error hoti hai, toh error-handling middleware us error ko catch karta hai.
        Agar aap error handler middleware ko last mein rakhte ho, toh wo har route ke baad execute hoga, jo ki ensure karega ki agar koi route ya service error throw kare, toh wo error properly handle ho jaye.


4. What are Custom Error Class ?
Explanation :-
* Custom Error Classes ka use hum tab karte hain jab hume apne specific errors ko handle karna ho, jo generic errors se alag ho. 
* Custom errors ka fayda ye hota hai ki hum apne application ki specific error types ko define kar sakte hain aur unhe easily handle kar sakte hain. 
* Isse error handling zyada structured aur clear ho jati hai.
* Why Use Custom Error Classes - 
    Improved Readability - 
        •	Jab aap ek specific error throw karte ho (e.g., ValidationError ya DatabaseError), toh aapke code ko padhne walon ko clear idea milta hai ki kya problem thi.
    Error Categorization - 
        •	Custom errors se aap easily apne errors ko categorize kar sakte hain, jise aap specific code block ke andar handle kar sakte hain.
    Extending Built-in Errors -
        •	JavaScript me jo built-in errors hote hain, unko aap easily extend karke apni custom errors create kar sakte hain.
    Centralized Error Handling - 
        •	Custom errors se aap apne errors ko ek specific type de sakte hain, jisse aap easily centralized error handler me unhe catch kar sakein.
* Creating Custom Error Classes - 
    JavaScript me custom errors create karne ke liye aap Error class ko extend kar sakte hain. 
    Isse aapko message, name, aur stack properties milti hain jo har error me hoti hain. 
    Aap apni custom properties bhi add kar sakte hain.
* Basic Structure of a Custom Error Class - 
    class CustomError extends Error {
        constructor(message) {
            super(message); ---> Call the parent class constructor (Error)
            this.name = this.constructor.name; ---> Set the name to the class name (CustomError)
            this.stack = (new Error()).stack; ---> Set the stack trace
        }
    }
* Example: Custom Validation Error Class - 
    class ValidationError extends Error {
        constructor(message, field) {
            super(message);
            this.name = "ValidationError";
            this.field = field; // Additional custom property to specify which field has the error
        }
    }
    ---> Usage
    const validateUser = (user) => {
        if (!user.email) {
            throw new ValidationError("Email is required", "email");
        }
    };
    try {
        validateUser({});
    } 
    catch (error) {
        if (error instanceof ValidationError) {
            console.log(`Validation failed for field: ${error.field}`);
            console.log(`Error Message: ${error.message}`);
        } 
        else {
            console.log("An unexpected error occurred");
        }
    }
    Explanation -
        super(message):
            Ye Error class ka constructor call karta hai jisme error ka message pass kiya jata hai.
        this.name:
            Hum custom error class ka name set kar rahe hain, jo ki default error name (Error) se alag hoga.
        this.stack:
            Ye error ka stack trace set karta hai, jisse debugging me madad milti hai.
        Custom Properties:
            Hum custom properties bhi define kar sakte hain, jaise ki field property in ValidationError class, jo hume batayegi ki error kis field me hua.
* Best Practices for Custom Errors -
    Inherit From Error Class - 
        Always make sure ki aap custom error class ko Error class se inherit kar rahe ho, taki aapko stack trace aur message jaise built-in features milein.
    Meaningful Names - 
        Aap jo custom error class bana rahe ho, uska naam meaningful hona chahiye. Jaise ValidationError, DatabaseError, etc.
    Include Extra Information - 
        Custom errors me extra information include karein, jo error ko samajhne me madad kare. Example: field in ValidationError, statusCode in HTTPError.
    Use Custom Errors for Specific Cases - 
        Generic errors se avoid karein. Specific scenarios ke liye apne custom errors ka use karein.
 
*/