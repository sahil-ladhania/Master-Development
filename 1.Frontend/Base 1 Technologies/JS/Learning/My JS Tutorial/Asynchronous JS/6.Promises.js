/*

1. What is a Promise ?
Explanation :-
* Promise ek JavaScript object hai jo asynchronous operations ko handle karne mein madad karta hai.
* Promise mai 3 States hi hote hai bs :
    Pending
    Resolve
    Rejected
* Pending -
    Initially, jab promise create hota hai, yeh state hota hai.
    Yahan se shuru hota hai aur kisi bhi resolution ya rejection tak pahunchne par badal sakta hai.
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

3. When Callback was there , Why did Promise was Introduced ?
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

4. What are different methods of Promises ?
Explanation :-
Promise.all() -
    Sab promises ka wait karta hai, fir unka array resolve karta hai.
Promise.allSelected() -
    Multiple promises ko handle karta hai, saare results deta hai, chahe resolve ho ya reject.
Promise.any() -
    Pehla resolve hua promise return karta hai, baaki ko ignore karta hai.
    Jab kisi bhi success kaafi hai.
Promise.then() -
    Promise ka resolved value handle karta hai.
    Standard tareeka hai resolution ke saath kaam karne ka.
Promise.catch() -
    Specifically promise rejection ko handle karta hai, ek hi jagah se errors ko manage karne mein madad karta hai.
Promise.finally() -
    Cleanup ke liye, chaahe promise resolve ho ya reject ho, yeh block hamesha chalta hai.
Promise.race() -
    Pehla resolve ya reject hua promise return karta hai.
    Jab sirf pehle ka result chahiye ho.
Promise.reject() -
    Manually reject hone wala promise banaata hai.
    Reject reason specify kar sakte hain.
Promise.resolve() -
    Manually resolve hone wala promise banaata hai.
    Resolve value specify kar sakte hain.
Promise.withResolvers() -
    Custom resolvers ke saath promise banata hai.
    Apne taur par resolve aur reject functions define kar sakte hain.

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

// -----Syntax of Promise.all()-----
Promise.all([promiseA, promiseB, ...])
    .then((allValues) => {
        // Handle resolved promises
    })
    .catch((anyError) => {
        // Handle if any promise rejects
    });
// Example of Promise.all()
const apiPromise1 = fetchDataFromAPI1();
const apiPromise2 = fetchDataFromAPI2();

Promise.all([apiPromise1, apiPromise2])
    .then((allValues) => {
        console.log('All promises resolved:', allValues);
    })
    .catch((anyError) => {
        console.error('One or more promises rejected:', anyError);
    });

// -----Syntax of Promise.allSettled()-----
Promise.allSettled([promiseC, promiseD, ...])
    .then((allResults) => {
        // Handle all promises, regardless of resolution or rejection
    });
// Example of Promise.allSettled()
const apiPromise3 = fetchDataFromAPI1();
const apiPromise4 = fetchDataFromAPI2();

Promise.allSettled([apiPromise3, apiPromise4])
    .then((allResults) => {
        console.log('All promises settled:', allResults);
    });

// -----Syntax of Promise.any()-----
Promise.any([promiseE, promiseF, ...])
    .then((firstResolved) => {
        // Handle the first resolved promise
    })
    .catch((allRejected) => {
        // Handle if all promises are rejected
    });
// Example of Promise.any()
const cachePromise = fetchDataFromCache();
const networkPromise = fetchDataFromAPI();

Promise.any([cachePromise, networkPromise])
    .then((firstResolved) => {
        console.log('First promise resolved:', firstResolved);
    })
    .catch((allRejected) => {
        console.error('All promises rejected:', allRejected);
    });

// -----Syntax of Promise.then()-----
simplePromise
    .then((result) => {
        // Handle resolved promise
    })
// Example of Promise.then()
fetchAPIData()
    .then((data) => {
        console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

// -----Syntax of Promise.catch()-----
catchPromise
    .catch((error) => {
        // Handle rejected promise
    });
// Example of Promise.catch()
fetchAPIData()
    .then((data) => {
        console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

// -----Syntax of Promise.finally()-----
finallyPromise
    .finally(() => {
        // Code to be executed regardless of promise resolution or rejection
    });
// Example of Promise.finally()
fetchAPIData()
    .then((data) => {
        console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    })
    .finally(() => {
        console.log('This code always runs, whether promise is resolved or rejected.');
    });

// -----Syntax of Promise.race()-----
Promise.race([promiseG, promiseH, ...])
    .then((firstResolved) => {
        // Handle the first resolved promise
    })
    .catch((firstRejected) => {
        // Handle the first rejected promise
    });
// Example of Promise.race()
const racePromise1 = fetchDataFromAPI1();
const racePromise2 = fetchDataFromAPI2();

Promise.race([racePromise1, racePromise2])
    .then((firstResolved) => {
        console.log('First promise to resolve:', firstResolved);
    })
    .catch((firstRejected) => {
        console.error('First promise to reject:', firstRejected);
    });

// -----Syntax of Promise.reject()-----
const rejectionReason = 'This promise is rejected';
const rejectedDataPromise = Promise.reject(rejectionReason);
// Example of Promise.reject()
const failedFetchPromise = Promise.reject('Failed to fetch data');
failedFetchPromise.catch((fetchError) => {
    console.error('Promise rejected with reason:', fetchError);
});

// -----Syntax of Promise.resolve()-----
const resolvedSuccessValue = 'Data successfully fetched';
const resolvedDataPromise = Promise.resolve(resolvedSuccessValue);
// Example of Promise.resolve()
const fetchDataSuccessPromise = Promise.resolve('Data successfully fetched');
fetchDataSuccessPromise.then((fetchedData) => {
    console.log('Promise resolved with data:', fetchedData);
});

// -----Syntax of custom promise with resolvers-----
const customAsyncPromise = new Promise((resolve, reject) => {
    // Custom logic to resolve or reject the promise
});
// Example of custom promise with resolvers
const randomOutcomePromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});
randomOutcomePromise
    .then((result) => console.log('Resolved:', result))
    .catch((error) => console.error('Rejected:', error));
