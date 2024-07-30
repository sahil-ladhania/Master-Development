// -----Example using Callbacks-----
function readFileCallback(fileName, callback) {
    // Simulating asynchronous file reading
    setTimeout(() => {
        let content = "File content goes here";
        callback(null, content);
        }, 1000);
}
// Using the callback
readFileCallback("example.txt", (error, data) => {
    if (error) {
        console.error("Error reading file:", error);
    } else {
        console.log("File content:", data);
    }
});


// -----Example using Promises-----
function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous file reading
        setTimeout(() => {
            let content = "File content goes here";
            resolve(content);
            }, 1000);
    });
}
// Using the promise
readFilePromise("example.txt")
    .then(data => {
        console.log("File content:", data);
    })
    .catch(error => {
        console.error("Error reading file:", error);
    });


// -----Example using Async Await-----
async function readFileSync(fileName) {
    return new Promise(resolve => {
        // Simulating asynchronous file reading
        setTimeout(() => {
            let content = "File content goes here";
            resolve(content);
            }, 1000);
    });
}
// Using async/await
async function readFileAsync() {
    try {
        let data = await readFileSync("example.txt");
        console.log("File content:", data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}
// Calling the async function
readFileAsync();