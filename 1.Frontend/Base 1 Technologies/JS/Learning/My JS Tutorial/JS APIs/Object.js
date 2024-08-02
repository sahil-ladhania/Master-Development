// Object Methods :

const sampleObject = {
    name : "John",
    age : 25,
    city : "London"
};

// 1. Object.keys() - Returns an array of a given object's own enumerable property names.
// Usage :
// * Iterating through keys in an object for specific operations.
// * Dynamically accessing and manipulating object properties.
// * Checking the existence of specific properties.
const keysArray = Object.keys(sampleObject);
console.log(keysArray);

// 2. Object.values() - Returns an array of a given object's own enumerable property values.
// Usage :
// * Extracting values for further processing or display.
// * Converting object values for specific calculations.
// * Comparing or validating values within an object.
const valuesArray = Object.values(sampleObject);
console.log(valuesArray);

// 3. Object.entries() - Returns an array of a given object's own enumerable property [key, value] pairs.
// Usage :
// * Iterating through both keys and values simultaneously.
// * Transforming object data for specific output formats.
// * Checking properties and their values conditionally.
const entriesArray = Object.entries(sampleObject);
console.log(entriesArray);

// 4. Object.hasOwnProperty() - Returns a boolean indicating whether the object has the specified property as its own property.
// Usage :
// * Checking for the existence of a specific property.
// * Avoiding unintended prototype property access.
// * Conditionally handling object properties.
const hasOwnProperty = sampleObject.hasOwnProperty('age');
console.log(hasOwnProperty);

// 5. Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.
// Usage :
// * Merging properties from multiple objects into a single object.
// * Creating a shallow copy of an object.
// * Updating an object with new values.
const targetObject = {
    name : "John"
};
const sourceObject = {
    age : 25,
    city : "London"
};
const mergedObject = Object.assign(targetObject , sourceObject);
console.log(mergedObject);