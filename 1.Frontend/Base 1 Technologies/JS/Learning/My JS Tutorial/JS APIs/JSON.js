// JSON Methods :

// 1. JSON.parse() - Parses a JSON string, converting it into a JavaScript object.
// Usge :
// * API Response Handling: When receiving data from an API, use JSON.parse() to convert the
// JSON string into a usable JavaScript object.
// * LocalStorage Retrieval: Retrieve and convert JSON-stored settings or data from LocalStorage.
// * WebSocket Communication: Parse JSON messages received via WebSocket for real-time applications.
console.log("JSON.parse Method");
const jsonString1 = '{"name" : "Sahil" , "age" : 23}';
const parsedObject = JSON.parse(jsonString1);
console.log(parsedObject);
console.log(typeof (parsedObject));
console.log(`Name : ${parsedObject.name}`);
console.log(`Age : ${parsedObject.age}`);

// 2. JSON.stringify() - Converts a JavaScript object into a JSON string.
// Usage :
// * Sending Data to Server: Prepare and stringify data before sending it to a server in a POST request.
// * LocalStorage Storage: Stringify an object before storing it in LocalStorage.
// * Logging: Convert and log complex objects in a readable JSON format.
console.log("JSON.stringify Method");
const dataObject = {
    name : "Sahil",
    age : 23
};
const jsonString2 = JSON.stringify(dataObject);
console.log(jsonString2);
console.log(typeof (jsonString2));
