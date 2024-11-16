// -----Scopes-----
// 1. Global Scope
var globalVariable = 10;
function globalScope() {
    console.log(globalVariable);
}
globalScope();
console.log(globalVariable);

// 2. Function Scope
function functionScope() {
    var functionVariable = 10;
    console.log(functionVariable);
}
functionScope();
// console.log(functionVariable); // Why reference error ?

// 3. Block Scope
function block() {
    var blockVariable = 10;
    console.log(blockVariable);
    function print() {
        console.log(blockVariable);
    }
    print();
}
block();
// console.log(blockVariable); // Why reference error ?

// -----Variable Declaration-----
// 1. var
function varFunction() {
    var num1 = 10;
    console.log(num1);
    var num1 = 20;
    console.log(num1);
    num1 = 30;
    console.log(num1);
}
varFunction();
// console.log(num1); // Why reference error ?

// 2. let
function letFunction() {
    let num2 = 40;
    num2 = 400;
    console.log(num2);
    function printNum2() {
        console.log(num2);
    }
    printNum2();
}
// console.log(num2); // Why reference error ?
letFunction();
let num2 = 50;
console.log(num2);

// 3. const
function constFunction() {
    const num3 = 60;
    console.log(num3);
    // num3 = 600; // Why type error ?
    function printNum3() {
        const num3 = 70;
        console.log(num3);
    }
    printNum3();
}
// console.log(num3); // Why reference error ?
constFunction();

// -----Type Conversion-----
// 1. Implicit Conversion(Apne App) or Type Coersion ---> Confusing some times!!!
console.log("5" + 1);
console.log(1 + "5");

// 2. Explicit Conversion(Jabardasti) or Type Casting
let str = "123";
console.log(str);
let num = Number(str);
console.log(num);

// -----Equality Operators-----
// 1. == 
console.log(2 == 2);
console.log("2" == 2);

// 2. ===
console.log(2 === 2);
console.log("2" === 2);

// 3. Object.is()
console.log(Object.is(2 , 2));
console.log(Object.is(2 , "2"));