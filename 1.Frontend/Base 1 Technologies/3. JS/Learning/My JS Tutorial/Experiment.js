function multiplyBy5(num) {
    return num * 5;
};

multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username , score) {
    this.username = username;
    this.score = score;   
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Score is : ${this.score}`);
}

// const chai = createUser("chai" , 25);
// const tea = createUser("tea" , 250);
const chai = new createUser("chai" , 25);
const tea = new createUser("tea" , 250);

// chai.printMe(); // Error Kyu Aya ----> Uncaught TypeError: Cannot read properties of undefined (reading 'printMe') | But jaise hi new keyword use kia print hogya : Score is : 25 , Ayesa kyu ???
