# All About Cookies
- **Creating Cookies**
- **Cookie Properties**
- **Cookie Types**
- **Cookie Security**

## Frontend : Understanding Cookies in the Browser

### 1. What Are Cookies ?
* Cookies are small pieces of data stored on the client-side (browser) by websites.
* They store information like user preferences, session IDs, and login details, which persist across different sessions.
* Cookies are sent with every request.
* Cookies can have Scope :
    * Domain
    * Path
* **Example** - When you visit an e-commerce site, a cookie may store your cart items.

### 2. How to set Cookies in JS(Client) ?
* Use the document.cookie property to set a cookie.
* **Syntax** :
    ```javascript
        document.cookie = "name=value; expires=date; path=/; domain=example.com; secure; samesite=strict";
    ```
* **Example** :
    ```javascript
        document.cookie = "user=JohnDoe; expires=Thu, 31 Dec 2024 12:00:00 UTC; path=/";
    ```

### 3. What are Cookie Attributes ?
* **name=value** - 
    * The name-value pair for the cookie.
    * Ye ek key-value pair hota hai jo aap cookie mein store karte ho.
    * **Example** - Agar aap cookie mein token rakhna chahte ho toh aise set kar sakte ho - `jwt=abcd1234`.
* **httpOnly** - 
    * Ye cookie ko JavaScript se accessible nahi banata.
    * Agar aap httpOnly: true set karte ho, toh cookie sirf server side se hi accessible hoti hai. 
    * Matlab, frontend JavaScript ko cookie ka value read ya modify karne ki permission nahi hoti.
    * **Security Benefit** - Agar aap sensitive data (jaise JWT token) cookie mein store kar rahe ho, toh httpOnly use karna important hai, taaki wo JavaScript ke through XSS (Cross-Site Scripting) attacks se protect ho sake.
    * **Note** - Agar httpOnly: true hai, toh aap JavaScript se cookie ko access nahi kar sakte, lekin server side se aapko cookie mil sakti hai (jaise req.cookies mein).
* **expires** - 
    * Sets a specific date & time when cookie will expire of type UTC Date (absolute time).
    * Ye specify karta hai ki cookie kab expire ho jaayegi.
    * Iska format hota hai UTC date. 
    * Matlab, jab tak cookie expire nahi hoti, tab tak wo available rahegi.
    * **Example** - Agar aap 10 din baad expire hona chahte ho toh set kar sakte ho - `expires=Thu, 01 Jan 2025 00:00:00 GMT`.
* **maxAge** - 
    * Sets duration (in milliseconds) for which the cookie will remain valid, relative to the current time of type Milliseconds (relative time).
    * Ye specify karta hai ki cookie kitni der tak valid rahegi.
    * Ye milliseconds mein hota hai. Jab tak ye time expire nahi hota, tab tak cookie accessible rahegi.
    * Agar aap maxAge set karte ho, toh cookie ek specific time ke baad automatically expire ho jaati hai.
    * **Note** - Agar aap expires bhi set karte ho, toh maxAge ko prefer kiya jata hai agar dono diye gaye hain.
    * **Example** - Agar aap `maxAge: 600000` set karte ho, iska matlab hai ki cookie `10 minutes` ke baad expire ho jayegi `(600,000 milliseconds = 10 minutes)`.
* **path** - 
    * The path for which the cookie is valid.
    * Ye specify karta hai ki cookie kis path pe valid hogi.
    * Agar aapko cookie ko multiple subdomains mein access dena hai, toh aap domain specify kar sakte ho.
    * **Example** - Agar domain set kiya `domain=example.com`, toh cookie `www.example.com` aur `sub.example.com` dono par accessible ho sakti hai.
* **domain** - Specifies the domain for the cookie.
* **secure** - 
    * Ensures the cookie is sent only over HTTPS.
    * Ye ensure karta hai ki cookie sirf HTTPS ke through send ho.
    * Jab secure=true hota hai, toh cookie tabhi send hoti hai jab aapka site HTTPS pe ho.
    * **Example** - Agar aap production environment mein ho, toh aap secure=true set karte ho taaki security ensure ho.
