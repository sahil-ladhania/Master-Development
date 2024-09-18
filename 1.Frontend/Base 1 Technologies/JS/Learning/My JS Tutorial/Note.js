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
* When you want to run JS in Browsers - Use <script> Tag.
* When you want to run JS in Server Environments - Use NodeJS.
* Also, use online JS playgrounds like JSFiddle or CodePen.

-----All about Variables-----

1. What is var | let | const in JS ? ----------------------------------------------------------------------------> IMP
Explanation :-
	•	var - "Function-scoped", can be re-declared and updated.
	•	let - "Block-scoped", can be updated but not re-declared within the same scope.
	•	const - "Block-scoped", cannot be updated or re-declared. The value is immutable

2. What is Variable Declarations ?
Explanation :-
* The act of defining a variable using var, let, or const.

3. What is Variable Naming Rules ?
Explanation :-
* Must start with a letter, underscore (_), or dollar sign ($).
* Subsequent characters can be letters, numbers, underscores, or dollar signs.

4. What is Global | Function | Block Variable Scopes ? ------------------------------------------------------------> IMP
Explanation :-
* Scope -
    Refers to the visibility of a variable or how it can be used after it is declared.
    Scope of a variable depends on the keyword that was used to declare it.
* Note -
    Before ES6 (2015), JavaScript had only "Global Scope" and "Function Scope" with the "var" keyword.
    ES6 introduced "let" and "const" which allow "Block Scope" in JavaScript.
	•	Block Scope - Variables declared with let or const inside a {} block.
	•	Function Scope - Variables declared with var inside a function.
	•	Global Scope - Variables declared outside any function or block.

5. What is Hoisting ? ----------------------------------------------------------------------------> IMP
Explanation :-
* JavaScript’s behavior of moving variable and function declarations to the top of their containing scope during compilation.
* JavaScript mein hoisting ka matlab hai ki variables aur function declarations ko unki scope ke top pe move kar diya jaata hai execution ke time pe, chahe wo physically code ke bottom mein declare kiye gaye ho.
* Lekin, hoisting ke time pe variables ko unka value assign nahi hota hai (initialization nahi hota hai).
* Hoisting in var : | Declarations are Hoisted and Initialized with Undefined | No Temporal Dead Zone |
* Hoisting in let : | Declarations are Hoisted but not Initialized | Variables are in the Temporal Dead Zone until their Declaration is Encountered |
* Hoisting in const : | Declarations are Hoisted but not Initialized | Variables are in the Temporal Dead Zone until their Declaration is Encountered |
* Jab let aur const keywords use hote hain, to unki declarations hoist hoti hain, matlab unhe unki scope ke top pe move kar diya jaata hai, lekin unhe initialize nahi kiya jaata hai jab tak unki actual declaration line nahi aati.
* Isliye, unhe use karne se pehle ek “Temporal Dead Zone” (TDZ) mein hoti hain.
* TDZ wo period hai jahan variable hoisted hai lekin initialized nahi hai.
* Refer to Namaste JS Ep-3 for Detail Explanation.

-----Data Types-----

1. What is Primitive DTs ?
Explanation :-
* Basic types that are Immutable(Unchangeable).
* Ex - string, number, boolean etc.
* Why Immutable(Unchangeable) -   ----------------------------------------------------------------------------> IMP
    Because when you perform operations on primitives (like strings or numbers), a new value is created rather than modifying the existing value.
        let str = "hello";
        str = str.toUpperCase(); // "HELLO"
        // The original "hello" string is not changed; a new string "HELLO" is created.
* Memory Efficiency -
    Stored directly in memory, the immutability helps optimize performance and memory usage, as creating new primitives is usually lightweight.

2. What is Non-Primitive DTs ?
Explanation :-
* Also known as Reference DTs.
* Complex types that are Mutable(Changeable).
* Ex - object, array etc.
* Why Reference DTs -        ----------------------------------------------------------------------------> IMP
    Because they store a reference (memory address) to the actual data rather than storing the data itself.
    When you create an object or an array, the variable doesn’t store the actual value.
    Instead, it stores a reference (memory address) pointing to the location in memory where the data is stored.
* Why Mutable(Changeable) -    ----------------------------------------------------------------------------> IMP
    Because changes to their elements or properties directly modify the original data stored in memory, without creating new copies.
        let arr = [1, 2, 3];
        arr[0] = 10;
        // The original array [1, 2, 3] is changed to [10, 2, 3]
* Memory Efficiency - Stored as references, mutable structures are more flexible for complex data management.

3. What are these in Primitive DT ?
    String
    Number
    Boolean
    Undefined
    BigInt
    Null
    Symbol
Explanation :-
	•	String -
                Represents text.
                Example: "Hello".
	•	Number -
                Represents numeric values.
                Example: 42.
	•	Boolean -
                Represents true or false.
	•	Undefined -  --------------------------------------------------------------------------> IMP
                    A variable that has been declared but not yet assigned a value.
                    You can assign undefined in a Variable , but Never Do That.
	•	BigInt -  --------------------------------------------------------------------------> IMP
                Represents integers with arbitrary precision.
                Example: 9007199254740991n.
	•	Null -  --------------------------------------------------------------------------> IMP
                Represents the intentional absence of any object value.
	•	Symbol -  --------------------------------------------------------------------------> IMP
                A unique and immutable value used as an identifier.
                Example: Symbol('id').

4. What are these in Non-Primitive DT ?
    Object
        Object Prototype
        Prototypal Inheritance
        Built-In Objects
        typeof Operator
    Array
    Function
Explanation :-
* There are generally 3 main types of Non-Primitive DT :
    Object
    Array
    Function
* Object -
    The fundamental non-primitive data type in JavaScript, used to store collections of key-value pairs.
    Key Features :
        Keys (Properties) - Can be a string or a symbol.
                            Example: name, age.
        Values - Can be any data type (string, number, array, function, another object, etc.).
    Accessing Object Properties :
        Dot Notation -
            Ex: person.name
        Bracket Notation -
            Ex: person["age"]
    Nested Objects -
        You can have objects within objects, creating a hierarchical structure.
    Object Prototype - -----------------------------------------------------------------------------------------> IMP
        Every JavaScript object has an internal property called [[Prototype]], which refers to another object.
        This is where prototypal inheritance comes in.
        Base object from which other objects inherit properties.
    Prototype Chain - -----------------------------------------------------------------------------------------> IMP
        When accessing a property, JavaScript first looks for it in the object itself.
        If it doesn’t find it, it moves up the prototype chain to look for the property in the prototype.
    Prototypal Inheritance - -------------------------------------------------------------------------------------> IMP
        Objects inherit from other objects through prototypes.
        This allows reusing methods and properties across multiple objects.
        Mechanism by which objects inherit properties from other objects.
    Built-In Objects -
        JavaScript provides several built-in objects, such as :
                •	Object
                •	Array
                •	Date
                •	Math
                •	JSON
                •	Number
                •	String
        These objects come with pre-defined methods and properties.
        JavaScript objects provided by the language, like Math or Date.
    typeof Operator -
        The typeof operator helps determine the type of a variable.
* Array -
    An array is a special type of object designed to store ordered lists of values.
    Arrays are dynamic and can grow or shrink as needed.
    They also come with many built-in methods for manipulating data.
    Key Concepts :
        Array Structure - let arr = [1, 2, 3, 4, 5];
        Accessing Elements - Arrays are zero-indexed, meaning the first element has an index of 0.
        Modifying Arrays - You can modify, add, or remove elements in arrays.
    Multidimensional Arrays -
        Arrays can also hold other arrays as elements, creating a multidimensional array.
    Array’s Prototype - --------------------------------------------------------------------------------------> IMP
        Arrays in JavaScript inherit from Array.prototype, which provides the array methods (map(), forEach(), etc.).
    Array-Like Objects - -------------------------------------------------------------------------------------> IMP
        Some objects (like arguments or NodeList) are array-like, meaning they have a length property and can be indexed like arrays, but they don’t have array methods like map() or forEach().
* Function - -------------------------------------------------------------------------------------> IMP
    Functions in JavaScript are first-class objects, meaning they can be treated like any other object.

-----Type Conversion-----

