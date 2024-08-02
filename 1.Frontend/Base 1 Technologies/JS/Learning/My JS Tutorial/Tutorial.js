console.log("From Tutorial.js File !!!");
console.log("-----------------------------------------------")

// -----Practical Stuff-----

// Variable Scopes
console.log("Scopes Example");
    // 1. Global Scope
    var globalVariable = "I am a Global Variable.";
    function globalScopeExample() {
        console.log(globalVariable); // ----> Accessible Here
    }
    globalScopeExample();
    console.log(globalVariable); // ----> Accessible Here As Well

    // 2. Function Scope
    function functionScopeExample() {
        var functionVariable = "I am a Function Variable.";
        console.log(functionVariable); // ----> Accessible Here
    }
    functionScopeExample();
    // console.log(functionVariable); -----> Error : functionVar is not defined

    // 3. Block Scope
    function blockScopeExample() {
        if(true){
            let blockVariable = "I am a Block Variable.";
            console.log(blockVariable); // ----> Accessible Here
        }
        // console.log(blockVariable); -----> Error : blockVar is not defined
    }
    blockScopeExample();

// Variable Declarations
    // 1. var Declaration : | Function-scoped | Can be Redeclared | Hoisted | Can be Updated |
    console.log("var Declaration Example");
    function varExample() {
        var x1 = 10;
        console.log(x1);
        if(true){
            var x1 = 20; // Same Variable Defined Again -> Redeclaration is Allowed
            console.log(x1);
        }
        console.log(x1);
    }
    varExample();
    var y1 = "Hello";
    var y1 = "World"; // Same Variable Defined Again -> Redeclaration is Allowed
    console.log(y1);

    // 2. let Declaration : | Block-scoped | Cannot be Redeclared in the same scope | Hoisted but not Initialized | Can be Updated |
    console.log("let Declaration Example");
    function letExample() {
        let x2 = 10;
        console.log(x2);
        if(true){
            let x2 = 20;
            console.log(x2);
        }
        console.log(x2);
    }
    letExample();
    let y2 = "Hello";
    // let y = "World"; -----> Error: Identifier 'y' has already been declared
    y2 = "World";
    console.log(y2);

    // 3. const Declaration : | Block-scoped | Cannot be Redeclared in the same scope | Hoisted but not Initialized | Cannot be Reassigned | Mutable if it's an Object or Array |
    console.log("const Declaration Example");
    function constExample() {
        const x3 = 10;
        console.log(x3);
        if(true){
            const x3 = 20;
            console.log(x3);
        }
        console.log(x3);
    }
    constExample();
    // const y3 = "Hello"; -----> Error: Identifier 'y' has already been declared
    // const y3  = "World"; -----> Error: Assignment to constant variable
    y3 = "World";
    const obj1 = {
        name : "Sahil"
    }
    obj1.name = "Harshit";
    console.log(obj1.name);
    const arr1 = [1,2,3];
    arr1.push(4);
    console.log(arr1);

// Hoisting
console.log("Hoisting Example");
    // 1. Hoisting in var : | Declarations are Hoisted and Initialized with Undefined | No Temporal Dead Zone |
    console.log("Hoisting in var Example");
    console.log(hoistedVar1);
    var hoistedVar1 = "I am Hoisted.";
    console.log(hoistedVar1);
    // or
    var hoistedVar2;
    console.log(hoistedVar2);
    hoistedVar2 = "I am Hoisted.";
    console.log(hoistedVar2);

    // 2. Hoisting in let : | Declarations are Hoisted but not Initialized | Variables are in the Temporal Dead Zone until their Declaration is Encountered |
    console.log("Hoisting in let Example");
    // console.log(hoistedLet); -----> Error: Cannot access 'hoistedLet' before initialization. Results in a ReferenceError because hoistedLet is in the TDZ(Temporal Dead Zone).
    let hoistedLet = "I am Hoisted.";
    console.log(hoistedLet);

    // 3. Hoisting in const : | Declarations are Hoisted but not Initialized | Variables are in the Temporal Dead Zone until their Declaration is Encountered |
    console.log("Hoisting in const Example");
    // console.log(hoistedConst); -----> Error: Cannot access 'hoistedConst' before initialization. Results in a ReferenceError because hoistedConst is in the TDZ(Temporal Dead Zone).
    const hoistedConst = "I am Hoisted.";
    console.log(hoistedConst);

// Primitive Datatypes
console.log("Primitive Datatype Example");
    // String
    console.log("String Example");
    let singleQuoteString = 'Hello World';
    let doubleQuoteString = "Hello World";
    let templateLiteralString = `Hello World`;
    console.log(singleQuoteString);
    console.log(doubleQuoteString);
    console.log(templateLiteralString);
    let name = "Sahil";
    let greeting1 = `Hello ${name}`;
    console.log(greeting1);

    // Number
    console.log("Number Example");
    let integer = 42;
    let float = 3.14;
    console.log(integer);
    console.log(float);

    // Boolean
    console.log("Boolean Example");
    let isJSFun = true
    let isLearningHard = false;
    console.log(isJSFun);
    console.log(isLearningHard);

    // Undefined
    console.log("Undefined Example");
    let notInitialized;
    console.log(notInitialized);

    // BigInt
    console.log("BigInt Example");
    let bigIntNumber = 1234567890123456789012345678901234567890n;
    console.log(bigIntNumber);

    // Null
    console.log("Null Example");
    let emptyValue = null;
    console.log(emptyValue);

    // Symbol
    console.log("Symbol Example");
    let symbol1 = Symbol("description");
    let symbol2 = Symbol("description");
    console.log(symbol1);
    console.log(symbol2);
    console.log(symbol1 == symbol2);

// Non-Primitive Datatypes

// Type Conversion
    // Type Coersion(Implicit Type Conversion) -> "Apne Aap Conversion"
    console.log("Type Coresion Example");
    let result1 = "5" - 2;
    console.log(result1);
    let result2 = "5" + 2;
    console.log(result2);

    // Type Casting(Explicit Type Conversion) -> "Jabardasti Conversion"
    console.log("Type Casting Example");
    let str = "123";
    let num = Number(str);
    console.log(num);

// Equality Comparisons
    // == (Equality Operator)
    console.log("Equality Operator Example");
    console.log(5 == "5");
    console.log(5 == 5);

    // === (Strict Equality Operator) : | Considers NaN unequal to NaN | Considers -0 equal to +0 |
    console.log("Strict Equality Operator Example");
    console.log(5 === "5");
    console.log(5 == 5);

    // Object.is() : | Considers NaN equal to NaN | Considers -0 different from +0 |
    console.log("Object.is() Example");
    console.log(Object.is(5 , "5"));
    console.log(Object.is(5 , 5));

// Expressions and Operators
    // Conditional (Ternary) Operator
    // condition ? expressionIfTrue : expressionIfFalse;
    console.log("Ternary Operator Example");
    let age = 18;
    let canVote = age >= 18 ? "Yes , You can Vote." : "No , You cant Vote.";
    console.log(canVote);

    // Comma Operator
    console.log("Comma Operator Example");
    let a = 1 , b = 2 , c;
    c = (a += 1 , b +=2 , a + b);
    console.log(c);

    // String Operator
    console.log("String Operator Example");
    let greeting2 = "Hello";
    let name2 = "World";
    let message = greeting2 + ", " + name + " ! ";
    console.log(message);

// Functions

// DOM APIs

// Asynchronous JS
