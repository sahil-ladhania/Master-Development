/*

1. What is a Promise ? --------------------------------------------------------------------------> Practical Topic
Explanation :-
* Promise ek JavaScript object hai jo asynchronous operations ko handle karne mein madad karta hai.
* Promise mai 3 States hi hote hai bs :
    Pending
    Resolve
    Rejected
* Pending -
    Initially, jab promise create hota hai, yeh state hota hai.
    Yahan se shuru hota hai aur kisi bhi resolution ya rejection tak pahunchne par badal sakta hai.
    Means the result will be undefined.
* Resolved -
    Jab promise successfully complete hota hai, toh is state mein chala jata hai.
    Yahan se aap result ko access kar sakte hain.
* Rejected -
    Agar koi error aata hai ya promise reject hota hai, toh yeh state mein chala jata hai.
    Yahan se aap rejected reason ko access kar sakte hain.
* Promise ke andar ek value hoti hai jo future mein available hogi jab promise resolve hoga.
* Note :
    Initially, promise pending hota hai. Fir, ya toh resolved (fulfilled) hota hai ya rejected hota hai, in states mein badal jata hai.

2. Why Promise is used ? 
Explanation :-
* Asynchronous operations, jaise ki file reads, network requests, etc., ko organize aur manage karne ke liye use hota hai.
* Callback hell se bachane mein madad karta hai, code ko readable banata hai.

3. When Callback was there , Why did Promise was Introduced ? --------------------------------> IMP Concept
Explanation :-
* Callback Hell Avoidance -
    Callbacks ke nested structure se bachne ke liye.
    Promise chaining allows a more linear and readable structure.
* Better Error Handling -
    Callbacks mein error handling challenging hota tha.
    Promises allow a centralized error handling through .catch().
* Asynchronous Code Organization -
    Promises provide a structured way to handle asynchronous operations, making the code more organized and maintainable.
* Multiple Async Operations -
    Handling multiple asynchronous operations became easier with methods like Promise.all and Promise.race.
* State Representation -
    Promise provides a clear representation of the state of an asynchronous operation (pending, fulfilled, or rejected).
* Code Readability -
    Code becomes more readable and resembles synchronous code, improving overall maintainability.
* Standardization -
    Promises provide a standardized way to work with asynchronous code, making it easier for developers to understand and use.

4. What are different methods of Promises ? -----------------------------------------------------> Practical Topic
Explanation :-
* Promise.all() :
	•	What it is - Aggregates multiple promises into a single promise that resolves when all of the input promises have resolved.
	•	Input - An array (or any iterable) of promises.
	•	Returns - A single promise.
	•	When it returns - When all promises resolve or when one promise rejects.
	•	Return (All Successful) - An array of resolved values, in the order of the input promises.
	•	Return (One or More Failed) - The first rejection reason, and the entire Promise.all rejects.
* Promise.allSettled() :
	•	What it is - Waits for all promises to settle (either resolved or rejected) and returns an array of their results.
	•	Input - An array (or any iterable) of promises.
	•	Returns - A single promise.
	•	When it returns - When all input promises have settled.
	•	Return (All Successful) - An array of objects, each with {status: "fulfilled", value: result}.
	•	Return (One or More Failed) - An array of objects with either {status: "fulfilled", value: result} or {status: "rejected", reason: error}.
* Promise.race() :
	•	What it is - Returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects.
	•	Input - An array (or any iterable) of promises.
	•	Returns - A single promise.
	•	When it returns - As soon as the first promise settles (either resolves or rejects).
	•	Return (All Successful) - The value of the first settled promise.
	•	Return (One or More Failed) - The reason of the first promise to reject.
* Promise.any() :
	•	What it is - Returns a promise that resolves as soon as one of the input promises resolves, ignoring any rejections.
	•	Input - An array (or any iterable) of promises.
	•	Returns - A single promise.
	•	When it returns - When the first promise resolves or when all promises reject.
	•	Return (All Successful) - The value of the first promise to resolve.
	•	Return (One or More Failed) - If all promises fail, it returns an AggregateError.
* Promise.then() :
	•	What it is - Adds fulfillment and rejection handlers to the promise.
	•	Input - Two functions: onFulfilled, onRejected.
	•	Returns - A new promise.
	•	When it returns - Immediately after adding handlers.
	•	Return (All Successful) - The return value of onFulfilled.
	•	Return (One or More Failed) - The return value of onRejected.
* Promise.catch() :
	•	What it is - Adds a rejection handler to the promise.
	•	Input - A function onRejected.
	•	Returns - A new promise.
	•	When it returns - Immediately after adding the handler.
	•	Return (All Successful) - Skips catch if no error.
	•	Return (One or More Failed) - The return value of onRejected.
* Promise.finally() :
	•	What it is - Adds a handler to be called when the promise is settled, regardless of the result.
	•	Input - A function onFinally.
	•	Returns - A new promise.
	•	When it returns - Immediately after adding the handler.
	•	Return (All Successful) - The original promise’s value.
	•	Return (One or More Failed) - The original promise’s rejection reason.
* Promise.reject() :
	•	What it is - Returns a promise that is rejected with a given reason.
	•	Input - A reason (any value or error object).
	•	Returns - A rejected promise.
	•	When it returns - Immediately.
	•	Return (All Successful) - Not applicable (it’s always rejected).
	•	Return (One or More Failed) - The rejection reason.
* Promise.resolve() :
	•	What it is - Returns a promise that is resolved with a given value.
	•	Input - A value (can be a promise or any value).
	•	Returns - A resolved promise.
	•	When it returns - Immediately.
	•	Return (All Successful) - The resolved value.
	•	Return (One or More Failed) - Not applicable (it’s always resolved).

*/

