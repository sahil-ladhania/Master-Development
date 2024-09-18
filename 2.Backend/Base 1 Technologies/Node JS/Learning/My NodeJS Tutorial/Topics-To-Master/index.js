const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Question To Think :-
// Why I am getting 'undefined' in console when I am hitting the endpoint in postman ?
/*
    Parsing ka matlab hota hai data ko ek format se doosre format mein convert karna. Jab aap server par kisi client se data receive karte hain, toh wo data ek particular format mein hota hai, jise aapke server code ko samajhna mushkil ho sakta hai. Is data ko readable aur usable format mein convert karna parsing kehlata hai.

    Express mein, jab aap kisi POST request ke zariye JSON data bhejte hain, toh ye data initially raw format mein hota hai, aur aapko ise JavaScript object mein convert karna hota hai taki aap us data ko aasani se use kar sakein.

    `express.json()` aur `body-parser.json()` dono hi middleware hain jo ye kaam karte hain, lekin Express version 4.16.0 se, `express.json()` Express ke default part ban gaya hai, iska matlab hai ki Express ke newer versions mein aapko separately `body-parser` install karne ki zarurat nahi hai.

    To sum it up:
    - `express.json()` aur `body-parser.json()` dono JSON data ko parse karte hain Express mein.
    - `express.json()` Express ka default hai aur modern versions mein aapko additional installation ki zarurat nahi hai.
    - Agar aap new project shuru kar rahe hain ya Express ka latest version istemal kar rahe hain, toh `express.json()` use karna better hai.
*/