1. What is Type Conversion ? --------------------------------------------------------------------------------> IMP
Explanation :-
* To convert from one datatype to another, whether explicitly or implicitly.
* Two types :
    Type Coersion(Implicit Type Conversion) -
        "Apne Aap Conversion".
        Implicit conversion of values by JavaScript.
        Ex -  "5" + 1 = "51"
    Type Casting(Explicit Type Conversion) -
        "Jabardasti Conversion"
        Explicit conversion of values.
        Ex -
            let str = "123";
            let num = Number(str);
            console.log(num);

-----Data Structures-----

1. What is Structured Data and What is the below type ?
    JSON
Explanation :-
* Structured Data - Data organized in a specific format.
	•	JSON (JavaScript Object Notation) - Lightweight data interchange format.

2. What is Keyed Collections and What is the below type ? --------------------------------------------------------> IMP
    Map
    Weak Map
    Set
    Weak Set
Explanation :-
	•	Map - Collection of key-value pairs with keys of any type.
	•	WeakMap - Similar to Map, but keys must be objects and are weakly referenced.
	•	Set - Collection of unique values.
	•	WeakSet - Similar to Set, but values must be objects and are weakly referenced.

3. What is Indexed Collections and What is the below type ? -------------------------------------------------------> IMP
    Typed Arrays
    Arrays
Explanation :-
* Indexed Collections are collections that have numeric indices i.e. the collections of data that are ordered by an index value.
	•	Typed Arrays - Array-like objects for handling binary data (e.g., Uint8Array).
	•	Arrays - Ordered collections of items.

-----Equality Comparisons-----

1. What are Value Comparison Operators ? --------------------------------------------------------------------------> IMP
    ==
    ===
    Object.is
Explanation :-
	•	== -> Loose equality (performs type conversion).
	•	=== -> Strict equality (no type conversion).
	•	Object.is -> Determines if two values are the same.

2. What are Equality Algorithms ? --------------------------------------------------------------------------------> IMP
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
	•	for-of - Iterates over iterable objects (e.g., arrays). --------------------------------------------------> IMP
	•	for-in - Iterates over enumerable properties of an object. -----------------------------------------------> IMP

-----Control Flow-----

1. What are Conditional Statements ?
    if-else
    Switch
Explanation :-
	•	if-else - Executes code based on a condition.
	•	Switch - Selects one of many blocks of code to execute.

2. What are Exception Handeling ? --------------------------------------------------------------------------------> IMP
    throw Statement
    try | catch | finally
    Error Objects
Explanation :-
* In JavaScript, all exceptions are simply objects.
* While the majority of exceptions are implementations of the global Error class, any old object can be thrown.
* There are two ways to throw an exception - "Directly via an Error object" or "Through a custom object".
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
* Expressions - An expression in JavaScript is any valid unit of code that resolves to a value. Expressions can include variables, literals, and operators.
* Operators - Operators are symbols used in expressions to perform operations on operands (values and variables).
	•	Conditional Operators : Ternary (? :). -------------------------------------------------------------------> IMP
	•	Comma Operators : ,  Evaluates each of its operands (from left to right) and returns the value of the last operand. ----------------------------------------------------> IMP
	•	Unary Operators : +, -, !, etc.
	•	Relational Operators : <, >, <=, >=.
	•	Assignment Operators : =, +=, -=, etc.
	•	Comparison Operators : ==, ===, !=, !==.
	•	Arithmetic Operators : +, -, *, /, %.
	•	Bitwise Operators : &, |, ^, ~. ---------------------------------------------------------------------------> IMP
	•	Logical Operators : &&, ||, !.
	•	BigInt Operators : Used with BigInt type. -----------------------------------------------------------------> IMP
	•	String Operators : Concatenation using +. -----------------------------------------------------------------> IMP

-----Functions-----

1. What are Function Parameters ? ---------------------------------------------------------------------------------> IMP
    Default Params
    Rest
Explanation :-
	•	Default Params - Parameters with default values. Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
	•	Rest - Collects remaining parameters into an array.

2. What are Arrow Function ? ------------------------------------------------------------------------------------> IMP
Explanation :-
* Shorter syntax for writing functions, with lexical this binding.

3. What are IIFEs ? ----------------------------------------------------------------------------------------------> IMP
Explanation :-
* Immediately Invoked Function Expressions - Functions executed immediately after their creation.

4. What is Argument Object ? --------------------------------------------------------------------------------------> IMP
Explanation :-
* An array-like object containing the arguments passed to a function.

5. What is Scope and Function Stack ? -----------------------------------------------------------------------------> IMP
Explanation :-
	•	Scope :
                * The visibility of variables.
                * Space or environment in which a particular variable or function can be accessed or used.
                * Accessibility of this variable or function depends on where it is defined.
                * JavaScript has the following kinds of scopes :
                    Global scope - The default scope for all code running in script mode.
                    Module scope - The scope for code running in module mode.
                    Function scope - The scope created with a function.
                    Block scope - The scope created with a pair of curly braces (a block).
	•	Function Stack(Call Stack) -
                                    * The call stack of function executions.
                                    * The function stack is how the interpreter keeps track of its place in a script that calls multiple functions, like which function is currently executing and which functions within that function are being called.

6. What is Recursion ? --------------------------------------------------------------------------------------------> IMP
Explanation :-
* Function calling itself.

7. What is Lexical Scoping ? --------------------------------------------------------------------------------------> IMP
Explanation :-
* Scoping rules where inner functions have access to variables in their outer function.

8. What is Closures ? ---------------------------------------------------------------------------------------------> IMP
Explanation :-
* Functions that retain access to their lexical scope even when executed outside that scope.

9. What are Built-in Functions ? ----------------------------------------------------------------------------------> IMP
Explanation :-
* Functions provided by JavaScript (e.g., parseInt(), Math.max()).

-----DOM APIs-----

1. What is DOM ? --------------------------------------------------------------------------------------------> IMP
Explanation :-
* Programming Interface for web documents.
* But NOT a Programming Langauge.
* DOM is a tree-like Representation of the web page that gets loaded into the browser.
* DOM represents the document as Nodes and Objects.
* Not a feature of JS , But a Web Api for building Websites
* The Document Object Model, or DOM for short, represents all page content as objects that can be modified.
* The document object is the main “entry point” to the page. We can change or create anything on the page using it.
* DOM is not only for browsers.

2. Why DOM ? --------------------------------------------------------------------------------------------> IMP
Explanation :-
* JavaScript makes the HTML page Active and Dynamic via the DOM.

3. What are DOM APIs ? --------------------------------------------------------------------------------------------> IMP
Explanation :-
* Interfaces for interacting with HTML and XML documents.
* Examples include document.getElementById(), element.addEventListener().

4. What is DOM Tree ? --------------------------------------------------------------------------------------------> IMP
Explanation :-
* DOM is structured as a tree, where each Node represents an Object in the document.
* When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.
* The backbone of an HTML document is tags.
* According to the Document Object Model (DOM), every HTML tag is an object.
* Nested tags are “children” of the enclosing one.
* The text inside a tag is an object as well.
* Every tree node is an object.
* Tags are element nodes (or just elements) and form the tree structure.
* <html> is at the root, then <head> and <body> are its children, etc.
* The text inside elements forms text nodes, labelled as #text.
* A text node contains only a string.
* It may not have children and is always a leaf of the tree.
* Please note the special characters in text nodes:
    a newline : ↵ (in JavaScript known as \n)
    a space : ␣
* Spaces and newlines are totally valid characters, like letters and digits.
* They form text nodes and become a part of the DOM.
* So, for instance, in the example above the <head> tag contains some spaces before <title>, and that text becomes a #text node (it contains a newline and some spaces only).
* There are only two top-level exclusions :
    Spaces and newlines before <head> are ignored for historical reasons.
    If we put something after </body>, then that is automatically moved inside the body, at the end, as the HTML spec requires that all content must be inside <body>. So there can’t be any spaces after </body>.
* Spaces at string start/end and space-only text nodes are usually hidden in tools.

5. What is the Bird’s Eye View of How JS runs in the Browser ?
Explanation :-
* Refer to the Image.
* window :
    DOM
    BOM
    JS
* There’s a “root” object called window. It has two roles :
    First, it is a global object for JavaScript code, as described in the chapter Global object.
    Second, it represents the “browser window” and provides methods to control it.

6. What is DOM ?
Explanation :-
* The Document Object Model, or DOM for short, represents all page content as objects that can be modified.
* The document object is the main “entry point” to the page. We can change or create anything on the page using it.
* DOM is not only for browsers.

