/*

-----Introduction to ExpressJS-----

1. What is the overview of ExpressJS ?
Explanation :-
* ExpressJS ek minimal aur flexible Node.js web application framework hai jo web aur mobile applications ke liye robust features provide karta hai. Ye application development ko asan aur efficient banata hai, jisme inbuilt middleware functions aur routing capabilities hoti hain.
* Key Features -
	Minimalist Framework -
        Ye lightweight hai, jisse aapko sirf wo features use karne ka mauka milta hai jo aapko zarurat hai.
	Middleware Support -
        ExpressJS middleware functions ko support karta hai, jo HTTP requests aur responses ko process karne ke liye use hoti hain.
	Routing -
        Ye multiple routes ko handle karne ki capability deta hai, jisse aap different URLs par alag alag requests handle kar sakte hain.
	Performance -
        ExpressJS high-performance applications banane ke liye optimized hai.
* Use Cases -
	APIs Build Karna -
        RESTful APIs ko develop karne ke liye popular choice hai.
	Single Page Applications (SPAs) -
        Aap frontend frameworks ke saath milake isse use kar sakte hain.
	Microservices Architecture -
        Choti services ko quickly develop karne ke liye best hai.
* Basic Express Application Setup -
    Node.js aur npm Install Karo -
        Node.js download aur install karne ke liye Node.js website par jao.
    Project Folder Create Karo -
        mkdir my-express-app
        cd my-express-app
    npm Initialize Karo -
        npm init -y
    Express Install Karo -
        npm install express
    Basic Server Code -
        Ek server.js file banao aur ye code likho.
        const express = require('express');
        const app = express();
        const PORT = 3000;
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    Server Chalu Karo -
        node server.js
    Ab browser mein http://localhost:3000 par jaakar dekh sakte hain ki “Hello World!” message show hoga.
* Summary -
    ExpressJS ek powerful framework hai jo aapko web applications develop karne mein madad karta hai.
    Iske features aur flexibility ki wajah se ye backend development ke liye ek ideal choice hai.

2. What is the Philosophy of ExpressJS ?
Explanation :-
* ExpressJS ki philosophy simplicity, flexibility, aur minimalism par adharit hai.
* Iska main goal hai developers ko aisi tools provide karna jisse wo web applications easily aur efficiently develop kar sakein.
* Key Philosophical Aspects -
	Minimalism -
        Lightweight Design -
            ExpressJS ko is tarah se design kiya gaya hai ki ye sirf core features ko include kare, taaki aapko unnecessary functionalities se pareshaani na ho.
            Aapko sirf wo features milte hain jo aapko zarurat hai.
	Flexibility -
        Modular Structure -
            ExpressJS ka architecture modular hai, jisse aap apne application ke liye sirf un components ko include kar sakte hain jo aapko chahiye.
            Aap middleware aur routing ko asani se customize kar sakte hain.
        Middleware-Based -
            ExpressJS middleware ki flexibility ko support karta hai, jisse aap custom logic ko easily integrate kar sakte hain.
	Performance -
        Fast Response Times -
            ExpressJS ko performance ko dhyan mein rakhkar design kiya gaya hai.
            Ye high-performance applications banane ke liye optimized hai, jisse aapko quick response times milte hain.
	Community Driven -
        Open Source -
            ExpressJS open-source hai, jisse developers ki ek badi community iske development mein involved hai.
            Ye regular updates aur improvements ko promote karta hai.
	Conventions Over Configuration -
        Simple Setup -
            ExpressJS mein zyada configurations ki zarurat nahi hoti, jisse aap jaldi se applications set up kar sakte hain.
            Ye conventions par rely karta hai, jo development ko fast aur efficient banata hai.
* Summary -
    ExpressJS ki philosophy simplicity, flexibility, aur performance par focused hai.
    Ye developers ko minimal setup ke saath powerful web applications build karne ki capability deta hai.
    Iski modular structure aur middleware support ke wajah se aap apne applications ko customize kar sakte hain.

3. How to setup and ExpressJS Environment ?
Explanation :-
* ExpressJS environment setup karna relatively simple hai.
* Aapko Node.js aur npm ki zarurat hogi, jo ExpressJS aur iske dependencies ko manage karne ke liye use hote hain.

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
* Middleware functions ExpressJS mein aise functions hote hain jo request aur response cycle ke beech mein execute hote hain.
* Ye functions request ko process karne, response ko modify karne, ya error handling ke liye use hote hain.
* Middleware ka Role -
	Request Processing -
        Middleware incoming requests ko handle karta hai, jisme aap data ko parse kar sakte hain, headers ko set kar sakte hain, ya request body ko validate kar sakte hain.
	Response Modification -
        Aap response ko modify kar sakte hain ya additional headers set kar sakte hain.
	Error Handling -
        Agar koi error hota hai, to middleware isse handle karne ke liye responsible hota hai.
	Next Function -
        Middleware mein ek next function hota hai jo agle middleware ya route handler ko call karta hai. Agar aap next() ko call nahi karte, to request cycle wahan ruk jayega.
* Types of Middleware -
	Built-in Middleware -
        ExpressJS kuch built-in middleware functions provide karta hai, jaise express.json() aur express.urlencoded() jo JSON aur URL-encoded data ko parse karte hain.
	Third-party Middleware -
        Aap third-party middleware bhi use kar sakte hain, jaise cors (Cross-Origin Resource Sharing) ya morgan (HTTP request logging).
	Custom Middleware -
        Aap apna custom middleware create kar sakte hain, jo specific functionality perform kare.
* Middleware Stack -
    Middleware functions ko stack ki tarah samjha ja sakta hai.
    Jab ek request aati hai, to wo stack ke har middleware function se guzarti hai, aur agar kisi middleware ne next() nahi call kiya, to processing wahan ruk jayegi.
* Summary -
    Middleware ExpressJS mein ek powerful concept hai jo request aur response cycle ko manage karne mein madad karta hai.
    Ye aapko request processing, response modification, aur error handling mein flexibility deta hai.
    Aap built-in, third-party, aur custom middleware use kar sakte hain apne applications mein.

6. How to Dubug in ExpressJS ?
Explanation :-
* Debugging ek essential skill hai jab aap application develop kar rahe hote hain.
* ExpressJS mein debugging ke liye kuch common techniques aur tools hain jinke through aap issues ko identify aur fix kar sakte hain.
* Techniques for Debugging -
    Console Logging -
        Sabse simple aur commonly used debugging technique hai console.log statements ka use karna.
        Aap request aur response objects ko log kar sakte hain, ya variables ki values ko dekh sakte hain.
        Ex -
            app.get('/', (req, res) => {
                console.log('Request received:', req.method, req.url);
                res.send('Welcome to ExpressJS!');
            });
    Error Handling Middleware -
        Aap error handling middleware create karke errors ko log kar sakte hain.
        Ye middleware aapko un errors ko capture karne mein madad karega jo aapke application mein ho sakte hain.
        Ex -
            app.use((err, req, res, next) => {
                console.error(err.stack); -----> Error stack ko log karo
                res.status(500).send('Something broke!');
            });
    Debugger Statement -
        Node.js ke built-in debugger ka use kar sakte hain.
        Aap debugger statement ko code mein insert karke execution ko pause kar sakte hain.
        Command line par -
            node inspect server.js
        Ya nodemon ke sath -
            nodemon --inspect server.js
    Using the debug Module -
        Aap debug package ko install kar ke structured logging kar sakte hain.
        Ye package aapko log levels ke sath debug information dikhata hai.
        Ex -
            npm install debug
            const debug = require('debug')('myapp');
            debug('Debugging information');
    Postman ya cURL ke through Testing -
        APIs ko test karne ke liye Postman ya cURL ka use kar sakte hain.
        Aap requests send kar sakte hain aur responses ko dekh sakte hain.
        Ye debugging ke liye useful hota hai jab aapko pata karna hota hai ki server ka response expected hai ya nahi.
    Error Logging Libraries -
        Aap advanced error logging ke liye libraries jaise winston ya morgan use kar sakte hain, jo aapke logs ko structured format mein store karne mein madad karte hain.
* Summary -
    ExpressJS mein debugging karne ke liye aap console logging, error handling middleware, built-in debugger, aur third-party libraries ka use kar sakte hain.
    In techniques ko combine karke aap effectively apne application ke issues ko identify aur fix kar sakte hain.

-----Routing With ExpressJS-----

1. What is the overview of Routing ?
Explanation :-
* Routing ka concept web applications mein URLs ko specific functions ya handlers se connect karna hai.
* ExpressJS mein routing ka use kar ke aap different HTTP methods (GET, POST, PUT, DELETE) ke liye endpoints define karte hain, jo specific functionalities ko perform karte hain.
* Routing ki Importance -
	URL Handling -
        Routing aapko URL patterns ko define karne ki flexibility deta hai.
        Isse aap specific URLs ko specific logic ke saath connect kar sakte hain.
	Separation of Concerns -
        Routing se aap apne application ki structure ko behtar tarike se organize kar sakte hain.
        Har route ka apna handler hota hai, jisse code maintainable aur readable rehta hai.
	Middleware Integration -
        Aap routes par middleware functions bhi attach kar sakte hain, jo request processing ya authentication ke liye useful hota hai.
* Summary -
    Routing ExpressJS ka core component hai jo URLs ko specific request handlers se connect karta hai.
    Ye application ko modular aur organized rakhta hai, aur aapko middleware functionalities ko integrate karne ki flexibility deta hai.

2. How to define Routes ?
Explanation :-
* ExpressJS mein routes ko define karne ke liye aap app.method() syntax ka use karte hain, jahan method HTTP method (jaise GET, POST, PUT, DELETE) ko represent karta hai.
* Har route ka ek unique URL aur ek callback function hota hai jo request ke response mein execute hota hai.
* Step-by-Step Guide -
    Basic Route Definitio -
        Aap URL aur HTTP method ke combination se route define karte hain.
        Ex -
            app.get('/products', (req, res) => {
                res.send('Product List');
            });
    Multiple Routes -
        Aap ek hi URL par multiple HTTP methods define kar sakte hain.
        Ex -
            app.post('/products', (req, res) => {
                res.send('Product Created');
            });
    Dynamic Routing -
        Aap dynamic parameters ko define kar sakte hain jo URL ke part hote hain.
        Ex -
            app.get('/products/:id', (req, res) => {
                const productId = req.params.id;
                res.send(`Product ID: ${productId}`);
            });
    Route Chaining -
        Aap ek route par multiple middleware functions ya handlers ko chain kar sakte hain.
        Ex -
            app.route('/products')
                .get((req, res) => {
                    res.send('Get Products');
                })
                .post((req, res) => {
                    res.send('Create Product');
                });
    Using Router -
        Aap express.Router() ka use karke routes ko modularize kar sakte hain.
        Isse aapke application ki structure aur organized hoti hai.
        Ex -
            const productRouter = express.Router();
            productRouter.get('/', (req, res) => {
                res.send('Product List');
            });
            productRouter.post('/', (req, res) => {
                res.send('Product Created');
            });
            app.use('/products', productRouter);
* Summary -
    ExpressJS mein routes ko define karna simple hai, jisme aap specific URL patterns aur HTTP methods ka use karte hain.
    Aap dynamic parameters, route chaining, aur router modules ka istemal karke apne application ko modular aur maintainable bana sakte hain.

3. How to defines Routing Parameters ?
Explanation :-
* Routing parameters dynamic parts hote hain jo URL mein specific values ko capture karte hain.
* Ye parameters aapko URL ke through client se data pass karne ki flexibility dete hain.
* ExpressJS mein, aap inhe : prefix ke saath define karte hain.
* Defining Routing Parameters -
    Basic Syntax -
        Routing parameters ko define karte waqt : use karte hain.
        Ex -
            app.get('/user/:id', (req, res) => {
                const userId = req.params.id; -----> URL se user ID capture karein
                res.send(`User ID: ${userId}`);
            });
    Multiple Parameters -
        Aap ek hi route mein multiple parameters bhi define kar sakte hain.
        Ex -
            app.get('/post/:postId/comment/:commentId', (req, res) => {
                const { postId, commentId } = req.params;
                res.send(`Post ID: ${postId}, Comment ID: ${commentId}`);
            });
    Optional Parameters -
        Aap optional parameters define karne ke liye question mark ? use kar sakte hain.
        Isse agar parameter nahi diya gaya to route fir bhi match hoga.
        Ex -
            app.get('/user/:id?', (req, res) => {
                const userId = req.params.id || 'guest'; -----> Agar ID nahi hai to 'guest' use karein
                res.send(`User ID: ${userId}`);
            });
    Query Parameters -
        Query parameters ko URL ke end mein ? se define karte hain.
        Ye parameters key-value pairs hote hain.
        Ex -
            app.get('/search', (req, res) => {
                const query = req.query.q; -----> Query string se search term capture karein
                res.send(`Search Query: ${query}`);
            });
* Summary -
    Routing parameters aapko dynamic values ko URLs ke through capture karne ki flexibility dete hain.
    Aap single ya multiple parameters define kar sakte hain, aur optional parameters aur query parameters ka bhi use kar sakte hain.
    Ye features aapki APIs ko more interactive aur flexible banate hain.

4. What are Response Methods ?
Explanation :-
* Response methods ExpressJS mein wo functions hain jo aapko HTTP response bhejne ki flexibility dete hain.
* Ye methods client ko data, status codes, aur headers send karne ke liye use hote hain.
* Common Response Methods -
    res.send() -
        Ye method response body ko send karta hai. Ye string, object, ya buffer type ki data accept kar sakta hai.
        Ex -
            app.get('/text', (req, res) => {
                res.send('Hello World!');
            });
            app.get('/json', (req, res) => {
                res.send({ message: 'Hello World!' });
            });
    res.json() -
        Ye method JSON format mein response send karta hai aur response header mein Content-Type: application/json set karta hai.
        Ye objects ko JSON string mein convert karta hai.
        Ex -
            app.get('/data', (req, res) => {
                res.json({ id: 1, name: 'Product A' });
            });
    res.status() -
        Ye method HTTP status code set karne ke liye use hota hai.
        Aap ise chaining ke through response methods ke saath use kar sakte hain.
        Ex -
            app.get('/error', (req, res) => {
                res.status(404).send('Not Found'); -----> 404 error response
            });
    res.redirect() -
        Ye method client ko kisi dusre URL par redirect karta hai.
        Aap optional status code bhi specify kar sakte hain (default 302 hota hai).
        Ex -
            app.get('/old-page', (req, res) => {
                res.redirect('/new-page'); -----> Redirect to new page
            });
    res.render() -
        Ye method template engines ke saath use hota hai, jisse aap dynamic HTML pages render kar sakte hain.
        Ex -
            app.set('view engine', 'ejs'); // EJS ko set kiya
            app.get('/profile', (req, res) => {
                res.render('profile', { user: 'John Doe' }); -----> profile.ejs ko render karein
            });
* Summary -
    Route paths ExpressJS mein URLs ko specific handlers se connect karte hain.
    Ye paths static, dynamic, optional, ya regular expressions ka use karte hue defined hote hain.
    Ye flexibility aapko various URL patterns ko handle karne ki ability deti hai.

5. What is Route Path ?
Explanation :-
* Route path wo URL pattern hai jo HTTP requests ko specific route handlers se match karta hai.
* ExpressJS mein, aap route paths ko define karte hain jo ki request ke URL se milte hain.
* Ye paths static ya dynamic ho sakte hain.
* Types of Route Paths -
    Static Route Paths -
        Ye paths exact match hote hain.
        Aapke application mein ye predefined hote hain aur kisi variable ya parameter ko capture nahi karte.
        Ex -
            app.get('/about', (req, res) => {
                res.send('About Page');
            });
    Dynamic Route Paths -
        Ye paths parameters ya placeholders ko contain karte hain.
        Aap : symbol ka use karke dynamic parameters ko define karte hain.
        Ex -
            app.get('/user/:id', (req, res) => {
                const userId = req.params.id; -----> Capture user ID
                res.send(`User ID: ${userId}`);
            });
    Route Path with Regular Expressions -
        Aap route paths mein regular expressions ka use karke more complex patterns define kar sakte hain.
        Ex -
            app.get(/users\/(\d+)/, (req, res) => {
                const userId = req.params[0]; -----> Match the user ID from the regex
                res.send(`User ID: ${userId}`);
            });
    Optional Parameters -
        Aap optional parameters ko define karne ke liye ? ka use karte hain.
        Ye parameter URL mein nahi bhi ho sakta hai.
        Ex -
            app.get('/user/:id?', (req, res) => {
                const userId = req.params.id || 'guest';
                res.send(`User ID: ${userId}`);
            });
    Using Wildcards -
        Aap wildcards * ka use karke kisi bhi path ko match kar sakte hain.
        Ex -
            app.get('/files/*', (req, res) => {
                res.send('You requested a file!');
            });
* Summary -
    Route paths ExpressJS mein URLs ko specific handlers se connect karte hain.
    Ye paths static, dynamic, optional, ya regular expressions ka use karte hue defined hote hain.
    Ye flexibility aapko various URL patterns ko handle karne ki ability deti hai.

6. What is Route Handlers ?
Explanation :-
* Route handlers wo functions hain jo ExpressJS mein specific routes par incoming requests ko handle karte hain.
* Ye functions request aur response objects ko accept karte hain aur client ko appropriate responses bhejte hain.
* Har route handler ke paas request ko process karne ka logic hota hai.
* Key Concepts of Route Handlers -
    Request and Response Objects -
        Route handler functions do parameters accept karte hain: req (request) aur res (response).
        req object mein client ke request se related information hoti hai, jaise URL parameters, query strings, headers, body, etc.
        res object ke through aap client ko response bhejte hain.
    Handling Different HTTP Methods -
        Aap alag-alag HTTP methods ke liye separate route handlers define kar sakte hain, jaise GET, POST, PUT, DELETE, etc.
    Middleware as Route Handlers -
        Aap middleware functions ko bhi route handlers ki tarah use kar sakte hain.
        Ye functions request processing ke liye use hote hain aur aapke route handlers se pehle execute hote hain.
    Error Handling in Route Handlers -
        Aap error handling logic ko route handlers mein include kar sakte hain.
        Agar koi error hota hai, to aap response mein error message send kar sakte hain.
    Asynchronous Route Handlers -
        Aap async functions ko route handlers ke roop mein use kar sakte hain.
        Isse aap asynchronous operations (jaise database calls) ko handle kar sakte hain.
* Summary -
    Route handlers ExpressJS mein client requests ko process karne ke liye core components hote hain.
    Ye request aur response objects ko handle karte hain, different HTTP methods ko support karte hain, middleware functions ke saath kaam karte hain, aur error handling ka bhi dhyan rakhte hain.
    Ye flexibility aapko complex logic implement karne ki ability deti hai.

-----Middleware in ExpressJS-----

1. What is a Middleware ?
Explanation :-
* Middleware functions wo functions hote hain jo request aur response cycle ke beech mein execute hote hain.
* Ye functions incoming requests ko process karte hain, response ko modify karte hain, ya error handling karte hain.
* Middleware aapko application ke behavior ko customize karne ki flexibility dete hain.
* Key Characteristics of Middleware -
    Execution Order -
        Middleware functions ko request ke process hone se pehle ya baad mein execute kiya ja sakta hai.
        Ye chain mein connected hote hain aur next middleware ko call karne ke liye next() function ka use karte hain.
	Request Object Manipulation -
        Middleware aapko request object ko modify karne ki ability dete hain, jisse aap request se additional data attach kar sakte hain.
        Ex -
            const addUserToRequest = (req, res, next) => {
                req.user = { id: 1, name: 'John' }; -----> User object ko request mein add karein
                next(); -----> Next middleware ya route handler ko call karein
            };
            app.use(addUserToRequest);
    Response Object Manipulation -
        Middleware response object ko modify bhi kar sakte hain, jaise response headers set karna ya response body ko change karna.
        Ex -
            const setHeaders = (req, res, next) => {
                res.set('X-Powered-By', 'MyApp'); -----> Custom header set karein
                next();
            };
            app.use(setHeaders);
    Error Handling -
        Aap middleware functions ko error handling ke liye bhi use kar sakte hain.
        Agar kisi middleware mein error hota hai, to aap usse catch kar sakte hain aur appropriate response send kar sakte hain.
        Ex -
            const errorHandler = (err, req, res, next) => {
                console.error(err.stack);
                res.status(500).send('Something broke!');
            };
            app.use(errorHandler);
    Built-in Middleware vs Custom Middleware -
        ExpressJS mein kuch built-in middleware functions hote hain, jaise express.json() ya express.urlencoded() jo request body ko parse karte hain.
        Aap custom middleware bhi define kar sakte hain jo specific functionality provide karein.
* Summary -
    Middleware ExpressJS mein essential components hote hain jo request aur response cycle ko modify karte hain.
    Ye functions request aur response objects ko manipulate karte hain, error handling ka kaam karte hain, aur application ke behavior ko customize karne ki flexibility dete hain.
    Aap built-in aur custom middleware dono ka use kar sakte hain.

2. How to use a Middleware ?
Explanation :-
* Middleware ko ExpressJS application mein use karne ka tarika bahut straightforward hai.
* Aap app.use() method ya specific HTTP method (GET, POST, etc.) ke saath middleware function ko register karte hain.
* Isme aap middleware ko globally ya specific routes ke liye apply kar sakte hain.
* Types of Middleware Usage -
    Global Middleware -
        Ye middleware application ke har route par apply hota hai. Aap app.use() function ke through ise define karte hain.
        Ex -
            const express = require('express');
            const app = express();
            -----> Global middleware
            app.use((req, res, next) => {
                console.log('Global Middleware: Request received!');
                next(); -----> Next middleware ko call karein
            });
            app.get('/home', (req, res) => {
                res.send('Welcome to Home Page!');
            });
            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
            });
    Route-Specific Middleware -
        Ye middleware sirf specific route par apply hota hai. Aap middleware ko HTTP methods ke saath define karte hain.
        Ex -
            const validateUser = (req, res, next) => {
                if (req.headers['authorization']) {
                    next(); // Authorization header present hai
                } else {
                    res.status(403).send('Forbidden');
                }
            };
            app.get('/profile', validateUser, (req, res) => {
                res.send('User Profile');
            });
    Error Handling Middleware -
        Ye middleware error ko handle karne ke liye use hota hai.
        Is middleware ko 4 parameters (err, req, res, next) ke saath define kiya jata hai.
        Ex -
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Something went wrong!');
        });
    Built-in Middleware -
        ExpressJS mein kuch built-in middleware functions hote hain jo request body parsing, cookie parsing, etc. ke liye use hote hain.
        Ex -
            app.use(express.json()); -----> JSON request body ko parse karein
            app.use(express.urlencoded({ extended: true })); -----> URL-encoded data ko parse karein
    Third-Party Middleware -
        Aap external libraries se middleware bhi use kar sakte hain.
        Jaise morgan logging middleware.
        Ex -
            const morgan = require('morgan');
            app.use(morgan('dev')); -----> Request logging
* Summary -
    Middleware ko ExpressJS mein alag-alag tarike se use kiya ja sakta hai: global, route-specific, error handling, built-in, aur third-party middleware.
    Ye functions request-response cycle ke beech mein execute hote hain aur aapko application ke behavior ko customize karne ki flexibility dete hain.

3. How to create a Custom Middleware ?
Explanation :-
* Custom middleware aapko specific functionality implement karne ki flexibility dete hain jo aapki application ke liye unique hoti hai.
* Ye functions request aur response cycle mein aapki requirements ke hisaab se behavior ko modify kar sakte hain.
* Steps to Create Custom Middleware -
	Function Definition -
        Aapko ek function define karna hoga jo req, res, aur next parameters ko accept kare.
        req - Client se aayi request ka object.
        res - Server se response bhejne ke liye use hone wala object.
        next - Next middleware ya route handler ko call karne ke liye function.
	Logic Implementation -
        Middleware mein aapko woh logic implement karna hai jo aapko chahiye, jaise request validation, logging, error handling, etc.
	Next Middleware Call -
        Aapko next() function ko call karna padega jab aapka middleware execution complete ho jata hai, taaki next middleware ya route handler execute ho sake.
	Error Handling -
        Agar aapko error handling karni hai, to aap error object ko next() function mein pass kar sakte hain.
* Summary -
    Custom middleware aapki application mein specific functionality add karne ke liye use hota hai.
    Ye aapko request aur response processing ko customize karne ki flexibility dete hain.
    Aap logging, validation, authorization, aur error handling jaise tasks ke liye custom middleware functions bana sakte hain.

4. What is Third-Party Middleware ?
Explanation :-
* Third-party middleware wo middleware functions hote hain jo kisi external library ya package se aate hain.
* Ye aapko additional functionalities provide karte hain jo aapke ExpressJS applications ko enhance karte hain, jaise logging, authentication, request parsing, etc.
* How to Use Third-Party Middleware -
    Install the Middleware -
        npm install morgan body-parser cookie-parser cors express-session
    Import and Use the Middleware -
        Aapko middleware ko import karna hoga aur app.use() method ke saath use karna hoga.
        Ex -
            const express = require('express');
            const morgan = require('morgan');
            const cookieParser = require('cookie-parser');
            const cors = require('cors');
            const session = require('express-session');
            const app = express();
            app.use(morgan('dev')); -----> Logging middleware
            app.use(cookieParser()); -----> Cookie parsing middleware
            app.use(cors()); // CORS enable karein
            app.use(session({ secret: 'secret', resave: false, saveUninitialized: true })); -----> Session management
            app.listen(3000, () => {
                console.log('Server is running on http://localhost:3000');
            });
* Summary -
    Third-party middleware aapke ExpressJS applications ko powerful features provide karte hain.
    Ye aapko logging, request parsing, session management, authentication, aur CORS handling jaise tasks ke liye external libraries ka use karne ki flexibility dete hain.

5. What is Error-Handeling Middleware ?
Explanation :-
* Error-handling middleware wo functions hote hain jo kisi bhi errors ko handle karne ke liye use kiye jaate hain jo application ke request-response cycle mein arise hote hain.
* Ye middleware aapko centralized tarike se errors ko manage karne ki facility dete hain, jisse aap specific error responses return kar sakte hain.
* How Error-Handling Middleware Works -
    Function Signature -
        Error-handling middleware ko char parameters pass kiye jaate hain: err, req, res, aur next.
        Syntax -
            app.use((err, req, res, next) => {
                -----> Error handling logic
            });
    Error Propagation -
        Agar koi error arise hota hai, to aap us error ko next() function ke through error-handling middleware ko pass kar sakte hain.
        Ex -
            app.get('/route', (req, res, next) => {
                -----> Some code that may throw an error
                const error = new Error('Something went wrong!');
                next(error); -----> Error ko next middleware ko pass karein
            });
    Error Response -
        Error-handling middleware ko aapko custom error response dene ke liye use kar sakte hain.
        Ex -
            app.use((err, req, res, next) => {
                console.error(err.message); -----> Error message log karein
                res.status(500).send('Internal Server Error'); -----> 500 status code return karein
            });
* Ex of Error Handeling Middleware -
    const express = require('express');
    const app = express();
    const PORT = 3000;
    -----> Route that throws an error
    app.get('/error', (req, res, next) => {
        const error = new Error('This is a test error!');
        next(error); -----> Error ko propagate karein
    });
    -----> Error-handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack); -----> Error stack ko log karein
        res.status(500).send({ error: err.message }); -----> Client ko error message bhejein
    });
* Detailed Explanation of the Example -
	Error Route -
        /error route par ek custom error create kiya gaya hai aur next(error) ka use karke usko error-handling middleware ko pass kiya gaya hai.
	Error-Handling Middleware -
        Is middleware mein err parameter ko log kiya gaya hai aur client ko 500 Internal Server Error ka response diya gaya hai.
        Aap error response ko customize bhi kar sakte hain, jaise error code ya specific error details.
* Best Practices for Error-Handling Middleware -
	Order of Middleware -
        Error-handling middleware ko sabse last mein define karein, baaki sab route aur middleware ke baad, taaki ye sab errors ko catch kar sake.
    Custom Error Classes -
        Aap custom error classes bana sakte hain jo different types ke errors ko represent karein, jaise NotFoundError, ValidationError, etc.
    Logging -
        Errors ko log karna zaroori hai, taaki aap application ki health aur issues ko monitor kar sakein.
    Environment-Specific Responses -
        Development environment mein aap detailed error responses de sakte hain, jabki production environment mein aap generic error messages hi dikhayein.
* Summary -
    Error-handling middleware aapko centralized error management ki facility dete hain, jisse aap errors ko easily handle aur log kar sakte hain.
    Ye middleware application ke stability aur maintainability ko improve karte hain.

6. What is Middleware Functionality ?
Explanation :-
* Middleware aise functions hote hain jo ExpressJS application ke request-response cycle mein kaam karte hain. Ye functions incoming requests ko process karte hain, response ko modify karte hain, aur error handling ya logging jaise tasks perform karte hain.
* Middleware Types -
    Application-level Middleware -
        Ye middleware aapki application ke liye specific hote hain aur app.use() ke through define kiye jaate hain.
        Ex -
            app.use(express.json()); -----> JSON body parsing ke liye middleware
    Router-level Middleware -
        Ye middleware specific routers ya routes ke liye hote hain.
        Aap router.use() ke through inhe define kar sakte hain.
        Ex -
            const router = express.Router();
            router.use(express.urlencoded({ extended: true })); -----> URL-encoded body parsing
    Error-handling Middleware -
        Ye special middleware hote hain jo error handling ke liye design kiye jaate hain, jaise ki hum pehle discuss kar chuke hain.
        Ex -
            app.use((err, req, res, next) => {
                console.error(err);
                res.status(500).send('Something broke!');
            });
    Built-in Middleware -
        ExpressJS ke saath kuch built-in middleware functions hote hain, jaise express.static(), express.json(), etc.
    Third-party Middleware -
        Ye middleware third-party libraries se aate hain, jaise morgan (logging), helmet (security), etc.
* Middleware Functionality Best Practices -
	Keep Middleware Small -
        Middleware ko concise aur focused rakhna chahiye, taaki wo specific tasks hi perform karein.
	Order Matters
        Middleware ka order zaroori hai, kyunki Express sequentially unhe process karta hai. Aapko sabse pehle un middleware ko define karna chahiye jo request ko process karte hain.
	Error Handling Middleware
        Hamesha error-handling middleware ko sabse last mein define karein, taaki ye sab errors ko catch kar sakein.
* Summary -
    Middleware functionality ExpressJS mein request-response cycle ko manage karne ke liye use hoti hai, jo aapko logging, body parsing, error handling, aur other cross-cutting concerns ko implement karne ki facility deti hai.

-----Validating Requests in ExpressJS-----

1. What is the need of request validation ?
Explanation :-
* Request validation ka primary purpose hai incoming data ki integrity aur security ko ensure karna.
* Jab users aapke server ko data bhejte hain, to un data ka valid hona zaroori hai, taaki -
	Prevent Invalid Data -
        Aapko invalid data se bachna chahiye, jo application ke logic ko disrupt kar sakta hai. Agar data validate nahi hota, to ye unexpected behavior ya errors create kar sakta hai.
    Enhance Security -
        Malicious inputs, jaise SQL injection ya XSS (Cross-Site Scripting), ko prevent karne ke liye validation zaroori hai. Isse aap apne application ko secure rakh sakte hain.
    Improve User Experience -
        Agar validation proper tariqe se ki jaye, to aap users ko informative error messages de sakte hain, jisse unhe data submit karte waqt samajh aata hai ki unse kya galat hua.
    Maintain Data Integrity -
        Sirf valid aur expected data hi database ya business logic mein enter hota hai, jo data consistency ko maintain karta hai.
* Summary -
    Request validation aapke application ki security, integrity, aur user experience ko improve karta hai, aur iski zarurat har ExpressJS application mein hoti hai.

2. What is Server Side Validation vs Client Side Validation ?
Explanation :-
* Ye dono validation techniques hain, lekin inka purpose aur implementation alag hote hain.
* Client-Side Validation -
    Kahaan hoti hai -
        Ye validation user ke browser mein hoti hai, yani ki jab user form fill karta hai.
	Kyun hoti hai -
        User experience ko enhance karne ke liye, jisse users ko turant feedback milta hai.
	Kaise hoti hai -
        JavaScript ya HTML5 attributes (jaise required, pattern, etc.) ke through hoti hai.
        Agar validation fail hoti hai, to user ko turant error message dikhaya jata hai.
	Limitations -
        Ye completely secure nahi hoti, kyunki users apne browser mein JavaScript disable kar sakte hain ya manipulation kar sakte hain.
        Isliye, ye sirf user experience improve karne ke liye hoti hai.
* Server-Side Validation -
	Kahaan hoti hai -
        Ye validation server par hoti hai, yani ki jab data server ko bheja jata hai.
	Kyun hoti hai -
        Data ki integrity aur security ko ensure karne ke liye.
	Kaise hoti hai -
        ExpressJS ya kisi aur backend framework ke through ki jati hai.
        Agar validation fail hoti hai, to server client ko error messages send karta hai.
	Benefits -
	Ye zyada secure hoti hai, kyunki ye client-side manipulation se bachati hai.
    Aap server par data ko validate karke ensure karte hain ki sirf valid data hi process ho raha hai.
* Summary -
	Client-Side Validation -
        User experience ko enhance karta hai.
        Immediate feedback deta hai, lekin security mein kami hoti hai.
	Server-Side Validation -
        Data integrity aur security ko ensure karta hai.
        User ko clear error messages deta hai agar validation fail hoti hai.

-----Error Handeling in ErpressJS-----

1. What is Error Handeling in ExpressJS ?
Explanation :-
* Error handling web applications mein ek crucial aspect hai.
* ExpressJS mein, errors ko effectively handle karna zaroori hai taaki aapke application ka user experience acha rahe aur aap security issues ko avoid kar sakein.
* Key Concepts of Error Handling -
	Error Propagation -
        Express mein agar koi error aata hai to aap usse next middleware ko pass kar sakte hain.
        Is process ko error propagation kehte hain.
	Error Handling Middleware -
        Express mein aapko specific middleware functions define karne hote hain jo errors ko handle karte hain.
        Ye functions aapke application ke flow mein errors ko intercept karte hain.
	Error Response -
        User ko meaningful error messages provide karna chahiye, jisse wo samajh sakein ki unse kya galat hua.
* Ex -
    const express = require('express');
    const app = express();
    const PORT = 3000;
    app.use(express.json());
    -----> Sample route
    app.get('/user/:id', (req, res, next) => {
        const userId = req.params.id;
        if (!userId) {
            const error = new Error('User ID is required');
            error.status = 400; -----> Bad Request
            return next(error); -----> Pass the error to the next middleware
        }
        -----> Simulate fetching user logic
        res.send(`User ID: ${userId}`);
    });
    -----> Error handling middleware
    app.use((err, req, res, next) => {
        const status = err.status || 500; -----> Default to 500 if no status defined
        res.status(status).json({
            error: {
                message: err.message,
                status: status
            }
        });
    });
    -----> Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
* Detailed Explanation -
	Error Propagation -
        Agar user ID nahi di jati hai, to ek error object create kiya jata hai aur next(error) se aage pass kiya jata hai. Isse error handling middleware ko invoke kiya jata hai.
	Error Handling Middleware -
        Middleware ko app.use() ke saath define kiya jata hai.
        Ye middleware automatically errors ko handle karta hai jo next() se pass hote hain.
        Isme err parameter ko use karke aapko error details milte hain, aur aapko appropriate status code aur message response mein bhejna hota hai.
	Error Response -
        Response mein error message aur status code ko JSON format mein return kiya jata hai.
        Ye users ko batata hai ki kya problem hui.
* Best Practices for Error Handling -
	Centralized Error Handling -
        Sabhi errors ko handle karne ke liye ek centralized error handling middleware use karein. Isse code ko maintain karna asan ho jata hai.
	Meaningful Error Messages -
        Errors ko clear aur meaningful messages ke saath return karein taaki users samajh sakein ki kya galat hua.
	Logging Errors -
        Errors ko log karna zaroori hai taaki aap unhe analyze kar sakein aur future mein issues ko fix kar sakein.
* Summary -
    Error handling ExpressJS mein ek essential part hai.
    Aapko errors ko effectively propagate karna aur handle karna chahiye taaki user experience behtar ho.
    Centralized error handling aur meaningful messages dena is process ko aur asan banata hai.

2. What are Error First Callbacks ?
Explanation :-
* Error first callbacks ek convention hain jo Node.js aur JavaScript mein errors ko handle karne ke liye use kiye jate hain.
* Is approach ka main goal hai ki error handling ko asan aur consistent banaya ja sake.
* Key Concepts -
	Callback Function Structure -
        Error first callbacks mein pehla parameter hamesha error object hota hai.
        Agar koi error nahi hai, to ye null ya undefined hota hai.
	Error Handling Logic -
        Callback function ke andar aapko pehle error check karna hota hai.
        Agar error hai, to aapko use handle karna hota hai; agar nahi, to aap agla logic execute karte hain.
	Common Usage -
        Ye approach asynchronous functions, database operations, file system operations, etc. mein commonly dekha jata hai.
* Eg -
    const fs = require('fs');
    -----> Using error first callback with file reading
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return; -----> Handle error and exit
        }
        console.log('File content:', data);
    });
* Detailed Explanation -
	Callback Function Structure -
        Is example mein, fs.readFile function ko use kiya gaya hai.
        Ye function file read karne ki koshish karta hai.
        Callback function ka structure aisa hai: (err, data).
	Error Handling Logic -
        Pehle parameter err ko check kiya gaya hai.
        Agar err truthy hai (yani koi error hai), to console mein error print kiya jata hai, aur return se function exit hota hai.
        Isse aap ensure karte hain ki agla code sirf tab execute ho jab koi error nahi hota.
	Common Usage -
        Ye pattern Node.js mein bahut prevalent hai.
        Jaise ki, database queries ya HTTP requests mein bhi ye same pattern dekha jata hai.
* Benefits of Error First Callbacks -
	Clarity -
        Ye approach error handling ko clear aur straightforward banata hai.
        Aapko hamesha pata hota hai ki error ko pehle check karna hai.
	Consistency -
        Is pattern ko consistent tarike se follow karne se aapke codebase mein readability aur maintainability improve hoti hai.
	Asynchronous Handling -
        Ye asynchronous programming mein error handling ko asan banata hai, jahan aapko multiple operations handle karne padte hain.
* Summary -
    Error first callbacks ek simple aur effective pattern hai jo Node.js mein errors ko handle karne ke liye use hota hai.
    Is pattern ka istemal karne se aap apne asynchronous code ko zyada readable aur maintainable bana sakte hain.

3. What are Express Error Handeling Middleware ?
Explanation :-
* Express mein error handling middleware aise functions hote hain jo errors ko handle karne ke liye design kiye gaye hain.
* Ye middleware application ke request-response cycle mein error handling ko centralize aur manage karne mein madad karte hain.
* Key Concepts -
	Error Handling Middleware ka Structure -
        Error handling middleware ki definition mein hamesha chaar parameters hote hain: err, req, res, aur next.
        Ye err parameter aapko error details provide karta hai.
	Middleware Placement -
        Ye middleware aapke route definitions ke baad define kiye jate hain, takki ye errors ko handle kar sakein jo routes se propagate hote hain.
	Custom Error Handling -
        Aap custom logic add kar sakte hain, jaise ki error logging, user-friendly error messages, aur status codes.
* Ex -
    const express = require('express');
    const app = express();
    const PORT = 3000;
    app.use(express.json());
    -----> Sample route that generates an error
    app.get('/data', (req, res, next) => {
        const error = new Error('Something went wrong!');
        error.status = 500; -----> Internal Server Error
        next(error); -----> Pass the error to the error handling middleware
    });
    -----> Error handling middleware
    app.use((err, req, res, next) => {
        const status = err.status || 500;
        res.status(status).json({
            error: {
                message: err.message,
                status: status
            }
        });
    });
    -----> Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
* Detailed Explanation -
	Error Handling Middleware ka Structure -
        Is example mein, middleware function ki structure hai: (err, req, res, next).
        Pehle parameter err hai, jo error details ko hold karta hai.
	Middleware Placement -
        Error handling middleware ko aapke route handlers ke baad define kiya gaya hai.
        Jab koi error hota hai, next(error) se error pass hota hai aur ye middleware trigger hota hai.
	Custom Error Handling -
        Middleware function mein, error status aur message ko extract karke JSON response bheja jata hai.
        Agar error mein status defined nahi hai, to default value 500 (Internal Server Error) use hoti hai.
* Benefits of Express Error Handling Middleware -
	Centralized Error Management -
        Isse aap apne application mein error handling ko centralize kar sakte hain, jisse aapka code zyada organized hota hai.
	Enhanced User Experience -
        Users ko meaningful error messages aur status codes milte hain, jisse unhe samajhne mein asani hoti hai ki kya galat hua.
	Custom Logic -
        Aap apne specific requirements ke according custom error handling logic add kar sakte hain, jaise ki logging ya different error response formats.
* Summary -
    Express error handling middleware ek powerful feature hai jo aapko errors ko effectively manage karne ki capability deta hai.
    Iska use karne se aap apne application ke error handling process ko zyada organized aur user-friendly bana sakte hain.

4. What are Custom Error Handelers ?
Explanation :-
* Custom error handlers aise functions hain jo specific errors ko handle karne ke liye tailor kiye gaye hain.
* Ye aapko application mein specific error scenarios ke liye logic define karne ki flexibility dete hain, jisse aapki application ki reliability aur user experience improve hoti hai.
* Key Concepts -
    Custom error handlers wo middleware hote hain jo specific error conditions ke liye response ko customize karte hain.
	Error Type Specificity -
        Aap alag-alag error types (jaise validation errors, database errors, etc.) ke liye alag error handlers define kar sakte hain.
	Logging and Monitoring -
        Ye handlers aapko error logging aur monitoring ka mechanism implement karne ki bhi flexibility dete hain, jisse aap errors ko track kar sakein.
* Ex -
    const express = require('express');
    const app = express();
    const PORT = 3000;
    app.use(express.json());
    -----> Sample route that generates a validation error
    app.post('/user', (req, res, next) => {
        if (!req.body.name) {
            const error = new Error('Name is required!');
            error.status = 400; -----> Bad Request
            return next(error); -----> Pass the error to the custom error handler
        }
        res.status(201).send('User created');
    });
    -----> Custom error handler for validation errors
    app.use((err, req, res, next) => {
        if (err.status === 400) {
            return res.status(err.status).json({
                error: {
                    message: err.message,
                    status: err.status,
                },
            });
        }
        next(err); -----> Pass to the next error handler if it's not a validation error
    });
    -----> General error handling middleware
    app.use((err, req, res) => {
        const status = err.status || 500;
        res.status(status).json({
            error: {
                message: 'An unexpected error occurred.',
                status: status,
            },
        });
    });
    -----> Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
* Detailed Explanation -
	Definition -
        Is example mein, jab user creation ke liye request aati hai aur name field missing hoti hai, to custom error handler next(error) ko call karke error pass kiya jata hai.
	Error Type Specificity -
        Custom error handler mein, agar error status 400 hai (validation error), to specific response send kiya jata hai.
        Agar error kisi aur type ka hai, to next(err) call karke aage ke error handler ko pass kiya jata hai.
	Logging and Monitoring -
        Aap custom logic add kar sakte hain jisse errors ko log ya monitor kiya ja sake.
        Isse aapko application ke health aur issues ko track karne mein madad milti hai.
* Benefits of Custom Error Handlers -
	Specificity -
        Aap specific error scenarios ke liye tailored responses provide kar sakte hain, jisse user experience improve hota hai.
	Maintainability -
        Ye approach aapke code ko zyada organized aur maintainable banata hai, kyunki aap alag error handlers define kar sakte hain.
	Improved Debugging -
        Specific error handlers aapko debugging mein madad karte hain kyunki aap errors ko categorize kar sakte hain.
* Summary -
    Custom error handlers aapko application mein specific error conditions ko manage karne ki flexibility dete hain.
    Isse aap apne application ka error handling mechanism aur user-friendly aur maintainable bana sakte hain.

5. What is Logging of Errors ?
Explanation :-
* Error logging ek process hai jahan application mein hone wale errors ko record kiya jata hai.
* Ye logs developers ko issues ko track karne, diagnose karne, aur future mein unhe resolve karne mein madad karte hain.
* Key Concepts -
    Purpose of Error Logging -
        Error logs aapko application ke behavior aur issues ke baare mein insights dete hain, jisse aap samajh sakte hain ki errors kab aur kyun ho rahe hain.
	Log Levels -
        Errors ko different log levels (jaise info, warning, error, critical) ke according categorize kiya ja sakta hai, jisse severity samajhne mein madad milti hai.
	Logging Libraries -
        Node.js mein popular logging libraries, jaise winston ya morgan, error logging ke liye use hoti hain, jo structured aur flexible logging provide karti hain.
* Ex -
    const express = require('express');
    const winston = require('winston');
    const app = express();
    const PORT = 3000;
    -----> Configure Winston for logging
    const logger = winston.createLogger({
        level: 'error',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'error.log' }),
        ],
    });
    -----> Sample route that generates an error
    app.get('/data', (req, res, next) => {
        const error = new Error('Something went wrong!');
        error.status = 500;
        logger.error(`${error.message} - Status: ${error.status}`); // Log the error
        next(error);
    });
    -----> Error handling middleware
    app.use((err, req, res, next) => {
        const status = err.status || 500;
        res.status(status).json({
            error: {
                message: 'An unexpected error occurred.',
                status: status,
            },
        });
    });
    -----> Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
* Detailed Explanation -
    Purpose of Error Logging -
        Is example mein, jab error hota hai, to uska message aur status logger.error() ke through log kiya jata hai.
        Ye information future mein debugging aur issue resolution mein madad karegi.
	Log Levels -
        Aap alag-alag log levels ko define kar sakte hain.
        Is example mein sirf error level ka log kiya gaya hai, lekin aap info aur warning levels bhi add kar sakte hain.
	Logging Libraries -
        winston library ka istemal kiya gaya hai jo ki structured logging support karti hai.
        Is library ki madad se aap logs ko different formats (JSON, plain text, etc.) mein store kar sakte hain aur different transports (file, console, etc.) ka use kar sakte hain.
* Benefits of Error Logging -
	Debugging Aid -
        Ye logs aapko issues ko quickly diagnose karne mein madad karte hain, jisse aap fast solutions provide kar sakte hain.
	Monitoring -
        Regularly logs check karne se aap application ki health monitor kar sakte hain, aur agar koi unusual activity hoti hai to usse track kar sakte hain.
	Audit Trail -
        Logs ek audit trail provide karte hain jo ki future mein compliance aur security audits ke liye useful hota hai.
* Summary -
    Error logging ek essential practice hai jo aapko application ke errors ko record karne aur analyze karne ki ability deti hai. Isse aap apne application ki reliability aur maintainability ko improve kar sakte hain.

6. What is Global Error Handeling ?
Explanation :-
* Global error handling ek mechanism hai jahan aap apne application ke har jagah par hone wale errors ko ek central location par manage karte hain.
* Ye technique aapko application ke har request-response cycle mein hone wale errors ko capture karne aur unhe effectively handle karne ki capability deti hai.
* Key Concepts -
	Centralized Error Management -
        Global error handler aapko errors ko centralized tareeke se manage karne ki facility deta hai, jisse aapke code mein error handling ka redundancy kam hota hai.
	Middleware Function -
        Global error handler ko ek middleware function ke roop mein implement kiya jata hai, jo ki request handling ke baad errors ko capture karta hai.
	User-Friendly Responses -
        Ye aapko user-friendly error messages aur appropriate HTTP status codes return karne ki flexibility deta hai.
* Ex -
    const express = require('express');
    const app = express();
    const PORT = 3000;
    app.use(express.json());
    -----> Sample route that generates an error
    app.get('/data', (req, res, next) => {
        const error = new Error('Data not found!');
        error.status = 404; -----> Not Found
        next(error); -----> Pass the error to the global error handler
    });
    -----> Global error handling middleware
    app.use((err, req, res, next) => {
        const status = err.status || 500; -----> Default to 500 if status not defined
        res.status(status).json({
            error: {
                message: err.message || 'An unexpected error occurred.',
                status: status,
            },
        });
    });
    -----> Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
* Detailed Explanation -
	Centralized Error Management -
        Is example mein, jab /data route par request hoti hai aur error generate hota hai, to error ko next(error) se global error handler ko pass kiya jata hai.
        Ye handler application ke kisi bhi part se aane wale errors ko handle kar sakta hai.
	Middleware Function -
        Global error handling middleware ko define karne ka structure (err, req, res, next) hai.
        Ye middleware error ko capture karke response send karta hai.
	User-Friendly Responses -
        Aap response mein user-friendly error messages aur appropriate status codes bhej sakte hain.
        Agar error mein message nahi hai, to default message “An unexpected error occurred” return hota hai.
* Benefits of Global Error Handling -
	Consistency -
        Global error handler aapke application mein error responses ko consistent banata hai, jisse users ko samajhne mein asani hoti hai ki kya galat hua.
	Reduced Redundancy -
        Isse aapko har route ke liye alag error handling logic nahi likhna padta, jisse code ki redundancy kam hoti hai aur maintenance asan hota hai.
	Easier Debugging -
        Centralized error handling se aapko errors ko diagnose karna aur unhe fix karna asan hota hai, kyunki aapko pata hota hai ki errors ka handling kaise kiya gaya hai.
* Summary -
    Global error handling ek effective strategy hai jo aapko application mein errors ko centralized aur consistent tareeke se manage karne ki capability deti hai.
    Iska istemal karke aap apne application ki reliability aur maintainability ko significantly improve kar sakte hain.

*/
