// Array Type in TS

// Problem : 1
let array = [1,2,3,4,5];
function findMax(arr:number[]): number {
    const n : number = arr.length;
    let max : number = 0;
    arr.sort();
    max = arr[n-1];
    return max;
}
const maxElement = findMax(array);
console.log("Max Element in Array : " + maxElement);

// Problem : 2
interface Userr {
    firstName : string,
    lastName : string,
    age : number
}
function legalUsers(users:Userr[]):Userr[] {
    const aUsers = users.filter(u => (u.age >= 18));
    return aUsers;
}
const adultUsers = legalUsers([
    {
        firstName : "Sahil",
        lastName : "Ladhania",
        age : 18
    },
    {
        firstName : "Harshit",
        lastName : "Ladhania",
        age : 18
    },
    {
        firstName : "Janvi",
        lastName : "Ladhania",
        age : 14
    },
]);
console.log(adultUsers);