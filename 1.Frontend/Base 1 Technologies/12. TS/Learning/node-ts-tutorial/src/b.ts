// Interface in TS

// Problem : 1
interface User{
    firstName : string,
    lastName : string,
    email : string,
    age : number
}
function isAdult(user:User):boolean {
    if(user.age >= 18){
        return true;
    }
    else{
        return false;
    }
}

const ifUserAdult = isAdult({
    firstName : "Sahil",
    lastName : "Ladhania",
    email : "s@gmail.com",
    age : 18
});
console.log("Is User Adult : " + ifUserAdult);