/* 

-----Introduction to JS-----

1. What is JS ?
Explanation :-
* JavaScript (JS) is a high-level, interpreted scripting language used to create interactive effects within web browsers.

2. What is the History of JS ?
Explanation :-
* Created by Brendan Eich in 1995 for Netscape Navigator. 
* Initially called Mocha, then renamed to LiveScript, and finally JavaScript.

3. How many versions of JS is there ?
Explanation :-
* ECMAScript (ES) versions: ES1 (1997), ES2 (1998), ES3 (1999), ES5 (2009), ES6/ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ES2021, ES2022, and ES2023.

4. How to run JS ?
Explanation :-
* Run JavaScript in web browsers using <script> tags or in server environments with Node.js. 
* Also, use online JS playgrounds like JSFiddle or CodePen.

-----All about Variables-----

1. What is var | let | const in JS ?
Explanation :-
	•	var - Function-scoped, can be re-declared and updated.
	•	let - Block-scoped, can be updated but not re-declared within the same scope.
	•	const - Block-scoped, cannot be updated or re-declared. The value is immutable

2. What is Variable Declarations ?
Explanation :-
* The act of defining a variable using var, let, or const.
3. What is Hoisting ?
Explanation :-
* JavaScript’s behavior of moving variable and function declarations to the top of their containing scope during compilation.

4. What is Variable Naming Rules ?
Explanation :-
* Must start with a letter, underscore (_), or dollar sign ($). 
* Subsequent characters can be letters, numbers, underscores, or dollar signs.

5. What is Block | Function | Global Variable Scopes ?
Explanation :-
	•	Block Scope - Variables declared with let or const inside a {} block.
	•	Function Scope - Variables declared with var inside a function.
	•	Global Scope - Variables declared outside any function or block

-----Data Types-----

1. What is Primitive DTs ?
Explanation :-
* Primitive Data Types - Basic types that are immutable (e.g., string, number, boolean).

2. What is Non-Primitive DTs ?
Explanation :-
* Non-Primitive Data Types - Complex types that are mutable (e.g., object, array).

3. What are these in Primitive DT ?
    String
    Number
    Boolean
    Undefined
    BigInt
    Null
    Symbol
Explanation :-
	•	String - Represents text. Example: "Hello".
	•	Number - Represents numeric values. Example: 42.
	•	Boolean - Represents true or false.
	•	Undefined - A variable that has been declared but not yet assigned a value.
	•	BigInt - Represents integers with arbitrary precision. Example: 9007199254740991n.
	•	Null - Represents the intentional absence of any object value.
	•	Symbol - A unique and immutable value used as an identifier. Example: Symbol('id').

4. What are these in Non-Primitive DT ?
    Object
        Object Prototype
        Prototypal Inheritance
        Built-In Objects
        typeof Operator
Explanation :-
•	Object - Collection of key-value pairs.
	•	Object Prototype - Base object from which other objects inherit properties.
	•	Prototypal Inheritance - Mechanism by which objects inherit properties from other objects.
	•	Built-In Objects - JavaScript objects provided by the language, like Math or Date.
	•	typeof Operator - Used to determine the type of a variable.

-----Type Casting-----

1. What is Type Conversion vs Coercion ?
Explanation :-
	•	Type Conversion - Explicitly converting a value from one type to another (e.g., Number('123')).
	•	Coercion - Implicit conversion of values by JavaScript (e.g., "5" + 1 results in "51").

2. What is Implicit Type Casting ?
Explanation :-
* Automatic conversion by JavaScript when performing operations with mixed types.

3. What is Explicit Type Casting ?
Explanation :-
* Manually converting a value using functions like Number(), String(), Boolean().

-----Data Structures-----

1. What is Structured Data and What is the below type ?
    JSON
Explanation :-
* Structured Data - Data organized in a specific format.
	•	JSON (JavaScript Object Notation) - Lightweight data interchange format.

2. What is Keyed Collections and What is the below type ?
    Map 
    Weak Map
    Set
    Weak Set
Explanation :-
	•	Map - Collection of key-value pairs with keys of any type.
	•	WeakMap - Similar to Map, but keys must be objects and are weakly referenced.
	•	Set - Collection of unique values.
	•	WeakSet - Similar to Set, but values must be objects and are weakly referenced.

3. What is Indexed Collections and What is the below type ?
    Typed Arrays
    Arrays
Explanation :-
	•	Typed Arrays - Array-like objects for handling binary data (e.g., Uint8Array).
	•	Arrays - Ordered collections of items.

-----Equality Comparisons-----

1. What are Value Comparison Operators ?
    ==
    ===
    Object.is
Explanation :-
	•	== - Loose equality (performs type conversion).
	•	=== - Strict equality (no type conversion).
	•	Object.is - Determines if two values are the same.

2. What are Equality Algorithms ?
    isLooselyEqual
    isStrictlyEqual
    SameValueZero
    SameValue
Explanation :-
	•	isLooselyEqual - Equivalent to ==.
	•	isStrictlyEqual - Equivalent to ===.
	•	SameValueZero - === with -0 and +0 considered equal.
	•	SameValue - Similar to Object.is.

-----Loops and Iterations-----

1. What are Loops ?
Explanation :-
* Constructs to execute a block of code repeatedly (e.g., for, while).

2. What are Iterations ?
Explanation :-
* The process of executing code repeatedly with changes in the loop variable.

3. What are these and What do they mean ?
    for
    while
    do-while
    break
    continue
    for-of
    for-in
Explanation :-
	•	for - Basic loop with initialization, condition, and increment.
	•	while - Loop that executes while a condition is true.
	•	do-while - Loop that executes at least once and then continues while a condition is true.
	•	break - Exits the loop prematurely.
	•	continue - Skips the current iteration and proceeds with the next iteration.
	•	for-of - Iterates over iterable objects (e.g., arrays).
	•	for-in - Iterates over enumerable properties of an object.

-----Control Flow-----

1. What are Conditional Statements ?
    if-else
    Switch
Explanation :-
	•	if-else - Executes code based on a condition.
	•	Switch - Selects one of many blocks of code to execute.

2. What are Exception Handeling ?
    throw Statement
    try | catch | finally
    Error Objects    
Explanation :-
	•	throw Statement - Raises a custom error.
	•	try | catch | finally - Blocks to handle exceptions.
	•	Error Objects - Objects representing errors.

-----Expressions and Operators-----

1. What are these ?
    Conditional Operators
    Comma Operators
    Unary Operators
    Relational Operators
    Assignment Operators
    Comparison Operators
    Arithmetic Operators
    Bitwise Operators
    Logical Operators
    BigInt Operators
    String Operators
Explanation :-
	•	Conditional Operators : Ternary (? :).
	•	Comma Operators : , (evaluates multiple expressions).
	•	Unary Operators : +, -, !, etc.
	•	Relational Operators : <, >, <=, >=.
	•	Assignment Operators : =, +=, -=, etc.
	•	Comparison Operators : ==, ===, !=, !==.
	•	Arithmetic Operators : +, -, *, /, %.
	•	Bitwise Operators : &, |, ^, ~.
	•	Logical Operators : &&, ||, !.
	•	BigInt Operators : Used with BigInt type.
	•	String Operators : Concatenation using +.

-----Functions-----

1. What are Function Parameters ?
    Default Params
    Rest
Explanation :-
	•	Default Params - Parameters with default values.
	•	Rest - Collects remaining parameters into an array.

2. What are Arrow Function ?
Explanation :-
* Shorter syntax for writing functions, with lexical this binding.

3. What are IIFEs ?
Explanation :-
* Immediately Invoked Function Expressions - Functions executed immediately after their creation.

4. What is Argument Object ?
Explanation :-
* An array-like object containing the arguments passed to a function.

5. What is Scope and Function Stack ?
Explanation :-
	•	Scope - The visibility of variables.
	•	Function Stack - The call stack of function executions.

6. What is Recursion ?
Explanation :-
* Function calling itself.

7. What is Lexical Scoping ?
Explanation :-
* Scoping rules where inner functions have access to variables in their outer function.

8. What is Closures ?
Explanation :-
* Functions that retain access to their lexical scope even when executed outside that scope.

9. What are Built-in Functions ?
Explanation :-
* Functions provided by JavaScript (e.g., parseInt(), Math.max()).

-----DOM APIs-----

1. What are DOM APIs ?
Explanation :-
* Interfaces for interacting with HTML and XML documents. 
* Examples include document.getElementById(), element.addEventListener().

-----Strict Mode-----

1. What is Strict Mode in JS ?
Explanation :-
* A stricter version of JavaScript that helps catch common coding errors and prevents the use of some features. 
* Enabled by adding "use strict"; at the beginning of a script or function.

-----Using this Keyword-----

1. How to use this Keyword in a Method ?
Explanation :-
* Refers to the object that owns the method. 
* Example - this inside a method refers to the object that the method is a property of.

2. How to use this Keyword in a Function ?
Explanation :-
* In a regular function, this refers to the global object (window in browsers) or undefined in strict mode.

3. How to use this Keyword alone ?
Explanation :-
* When used alone, this refers to the global object in non-strict mode or is undefined in strict mode.

4. How to use this Keyword in event handlers ?
Explanation :-
* Refers to the element that triggered the event.

5. How to use this Keyword in arrow Functions ?
Explanation :-
* this in arrow functions is lexically bound to the context in which the arrow function was created.

6. What is Function Borrowing ?
Explanation :-
* Calling a method of one object in the context of another object using call or apply.

7. What is Explicit Binding and What are these ?
    call
    apply
    bind
Explanation :-
	•	call - Invokes a function with a specified this value and arguments.
	•	apply - Similar to call, but arguments are passed as an array.
	•	bind - Creates a new function that, when called, has its this keyword set to a specific value.

-----Asynchronous JS-----

1. What is Event Loop ?
Explanation :-
* The mechanism that handles asynchronous operations by executing code, handling events, and executing messages in a queue.

2. What are Callbacks ?
Explanation :-
* Functions passed as arguments to other functions that are executed after the completion of some operation.

3. What is Callback Hell ?
Explanation :-
* The phenomenon where callbacks are nested within other callbacks, making code hard to read and maintain.

4. What are Promises ?
Explanation :-
* Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

5. What is async/await ?
Explanation :-
* Syntax for working with asynchronous code that makes it look and behave like synchronous code.

6. What is setTimeout ?
Explanation :-
* Function that executes a callback after a specified delay.

7. What is setInterval ?
Explanation :-
* Function that repeatedly executes a callback with a fixed time delay between each call.

-----Working with APIs-----

1. What is Fetch in JS ?
Explanation :-
* fetch() is a modern method for making HTTP requests, returning a Promise that resolves to the Response object.

2. What is XMLHTTPRequest in JS ?
Explanation :-
* The older method for making HTTP requests, used for asynchronous data fetching and updating web pages without reloading.

-----Classes-----

1. What are Classes in JS ?
Explanation :-
* Blueprints for creating objects with shared properties and methods. 
* Introduced in ES6, providing a clearer syntax for constructor functions and prototypes.

-----Itertors and Generators-----

1. What are Iterators in JS ?
Explanation :-
* Objects that define a sequence and potentially a return value upon completion. 
* Implement the Iterator protocol with methods like next().

2. What are Generators in JS ?
Explanation :-
* Special functions that can pause and resume their execution using yield. 
* Defined with function* syntax and return an iterator object.

-----Modules in JS-----

1. What is CommonJS Module in JS ?
Explanation :-
* Module system used in Node.js. 
* Modules are loaded synchronously and use require() and module.exports.

2. What is ESM Module in JS ?
Explanation :-
* ECMAScript Modules (ESM), Standard module system for JavaScript, allowing asynchronous loading with import and export.

-----Memory Management-----

1. How does Memory Management happen in JS ?
Explanation :-
* Managed automatically by JavaScript’s garbage collector, which reclaims memory used by objects no longer reachable.

2. What is Memory Lifecycle ?
Explanation :-
* The process of allocating and deallocating memory for objects during the runtime of a program.

3. What is Garbage Collection ?
Explanation :-
* The automatic process of identifying and removing objects that are no longer in use to free up memory.

-----Using Browser DevTools-----
1. What are some Debugging issues in JS ?
Explanation :-
* Using console.log() :
	•	Purpose - Quickly log variable values and check the flow of execution.
	•	Output - Shows up in the Console panel of browser DevTools with references to the code location.
	•	Limitations - Can clutter code and may not handle complex debugging scenarios effectively.
* Breakpoints and Sources Panel :
	•	Breakpoints - Set these in the Sources panel to pause code execution at specific lines, allowing inspection of variable states and the call stack.
	•	Sources Panel - Use it to navigate through your code and manage breakpoints for more controlled and effective debugging.

2. What are Debugging Memory Leaks in JS ?
Explanation :-
* Common Causes :
	•	Short-lived Objects - Objects that are temporary but are still referenced by long-lived objects.
	•	Garbage Collector - Struggles to de-allocate memory because these objects are still accessible from the global scope or other persistent references.
* Detecting Leaks :
	•	Use the Memory panel in browser DevTools to take heap snapshots and analyze memory usage.
	•	Look for detached DOM trees or large objects that aren’t being cleaned up.

3. What are Debugging Performance in JS ?
Explanation :-
* Using Lighthouse :
	•	Purpose - Analyze your website’s performance, page speed, accessibility, and more.
	•	Process -
	    •	Open DevTools and go to the Lighthouse tab.
	    •	Run tests by clicking “Analyze Page Load.”
	    •	For accurate results, use an incognito tab to avoid interference from browser extensions.
* Interpreting Results :
	•	Review the performance metrics and suggestions provided.
	•	Refer to linked resources for deeper insights into each test result to understand how to improve performance.

*/