7. What is BOM ?
Explanation :-
* The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.
* Provides :
    navigator
    screen
    location
    frames
    history
    XMLHttpRequest
* The functions | alert | confirm | prompt | are also a part of the BOM - they are not directly related to the document, but represent pure browser methods for communicating with the user.
* The BOM is a part of the general HTML specification.

8. What is Auto-Correction in DOM ?
Explanation :-
* If the browser encounters malformed HTML, it automatically corrects it when making the DOM.
* For instance, the top tag is always <html>. Even if it doesn’t exist in the document, it will exist in the DOM, because the browser will create it. The same goes for <body>.
* While generating the DOM, browsers automatically process errors in the document, close tags and so on.
* A document with unclosed tags will become a normal DOM as the browser reads tags and restores the missing parts.
* An interesting “special case” is tables. By DOM specification they must have <tbody> tag, but HTML text may omit it. Then the browser creates <tbody> in the DOM automatically.

9. What are some Other Node Types ?
Explanation :-
* Why is a comment added to the DOM when It doesn’t affect the visual representation in any way. But there’s a rule –> If something’s in HTML, then it also must be in the DOM tree.
* Everything in HTML, even comments, becomes a part of the DOM.
* Even the <!DOCTYPE...> directive at the very beginning of HTML is also a DOM node. It’s in the DOM tree right before <html>. Few people know about that. We are not going to touch that node, we even don’t draw it on diagrams, but it’s there.
* The document object that represents the whole document is, formally, a DOM node as well.
* There are 12 node types. In practice we usually work with 4 of them :
    document – the “entry point” into DOM.
    element nodes – HTML-tags, the tree building blocks.
    text nodes – contain text.
    comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.

10. What is the Document Object ?
Explanation :-
* Top most Object in the DOM.
* Represents the entire document.
* It has properties and methods which you can use to get information about the document using a rule known as Dot Notation.

11. What is On Top of the DOM ?
Explanation :-
* The topmost tree nodes are available directly as document properties :
    <html> = document.documentElement
        The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
    <body> = document.body
        Another widely used DOM node is the <body> element – document.body.
    <head> = document.head
        The <head> tag is available as document.head.
* There’s a catch - document.body can be null.
    A script cannot access an element that doesn’t exist at the moment of running.
    In particular, if a script is inside <head>, then document.body is unavailable, because the browser did not read it yet.
    In the DOM world null means “doesn’t exist”.
    In the DOM, the null value means “doesn’t exist” or “no such node”.

12. What is Children in DOM , like childNodes, firstChild, lastChild ?
Explanation :-
* There are two terms that we’ll use from now on :
    Child nodes (or children)
    Descendants
* Child nodes (or children) - Elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.
* Descendants - All elements that are nested in the given one, including children, their children and so on.

13. What are DOM Collections ?
Explanation :-
* As we can see, childNodes looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object.
* There are two important consequences :
    We can use for..of to iterate over it.
        for (let node of document.body.childNodes) {
            alert(node); // shows all nodes from the collection
        }
        That’s because it’s iterable (provides the Symbol.iterator property, as required).
    Array methods won’t work, because it’s not an array.
        alert(document.body.childNodes.filter); // undefined (there's no filter method!)
        The first thing is nice. The second is tolerable, because we can use Array.from to create a “real” array from the collection, if we want array methods.
        alert( Array.from(document.body.childNodes).filter ); // function
* DOM collections are read-only.
    DOM collections, and even more – all navigation properties listed in this chapter are read-only.
    We can’t replace a child by something else by assigning childNodes[i] = ....
    Changing DOM needs other methods. We will see them in the next chapter.
* DOM collections are live.
    Almost all DOM collections with minor exceptions are live. In other words, they reflect the current state of DOM.
    If we keep a reference to elem.childNodes, and add/remove nodes into DOM, then they appear in the collection automatically.
* Don’t use for..in to loop over collections.
    Collections are iterable using for..of. Sometimes people try to use for..in for that.
    Please, don’t. The for..in loop iterates over all enumerable properties. And collections have some “extra” rarely used properties that we usually do not want to get.

14. What is the Difference Between HTML Collection & Node List ?
Explanation :-
* HTML Collection :
    getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
    Collection of document elements.
    Items can be accessed by their name, id, or index number.
    It is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
* Node List  :
    querySelector() and querySelectorAll() method returns a static NodeList.
    Collection of document nodes (element nodes, attribute nodes, and text nodes).
    Items can only be accessed by their index number.
    Most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

15. What are Siblings and Parent in DOM ?
Explanation :-
* Siblings are nodes that are children of the same parent.
* For instance, here <head> and <body> are siblings.
* <body> is said to be the “next” or “right” sibling of <head>,
* <head> is said to be the “previous” or “left” sibling of <body>.
* The next sibling is in nextSibling property, and the previous one – in previousSibling.
* The parent is available as parentNode.

16. How to Search in a DOM ?
Explanation :-
* There are 6 main methods to search for nodes in DOM.
    querySelector :
        Searches By - CSS-selector
        Can call on an element ? Yes
        Live ? No
    querySelectorAll :
        Searches By - CSS-selector
        Can call on an element ? Yes
        Live ? No
    getElementById :
        Searches By - id
        Can call on an element ? No
        Live ? No
    getElementsByName :
        Searches By - name
        Can call on an element ? No
        Live ? Yes
    getElementsByTagName :
        Searches By - tag or *
        Can call on an element ? Yes
        Live ? Yes
    getElementsByClassName :
        Searches By - class
        Can call on an element ? Yes
        Live ? Yes

17. How to Modify the Document in DOM ?
Explanation :-
* DOM modification is the key to creating “live” pages.
* Creating an element.
    To create DOM nodes, there are two methods :
        document.createElement(tag) - Creates a new element node with the given tag.
        document.createTextNode(text) - Creates a new text node with the given text.
* Insertion methods.
    To make the div show up, we need to insert it somewhere into document. For instance, into <body> element, referenced by document.body.
    There’s a special method append for that - document.body.append(div).
    Here are more insertion methods, they specify different places where to insert :
        node.append(...nodes or strings) – append nodes or strings at the end of node.
        node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node.
        node.before(...nodes or strings) – insert nodes or strings before node.
        node.after(...nodes or strings) – insert nodes or strings after node.
        node.replaceWith(...nodes or strings) - replaces node with the given nodes or strings.

18. How to Access the DOM ?
Explanation :-
	•	document.getElementById(id) - Selects an element by its ID.
	•	document.getElementsByClassName(class) - Selects all elements with the specified class.
	•	document.getElementsByTagName(tag) - Selects all elements with the specified tag name.
	•	document.querySelector(selector) - Selects the first element that matches the CSS selector.
	•	document.querySelectorAll(selector) - Selects all elements that match the CSS selector.

19. How to Manipulate the DOm ?
Explanation :-
* Changing Content :
	•	element.innerHTML - Gets or sets the HTML content of an element.
	•	element.textContent - Gets or sets the text content of an element.
* Changing Attributes :
	•	element.setAttribute(attribute, value) - Sets the value of an attribute.
	•	element.getAttribute(attribute) - Gets the value of an attribute.
* Changing Styles :
	•	element.style.property - Sets a CSS property of an element, e.g., element.style.color = 'red';.

20. How to Create and Insert Elements ?
Explanation :-
	•	document.createElement(tag) - Creates a new element.
	•	parent.appendChild(element) - Adds a child element to the end of a parent element.
	•	parent.insertBefore(newElement, existingElement) - Inserts a new element before an existing element.
	•	parent.removeChild(element) - Removes a child element from the parent.

21. What is Event Handeling ?
Explanation :-
* Event Handling ek important concept hai web development mein, jo user interactions ko handle karne ke liye use hota hai.
* JavaScript mein, events woh actions hote hain jo user ya browser ke through trigger hote hain, jaise button click, mouse hover, keyboard press, etc.
* Event handling ka matlab hai inn events ko detect karna aur unpe respond karna.

22. What is an Event ?
Explanation :-
* Event ek signal hai jo browser ya user ke action ke baad trigger hota hai. Yeh koi bhi action ho sakta hai jaise :
	•	User ne ek button click kiya
	•	Mouse ne kisi element pe hover kiya
	•	User ne ek key press ki
	•	Page load complete hua
	•	Form submit kiya gaya

23. How to Handle Events ?
Explanation :-
* Event handling ke liye aapko ek function define karna padta hai jo event trigger hone par execute hota hai.
* Is function ko event handler ya event listener kehte hain.

