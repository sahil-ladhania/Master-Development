// Basic TS 

let x : number = 1;
console.log(x);

// Problem : 1
function greetings(firstName:string) {
    console.log(`Welcome ${firstName}`);
}
greetings("Sahil");

// Problem : 2
function calculateSum(num1:number , num2:number):number {
    return num1 + num2;
}
const totalSum = calculateSum( 10 , 20);
console.log("Sum of 2 Numbers : " + totalSum);

// Problem : 3
function isLegal(age:number):boolean {
    if(age >= 18){
        return true;
    }
    return false;
}
const isAgeLegal = isLegal(17);
console.log("Legal Age : " + isAgeLegal);

// Problem : 4
function delayedCall(fn : () => void) {
    setTimeout(fn , 1000);
}
delayedCall(function() {
    console.log("Hi There !!!");
})