* **SameSite** - 
    * Controls cross-site cookie behavior.
    * Ye cookie ki behavior ko cross-site requests ke liye control karta hai. 
    * Matlab, jab doosri website se request aati hai, tab cookie ka behavior kaise ho, wo decide karta hai.
    * Few options :
	    * **Strict** - 
            * Only sent in requests from the same site.
            * Ye cookie sirf same site pe send hoti hai. 
            * Agar koi doosri website se request aayi, toh wo cookie send nahi hoti.
            * **Example** - Agar aap website A pe ho aur website B se request aayi, toh cookie B ko nahi milegi.
	    * **Lax** - 
            * Sent for top-level navigations and GET requests.
            * Ye cookie top-level navigations aur GET requests ke liye send hoti hai. 
            * Matlab agar user URL ko directly visit kar raha ho, tab cookie send hoti hai.
            * **Example** - Agar user website A pe aaya, toh cookie send ho sakti hai.
	    * **None** - 
            * Sent in all contexts (requires Secure).
            * Ye cookie sabhi requests mein send hoti hai, chahe wo same site ho ya cross-site. 
            * Iske liye secure=true bhi hona chahiye, yani HTTPS pe request honi chahiye.
            * **Example** - Agar aapko third-party website ko cookie send karni hai, toh aapko SameSite=None set karna hoga.
        
### 4. How to read Cookies in JS ?
* You can read cookies using document.cookie.
* **Example** :
    ```javascript
        let cookies = document.cookie;  // Returns a string of all cookies
        console.log(cookies);
    ```

### 5. How to delete Cookies in JS?
* You can delete cookies by setting the expires attribute to a past date.
* **Example** :
    ```javascript
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    ```

### 6. What are some Cookie Security Considerations ?
* **HttpOnly** - Restricts JavaScript access to cookies, helping prevent XSS attacks.
* **Secure** - Cookies are sent over HTTPS only.
* **SameSite** - Helps prevent CSRF attacks by controlling cross-site requests.

### 7. What are some limitations of Cookies ?
* **Size Limit** - Around 4KB per cookie.
* **Storage Capacity** - Limited to around 20 cookies per domain.
* **Performance** - Sending cookies with every HTTP request can impact performance.

## Backend : Handling Cookies in Server-side

### 1. How to set Cookies in the Backend ?
* Cookies can be set in the response header using backend frameworks.
* **Example** :
    ```javascript
        res.cookie('user', 'JohnDoe', {
            // list of attributes
        });
    ```

### 2. How to send Cookies from Server to Client ?
* Cookies are sent in the response headers using Set-Cookie.
* **Example** :
    ```javascript
        Set-Cookie: user=JohnDoe; Path=/; Expires=Thu, 31 Dec 2024 12:00:00 UTC;
    ```
* Express gives you a method to directly set the Cookie.
* **Syntax** :
    ```javascript
        res.cookie("key", value, {
            // attributes
        });
    ```

### 3. How to read Cookies from Requests ?
* Cookies are sent in the request headers from the client-side.
* **Why Parse Cookies** -
    * When a browser sends a request to a server, cookies are included in the Cookie header as a single string, like this :
        `Cookie: user=JohnDoe; sessionID=abc123; theme=dark`
    * The server must parse this string to access individual cookie values (user, sessionID, theme). 
    * Parsing breaks the string into a key-value object for easier manipulation.
    * **Example** :
        ```javascript
            {
                user: "JohnDoe",
                sessionID: "abc123",
                theme: "dark"
            }
        ```
    * Nowadays you are not supposed to parse cookies by using cookie-parser , as express do that for us.
    * Access cookies using req.cookies -
        ```javascript
            const user = req.cookies.user;  // "JohnDoe"
        ```
 
### 4. How to modify Cookies ?
* Cookies can be modified by overwriting them with a new value and setting updated options.
* **Example** - 
    Changing the expires date :
    ```javascript
        res.cookie('user', 'JaneDoe', { expires: new Date(Date.now() + 3600000), httpOnly: true });
    ```

### 5. How to delete Cookies from the Backend ?
* Deleting a cookie from the server-side is done by setting its expires attribute to a past date.
* **Example** :
    ```javascript
        res.clearCookie('user');
    ```

### 6. What is Cookie Security ?
* **HttpOnly** - Prevents client-side access to cookies via JavaScript.
* **Secure** - Only sends cookies over HTTPS.
* **SameSite** - Helps with CSRF protection by restricting cross-site cookies.
* **Example of setting a secure cookie** :
    ```javascript
        res.cookie('session', 'abc123', { secure: true, httpOnly: true, sameSite: 'Strict' });
    ```

### 7. How many types of Cookies are there ?
* **Session Cookies** :
    * Temporary cookies that are deleted once the browser is closed.
    * Used to maintain user sessions (e.g., keeping you logged in until you close the browser).
    * **Example** - Shopping cart contents that disappear when you close the site.
    * **Key Property** - No expiration date; they exist only while the browser is open.
* **Permanant Cookies** :
    * Cookies that remain stored on the user’s device even after the browser is closed. 
    * They expire after a set duration specified by the server.
    * Storing login credentials, user preferences, or language settings.
    * **Example** - A website that remembers your theme preference (light/dark mode).
    * **Key Property** - They include an expiration date (e.g., valid for 30 days).
