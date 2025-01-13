# All About Cookies

## Frontend : Understanding Cookies in the Browser

### 1. What Are Cookies ?
    * Cookies are small pieces of data stored on the client-side (browser) by websites.
	* They store information like user preferences, session IDs, and login details, which persist across different sessions.
	* Example - When you visit an e-commerce site, a cookie may store your cart items.

### 2. How to set Cookies in JS ?
	* Use the document.cookie property to set a cookie.
    * Syntax :
        document.cookie = "name=value; expires=date; path=/; domain=example.com; secure; samesite=strict";
    * Example :
        document.cookie = "user=JohnDoe; expires=Thu, 31 Dec 2024 12:00:00 UTC; path=/";

### 3. What are Cookie Attributes ?
    * name=value - The name-value pair for the cookie.
	* expires - Specifies when the cookie will expire (format: UTC date).
	* path - The path for which the cookie is valid.
	* domain - Specifies the domain for the cookie.
	* secure - Ensures the cookie is sent only over HTTPS.
	* SameSite - Controls cross-site cookie behavior:
	    Strict - Only sent in requests from the same site.
	    Lax - Sent for top-level navigations and GET requests.
	    None - Sent in all contexts (requires Secure).
        
### 4. How to read Cookies in JS ?
    * You can read cookies using document.cookie.
    Example :
        let cookies = document.cookie;  // Returns a string of all cookies
        console.log(cookies);

### 5. How to delete Cookies in JS?
    * You can delete cookies by setting the expires attribute to a past date.
    * Example :
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

### 6. What are some Cookie Security Considerations ?
	* HttpOnly - Restricts JavaScript access to cookies, helping prevent XSS attacks.
	* Secure - Cookies are sent over HTTPS only.
    * SameSite - Helps prevent CSRF attacks by controlling cross-site requests.

### 7. What are some limitations of Cookies ?
    * Size Limit - Around 4KB per cookie.
	* Storage Capacity - Limited to around 20 cookies per domain.
	* Performance - Sending cookies with every HTTP request can impact performance.

## Backend : Handling Cookies in Server-side

### 1. How to set Cookies in the Backend ?
	* Cookies can be set in the response header using backend frameworks.
    * Example :
        res.cookie('user', 'JohnDoe', {
            expires: new Date(Date.now() + 900000), // 15 minutes
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        });

### 2. How to send Cookies from Server to Client ?
    * Cookies are sent in the response headers using Set-Cookie.
    * Example :
        Set-Cookie: user=JohnDoe; Path=/; Expires=Thu, 31 Dec 2024 12:00:00 UTC;

### 3. How to read Cookies from Requests ?
    * Cookies are sent in the request headers from the client-side.
    * Why Parse Cookies -
        When a browser sends a request to a server, cookies are included in the Cookie header as a single string, like this :
            Cookie: user=JohnDoe; sessionID=abc123; theme=dark
        The server must parse this string to access individual cookie values (user, sessionID, theme). 
        Parsing breaks the string into a key-value object for easier manipulation.
        Example :
            {
                user: "JohnDoe",
                sessionID: "abc123",
                theme: "dark"
            }
        Nowadays you are not supposed to parse cookies by using cookie-parser , as express do that for us.
    * Access cookies using req.cookies -
        const user = req.cookies.user;  // "JohnDoe"
 
### 4. How to modify Cookies ?
    * Cookies can be modified by overwriting them with a new value and setting updated options.
    * Example - Changing the expires date :
        res.cookie('user', 'JaneDoe', { expires: new Date(Date.now() + 3600000), httpOnly: true });

### 5. How to delete Cookies from the Backend ?
    * Deleting a cookie from the server-side is done by setting its expires attribute to a past date.
    * Example :
        res.clearCookie('user');

### 6. What is Cookie Security ?
    * HttpOnly - Prevents client-side access to cookies via JavaScript.
	* Secure - Only sends cookies over HTTPS.
	* SameSite - Helps with CSRF protection by restricting cross-site cookies.
	* Example of setting a secure cookie :
        res.cookie('session', 'abc123', { secure: true, httpOnly: true, sameSite: 'Strict' });

### 7. What are Session Cookies vs Persistent Cookies ?
    * Session Cookies - Expire when the browser is closed.
	* Persistent Cookies - Have an expiration date set in the future and persist across browser sessions.
	Example :
        res.cookie('sessionID', '12345');  // Session cookie
        res.cookie('user', 'JohnDoe', { expires: new Date('2025-12-31') });  // Persistent cookie

### 8. How to handle Cookies in different environments ?
    * Cookies behave differently in development (HTTP) vs. production (HTTPS).
	* In development, avoid using Secure cookies unless using HTTPS locally.
	* Use SameSite appropriately to control cross-origin requests.

## Important Cookie Best Practices
    * Secure Cookie Handling - Always use HttpOnly and Secure flags for sensitive data (like session IDs).
	* Cookie Expiration - Set reasonable expiration times based on your application’s needs.
	* SameSite - Use SameSite to restrict how cookies are sent cross-origin and prevent CSRF attacks.

## Visualizing the Flow of Cookies

### 1. Frontend (Browser Side)
    * Browser Sends Request :
	    Request is sent to the server.
	    Cookies related to the domain are attached in the request headers.
	* Server Responds with Cookies :
	    Server responds with a Set-Cookie header.
	    Example response :
            Set-Cookie: sessionID=abc123; Path=/; HttpOnly; Secure; SameSite=Strict;
    * Browser Stores Cookies :
	    Cookies are stored by the browser (based on domain and path).
	* Next Request :
	    On the next request to the same domain, cookies are sent automatically by the browser.

### 2. Backend (Server Side)
    * Receive Request :
	    The server receives the cookies via the Cookie header in the request.
	    Example :
            Cookie: sessionID=abc123;
    * Process the Request :
	    Server processes the request and checks for valid cookies (e.g., session ID).
	* Send Response with Cookies :
	    Server may send back a response with updated cookies (e.g., for a new session).