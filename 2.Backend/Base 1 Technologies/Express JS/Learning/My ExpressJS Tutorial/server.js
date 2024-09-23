const express = require('express');
const {listen} = require("express/lib/application");
// console.log("express :" , express);
// console.log("express :" , typeof(express)); // What is this ----> Function
const app = express();
// console.log("app : " , app); // What is this ?
// console.log("app :" , typeof(express)); // What is this ----> Function
const port = 3001;

// Adding Middleware to Parse Body
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi Bro...");
})

// // Basic Route Definition : GET , POST , PUT , PATCH , DELETE , HEAD , OPTIONS
// app.get('/', (req, res) => {
//     // console.log("req : " , req);
//     // console.log("req : " , typeof(req)); // What is this -----> Object
//     // console.log("res : " , res);
//     // console.log("res : " , typeof(res)); // What is this -----> Object
//     res.send("Express Tutorial...");
// });
// console.log("Before GET");
// app.get('/users', (req, res) => {
//     res.send("Users List...");
// });
// console.log("Before POST");
// app.post('/user', (req, res) => {
//     res.send("User Created...");
// })
// console.log("Before PUT");
// app.put('/user', (req, res) => {
//     res.send("User Updated using PUT...");
// })
// console.log("Before PATCH");
// app.patch('/user', (req, res) => {
//     res.send("User Updated using PATCH...");
// })
// console.log("Before DELETE");
// app.delete('/user', (req, res) => {
//     res.send("User Deleted...");
// })
// console.log("Before HEAD");
// app.head('/users' , (req, res) => {
//     res.send("This is HEAD Method...");
// })
// console.log("Before OPTIONS");
// app.options('/user' , (req, res) => {
//     res.send("This is OPTION Method...");
// })

// -----Routing Parameters-----
// -----Path Variables-----
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });
// // -----Optional Parameters-----
// app.get('/products/:id?', (req, res) => {
//     const productId = req.params.id || 'guest';
//     res.send(`Product ID: ${productId}`);
// });
// // -----Query Parameters-----
// app.get('/items', (req, res) => {
//     const value = req.query.item;
//     res.send(`Query value: ${value}`);
// });


// // -----Route Chaining-----
// app.route('/items')
//     .get((req, res) => {
//         res.send("Getting items...");
//     })
//     .post((req, res) => {
//         res.send("Adding items...");
//     })

// // -----Request Methods-----
// app.get('/test', (req, res) => {
//     const httpMethod = req.method;
//     // res.send(httpMethod);
//     const ipAddress = req.ip;
//     // res.send(ipAddress);
//     res.set("myHeader" , "Sahil Ladhania");
//     const headerValue = req.headers["myHeader"];
//     res.send(headerValue);
// })
// app.get('/test/:id', (req, res) => {
//     const id = req.params.id;
//     const name = req.query.name;
//     res.json({
//         "id" : id,
//         "name" : name,
//     });
// })
// app.post('/test', (req, res) => {
//     const name = req.body.name;
//     console.log(name);
//     res.send(name);
// })

// // -----Response Methods-----
// app.get('/test', (req, res) => {
//     // res.send([
//     //     {
//     //         "name" : "Sahil"
//     //     },
//     //     {
//     //         "name" : "Janvi"
//     //     }
//     // ])
//     // res.json([1 , 2, 3]);
//     // res.status(500).send("test");
//     // res.redirect(`http://localhost:${3002}`);
//     // res.sendFile('package.json');
//     // res.set("myHeader" , "Sahil Ladhania").send("Hola");
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// console.log("listen :" , express); // What is this ?
// console.log("listen :" , typeof(listen())); // What is this ----> Object