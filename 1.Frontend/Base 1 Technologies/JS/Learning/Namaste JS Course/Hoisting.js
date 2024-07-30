console.log("From Hoisting.js File !!!");
/* 
1. What is Hoisting ?
* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. 
* This means that you can use variables and functions before you declare them in your code.
* However, the behavior differs between function declarations, variable declarations, and function expressions (including arrow functions).
*/

// Hoisting with Normal Function 
getName1();
console.log(x);
console.log(getName1);

var x = 5;

function getName1(){
    console.log("Namaste JS");
}
console.log(getName1);
/*

1. Function Declarations :-
	•	function getName1() { ... } is hoisted completely. The entire function definition is moved to the top of the scope.
	•	When you call getName1() before its definition, it works fine because the function declaration is hoisted.

2.	Variable Declarations :-
	•	var x is hoisted, but its initialization = 5 is not.
	•	When you log x before its initialization, it results in undefined because var x is hoisted but not yet assigned the value 5.

*/

// Hoisting with Arrow Function
getName2();
console.log(x);
console.log(getName2);

var x = 5;

var getName2 = () => {
    console.log("Namaste JS");
}
console.log(getName2);
/*
1. Function Expressions (Arrow Functions) :-
	•	var getName2 = () => { ... } is treated as a variable assignment.
	•	var getName2 is hoisted, but its assignment to the arrow function is not.
	•	When you try to call getName2() before its definition, it results in an error because getName2 is hoisted as undefined.

2.	Variable Declarations :-
	•	Similar to the previous example, var x is hoisted, but its initialization = 5 is not.

*/

/*

Key Points to Note :-

1. Function Declarations - Are fully hoisted, so you can call them before their declaration.

2. Variable Declarations (var) - Are hoisted without their initializations. They are undefined until the assignment is reached.

3. Function Expressions (Arrow Functions) - Are treated as variable assignments. The variable declaration is hoisted, but not the assignment, leading to undefined if accessed before the assignment.

*/