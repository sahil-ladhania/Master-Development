/*

1. What is Callback Hell ?
Explanation :-
* Also called Callback Pyramid ya Christmas Tree Problem ya Pyramid of Doom.
* Situation hai jisme "Multiple nested callbacks hote hain, jo ki code ko complex aur mushkil banate hain".
* Iske wajah se code horizontally lamba ho jata hai , which is not a Good Practice.

2. How it is used ?
Explanation :-
* Callback Hell ka syntax multiple nested callbacks ke roop mein hota hai, jisme code ki readability aur maintainability bahut hi kam ho jati hai.

3. What is the Solution for Callback Hell ?
Explanation :-
* Callback Hell ko avoid karne ke liye, hum Promises ya Async/Await ka istemal karte hain.
* Yeh approach code ko readable aur maintainable banata hai.

*/

// Syntax of Callback Hell
function doSomethingg(callback) {
    // Implementation
}
function doSomethingElsee(result, callback) {
    // Implementation
}
function doAnotherThingg(newResult, callback) {
    // Implementation
}
function myFunction() {
    doSomethingg(function(result) {
        doSomethingElsee(result, function(newResult) {
            doAnotherThingg(newResult, function(finalResult) {
                // and so on...
            });
        });
    });
}
myFunction();

// Example of Callback Hell
function doSomething(callback) {
    console.log("Doing something...");
    setTimeout(function() {
        console.log("Task 1 complete");
        callback("Result from doSomething");
        }, 1000);
}
function doSomethingElse(result, callback) {
    console.log("Doing something else with result:", result);
    setTimeout(function() {
        console.log("Task 2 complete");
        callback("New result from doSomethingElse");
        }, 1000);
}
function doAnotherThing(newResult, callback) {
    console.log("Doing another thing with new result:", newResult);
    setTimeout(function() {
        console.log("Task 3 complete");
        callback("Final result from doAnotherThing");
        }, 1000);
}
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doAnotherThing(newResult, function(finalResult) {
            console.log("Final Result:", finalResult);
        });
    });
});
doSomething(function(result) {
    console.log("Task 1 complete");
    doSomethingElse(result, function(newResult) {
        console.log("Task 2 complete");
        doAnotherThing(newResult, function(finalResult) {
            console.log("Task 3 complete");
            // and so on...
        });
    });
});
