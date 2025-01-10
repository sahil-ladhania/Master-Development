/*

1. Used to create a new array with elements that pass a certain condition.

Syntax :
array.filter(callback(element, index, array), thisArg)
* array: The array to filter.
* callback: Function that tests each element, taking three arguments:
* element: The current element being processed in the array.
* index: The index of the current element.
* array: The array filter was called upon.
* thisArg (optional): Object to use as this when executing the callback.

*/
// Example of filter :
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Practice Problems :

// Easy Questions :-
// 1. Create a function to filter out even numbers from a given list.
const getEvenNumbers = (array) => {
    const evenNums = array.filter(num => num % 2 === 0);
    console.log(evenNums);
}
getEvenNumbers([1,2,3,4,5,6,7,8,9,10]);

// 2. Write a function that filters a list of words and returns a new list with only those that have more than five characters.
const fiveWordsChar = (array) => {
    const moreThan5Char = array.filter(word => word.length > 5);
    console.log(moreThan5Char);
}
fiveWordsChar(['sahil' , 'harshit' , 'hamd']);

// Medium Questions :-
// 1. Implement a function that filters out prime numbers from a list of integers.

// 2. Write a function to filter a list of strings and return only those that start with a vowel.
const wordStartWithVowel = (array) => {
    const wordWithVowels = array.filter(word => ['a' , 'e' , 'i' , 'o' , 'u'].includes(word[0].toLowerCase()));
    console.log(wordWithVowels);
}
wordStartWithVowel(['sahil' , 'aman' , 'harshit']);