// -----Syntax of Creating Promise-----
const operationPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (operationSuccessful) {
        resolve(result); // Resolve the promise with a value
    } else {
        reject(error); // Reject the promise with an error
    }
});
// -----Syntax of Using Promise-----
operationPromise
    .then((result) => {
        // Handle resolved promise
        console.log(result);
    })
    .catch((error) => {
        // Handle rejected promise
        console.error(error);
    });

// -----Callback vs Promises-----
// Callback example
getDataCallback((err, res) => {
    if (err) {
        console.error(err);
    } else {
        processDataCallback(res, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                displayDataCallback(data, (errorDisplay) => {
                    if (errorDisplay) {
                        console.error(errorDisplay);
                    }
                });
            }
        });
    }
});
// Promise example
getDataPromise()
    .then(res => processDataPromise(res))
    .then(data => displayDataPromise(data))
    .catch(err => console.error(err));

// Example of Promise.all()
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
Promise.all([p1, p2, p3])
    .then(values => console.log(values))  // [10, 20, 30]
    .catch(error => console.log(error));

// Example of Promise.allSettled()
const p4 = Promise.resolve(10);
const p5 = Promise.reject('Error!');
const p6 = Promise.resolve(30);

Promise.allSettled([p4, p5, p6])
    .then(results => console.log(results)); // [{status: "fulfilled", value: 10}, {status: "rejected", reason: "Error!"}, {status: "fulfilled", value: 30}]

// Example of Promise.race()
const p7 = new Promise((resolve) => setTimeout(resolve, 100, 'Fast'));
const p8 = new Promise((resolve) => setTimeout(resolve, 200, 'Slow'));

Promise.race([p7, p8])
    .then(value => console.log(value))  // 'Fast'
    .catch(error => console.log(error));

// Example of Promise.any()
const p9 = Promise.reject('Error 1');
const p10 = Promise.resolve(20);
const p11 = Promise.reject('Error 2');
Promise.any([p9, p10, p11])
    .then(value => console.log(value))  // 20
    .catch(error => console.log(error)); // AggregateError if all reject

// Example of Promise.then()
const p12 = Promise.resolve(42);
p12.then(value => console.log(value))  // 42
    .catch(error => console.log(error));

// Example of Promise.catch()
const p13 = Promise.reject('Error!');
p13.catch(error => console.log(error));  // 'Error!'

// Example of Promise.finally()
const p14 = Promise.resolve('Done');
p14.finally(() => console.log('Finally!'))  // 'Finally!'
    .then(value => console.log(value));  // 'Done'

// Example of Promise.reject()
const p15 = Promise.reject('Error!');
p15.catch(error => console.log(error));  // 'Error!'

// Example of Promise.resolve()
const p16 = Promise.resolve(42);
p16.then(value => console.log(value));  // 42
