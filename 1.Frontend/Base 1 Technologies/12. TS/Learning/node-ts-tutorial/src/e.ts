// Generics

// Problem : 1
type arrayType = number | string;
function firstElement(array:arrayType[]): arrayType {
    return array[0];
}
const firstElem = firstElement([1,2,3,4]);
console.log(firstElem);

// Solution of Problem : 1
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())