24. What are Event Listeners / Event Handlers ?
Explanation :-
* JavaScript mein events ko handle karne ke liye aapko event listeners set karne hote hain.
* Event listener ek function hota hai jo event trigger hone par call hota hai.
* Event listener ko attach karne ke liye aap addEventListener() method ka use kar sakte ho.
* Syntax :
    element.addEventListener(event, handler);
    •	element - Yeh wo DOM element hai jisme aap event listener attach kar rahe ho.
	•	event - Yeh wo event type hai jisme aap listen kar rahe ho (jaise “click”, “mouseover”, “keydown”, etc.).
	•	handler - Yeh function hai jo event trigger hone par execute hota hai.
* Common Events :
	•	click - Triggered when an element is clicked.
	•	input - Triggered when the value of an <input> or <textarea> element changes.
	•	submit - Triggered when a form is submitted.

25. How to Remove Event Listeners ?
Explanation :-
* Kabhi-kabhi aapko event listeners ko remove bhi karna padta hai. Iske liye removeEventListener() method ka use hota hai.
* Syntax :
    element.removeEventListener(event, handler);

26. What are some Common Event Types ?
Explanation :-
* Mouse Events :
	•	click: Jab element par click hota hai.
	•	dblclick: Jab element par double-click hota hai.
	•	mouseover: Jab mouse cursor element ke upar aata hai.
	•	mouseout: Jab mouse cursor element se bahar jata hai.
* Keyboard Events :
	•	keydown: Jab key press hota hai.
	•	keyup: Jab key release hota hai.
	•	keypress: Jab key press hota hai (lekin yeh ab deprecated hai).
* Form Events :
	•	submit: Jab form submit hota hai.
	•	change: Jab form field ka value change hota hai.
	•	focus: Jab element focus hota hai.
	•	blur: Jab element se focus remove hota hai.
* Document/Window Events :
	•	load: Jab page load hota hai.
	•	resize: Jab window resize hota hai.
	•	scroll: Jab user page scroll karta hai.

27. What is an Event Object ?
Explanation :-
* Jab event trigger hota hai, tab browser ek event object pass karta hai jo event ke baare mein information hold karta hai.
* Yeh object automatically event handler function ko pass hota hai.
* Ex :
    button.addEventListener('click', function(event) {
        console.log('Button clicked at coordinates:', event.clientX, event.clientY);
    });
    event object ke through aap event ke baare mein detailed information le sakte ho, jaise click hone ka coordinates (clientX, clientY), kaunsa key press hua (event.key), etc.

28. What is preventDefault() Method ?
Explanation :-
* preventDefault() method ka use kisi event ke default behavior ko rokne ke liye kiya jata hai. Default behavior woh action hai jo browser automatically perform karta hai, jaise :
	•	Form submit hone par page reload hona
	•	Anchor (<a>) tag pe click karne par naya page open hona
	•	Right-click karne par context menu dikhna
* Note - preventDefault() method in default behaviors ko rok sakta hai, taaki aap custom behavior define kar sako.
* Ex :
    <a href="https://example.com" id="myLink">Click Me!</a>
    <script>
        const link = document.getElementById('myLink');
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the link from navigating to the URL
            alert('Link clicked, but navigation prevented!');
        });
    </script>
    Is example mein, anchor tag pe click karne se usually browser us URL pe navigate karega. Lekin preventDefault() use karne se navigation nahi hoga, aur aapka custom alert message dikhega.

29. What exactly is preventDefault() ?
Explanation :-
	•	Jab bhi form submit hota hai ya koi link click hota hai, browser ka default behavior hota hai ki form ko submit kare ya link ko follow kare.
	•	preventDefault() ek method hai jo browser ke iss default behavior ko rokta hai. For example, agar tum form submit kar rahe ho aur tum preventDefault() use karte ho, toh form submit nahi hoga, instead tum apna custom logic execute kar sakte ho.
    Example :
    form.addEventListener('submit', (eventObj) => {
        eventObj.preventDefault(); // Form submit hone se rokta hai
        console.log("Custom form handling...");
    });

30. What exactly this mean eventObj.target.value ?
Explanation :-
	•	eventObj jo object tumhe milta hai event trigger hone par, usme event ki sari details hoti hain.
	•	target us element ko refer karta hai jisme event trigger hua hai.
	•	value us element ke current value ko refer karta hai. Jaise agar tum input field me kuch type kar rahe ho, toh eventObj.target.value tumhe input field ka current value dega.
    Example :
    nameFeild.addEventListener('change', (eventObj) => {
        console.log(eventObj.target.value); // Input field ka current value print karta hai
    });

31. Why change is used on form submission ?
Explanation :-
	•	change event tab trigger hota hai jab input field ka value change hota hai, aur user input se bahar click karta hai ya submit karta hai.
	•	Form submission ke case me, agar tum change event use karte ho, toh tum input field me kiye gaye changes ko detect kar sakte ho aur unke according actions le sakte ho.
    Example :
    emailFeild.addEventListener('change', (eventObj) => {
        console.log("Email changed: ", eventObj.target.value); // Detects value change before submission
    });

32. Why focus is used for input feilds ?
Explanation :-
	•	focus event tab trigger hota hai jab input field par user click karta hai ya keyboard se tab karte hue us field par aata hai.
	•	Yeh event useful hai agar tumhe kuch specific actions perform karne hai jab user kisi field par focus kare. Jaise ki tum placeholder change kar sakte ho, ya field ko highlight kar sakte ho.
    Example :
    nameFeild.addEventListener('focus', (eventObj) => {
        console.log("Name field is focused");
        eventObj.target.style.backgroundColor = "yellow"; // Field ko highlight karna
    });

33. Why blur is used for input feilds ?
Explanation :-
	•	blur event tab trigger hota hai jab user input field se bahar click karta hai ya tab kar ke next field me chala jata hai.
	•	Yeh event useful hai jab tumhe validation karni hai ya input field ko reset karna hai jab user us field se bahar jaye.
    Example :
    passwordFeild.addEventListener('blur', (eventObj) => {
        console.log("Password field lost focus");
        eventObj.target.style.backgroundColor = ""; // Field ko reset karna
    });

34. What exactly does eventObj contain ?
Explanation :-
	•	eventObj ek object hai jo event trigger hone par generate hota hai. Yeh object me event se related sari details hoti hain, jaise :-
        •	type - Event ka type, jaise click, keyup, submit, etc.
        •	target - Element jisme event trigger hua hai.
        •	timeStamp - Event kab trigger hua.
        •	key - Agar keyboard event hai toh key jo press hui hai.
    Example :
    button.addEventListener('click', (eventObj) => {
        console.log(eventObj); // Prints all event details
    });

35. How to play with this eventObj ?
Explanation :-
	•	Tum eventObj ka use kar ke event se related bahut sari information access kar sakte ho aur custom behavior implement kar sakte ho.
	•	Tum specific properties access kar sakte ho, jaise target, type, key, etc., aur unke according custom actions perform kar sakte ho.
    Example :
    input.addEventListener('keydown', (eventObj) => {
        if (eventObj.key === 'Enter') {
            console.log("Enter key pressed");
        }
    });

36. How can I take use of eventObj ?
Explanation :-
	•	eventObj tumhe event ke context me kaafi flexibility deta hai. Tum real-time data access kar sakte ho jaise input values, event types, etc., aur uske basis par custom functionality bana sakte ho.
	•	For example, tum form validation kar sakte ho, button clicks track kar sakte ho, ya dynamically UI ko update kar sakte ho based on user interactions.
    Example :
    window.addEventListener('resize', (eventObj) => {
        console.log("Window size: ", window.innerWidth, "x", window.innerHeight);
    });

37. What is Event Propogation ?
Explanation :-
* Event propagation se yeh decide hota hai ki events DOM tree mein kaise travel karte hain.
* Isme 3 stages hoti hain :
	Capturing Phase - Event root se start hota hai aur target element tak travel karta hai.
	Target Phase - Event target element tak pahuchta hai aur execute hota hai.
	Bubbling Phase - Event target element se root tak bubble back karta hai.
* Note - Aap event propagation ko control karne ke liye stopPropagation() ya preventDefault() methods ka use kar sakte ho.

38. What is stopPropagation() Method ?
Explanation :-
* stopPropagation() method ko event propagation ko control karne ke liye use kiya jata hai. Event propagation mein do phases hote hain :
    Capturing Phase - Event root se shuru hota hai aur target element tak pahuchta hai.
	Bubbling Phase - Event target element se root tak wapas jata hai.
