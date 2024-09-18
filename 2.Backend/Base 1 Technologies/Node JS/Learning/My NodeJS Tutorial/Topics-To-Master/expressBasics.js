/*

1. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

2. Express.js is a web application framework for Node.js that simplifies the process of building robust and scalable web applications.

*/

// Importing Dependencies.
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express()
const port = 3000

// Middlewares for Parsing JSON & URL - encoded Parameters.
app.use(express.json()) // Allows to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })) // Allows to parse incoming request with urlencoded payloads.
app.use(cookieParser());

// Most Important HTTP Methods :-

// 1. GET Request
app.get('/api/get-example/:exampleId', (req, res) => {
    // Accessing Path Parameters.
    const exampleId = req.params;
    console.log(exampleId);
    // Accessing Query Parameters.
    const name = req.query.name;
    console.log(name);
    const place = req.query.place;
    console.log(place);
    const animal = req.query.animal;
    console.log(animal);
    const thing = req.query.thing;
    console.log(thing);
    const user_example = {
        name : name,
        place : place,
        animal : animal,
        thing : thing
    }
    // Setting Headers.
    res.setHeader('Custom-Header1','Kuch Nhi Krta'); // setHeader ---> Sets one Header at a time.
    res.set({ // set ---> Sets Multiple Headers at a time.
        "Custom-Header2" : "Ye Bhi Kuch Nhi Krta",
        "Custom-Header3": "Ye To Nalla Hai Hi"
    }); 
    // Accessing Headers.
    const headerData = req.headers;
    console.log(headerData);
    const host_header = req.headers['host'];
    console.log(`host Header : ${host_header}`);
    // Setting a Cookie.
    res.cookie('name' , 'Sahil');
    res.cookie('place' , 'Kerela');
    res.cookie('animal' , 'Elephant');
    res.cookie('thing' , 'Hayabusa');
    // Getting a Cookie.
    const nameCookie = req.cookies.name;
    const placeCookie = req.cookies.place;
    const animalCookie = req.cookies.animal;
    const thingCookie = req.cookies.thing;
    // Sending JSON Data.
    const jsonData = {
        id: exampleId,
        data: user_example,
        headers: headerData,
        cookies: {
            name : nameCookie,
            place : placeCookie,
            animal : animalCookie,
            thing : thingCookie
        }
    }
    // Sending Response To Client and Setting the Status Code.
    res.status(200).send({
        Message : "I have set the status code to 201...",
        UserExample : user_example,
        NameCookie : nameCookie,
        PlaceCookie : placeCookie,
        AnimalCookie : animalCookie,
        ThingCookie : thingCookie,
        JsonData : jsonData
    });
})

// 2. POST Request 
app.post('/api/post-example/:exampleId', (req, res) => {
    // Accessing Body.
    const { name } = req.body;
    const { place } = req.body;
    const { animal } = req.body;
    const { thing } = req.body;
    console.log(name);
    console.log(place);
    console.log(animal);
    console.log(thing);
    // Accessing Path Parameters.
    const { exampleId } = req.params;
    console.log(exampleId);
    // Accessing Query Parameters.
    const name2 = req.query.name2;
    console.log(name2);
    const place2 = req.query.place2;
    console.log(place2);
    const animal2 = req.query.animal2;
    console.log(animal2);
    const thing2 = req.query.thing2;
    console.log(thing2);
    // Setting Headers.
    res.setHeader('Custom-Header4','Kuch Nhi Krta'); // setHeader ---> Sets one Header at a time.
    res.set({ // set ---> Sets Multiple Headers at a time.
        "Custom-Header5" : "Ye Bhi Kuch Nhi Krta",
        "Custom-Header6": "Ye To Nalla Hai Hi"
    }); 
    // Note : You cant check the headers you have set in a post request directly in the browser. Figure Something out.
    // Accessing Headers.
    const myHeaders = req.headers;
    console.log(myHeaders);
    const contentType = req.headers['content-type'];
    console.log(contentType);
    // Setting a Cookie.
    res.cookie('name2' , 'sahil');
    res.cookie('place2' , 'kerela');
    res.cookie('animal2' , 'elephant');
    res.cookie('thing2' , 'hayabusa');
    // Getting a Cookie.
    const name2Cookie = req.cookies.name2;
    const place2Cookie = req.cookies.place2;
    const animal2Cookie = req.cookies.animal2;
    const thing2Cookie = req.cookies.thing2;
    // Sending JSON Data.
    const responseData = {
        id: exampleId,
        headers: myHeaders,
        cookies: {
            name : name2Cookie,
            place : place2Cookie,
            animal : animal2Cookie,
            thing : thing2Cookie
        }
    }
    // Sending Response To Server and Setting the Status Code.
    res.status(200).send({
        Message : "Sending Data To Server When User Hits This Route...",
        ServerData : responseData
    })
})

// 3. PUT Request
app.put('/api/put-example/:id', (req, res) => {
    res.send('Hello World!')
})

// 4. DELETE Request
app.delete('/api/delete-example/:id', (req, res) => {
    res.send('Hello World!')
})

// Listening On Port 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})