// -----Synchronous Callbacks-----

// 1. Sorting with a Callback - Write a function that takes an array of numbers and a callback function. Use the callback to define a custom sorting order for the numbers.
function sortWithCallback(arr , callback) {
    const sortedArr = arr.sort(callback);
    console.log(sortedArr);
}
sortWithCallback([3,4,1,2,5] , (a , b) => (a - b));
sortWithCallback([3,4,1,2,5] , (a , b) => (b - a));

// 2. String Transformation - Create a function that accepts a string and a callback function. The callback should define how the string should be transformed (e.g., reversed, converted to uppercase, etc.).
function transformWithCallback(str , callback) {
    const transformedStr = callback(str);
    console.log(transformedStr);
}
transformWithCallback("saHil" , (inputStr) => inputStr.toUpperCase());
transformWithCallback("saHil" , (inputStr) => inputStr.toLowerCase());

// 3. Iteration with Callbacks - Implement a function that takes an array and a callback. For each element in the array, the callback is executed with the element as its parameter.
function iterationWithCallback(arr , callback) {
    arr.forEach((element) => {
        callback(element);
    })   
}
iterationWithCallback([1,2,3,4,5] , (num) => {
    console.log(`Element : ${num}`);
});
iterationWithCallback([1,2,3,4,5] , (num) => {
    console.log(`Doubled : ${num * 2}`);
});

// 4. Math Operations - Write a function that takes two numbers and a callback. Use the callback to perform an operation (like addition, subtraction, multiplication, or division) on the numbers.
function mathWithCallback(num1 , num2 , callback) {
    const ans = callback(num1 , num2);
    console.log(ans);
}
mathWithCallback(4 , 2 , (n1 , n2) => (n1 + n2));
mathWithCallback(4 , 2 , (n1 , n2) => (n1 - n2));

// 5. Filtering Data - Create a function that filters an array of objects based on a condition defined by a callback. For example, filter objects with a specific property value.
const data = [
    {
        firstname : "sahil",
        lastname : "ladhania"
    },
    {
        firstname : "harshit",
        lastname : "ladhania"
    },
    {
        firstname : "binod",
        lastname : "ladhania"
    },
    {
        firstname : "asha",
        lastname : "ladhania"
    },
];
function filterWithCallback(data , callback) {
    const filteredData = data.filter(callback);
    return filteredData;
}
const result = filterWithCallback(data , (person) => person.firstname === "sahil");
console.log(result);

// -----Asynchronous Callbacks-----
// 1.	Delayed Greeting - Write a function that accepts a callback and a delay time (in milliseconds). After the delay, the callback should be executed to print a greeting.
function greetings(callback , delayTime) {
    setTimeout(() => {
        callback();
    }, delayTime);
}
greetings(() => {
    console.log("Welcome Sahil!!!");
}, 1000);
greetings(() => {
    console.log("Welcome Janvi!!!");
}, 2000);
greetings(() => {
    console.log("Welcome Both!!!");
}, 3000);

// 2.	Fetching Data - Simulate a function that “fetches” user data (use setTimeout). Pass a callback to process and display the data after the “fetch” is complete.
function fetchData(callback) {
    const link = "https://jsonplaceholder.typicode.com/todos/1";
    setTimeout(() => {
        fetch(link)
            .then(response => response.json)
            .then((data) => {
                callback(data);
            })
            .catch(error => console.log(error));
    }, 2000);
}
fetchData((data) => {
    console.log("Fetched Data : " , data);
});


/* 
-----Callbacks Examples-----

setTimeout(() => {
    
}, timeout);

setTimeout() ---> Part 1
() => {} ----> Part 2

*/

function myCallback() {
    console.log("This is a callback");
}
setTimeout(myCallback, 2000);

// Promises Example
const getPromise = () => {
    return new Promise((resolve , reject) => {
        console.log("Im a Promise.");
        resolve("Success");
        // reject("Network Error");
    })
}
let promise = getPromise();
promise.then((res) => {
    console.log("Promise : " , res);
})
promise.catch((err) => {
    console.log("Promise : " , err);
})