* Jab aap stopPropagation() method ka use karte ho, to aap event ko next phase mein propagate hone se rok dete ho. Matlab, agar event capturing phase mein hai to yeh target tak nahi jayega, aur agar bubbling phase mein hai to yeh parent elements tak bubble nahi karega.
* Ex :
    <div id="parent">
        <button id="child">Click Me!</button>
    </div>
    <script>
        const parent = document.getElementById('parent');
        const child = document.getElementById('child');
        parent.addEventListener('click', () => {
            alert('Parent Div Clicked');
        });
        child.addEventListener('click', (event) => {
            alert('Button Clicked');
            event.stopPropagation(); // Stops event from propagating to the parent
        });
    </script>
    Is example mein, agar aap button (child) pe click karte ho aur stopPropagation() use nahi karte ho, to parent div ka event bhi trigger hoga. Lekin stopPropagation() use karne se event parent tak propagate nahi karega, sirf button ka event trigger hoga.

39. Are stopPropagation() and preventDefault() Both Same ?
Explanation :-
* No, stopPropagation() aur preventDefault() dono methods same nahi hain.
	•	stopPropagation() event ke propagation ko rokta hai, yaani event capturing ya bubbling ko stop karta hai.
	•	preventDefault() event ke default behavior ko rokta hai, yaani browser jo default action perform karne wala hota hai, usko prevent karta hai.

-----Strict Mode-----

1. What is Strict Mode in JS ? -----------------------------------------------------------------------------------> IMP
Explanation :-
* A stricter version of JavaScript that helps catch common coding errors and prevents the use of some features.
* Enabled by adding "use strict"; at the beginning of a script or function.

-----Using this Keyword-----

1. How to use this Keyword in a Method ? --------------------------------------------------------------------------> IMP
Explanation :-
* Refers to the object that owns the method.
* Example - this inside a method refers to the object that the method is a property of.

2. How to use this Keyword in a Function ? ------------------------------------------------------------------------> IMP
Explanation :-
* In a regular function, this refers to the global object (window in browsers) or undefined in strict mode.

3. How to use this Keyword alone ? --------------------------------------------------------------------------------> IMP
Explanation :-
* When used alone, this refers to the global object in non-strict mode or is undefined in strict mode.

4. How to use this Keyword in event handlers ? --------------------------------------------------------------------> IMP
Explanation :-
* Refers to the element that triggered the event.

5. How to use this Keyword in arrow Functions ? -------------------------------------------------------------------> IMP
Explanation :-
* this in arrow functions is lexically bound to the context in which the arrow function was created.

6. What is Function Borrowing ? -----------------------------------------------------------------------------------> IMP
Explanation :-
* Calling a method of one object in the context of another object using call or apply.

7. What is Explicit Binding and What are these ? ------------------------------------------------------------------> IMP
    call
    apply
    bind
Explanation :-
	•	call - Invokes a function with a specified this value and arguments.
	•	apply - Similar to call, but arguments are passed as an array.
	•	bind - Creates a new function that, when called, has its this keyword set to a specific value.

-----Asynchronous JS-----

1. What is Event Loop ? -------------------------------------------------------------------------------------------> IMP
Explanation :-
* The mechanism that handles asynchronous operations by executing code, handling events, and executing messages in a queue.
* Refer to Asynchronous Part-1 EventLoop.js File.

2. What are Callbacks ? -------------------------------------------------------------------------------------------> IMP
Explanation :-
* Functions passed as arguments to other functions that are executed after the completion of some operation.
* Refer to Asynchronous Part-1 Callbacks.js File.

3. What is Callback Hell ? ----------------------------------------------------------------------------------------> IMP
Explanation :-
* The phenomenon where callbacks are nested within other callbacks, making code hard to read and maintain.
* Refer to Asynchronous Part-1 Callback-Hell.js File.

4. What are Promises ? -------------------------------------------------------------------------------------------> IMP
Explanation :-
* Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
* Refer to Asynchronous Part-2 Promises.js File.

5. What is async/await ? ------------------------------------------------------------------------------------------> IMP
Explanation :-
* Syntax for working with asynchronous code that makes it look and behave like synchronous code.
* Refer to Asynchronous Part-2 Async-Await.js File.

6. What is setTimeout ? -------------------------------------------------------------------------------------------> IMP
Explanation :-
* Function that executes a callback after a specified delay.
* Refer to Asynchronous Part-2 SetTimeout.js File.

7. What is setInterval ? -----------------------------------------------------------------------------------------> IMP
Explanation :-
* Function that repeatedly executes a callback with a fixed time delay between each call.
* Refer to Asynchronous Part-2 SetTimeout.js File.

-----Working with APIs-----

1. What is Fetch in JS ? ----------------------------------------------------------------------------------------> IMP
Explanation :-
* fetch() is a modern method for making HTTP requests, returning a Promise that resolves to the Response object.

2. What is XMLHTTPRequest in JS ? ---------------------------------------------------------------------------------> IMP
Explanation :-
* The older method for making HTTP requests, used for asynchronous data fetching and updating web pages without reloading.

-----Classes-----

1. What are Classes in JS ? --------------------------------------------------------------------------------------> IMP
Explanation :-
* Blueprints for creating objects with shared properties and methods.
* Introduced in ES6, providing a clearer syntax for constructor functions and prototypes.

-----Itertors and Generators-----

1. What are Iterators in JS ? ------------------------------------------------------------------------------------> IMP
Explanation :-
* Objects that define a sequence and potentially a return value upon completion.
* Implement the Iterator protocol with methods like next().

2. What are Generators in JS ? ------------------------------------------------------------------------------------> IMP
Explanation :-
* Special functions that can pause and resume their execution using yield.
* Defined with function* syntax and return an iterator object.

-----Modules in JS-----
1. What are Modules ?
Explanation :-
* Modules encapsulate all sorts of code like functions and variables and expose all this to other files.
* Generally, we use it to break our code into separate files to make it more maintainable.
* They were introduced into JavaScript with ECMAScript 6.

2. What is CommonJS Module in JS ? -------------------------------------------------------------------------------> IMP
Explanation :-
* Module system used in Node.js.
* Modules are loaded synchronously and use require() and module.exports.

3. What is ESM Module in JS ? ------------------------------------------------------------------------------------> IMP
Explanation :-
* ECMAScript Modules (ESM), Standard module system for JavaScript, allowing asynchronous loading with import and export.

-----Memory Management-----

1. How does Memory Management happen in JS ? ----------------------------------------------------------------------> IMP
Explanation :-
* Managed automatically by JavaScript’s garbage collector, which reclaims memory used by objects no longer reachable.

2. What is Memory Lifecycle ? ------------------------------------------------------------------------------------> IMP
Explanation :-
* The process of allocating and deallocating memory for objects during the runtime of a program.

3. What is Garbage Collection ? ----------------------------------------------------------------------------------> IMP
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

2. What are Debugging Memory Leaks in JS ? ------------------------------------------------------------------------> IMP
Explanation :-
* Common Causes :
	•	Short-lived Objects - Objects that are temporary but are still referenced by long-lived objects.
	•	Garbage Collector - Struggles to de-allocate memory because these objects are still accessible from the global scope or other persistent references.
* Detecting Leaks :
	•	Use the Memory panel in browser DevTools to take heap snapshots and analyze memory usage.
	•	Look for detached DOM trees or large objects that aren’t being cleaned up.

3. What are Debugging Performance in JS ? ------------------------------------------------------------------------> IMP
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

