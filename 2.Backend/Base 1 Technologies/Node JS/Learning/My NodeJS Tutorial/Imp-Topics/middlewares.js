/*

1. Understanding Middlewares :
* Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

2. Why Middleware ?
* Emerged because we were using DRY(Dont Repeat Yourself) in our code. So Middlewares emerged as a solution to enhance code organization by extracting prechecks from the core application logic.

3. What is next() Keyword ?
* Callback function that is used to pass control to the next middleware function in the stack. If next() is not called within a middleware function, the request-response cycle stops, and the client receives no response.

-----Code Example-----
app.use((req, res, next) => {
  console.log('This middleware runs first.');
  next(); // Move to the next middleware
});
app.use((req, res) => {
  console.log('This middleware runs second.');
  res.send('Response sent from the second middleware.');
});

4. Difference between res.send() & res.json() :
* res.send() ---> Used to send a response of various types.
* res.json() ---> Specifically sends a JSON response.

5. Importance of app.use(express.json()) :
* Middleware that parses incoming JSON payloads in the request body. It is crucial when dealing with JSON data sent in the request body, typically in POST or PUT requests. Without this middleware, you might receive the JSON data as a raw string, and you'd need to manually parse it.

-----Code Example-----
const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON in the request body
app.post('/api/data', (req, res) => {
  const jsonData = req.body; // Now req.body contains the parsed JSON data
  // Process the data...
  res.json({ success: true });
});

6. Middleware & req.body :
* req.query & req.headers ----> Don't require middleware because they represent the query parameters and headers of the incoming request, respectively. Express automatically parses them.
* req.body ----> Requires middleware like express.json() to parse the request body, especially when the body contains JSON data. Other middleware, like express.urlencoded(), is used for parsing form data in the request body.

7. 3 Ways of Sending Inputs to a Response :
* Query Parameter - Simple instructions visible in the web address. Sent in the URL and can be accessed using req.query. 
* Body - Hidden part of the request for more detailed info, great for forms. Sent in the request body, accessible through req.body.
* Headers - Extra details about the request, useful for special information. Additional information sent in the HTTP headers, retrieved using req.headers.

8. Primary Function of Middleware :
* Middleware ka ek main kaam hai request-response cycle ko customize karna aur usmein kuch changes laana. 
* Jab ek middleware function ko call kiya jaata hai, toh usmein req aur res objects ki accessibility hoti hai. 
* Ismein aap kai types ke kaam ko anjaam de sakte hain jaise ki data ko modify karna, errors ko handle karna, ya fir agle middleware function ko call karna.

9. Types of Middleware :
* Application Level Middleware
* Router Level Middleware
* Error Handling Middleware
* Built-In Middleware
* Custom Middleware

10. Application Level Middleware :
* Affects all routers in an application.
* Handles tasks like authentication and managing data for responses.

11. Router Level Middleware :
* Applies to specific routes or route groups.
* Allows modularization for specific parts of an application.
* Offers refined control over request flow and execution order.

12. Error Handling Middleware :
* Detects and regulates errors during the request-response cycle.
* Typically placed last in the chain to handle errors appropriately.

13. Built-In Middleware :
* Includes functions like "express.static," "express.json," and "express.urlencoded".
* Serve static files, parse JSON data, and extract key-value pairs from request bodies.

14. Custom Middleware :
* Every middleware function in ExpressJS takes three arguments: req, res, and next. 
* You can Customize these functions for specific tasks in your application.

15. Syntax of Defining Middleware :
-----Syntax-----
const myMiddleware = (req, res, next) => {
  // Middleware logic here
  // Modify req or res objects, perform tasks, or call next middleware
  // Example: Logging
  console.log('Middleware executed');
  // Call the next middleware in the stack
  next();
};

16. Syntax of Using Middleware :
-----Syntax-----
app.use(myMiddleware);

17. Parameters of Middleware :
* req ----> Represents Request Object
* res ----> Represents Response Object
* next() ----> Represents Function

18. req Parameter :
* Contains information about the client's request.

19. res Parameter :
* Allow you to send a response back to the client.

20. next() Parameter :
* Function to call the next middleware in the stack, If omitted, the request-response cycle stops.

*/