* **HttpOnly Cookies** : 
    * Cookies that can only be accessed by the server and are not available to JavaScript running in the browser.
    * Enhance security by preventing client-side scripts (like XSS attacks) from accessing sensitive cookie data (e.g., session tokens).
    * **Example** - A session cookie marked as HttpOnly to prevent malicious access.
    * **Key Property** - Cannot be accessed or modified via `document.cookie`.
* **Secure Cookies** :
    * Cookies that are transmitted only over HTTPS connections.
    * Protect data from being intercepted during transmission.
    * **Example** - Login cookies for a banking website using HTTPS.
    * **Key Property** - Prevented from being sent over insecure HTTP connections.
* **Third Party Cookies** :
    * Cookies created by domains other than the one the user is currently visiting.
    * Used primarily for cross-site tracking and targeted advertising.
    * **Example** - Ads on a news website that track you across multiple sites.
    * **Key Property** - Often blocked by modern browsers or require explicit user consent.
* **Zombie Cookies** - 
    * Cookies that recreate themselves after being deleted. 
    * These are typically stored in alternative locations (e.g., Flash storage or ETags).
    * Often used for tracking purposes, sometimes in an unethical way.
    * **Example** - A cookie that comes back even after you clear your browser’s cookies.
    * **Key Property** - Difficult to get rid of, often controversial for privacy concerns.

### 8. What are Session Cookies vs Persistent Cookies ?
* **Session Cookies** - 
    * Expire when the browser is closed.
    * If you dont add the **max-age** or **expiry** attribute it means it is a Session Cookie.
* **Persistent Cookies** - 
    * Have an expiration date set in the future and persist across browser sessions.
* **Example** :
    ```javascript
        res.cookie('sessionID', '12345');  // Session cookie
        res.cookie('user', 'JohnDoe', { expires: new Date('2025-12-31') });  // Persistent cookie
    ```

### 8. How to handle Cookies in different environments ?
* Cookies behave differently in development (HTTP) vs. production (HTTPS).
* In development, avoid using Secure cookies unless using HTTPS locally.
* Use SameSite appropriately to control cross-origin requests.

## Important Cookie Best Practices
* **Secure Cookie Handling** - Always use HttpOnly and Secure flags for sensitive data (like session IDs).
* **Cookie Expiration** - Set reasonable expiration times based on your application’s needs.
* **SameSite** - Use SameSite to restrict how cookies are sent cross-origin and prevent CSRF attacks.

## Visualizing the Flow of Cookies

### 1. Frontend (Browser Side)
* Browser Sends Request :
    * Request is sent to the server.
	* Cookies related to the domain are attached in the request headers.
* Server Responds with Cookies :
    * Server responds with a Set-Cookie header.
	* **Example response** :
        `Set-Cookie: sessionID=abc123; Path=/; HttpOnly; Secure; SameSite=Strict;`
* Browser Stores Cookies :
    * Cookies are stored by the browser (based on domain and path).
* Next Request :
	* On the next request to the same domain, cookies are sent automatically by the browser.

### 2. Backend (Server Side)
* Receive Request :
	* The server receives the cookies via the Cookie header in the request.
	* **Example** :
        `Cookie: sessionID=abc123;`
* Process the Request :
	* Server processes the request and checks for valid cookies (e.g., session ID).
* Send Response with Cookies :
	* Server may send back a response with updated cookies (e.g., for a new session).


## Note 

### 1. Is there any chance that your cookie will be vanished on page refresh , evem if you have set a Persistent Cookie by setting maxage or expiry attribute ?
* **Yes** : Because of using `sameSite: 'None'` with `secure: false`
* The cookie is vanishing because of a combination of `sameSite: 'None'` and `secure: false`. 
* Browsers are rejecting the cookie after the first set operation, so it does not persist.
* **Problem** - 
    * Cookies with `sameSite: 'None'` are required to have `secure: true`, even if you are running on http locally. 
    * Modern browsers reject cookies with sameSite: `'None'` if `secure: false`.
* **Why It Matters** - 
    * Even though the cookie is being set initially, it gets cleared by the browser after page refresh due to this violation.
* You can temporarily remove `sameSite: 'None'` or set it to `'Lax'` for development.

### 2. What to do if in case if your Frontend and Backend are running on different Ports ?
* Include `withCredentials: true` in Frontend in the the api if you are using Axios.
* `withCredentials: true` ensures that cookies are sent and received for cross-origin requests.
* Check if the backend allows credentials in CORS settings - 
    ```javascript
        app.use(cors({
            origin: 'http://localhost:5173', 
            credentials: true,
        }));
    ```