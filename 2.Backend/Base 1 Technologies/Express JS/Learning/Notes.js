/*

-----Introduction to ExpressJS-----

1. What is the overview of ExpressJS ?
Explanation :-
* ExpressJS is a minimal and flexible Node.js web application framework.
* It provides a set of tools for building single-page, multi-page, or hybrid web applications and APIs.
* Key features -
	•	Routing - Handles URL requests (defining endpoints).
	•	Middleware - Functions that handle requests before sending a response.
	•	Templating engines - Helps render dynamic HTML.
	•	Integration - Works with databases like MongoDB and MySQL.
	•	Minimalistic - Lightweight with additional features added via plugins.

2. What is the Philosophy of ExpressJS ?
Explanation :-
* Simplicity - Express simplifies the complex task of building servers using vanilla Node.js.
* Unopinionated - It gives you freedom and flexibility to structure your app as you want, without enforcing strict patterns.
* Modularity - You can add only what you need using middleware and other Node.js packages.

3. How to setup and ExpressJS Environment ?
Explanation :-
* Install Node.js - Ensure you have Node.js installed (node -v to check).
* Install Express -
	Initialize a new Node.js project - npm init -y
	Install Express - npm install express
* Directory Structure -
	Create a folder for your app (e.g., /my-app).
	Inside, you’ll have a server.js file or similar to define your server logic.

4. How to run a Basic ExpressJS Server ?
Explanation :-
* Basic Express server setup -
	Create a server.js file.
	Write basic server logic.
    Ex -
        const express = require('express');
        const app = express();
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    Run the server using: node server.js.
	Visit localhost:3000 in your browser to see the result.

5. What is the Basics of Middleware in ExpressJS ?
Explanation :-
* Middleware is a function that processes requests before reaching the route handler.
* It can -
	•	Log requests.
	•	Parse incoming request bodies (like JSON).
	•	Handle authentication or session management.
* Middleware is executed sequentially.
* app.use() to define global middleware.
* Can be applied to specific routes as well.

6. How to Dubug in ExpressJS ?
Explanation :-
* Node.js Debugging - Use node --inspect to debug your Node.js apps.
* Express Debug - Use the debug package for debugging.
	Install: npm install debug
	In your code -
        const debug = require('debug')('myapp');
        debug('This is a debug message');
    Run with the debug flag: DEBUG=myapp node server.js.
* Error Handling Middleware - Catch errors using custom middleware.

-----Routing With ExpressJS-----

1. What is the overview of Routing ?
Explanation :-
* Routing in Express is how your application responds to client requests to specific URLs (or endpoints).
* It defines various HTTP methods (GET, POST, PUT, DELETE) and their corresponding route handlers.
* Ex - app.get('/about', (req, res) => { ... }); defines a GET route for the /about path.

2. How to define Routes ?
Explanation :-
* A route is defined by specifying -
	•	HTTP method (GET, POST, etc.).
	•	Path/URL.
	•	Callback function (route handler) that runs when the route is matched.
* Ex -
    app.get('/home', (req, res) => {
        res.send('Welcome to Home Page');
    });
    This defines a GET route for /home path.

3. How to defines Routing Parameters ?
Explanation :-
* Route parameters allow you to capture values from the URL for dynamic routes.
* Ex -
    app.get('/user/:id', (req, res) => {
        const userId = req.params.id;  -----> Extracting the route parameter
        res.send(`User ID: ${userId}`);
    });
    In this case, :id is a dynamic parameter. If a user visits /user/123, 123 will be passed as the id.

4. What are Response Methods ?
Explanation :-
* These methods are used to send back a response to the client -
    •	res.send() - Sends a string, object, or HTML response.
    •	res.json() - Sends a JSON response.
	•	res.status() - Sets the HTTP status code.
	•	res.redirect() - Redirects to a different URL.
* Ex -
    app.get('/json', (req, res) => {
        res.status(200).json({ message: 'Hello, JSON' });
    });

5. What is Route Path ?
Explanation :-
* The route path is the URL or part of the URL the server listens for.
* Can include static paths like /home or dynamic segments like /product/:id.
* Route paths are case-sensitive and can be defined using string patterns, regular expressions, or arrays.

6. What is Route Handlers ?
Explanation :-
* Route Handlers are the functions that execute when a particular route is matched.
* You can define single or multiple route handlers for a route.
* Ex -
    app.get('/example', (req, res, next) => {
        console.log('First handler');
        next(); -----> Move to the next handler
    }, (req, res) => {
        res.send('Second handler');
    });

-----Middleware in ExpressJS-----

1. What is a Middleware ?
Explanation :-
* Middleware is a function that executes between the request from the client and the response sent by the server.
* It can modify the request or response, perform logging, authentication, or error handling before passing control to the next middleware or route handler.
* Ex -
    app.use((req, res, next) => {
        console.log('Request received');
        next();  -----> Pass control to the next middleware/route
    });

2. How to use a Middleware ?
Explanation :-
* Global middleware -
    Use app.use() to apply middleware to every incoming request.
    Ex -
        app.use(express.json());  -----> Parse JSON request bodies
* Route-specific middleware -
    Apply middleware only to specific routes.
    Ex -
        app.get('/dashboard', myMiddleware, (req, res) => {
            res.send('Dashboard page');
        });

3. How to create a Custom Middleware ?
Explanation :-
* Custom middleware is a simple function with access to req, res, and next.
* Ex -
    function logger(req, res, next) {
        console.log(`Request URL: ${req.url}`);
        next();  -----> Move to the next middleware or route
    }
    app.use(logger);

4. What is Third-Party Middleware ?
Explanation :-
* Express allows you to use third-party middleware packages to extend functionality.
* Popular middleware includes -
    morgan for logging HTTP requests.
	cors for enabling CORS (Cross-Origin Resource Sharing).
* Ex -
    const morgan = require('morgan');
    app.use(morgan('tiny'));  -----> Log HTTP requests

5. What is Error-Handeling Middleware ?
Explanation :-
* Error-handling middleware handles errors that occur during request processing.
* It must have four parameters - (err, req, res, next).
* Ex -
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });
    This catches any errors and sends a 500 response.

6. What is Middleware Functionality ?
Explanation :-
* Middleware has access to the request object, response object, and next().
* Common use-cases -
	•	Modifying request data - Attach user data to req (e.g., req.user = decodedToken).
	•	Handling requests asynchronously - You can even add async functions to middleware.
	•	Short-circuiting the request-response cycle - Middleware can send a response directly, skipping further processing.
* Ex -
    app.use((req, res, next) => {
        if (req.query.admin) {
            res.send('Admin access granted');
        }
        else {
            next();  -----> Continue to the next middleware/route
        }
    });

-----Validating Requests in ExpressJS-----

1. What is the need of request validation ?
Explanation :-
* Request validation ensures that incoming data from the client is valid, complete, and safe before processing.
* It prevents issues like -
	•	Invalid data being stored in the database.
	•	Security vulnerabilities such as injection attacks.
	•	Inconsistent or incorrect application behavior.

2. What is Server Side Validation vs Client Side Validation ?
Explanation :-
* Client-Side Validation - Performed in the browser using JavaScript before sending the request to the server. It improves user experience but can be bypassed by malicious users.
* Server-Side Validation - Performed on the server to ensure the data is valid and secure. It is critical because client-side validation can be manipulated.
* Best practice - Always validate on the server, even if client-side validation exists.

3. How to do Validation with Express-Validator ?
Explanation :-
* express-validator is a popular middleware for validating requests in ExpressJS.
* Steps -
    Install express-validator -
        npm install express-validator
    Use the check() and validationResult() methods to define validation rules -
        const { check, validationResult } = require('express-validator');
        app.post('/signup', [
            check('email').isEmail(),
            check('password').isLength({ min: 5 })
            ], (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            res.send('User registered successfully');
        });

4. How to work with Errors in Express-Validator ?
Explanation :-
* After running the validation rules, you need to handle the validation errors.
* Use validationResult() to gather errors and send a structured response.
* Ex -
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
* Common Practices -
	•	Return a clear error message.
	•	Use status codes like 400 Bad Request.

5. How to Validate Nested Objects ?
Explanation :-
* Nested object validation ensures that subfields of an object are also validated.
* You can use dot notation to target nested fields.
* Ex -
    app.post('/profile', [
        check('user.name').notEmpty(),
        check('user.age').isInt({ min: 18 })
        ], (req, res) => {
        -----> Handle validation results
    });

6. What is Custom Validation Input ?
Explanation :-
* You can create custom validators using custom() to enforce specific rules that are not covered by built-in validators.
* Ex -
    check('username').custom(value => {
        if (value.includes('admin')) {
        throw new Error('Username cannot contain "admin"');
    }
    return true;
    });

-----Error Handeling in ErpressJS-----

1. What is Error Handeling in ExpressJS ?
Explanation :-
* Error handling in ExpressJS ensures that errors occurring during request processing are caught and handled gracefully, without crashing the app.
* Errors can occur due to various reasons such as database connection failure, invalid input, or issues with external APIs.
* Key Concepts -
	•	Express uses middleware functions to handle errors.
	•	Centralized error handling improves maintainability.

2. What are Error First Callbacks ?
Explanation :-
* Error-first callbacks are functions where the first argument is reserved for an error object.
* If there’s no error, the first argument is null or undefined, and subsequent arguments contain the result.
* Ex -
    fs.readFile('/file', (err, data) => {
        if (err) {
            ----->Handle error
        } else {
            ----->Process data
        }
    });
* Error-first callbacks are common in Node.js and help handle asynchronous errors.

3. What are Express Error Handeling Middleware ?
Explanation :-
* Error-handling middleware functions in ExpressJS are identified by having four arguments: (err, req, res, next).
* This middleware is used to catch and handle errors in a centralized way.
* Ex -
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
* Key Point - This middleware should be placed after all routes and normal middleware.

4. What are Custom Error Handelers ?
Explanation :-
* Custom error handlers are used to manage specific types of errors, providing tailored responses based on the error.
* Ex -
    class NotFoundError extends Error {
        constructor(message) {
            super(message);
            this.name = 'NotFoundError';
        }
    }
    app.use((err, req, res, next) => {
    if (err instanceof NotFoundError) {
        return res.status(404).json({ message: err.message });
    }
    next(err); -----> Pass to the default error handler
    });
* Custom error handlers allow more control over different types of errors.

5. What is Logging of Errors ?
Explanation :-
* Error logging captures details about the error, including time, type, and stack trace. This helps in debugging and auditing.
* Use libraries like Winston or Morgan for structured error logging.
* Ex -
    const winston = require('winston');
        const logger = winston.createLogger({
        level: 'error',
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'error.log' })
        ]
    });
    app.use((err, req, res, next) => {
        logger.error(err.message);
        res.status(500).send('Internal Server Error');
    });

6. What is Global Error Handeling ?
Explanation :-
* Global error handling refers to setting up a default error handler that catches unhandled errors.
* It ensures that your application doesn’t crash unexpectedly due to unhandled errors.
* Best Practices -
	•	Add a fallback error-handling middleware at the end of your middleware stack.
	•	Send consistent error messages to clients and log the full details internally.
* Ex -
    app.use((err, req, res, next) => {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    });

*/