-----JS In-Depth-----
1. How JS Works ?
Explanation :-
* Before understanding How JS really works , we need to understand few terms.
    Execution Context :
        Execution Context ek environment hota hai jahan JavaScript code execute hota hai. Isme code ka execution kaise ho raha hai, uski scope, aur variables ka reference maintain hota hai. Jab bhi ek function call hota hai, ek naya execution context create hota hai.
        Example - Agar aap ek function call karte hain, to ek execution context create hota hai jahan function ka code execute hota hai. Ye context function ke execution ke dauran variables, function arguments, aur function ke andar ke local variables ko track karta hai.
    Variable Envrionment :
        Variable Environment ek part hota hai execution context ka jahan variables aur functions declare kiye jaate hain. Yeh basically ek mapping hai jo variable names ko unke values se link karti hai. Jab ek function execute hota hai, iska variable environment us function ke local variables aur parameters ko track karta hai.
        Example - Agar aap function ke andar let a = 10; likhte hain, to a variable ka value 10 ho jayega aur variable environment me store ho jayega.
    Thread of Execution :
        Thread of Execution wo sequence hai jisme JavaScript code line by line execute hota hai. JavaScript ek single-threaded language hai, isliye ek waqt me sirf ek hi thread hi code execute kar sakta hai.
        Example - Agar aapke paas ek function hai jo asynchronous code ko handle karta hai, to JavaScript thread asynchronous task ko queue me daal dega aur pehle se running synchronous code ko continue karega.
    Synchronous :
        Synchronous code ka matlab hai ki code sequentially execute hota hai, line by line, bina kisi interruption ke. Jab ek synchronous task execute hota hai, tab tak dusra task wait karta hai.
        Synchronous refers to the execution model of code where operations are executed one after the other without interruption.
        Example - Agar aap console.log("Hello"); aur console.log("World"); likhte hain, to pehle “Hello” print hoga aur uske baad “World” print hoga, bina kisi delay ke.
    Single Threaded :
        Single Threaded ka matlab hai ki JavaScript ek waqt me sirf ek hi operation ko execute kar sakta hai. JavaScript ka ek hi thread hota hai jo code ko line by line execute karta hai, aur asynchronous operations ke liye event loop ka use hota hai.
        Single Threaded refers to the fact that the JavaScript runtime uses only one thread to execute code, handle events, and manage asynchronous tasks.
        Example - Jab aap ek asynchronous operation (jaise setTimeout) perform karte hain, JavaScript thread asynchronous task ko event queue me daal deta hai aur synchronous code ko pehle execute karta hai.
* Refer to Namaste JS Ep-1 for Detailed Explanation.

2. How JS Code is Executed ?
Explanation :-
* Before understanding How JS Code is Executed , we need to understand few terms.
    Call Stack :
        Call Stack ek mechanism hai jo function calls ko track karta hai. Jab bhi ek function call hota hai, wo stack me push hota hai aur jab function return karta hai, to wo stack se pop hota hai. Yeh stack LIFO (Last In, First Out) principle follow karta hai.
        Example - Is example mein, jab second function call hota hai, to wo stack me push hota hai, phir first function call hota hai to wo bhi stack me push hota hai. Jab first execute ho jata hai, to wo stack se pop hota hai aur phir second continue hota hai.
            function first() {
                console.log("First");
            }
            function second() {
                first();
                console.log("Second");
            }
            second();
    Global Execution Context :
        Global Execution Context sabse pehla context hota hai jo JavaScript engine create karti hai jab script run hoti hai. Is context mein global scope aur global variables included hote hain. Global Execution Context script ke initial code ko execute karta hai.
        Example - Jab yeh script run hoti hai, to Global Execution Context create hota hai jo a variable aur greet function ko memory mein allocate karta hai aur phir greet function ko call karta hai.
            let a = 10;
            function greet() {
                console.log("Hello");
            }
            greet();
    Execution Context vs Global Execution Context :
        Execution Context - Yeh broader term hai jo kisi bhi function ya global code ke execution environment ko refer karta hai. Jab bhi ek function call hota hai, ek naya execution context create hota hai.
        Global Execution Context - Yeh specific type ka execution context hai jo tab create hota hai jab script sabse pehli baar run hoti hai. Isme global variables aur global scope included hote hain. Yeh sabse pehla context hota hai jo JavaScript engine create karti hai.
* Refer to Namaste JS Ep-2 for Detailed Explanation.

3. How Functions work in JS ?
Explanation :-
    * Refer to Namaste JS Ep-4 for Detailed Explanation.

4. What is the Shortest JS Program ?
Explanation :-
* Before understanding the Shortest JS Code , we need to understand few terms.
* window :
    In a browser environment, window is a global object that represents the window in which the script is running.
    It provides access to the browser’s features, such as the DOM, location, and history.
    window ek global object hai jo browser ke window ko represent karta hai.
* this :
    this is a special keyword in JavaScript that refers to the context in which the current code is executing.
    The value of this depends on how a function is called.
    this ek special keyword hai jo context ke hisaab se refer karta hai.
* How it works in Global Scope :
    When you run JavaScript code directly in the browser’s global scope (like in a script tag in an HTML file), this points to the window object.
* How it works in Inside Function :
    In a function, the value of this depends on how the function is called.
    Regular Function Call - In non-strict mode, this still refers to the window object.
    Method Call - When a function is a method of an object, this refers to the object.
    Constructor Call - When a function is used as a constructor (with new), this refers to the newly created object.
* Why this === window is true :
    In a browser environment, when you’re executing code in the global scope (outside any function or object), this refers to the window object. Therefore, this === window is true.
* Jab tum global scope mein code likhte ho, this window object ko refer karta hai, isliye this === window true hai.
* Functions ke context mein this ka value call ke method pe depend karta hai. Strict mode mein this global scope mein undefined hota hai.

5. What is Undefined vs Not Defined ?
Explanation :-
* Undefined -
    When it has been declared but not assigned a value.
    It means the variable exists, but its value is absent or unknown.
    A variable is declared but not initialized, so it has a default value of undefined.
    Common Scenarios when we get undefined -
        A variable declared but not initialized.
        Function parameters that are not provided when the function is called.
        Accessing an object property that doesn’t exist.
* Not Defined -
    If it has not been declared at all in the current scope.
    Trying to access such a variable results in a ReferenceError because it does not exist in the code.
    A variable that has not been declared at all, leading to a ReferenceError when accessed.
    Common Scenarios when we get Not Defined -
        Typographical errors in variable names.
        Using a variable before declaring it (in non-hoisted contexts).

6. What is Scope | Scope Chain | Lexical Environment in JS ?
Explanation :-
* Scope -
    Scope ka matlab hota hai ki aapke variables aur functions kaha se accessible hain, yaani kaha se unko access kiya jaa sakta hai. JavaScript mein 3 tarah ke scopes hote hain.
* Scope Chain -
    Jab aap kisi variable ko access karte ho, toh JavaScript pehle current scope mein search karta hai.
    Agar waha nahi milta, toh wo parent scope mein search karta hai, aur yeh process tab tak chalta hai jab tak global scope tak nahi pahunch jata.
    Is process ko hi scope chain kehte hain.
* Lexical Environment -
    Jab aapka code execute hota hai, JavaScript engine har function ke liye ek lexical environment create karta hai.
    Yeh environment define karta hai ki variables aur functions kis scope mein available hain.
    Lexical environment mein do cheezein hoti hain :
        Environment Record - Yeh record karta hai saare variables aur functions jo is environment mein available hain.
        Reference to the outer environment - Yeh reference hai outer lexical environment ka, jo scope chain create karta hai.
* Working with Call Stack -
    Jab JavaScript mein koi function call hota hai, toh wo call stack mein push ho jata hai.
    Har function ka apna lexical environment hota hai, jo call stack ke saath associated hota hai.
    Jab function execute hota hai, toh JavaScript us function ke lexical environment mein variables aur functions ko search karta hai.
    Agar nahi milta, toh outer environment ko refer karta hai, yaani scope chain follow karta hai.
    Ex :
        function outerFunction() {
            var outerVar = "I am outer";
            function innerFunction() {
                var innerVar = "I am inner";
                console.log(outerVar); // Scope chain ke through outerVar accessible hai
            }
            innerFunction();
        }
        outerFunction();
    outerFunction call hota hai, toh call stack mein push hota hai.
    outerFunction ke execution se pehle uska lexical environment create hota hai, jisme outerVar hota hai.
    Phir innerFunction call hota hai, uska lexical environment create hota hai, jisme innerVar hota hai aur reference hota hai outerFunction ke environment ka.
    Jab innerFunction mein outerVar ko access karte hain, toh wo pehle apne environment mein search karta hai, waha nahi milta toh outer environment mein search karta hai, aur mil jata hai.

