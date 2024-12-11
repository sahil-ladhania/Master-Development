# All About CORS(Cross-Origin Resource Sharing)

## 1. What is CORS?
    * Definition -
        CORS is a security feature "implemented" by "browsers" that allows or restricts web applications running at one origin (domain) to make requests for resources from another origin.
	* Example - 
        A webpage from https://example.com may want to make an API request to https://api.example.com. 
        By default, browsers block these cross-origin requests to prevent malicious activity.
    * Real Life Scenerio - 
        Suppose you have a website https://yourapp.com, and it needs to make API calls to a server at https://api.yourapp.com. 
        By default, browsers block requests from yourapp.com to api.yourapp.com due to the same-origin policy. 
        If https://api.yourapp.com allows https://yourapp.com via CORS headers, the browser allows the request to proceed.

## 2. Why is CORS used?
    	* Security Purpose - 
            CORS is used to protect users from Cross-Site Request Forgery (CSRF) attacks, where a malicious website could send requests to a different site on behalf of the user.
	    * Control - 
            It provides a way for servers to specify who can access their resources. 
            Without CORS, any website could make requests to any server, potentially causing security breaches.

## 3. Is CORS a Good Thing or Bad Thing?
	* Good Thing :
	    Security - It protects users from potentially harmful cross-origin requests.
	    Fine-grained Control - CORS allows servers to specify which websites (origins) can access their resources, making it more secure.
	* Bad Thing :
	    Extra Configuration - For developers, it can be an extra step to configure and troubleshoot, especially when working with APIs that need cross-origin requests.
	    Access Restrictions - Sometimes CORS can restrict access unintentionally, making it challenging to debug and develop when your resources need to be shared across different origins.

## 4. How to use CORS?
	* On the Server Side -
	    You need to configure the server to allow cross-origin requests by setting the correct HTTP headers.
	    Common Header - Access-Control-Allow-Origin
	* Example - Access-Control-Allow-Origin: https://example.com allows example.com to access the server’s resources.
- Using CORS in Express (Node.js) Example -
```
    const cors = require('cors');
    const express = require('express');
    const app = express();

    // Allow requests from 'https://example.com'
    app.use(cors({ origin: 'https://example.com' }));

    app.get('/data', (req, res) => {
        res.json({ message: 'Data from server' });
    });

    app.listen(3000, () => {
        console.log('Server is running');
    });
```

## 5. How does CORS work overall?
	* Browser Request (Preflight Check) :
	    When a web application tries to make a cross-origin request (e.g., from https://example.com to https://api.example.com), the browser first sends a preflight request (an OPTIONS request) to check if the server allows cross-origin requests.
	* Server Response :
	    If the server approves, it sends back CORS headers such as Access-Control-Allow-Origin along with other headers like Access-Control-Allow-Methods (e.g., GET, POST), and Access-Control-Allow-Headers.
	* Request Completion :
	    If the preflight check is successful, the browser then proceeds with the actual request (e.g., a GET or POST).
- Diagram :
```
    Client (Browser) -> Preflight Request (OPTIONS)
    Server (API) -> CORS Headers (Allowing or Rejecting)
    Client (Browser) -> Final Request (GET/POST)
```

## 6. What are the common CORS headers?
	* Access-Control-Allow-Origin - Specifies which origin can access the resource (e.g., * for all origins or a specific domain).
	* Access-Control-Allow-Methods - Specifies which HTTP methods are allowed (e.g., GET, POST).
	* Access-Control-Allow-Headers - Specifies which headers can be used when making the actual request.

## 7. What is the “preflight” request in CORS?
	* A preflight request is an HTTP OPTIONS request sent by the browser before the actual request (like GET or POST). 
    * It checks if the server allows the actual request.

## 8. What happens if CORS is not configured correctly?
	* If CORS is not properly configured on the server, the browser will block the request and throw a CORS error. 
    * You might see messages like No 'Access-Control-Allow-Origin' header is present on the requested resource.

## 9. What is a CORS error?
	* A CORS error occurs when the browser blocks a cross-origin request that does not meet the CORS policy set by the server.

## 10. What are the security risks if CORS is misconfigured?
    * If CORS is set too loosely (e.g., allowing all origins *), it could expose your API to attacks, such as data theft or unauthorized access.