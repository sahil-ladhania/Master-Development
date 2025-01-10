/*

1. Used to apply a given function to all the elements in an array and return a new array with the results.

Syntax :
array.map(callback(currentValue, index, array), thisArg)
* array: The array to map over.
* callback: Function that produces an element of the new array, taking three arguments:
* currentValue: The current element being processed in the array.
* index: The index of the current element.
* array: The array map was called upon.
* thisArg (optional): Object to use as this when executing the callback.

*/
// Example of map :
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9]

// Practice Problems :

// Easy Questions :-
// 1. Write a function that takes a list of integers and returns a new list with each element squared.
const squaredList = (array) => {
    const squaredIntegers = array.map(int => int * 2);
    console.log(squaredIntegers); // Output: [2, 4, 6 , 8 , 10]
}
squaredList([1,2,3,4,5]);

// 2. Create a function that accepts a list of names and returns a new list containing the length of each name.
const nameLength = (array) => {
    const namesLengths = array.map((name) => name.length);
    console.log(namesLengths);
}
nameLength(['sahil' , 'hamd' , 'harshit']);

// Medium Questions :-
// 1. Implement a function that takes a list of temperatures in Celsius and converts them to Fahrenheit using the formula: F = (C * 9/5) + 32.
const convertFahrenheit = (array) => {
    const CToF = array.map(temp => (temp * 9/5) + 32);
    console.log(CToF);
}
convertFahrenheit([0 , 25 , 37 , 100]);

// 2. Write a function that takes a list of strings representing numbers and returns a new list with the numbers converted to integers.
const convertToIntegers = (array) => {
    const strToInt = array.map(str => parseInt(str));
    console.log(strToInt);
}
convertToIntegers(['12' , '34' , '50' , '100' , 'sahil']);