7. What is Temporal Dead Zone ?
Explanation :-
* Temporal Dead Zone ek aisi state hoti hai jab aapne let ya const se declare kiye gaye variable ko use karne ki koshish ki ho, lekin uska initialization abhi tak nahi hua hota. Jab tak variable initialize nahi hota, tab tak us variable ko access karna Temporal Dead Zone ke andar hota hai, aur isse error throw hota hai.
* Ex :
    console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
    let myVar = "Hello!";
    Jab code execute hota hai, JavaScript engine pehle hoisting karta hai. Matlab, let aur const se declare kiye gaye variables ko memory mein reserve kar leta hai, lekin unko initialize nahi karta.
    Jab tak myVar ka initialization nahi hota, tab tak wo Temporal Dead Zone mein rahega. Is time ke andar agar aap usko access karne ki koshish karte ho, toh ReferenceError milega.

8. What is the difference between Syntax Error, Type Error, aur Reference Error ?
Explanation :-
* Syntax Error -
    Jab aapka code JavaScript ke syntax rules ke against hota hai, tab Syntax Error throw hota hai. Yeh error tab hota hai jab aap code ko likhne mein kuch galti karte ho, jaise ki missing brackets, semicolons, etc.
    Ex :
    if (true {
        console.log("This will cause Syntax Error"); // Missing closing bracket
    }
* Type Error -
    Jab aap kisi value ko ek aise tareeke se use karte ho jo uske type ke according valid nahi hai, tab Type Error hota hai. Yeh mostly tab hota hai jab aap kisi method ko us type ki value ke upar call karte ho jo allowed nahi hai.
    Ex :
        let num = 42;
        num.toUpperCase(); // TypeError: num.toUpperCase is not a function
* Reference Error -
    Jab aap kisi aise variable ko access karne ki koshish karte ho jo defined ya declared nahi hai, tab Reference Error hota hai.
    Ex :
        console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined

9. How to avoid Temporal Dead Zone ?
Explanation :-
* Temporal Dead Zone ko avoid karne ke liye aapko yeh ensure karna hoga ki aap variables ko declare aur initialize pehle kar lo, aur unko use baad mein karo.
* Ex :
    // Temporal Dead Zone avoid kiya by initializing first
    let myVar = "Hello!";
    console.log(myVar); // "Hello!"
* Initialization early karo - Variables ko declare karte hi initialize kar do, taaki wo Temporal Dead Zone mein na jaye.
* Use var for hoisting - Agar aapko kisi variable ko hoisting ke saath use karna hai, toh var use kar sakte ho. Lekin, var se scoping issues aa sakte hain, so use it carefully.
* Note - TDZ sirf let aur const ke saath hota hai, var ke saath nahi. Lekin, let aur const ka use better practice hai kyunki yeh block-scoping follow karte hain.

10. What is Block | Shadowing | Illegal Shadowing | Lexical Block Scope ?
Explanation :-
* Block -
    Block JavaScript mein code ka ek group hota hai jo curly braces {} ke andar likha hota hai.
    Yeh mostly if, for, while, aur functions ke saath use hota hai.
    JavaScript mein let, const aur var ko block ke andar declare kiya ja sakta hai, lekin let aur const block scope follow karte hain, jabki var function scope follow karta hai.
    Ex :
        {
            let x = 10; // Block ke andar hai, sirf is block mein accessible
            console.log(x); // 10
        }
        console.log(x); // Error: x is not defined
    Is example mein, let se declare kiya gaya variable x sirf us block ke andar hi accessible hai. Block ke bahar aap x ko access nahi kar sakte.
* Shadowing -
    Shadowing tab hota hai jab aap ek variable ko usi naam se declare karte ho jo pehle se parent scope mein exist karta hai.
    Matlab, aapka local variable parent scope ke variable ko shadow kar deta hai, yaani uski visibility ko overwrite kar deta hai.
    Ex :
        let x = 20; // Global Scope
        function shadowingExample() {
            let x = 10; // Local Scope, shadows the global x
            console.log(x); // 10
        }
        shadowingExample();
        console.log(x); // 20, Global x is not affected
    Is example mein, function ke andar x ko dobara declare kiya gaya hai, jo global x ko shadow kar raha hai. Function ke andar local x print hoga, lekin function ke bahar global x as it is rahega.
* Illegal Shadowing -
    Illegal Shadowing tab hota hai jab aap kisi block scope variable ko shadow karne ki koshish karte ho using var, jo ki allowed nahi hai.
    let aur const se declare kiye gaye variables ko var ke saath shadow nahi kar sakte, kyunki var function scope follow karta hai aur let/const block scope follow karte hain.
    Ex :
        let x = 10;
        function illegalShadowing() {
            var x = 20; // Error: Identifier 'x' has already been declared
        }
        illegalShadowing();
    Is case mein, let se declared x ko aap var se shadow nahi kar sakte function ke andar, kyunki yeh illegal shadowing hai. Yeh error throw karega.
    Note - Lekin agar aap reverse karte ho, yaani var ko let ya const se shadow karte ho, toh wo allowed hota hai.
* Lexical Block Scope -
    Lexical Block Scope ka matlab hai ki JavaScript mein variables aur functions un blocks ke according scope mein locked hote hain jinme unhe declare kiya gaya hai.
    Jab aap kisi variable ko block ke andar declare karte ho, toh wo sirf us block ke andar hi accessible hota hai, us block ke bahar nahi.
    Yeh lexical scoping ke through achieve hota hai, jisme variables apne parent scopes ko refer kar sakte hain, lekin parent scope ke variables ko overwrite nahi kar sakte.
    Ex :
        let a = "global";
        {
            let a = "block scoped";
            console.log(a); // "block scoped"
        }
        console.log(a); // "global"
    Is example mein, let se declare kiya gaya variable a block ke andar lexical block scope follow kar raha hai, matlab wo sirf us block ke andar hi accessible hai. Block ke bahar, global a ko access kiya ja sakta hai.


11. What are Closures in JS ?
Explanation :-
* Closure JavaScript ka ek powerful feature hai.
* Jab ek function apne surrounding (lexical) environment ke variables ko yaad rakhta hai, chahe us function ko us environment ke bahar execute kiya jaye, tab usko Closure kehte hain.
* Matlab, closure ek aisa function hota hai jo apne creation ke time ke lexical scope ko “close” kar leta hai, aur uske variables ko access kar sakta hai.
* Ex :
    function outerFunction() {
        let outerVar = "I am outer";
        function innerFunction() {
            console.log(outerVar); // Closure, outerVar accessible hai
        }
        return innerFunction;
    }
    const myClosure = outerFunction();
    myClosure(); // Output: "I am outer"
    Yaha outerFunction ke andar ek innerFunction hai. Jab outerFunction call hoti hai, toh wo innerFunction ko return karti hai.
    innerFunction, even after being executed outside its original environment, still remembers the outerVar variable due to closure. Jab aap myClosure() call karte ho, toh outerVar ki value print hoti hai, jo innerFunction ke scope ke bahar nahi hai, but closure ki wajah se accessible hai.
    Note - Closure ka use tab hota hai jab aapko functions ke andar state maintain karni hoti hai ya private variables banane hote hain.

12. What are First Class Functions ?
Explanation :-
* Function Statement -
    Function Statement ko hi commonly Function Declaration bhi kehte hain.
    Isme aap ek function ko explicitly define karte ho, jisme function ka naam aur body hota hai.
    Yeh syntaxically ek independent statement hota hai.
    Ex :
        function a(){
            console.log("This way of creating Function is called Function Statement.");
        }
    Note - Function statements hoisting ko follow karte hain, yaani aap function ko declare karne se pehle bhi call kar sakte ho.
* Function Expression -
    Function Expression mein aap ek function ko variable ke andar assign karte ho. Yeh ek expression hota hai jisme function ko define kiya jata hai, aur us function ka naam optional hota hai.
    Ex :
        var b = function (){
            console.log("This way of creating Function is called Function Expression.")
        }
    Note - Function expressions hoisting ko follow nahi karte, yaani unko define karne se pehle call nahi kar sakte.
* Named Function Expression -
    Named Function Expression ek function expression hota hai jisme function ka apna naam hota hai, jo sirf us function ke andar hi accessible hota hai.
    Yeh tab useful hota hai jab aap recursion karna chahte ho ya debug karna chahte ho.
    Ex :
        var c = function xyz(){
            console.log("This way of creating Function is called Function Expression.")
        }
* Function Declaration -
    Function Declaration aur Function Statement ek hi cheezein hain.
    Jaise maine pehle bataya, yeh ek function ko declare karne ka tarika hai jisme function ka naam aur body hoti hai.
    Ex :
        function a(){
            console.log("This way of creating Function is also called Function Declaration.");
        }
* Anonymous Function -
    Anonymous Function ek aisa function hota hai jiska koi naam nahi hota.
    Yeh mostly function expressions mein ya callbacks ke roop mein use hota hai.
    Ex :
        const greet = function() {
            console.log("Hello, Anonymous!");
        };
        greet(); // "Hello, Anonymous!"
    Yaha jo function greet ke andar assign hai, uska koi naam nahi hai, isliye yeh anonymous function hai. Isko directly use nahi kar sakte bina kisi variable ya callback ke.
* First-Class Functions -
    JavaScript mein First-Class Functions ka matlab hai ki functions ko bhi waise hi treat kiya jata hai jaise kisi aur value ya object ko.
    Matlab aap functions ko variables mein store kar sakte ho, unko as arguments pass kar sakte ho, aur as return value wapas kar sakte ho.
    Ex :
        function greet() {
            return "Hello!";
        }
        function logGreeting(fn) {
            console.log(fn());
        }
        logGreeting(greet); // "Hello!"
    Yaha greet function ko logGreeting function mein argument ke roop mein pass kiya gaya hai, aur usko waha se execute kiya gaya. Yeh possible hai kyunki JavaScript mein functions first-class citizens hain.
* Arrow Function -
    Arrow Functions JavaScript ES6 mein introduce hui thi.
    Yeh concise syntax provide karti hain functions ko define karne ke liye, aur yeh lexical this binding follow karti hain, yaani yeh apne surrounding context ka this inherit karti hain.
    Ex :
        const greet = () => {
            console.log("Hello, Arrow Function!");
        };
        greet(); // "Hello, Arrow Function!"
    Yaha greet ek arrow function hai. Iska syntax chhota hai aur isme this binding lexical hoti hai, jo traditional functions se different hai.
    Note - Agar aapke pass sirf ek statement hai, toh aap braces {} ko omit kar sakte ho, aur agar aapke pass sirf ek parameter hai, toh aap parentheses () ko bhi omit kar sakte ho.

13. What is Functional Programming ?
Explanation :-
* Functional Programming ek programming paradigm hai jisme computation ko functions ke through solve kiya jata hai.
* Yeh declarative programming ka ek form hai, jisme aap “kya solve karna hai” pe focus karte ho, na ki “kaise solve karna hai”.
* Isme functions ko first-class citizens ki tarah treat kiya jata hai, aur pure functions, immutability, aur higher-order functions jaisi concepts ka use kiya jata hai.

14. What are Pure Functions ?
Explanation :-
* Pure functions woh functions hote hain jo sirf apne inputs par depend karte hain aur koi side effects nahi create karte.
* Har bar same inputs ke liye same output return karte hain.
* Ex :
    function add(a, b) {
        return a + b;
    }
    add function ek pure function hai, kyunki yeh sirf apne arguments a aur b par depend karta hai aur koi external state ko modify nahi karta.

15. What is Immutability ?
Explanation :-
* Immutability ka matlab hai ki data ko modify nahi karna chahiye, balki har operation ke baad naya data structure create karna chahiye.
* Isse state management simple hota hai aur bugs ka probability kam hoti hai.
* Ex :
    const arr = [1, 2, 3];
    const newArr = arr.concat([4]); // arr ko modify nahi kiya gaya, balki naya array banaya
    Is example mein, arr original array ko modify nahi kiya gaya, balki concat method se ek naya array newArr create kiya gaya.

16. What is HOF ?
Explanation :-
* Higher-order functions aise functions hote hain jo ya to dusre functions ko arguments ke roop mein lete hain, ya function ko return karte hain.
* Ex :
    function greet(name) {
        return function(message) {
            console.log(`${message}, ${name}!`);
        };
    }
    const greetJohn = greet("John");
    greetJohn("Hello"); // Output: "Hello, John!"
    Is example mein, greet ek higher-order function hai kyunki yeh ek dusra function return kar raha hai.

17. What is First Class Function ?
Explanation :-
* Jaise pehle discuss kiya, first-class functions ka matlab hai functions ko variables mein store karna, as arguments pass karna, aur return karna.
* Functional programming mein yeh concept bohot important hai.

18. What is Function Composition ?
Explanation :-
* Function composition ka matlab hai chhote chhote functions ko combine karke ek complex function banana.
* Yeh code ko modular aur reusable banata hai.
* Ex :
    const add = (a) => (b) => a + b;
    const double = (x) => x * 2;
    const addAndDouble = (a, b) => double(add(a)(b));
    console.log(addAndDouble(2, 3)); // Output: 10
    Yaha add aur double functions ko combine karke addAndDouble function banaaya gaya hai.

19. What is map ?
Explanation :-
* map() ek array method hai jo ek existing array ke har element par ek function apply karta hai aur result ko ek naye array mein return karta hai.
* Yaani, map() aapko input array ke elements ko transform karne ki ability deta hai.
* Syntax :
    let newArray = array.map(callback(element, index, array) {
        // return transformed element
    });
    •	callback - function ko har element ke liye call kiya jata hai.
	•	element - Current element jo process ho raha hai.
	•	index - Current element ka index.
	•	array - Original array jisme map() apply ho raha hai.
	•	newArray - Yeh return karta hai transformed elements ka naya array.
* Ex :
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6, 8, 10]
    Is example mein, map() function numbers array ke har element par num * 2 apply kar raha hai, aur result ko doubled array mein store kar raha hai.

20. What is filter ?
Explanation :-
* filter() ek array method hai jo ek existing array ke elements ko filter karta hai based on ek condition (jo aap callback function mein define karte ho) aur unhi elements ko naya array return karta hai jo condition satisfy karte hain.
* Syntax :
    let newArray = array.filter(callback(element, index, array) {
        // return true or false
    });
    •	callback - function ko har element ke liye call kiya jata hai.
	•	element - Current element jo process ho raha hai.
	•	index - Current element ka index.
	•	array - Original array jisme filter() apply ho raha hai.
	•	newArray - Yeh return karta hai sirf un elements ka array jo callback function mein true return karte hain.
* Ex :
    const numbers = [1, 2, 3, 4, 5];
    const evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // Output: [2, 4]
    Is example mein, filter() function numbers array ke elements mein se sirf unko filter karta hai jo even hain (i.e., num % 2 === 0 condition satisfy karte hain) aur result ko evens array mein store karta hai.

21. What is reduce ?
Explanation :-
* reduce() ek array method hai jo array ke har element par ek callback function apply karta hai, aur ek single value reduce karta hai jo cumulative result hota hai.
* Yeh cumulative operation (jaise sum, product, etc.) ke liye useful hai.
* Syntax :
    let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
    •	callback - Function jo har element par call kiya jata hai.
	•	accumulator - Yeh cumulative result ko hold karta hai.
	•	currentValue - Current element jo process ho raha hai.
	•	index - Current element ka index.
	•	array - Original array jisme reduce() apply ho raha hai.
	•	initialValue - Yeh accumulator ki initial value set karta hai (optional).
	•	result - Yeh reduce operation ke baad single value return karta hai.
* Ex :
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // Output: 15
    Is example mein, reduce() function numbers array ke har element ko ek cumulative sum mein reduce kar raha hai. Initial value 0 hai, aur function har element ko accumulator (acc) mein add karta ja raha hai. Final result 15 return hota hai.

22. What is the differnce when we use () and {} in map | filter | reduce ?
Explanation :-
* Using () with Arrow Functions :
    When you use () right after the arrow =>, it implies an implicit return.
    This is a shorthand for returning a value directly without needing to use the return keyword.
    Ex -
        list.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        	•	Here, the arrow function implicitly returns the <li> element.
	        •	The parentheses () around the JSX are required if you want to use implicit return and have multiple lines of JSX.
* Using {} with Arrow Functions :
    When you use {} after the arrow =>, you’re defining a function body.
    Inside this body, you can write multiple statements. However, you need to explicitly return a value using the return keyword.
    Ex -
        list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
            	•	In this case, the function has a block body, so you must use return to return the <li> element.
* Why Do Both Work :
    	•	In both cases, the map function receives a function that returns a value (<li key={index}>{item}</li>).
	    •	Whether you use () for an implicit return or {} with an explicit return, the outcome is the same - the JSX is returned, and React uses it to render the list.
* When to Use Which :
    	•	Use () when your function’s only task is to return a value. It’s concise and makes the code look cleaner.
	    •	Use {} when you need to perform additional operations before returning a value, or if you prefer the explicitness of the return keyword.

*/
