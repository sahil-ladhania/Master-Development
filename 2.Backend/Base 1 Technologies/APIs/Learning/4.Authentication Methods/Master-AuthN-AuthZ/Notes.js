/*

1. What is Authentication ?
* Process of validating the identity of a user, system, or application attempting to access a computer system, network, or online service.
* Primary goal is to ensure that the entity requesting access is indeed who it claims to be.

2. Patterns of AuthN.
* Two Patterns of AuthN :-
    * Stateful
        * Session-Based AuthN
        * Cookie-Based AuthN
    * Stateless
        * Token-Based AuthN


3. Stateful AuthN.
* Server retains the authentication state of the client.
* Typically, a session ID or token is generated upon successful authentication and stored on the server.
* Subsequent requests from the client include this session ID or token for authentication.
* Server validates the session ID or token against its internal records to determine the client's authentication state.
* Example: Traditional web applications using server-side sessions to manage user authentication state. Upon login, the server creates a session for the user and stores it in memory or a database. Subsequent requests from the client include the session ID, allowing the server to identify the user and maintain their authenticated state.


4. Statelesss AuthN.
* Server does not retain any client authentication state.
* Upon successful authentication, the server issues a token containing user identity and any necessary claims.
* Client includes this token in subsequent requests for authentication.
* Server validates the token's authenticity and integrity but does not need to maintain any session state.
* Example: JSON Web Tokens (JWT) are commonly used for stateless authentication. After successful login, the server generates a JWT containing user information and signs it with a secret key. The client stores this JWT locally (e.g., in local storage or cookies) and includes it in the Authorization header of subsequent requests. The server verifies the JWT's signature to authenticate the user without needing to store session state.


5. Session-Based AuthN.
Session-based authentication relies on server-side sessions to manage user authentication state.
Flow :-
    * User logs in with credentials.
    * Server creates a session and stores session ID in memory or a database.
    * Session ID is sent to the client, usually stored in a cookie.
    * Client includes session ID in subsequent requests.
    * Server verifies session ID to authenticate the user.


6. Cookie-Based AuthN.
Similar to session-based authentication but focuses on storing session IDs in cookies.
Flow :-
    * User logs in with credentials.
    * Server creates a session and sends session ID in a cookie to the client.
    * Client includes the cookie in subsequent requests.
    * Server verifies the session ID from the cookie to authenticate the user.


7. Difference Between Session-Based & Cookie-Based AuthN.
See the Image Stored in this Folder.


8. Token-Based AuthN.
Utilizes tokens (e.g - JWT) for authentication instead of server-side sessions.
Flow :-
    * User logs in with credentials.
    * Server generates a token containing user information and signs it with a secret key.
    * Token is sent to the client.
    * Client stores the token (e.g., in local storage or cookies).
    * Client includes the token in the Authorization header of subsequent requests.
    * Server verifies the token's signature to authenticate the user.


9. Difference Between Session-Based , Cookie-Based & Token-Based AuthN.
See the Image Stored in this Folder.


10. Important Jargons for Authentication.
* Hashing
* Salting 
* Encryption
* Decryption
* Signing 
* Public Key
* Private Key
* Encoding
* Decoding
* Session IDs
* JSON Web Tokens (JWT)
* Local Storage
* Session Storage	
* Cookies


11. Hashing.
What does it means - 
    * Imagine you have a secret code that you use to lock your diary. Hashing is like creating a secret code for your password. It takes your password and turns it into a scrambled mess of characters that's hard to figure out. This makes it difficult for someone to figure out your actual password just by looking at the hash.
Purpose -
    * One-Way process that converts a password or any data into a fixed-size string of characters, which is typically a hash value.
    * Primary purpose of hashing passwords before storing them in a database is to enhance security.
How it Works -
    * When a user signs up and provides a password, the application hashes the password using a cryptographic hash function (e.g., bcrypt, SHA-256).
    * Resulting hash is a fixed-length string unique to the input, making it difficult to reverse engineer the original password.
Why Hash Passwords -
    * Security - Hashing prevents storing plaintext passwords in the database, reducing the risk of data breaches. Even if the database is compromised, attackers only obtain hashed values, which are challenging to convert back to the original passwords.

12. Salting.
What does it means - 
    * Let's say you have the same password as someone else. If both passwords are hashed without any additional information, they'll end up with the same hash. Salting is like adding a unique ingredient to each password before hashing it. This ingredient (salt) makes sure that even if two passwords are the same, their hashes will be different.
Purpose -
    * To enhance the security of hashed passwords by making them more resistant to pre-computed dictionary attacks and rainbow table attacks.
How it Works -
    * When a user creates an account or changes their password, a random salt is generated.
    * This salt is then appended to the password before hashing.
    * The salted password is then hashed, resulting in a unique hash even for identical passwords.
Why Salting -
    * Security -  Salting adds randomness to the hashing process, making it much harder for attackers to guess or pre-compute hashes for common passwords. It significantly strengthens password security, especially in the event of a data breach.


13. Encryption.
What does it means - 
    * Imagine you have a secret message that you want to send to your friend, but you don't want anyone else to read it. Encryption is like putting your message inside a locked box. Only your friend, who has the key, can unlock the box and read the message.
Purpose - 
    * Encryption is a two-way process that involves converting data into a format that can be easily reversed using a decryption key.
    * Used to protect the confidentiality of data.
How it Works -
    * Users' sensitive information (e.g., credit card details) may be encrypted before storing it in a database.
    * To view or use the original data, a decryption key is required.
Why Use Encryption -
    * Confidentiality - Encrypting sensitive data adds an extra layer of security. Even if unauthorized access occurs, the data remains unreadable without the decryption key.


14. Decryption.
What does it means - 
    * This is the process of unlocking the box and turning the encrypted message back into its original form. Your friend uses the key to decrypt the message and see what you wrote.
Purpose -
    * To retrieve the original, readable data from its encrypted form, allowing authorized parties to access and use the information.
How it works -
    * Decryption algorithms use cryptographic keys to reverse the encryption process, transforming ciphertext back into plaintext.
    * Only parties with the correct decryption key can successfully decrypt and access the original data.
Why Decryption -
    * Data Access: Decryption is necessary to access and use encrypted data, allowing authorized parties to retrieve and utilize the original information securely.

15. Signing.
What does it mean -
    * Signing involves adding a digital signature to a piece of data, confirming its authenticity and integrity.
Purpose -
    * To verify the origin and integrity of data.
    * Used in authentication and ensuring data integrity during transmission.
How it Works -
    * A cryptographic hash function is applied to the data, creating a unique fingerprint.
    * This fingerprint is then encrypted using a private key to generate the digital signature.
Why Use Signing -
    * Ensures data hasn't been tampered with or altered during transmission.
    * Provides authentication and trust between parties.


16. Public Key.
What does it mean -
    * Public key is part of asymmetric cryptography, consisting of a pair of keys (public and private) used for encryption and decryption.
Purpose -
    * To encrypt data securely, with the public key being shared openly.
How it Works -
    * Data encrypted with the public key can only be decrypted by the corresponding private key.
Why Use Public Key -
    * Enables secure communication over insecure channels.
    * Facilitates authentication and digital signatures.


17. Private Key.
What does it mean -
    * Private key is the counterpart to the public key in asymmetric cryptography, kept secret and used for decryption.
Purpose -
    * Decrypting data encrypted with the corresponding public key.
How it Works -
    * Data encrypted with the public key can only be decrypted using the matching private key.
Why Use Private Key -
    * Ensures data confidentiality by allowing only authorized parties to decrypt encrypted data.
    * Enables secure communication and digital signatures.


18. Encoding.
What does it means - 
    * Suppose you have a message written in a language that your friend doesn't understand. Encoding is like translating that message into a different language that both of you can understand. For example, converting text into Base64 encoding changes it into a format that's easier to transmit or store.
Purpose -
    * To represent data in a format suitable for a specific communication protocol or storage mechanism, ensuring compatibility and readability.
How it works -
    * Encoding algorithms transform data into a different format using predefined rules or standards.
    * Common encoding formats include Base64, which converts binary data into ASCII characters for transmission over text-based protocols.
Why Encoding -
    * Data Representation - Encoding facilitates the representation of data in a format that can be easily transmitted or stored using various communication protocols and storage systems.


19. Decoding.
What does it means - 
    * This is the process of translating the encoded message back into its original form. It's like your friend translating the message from the encoded language back into the original language so they can understand it.
Purpose -
    * To retrieve the original data from its encoded form, allowing it to be processed or displayed in its native format.
How it works -
    * Decoding algorithms reverse the encoding process, applying the inverse of the encoding rules to convert encoded data back to its original format.
    * For example, Base64 decoding transforms encoded ASCII characters back into binary data.
Why Decoding -
    * Data Retrieval - Decoding is essential for extracting and utilizing data that has been encoded for transmission or storage, restoring it to its original form for processing or display.


20. Session IDs.
Session ID is a unique identifier assigned to a user session on a web server.
Usage -
    * Session IDs are commonly used in traditional web applications to maintain user sessions.
    * When a user logs in, the server generates a unique session ID and associates it with the user's session.
    * Session ID is typically stored in a cookie on the client-side and sent with each request to identify the user's session on the server.
Characteristics -
    * Session IDs are typically long, randomly generated strings.
    * They are stored on the server-side, usually in memory or a database.
    * Session IDs are temporary and expire after a certain period of inactivity or when the user logs out.


21. JSON Web Tokens(JWT).
Digital passport for information.
Special kind of code that carries details about a user or some data.
Imagine you have a passport when you travel to different countries – the passport holds your information and proves who you are.
Similarly, a JWT carries information and proves certain things about you or the data it holds.
How Does JWT Look - 
    * JWT is made up of three parts, and they are separated by dots. When you put these parts together, you get a long string that looks like a secret code.
        Header - This part says how the JWT is encoded (like secret coding instructions).
        Payload - This part holds the actual information or claims. For example, it might say who you are and when the JWT was created.
        Signature - This part ensures that the JWT hasn't been tampered with. It's like a seal that shows the information is genuine.
How Does JWT Work - 
    Getting the JWT - Imagine you log in to a website. After you enter your username and password, the website creates a JWT just for you.
    Using the JWT - Now, instead of asking you for your username and password every time you click on something, the website sends your JWT with each request. It's like having a special pass – once you show it, the website knows it's you.
    Checking the JWT - The website has a special key to check if the JWT is real. If everything is okay, the website knows the information in the JWT is trustworthy.


19. Difference Between Session ID & JWT.
See the Image Stored in this Folder.


22. Local Storage VS Session Storage VS Cookies.
Local Storage :-
    * Description - Local Storage is a method available in modern web browsers for storing data persistently across browser sessions.
    * Storage Duration - Data stored in Local Storage has no expiration date and remains until manually cleared by the user or overwritten by web applications.
    * Scope - Data stored in Local Storage is accessible to all pages from the same origin (domain).
    * Usage - Often used for storing user preferences, settings, or cached data that needs to persist between browser sessions.
    * Security - Data stored in Local Storage is accessible by any script running in the same origin, making it vulnerable to cross-site scripting (XSS) attacks.
    * Example - Storing user preferences for a web application.
Session Storage :-
    * Description - Session Storage is similar to Local Storage but has a shorter lifespan, tied to the duration of the browser session.
    * Storage Duration - Data stored in Session Storage is cleared when the browser session ends, such as when the browser is closed or the tab is closed.
    * Scope - Like Local Storage, Session Storage is scoped to the origin and accessible to all pages from the same origin.
    * Usage - Commonly used for storing temporary data that needs to be available during a single browsing session.
    * Security - Similar to Local Storage, Session Storage is vulnerable to XSS attacks but offers slightly better security due to data being cleared at the end of the session.
    * Example - Storing session-specific data like shopping cart items during an online shopping session.
Cookies :-
    * Description - Cookies are small pieces of data stored in the browser, typically used for tracking user sessions, personalization, and authentication.
    * Storage Duration - Cookies can have different expiration times set by web servers, ranging from session cookies (cleared when the browser is closed) to persistent cookies (with specific expiration dates).
    * Scope - Cookies are scoped to the domain and path specified by the web server, allowing for more granular control over where they can be accessed.
    * Usage - Widely used for implementing features like user authentication, remembering user preferences, and tracking user behavior across websites.
    * Security - Cookies can be secure or insecure, depending on attributes like Secure and HttpOnly, which control whether they can be sent over secure connections and accessed by client-side scripts, respectively.
    * Example - Storing user authentication tokens for seamless login experiences.


23. Difference Between Local Storage , Session Storage & Cookies.
See the Image Stored in this Folder.


24. Local Storage.
Client-side web storage mechanism that allows websites to store key-value pairs persistently on a user's device.
Local Storage often plays a crucial role in maintaining user sessions and preserving authentication tokens.
Technical Implementation :-
    Token Storage -
        * After a successful authentication, the server generates an authentication token (e.g., JWT) for the user.
        * This token is securely stored in the Local Storage of the user's browser.
    Session Persistence -
        * Local Storage provides a means to persistently store this token across browser sessions. This persistence ensures that the user remains authenticated even if they close the browser and return later.
    Reducing Authentication Overhead -
        * Instead of requiring users to authenticate themselves on every interaction, the stored token allows the server to recognize and validate the user swiftly, enhancing the user experience.
Benefits of Local Storage in Authentication :-
    Efficient Session Management - 
        * Local Storage facilitates efficient session management by enabling the storage of authentication tokens client-side. This reduces the need for frequent server-side authentication checks.
    Improved Performance -  
        * Since authentication tokens are readily available locally, the authentication process becomes faster, contributing to an improved overall performance of the application.
    Enhanced User Experience - 
        * Users experience the convenience of being automatically recognized and authenticated without the hassle of repeated logins, contributing to a seamless and user-friendly interface.
Note - Local Storage serves as a valuable tool in the authentication landscape, contributing to efficient session management and enhanced user experiences. However, its use should be tempered with a keen awareness of security considerations, adherence to best practices, and a strategic approach to token management.


25. Session IDs & JWT Storage Options (Session Storage , Local Storage , Cookies).
See the Image Stored in this Folder.
Session IDs with Session Storage - 
    * Session IDs are typically stored in Session Storage because they are tied to the duration of the browser session. 
    * Session Storage provides a secure and ephemeral storage mechanism, ensuring that session data is automatically cleared when the browser session ends. 
    * This is suitable for stateful authentication where session management is required, and storing session IDs in Session Storage helps mitigate security risks associated with client-side storage.
JWTs with Local Storage or Cookies - 
    * JWTs are commonly stored in Local Storage or Cookies for stateless authentication. 
    * Local Storage provides persistent storage across browser sessions, making it suitable for single-page applications (SPAs) where token persistence is needed. 
    * Cookies offer broader compatibility and support for attributes like SameSite and Secure, making them a preferred choice for cross-origin requests and ensuring better security. 
    * With proper security measures like encryption and secure attributes, JWTs stored in Local Storage or Cookies can be secure and reliable for stateless authentication in modern web applications and APIs.


26. Cookies vs. Local Storage for Storing JWT Tokens.
When it comes to storing JWT (JSON Web Tokens), both cookies and local storage are commonly used, but they have distinct characteristics and use cases. Here's a comparison to help you choose the appropriate option for your specific scenario :-
    Cookies :-
        Security - 
            * Cookies can be more secure than local storage because they have an additional security feature called HTTP-only. 
            * When a cookie is marked as HTTP-only, it cannot be accessed by JavaScript, reducing the risk of cross-site scripting (XSS) attacks.
        Automatic Handling -    
            * Cookies are automatically sent with every HTTP request to the domain, including requests for images, stylesheets, and scripts. 
            * This automatic handling can be advantageous for authenticating API requests made by the browser.
        Expiration -
            * Cookies can have an expiration date, allowing the server to set a specific duration for which the token is valid.
            * After expiration, the browser automatically removes the cookie.
        Domain Restriction - 
            * Cookies can be set to be domain-restricted, meaning they are only sent to the server from the same domain that set the cookie.
            * This provides a level of security.
    Local Storage :-
        Ease of Use -
            * Local storage is easier to use from a JavaScript perspective.
            * You can set, get, and remove items directly using JavaScript without additional HTTP requests.
        Capacity -
            * Local storage generally has a larger storage capacity compared to cookies.
        No Automatic Handling -
            * Unlike cookies, local storage data is not automatically sent with every HTTP request.
            * This means you need to manually attach the token to the headers of your API requests if you're using it for authentication.
        No Expiration Handling -
            * Local storage does not provide built-in expiration handling.
            * If you want to implement token expiration, you need to manage it manually in your code.
Choosing Between Cookies and Local Storage :-
    For Authentication - Use cookies with HTTP-only flag for enhanced security, especially if you need to make authenticated API requests directly from the browser.
    For Client-Side Interactions - Use local storage if you primarily need to access the token on the client side and manage API requests manually.
    Considerations - Consider factors like security, automatic handling, and token expiration requirements when making your decision.
Note - In many cases, a combination of both cookies and local storage might be used. Cookies can be employed for secure, HTTP-only storage, while local storage can be used for easy client-side access.


27. What is Authorization ?
* Authorization (AuthZ) is the process of determining whether a user or system is allowed to access specific resources or perform certain actions within an application or system. 
* It involves granting or denying access rights based on the user's identity, roles, permissions, or other attributes associated with their credentials.
Flow :-
    * Route Restriction - Middleware intercepts requests to protected routes.
    * Token Validation - Middleware checks for the presence of a valid token in the request.
    * Role-Based Access Control - Server verifies the user's role or permissions from the token.
    * Access Decision - Based on the user's role and permissions, the server either grants access to the requested resource or denies access.


28. Flow of AuthZ in Stateful & Stateless AuthN.
Flow of AuthZ in Stateful AuthN :-
    * Upon successful authentication (using session ID), the server retrieves the user's roles or permissions from the session store.
    * Middleware intercepts requests to protected routes and checks the user's roles or permissions from the session.
    * Access is granted or denied based on the user's roles or permissions stored in the session.
Flow of AuthZ in Stateless AuthN :-
    * Upon successful authentication (using JWT), the server verifies the token's signature and authenticity.
    * Middleware intercepts requests to protected routes and extracts the user's roles or permissions from the JWT claims.
    * Access is granted or denied based on the user's roles or permissions contained within the JWT claims.
Note - In both cases, the authorization logic is similar, but the mechanism for storing and retrieving user authorization information differs. Stateful authorization relies on server-side session storage, while stateless authorization leverages the information encoded within the JWT token.


29. Authorization Header.
HTTP header used to transmit credentials or tokens from the client to the server for the purpose of authentication and authorization.
Allows clients to provide authentication information to servers in a standardized way.
Purpose :-
    * To allow clients to authenticate themselves to servers and to authorize access to protected resources. 
    * Enables secure communication between the client and server by transmitting authentication tokens or credentials securely.
Usage :-
    * Typically used in HTTP requests to access protected resources on a server.
    * Commonly used in scenarios such as accessing restricted APIs, protected web pages, or performing actions that require authentication and authorization.
How it is Used :-
    Authorization header typically follows a specific syntax, depending on the authentication scheme being used.
    There are two Types -
        * Basic 
        * Bearer
    When using the Basic authentication scheme, the Authorization header has the following syntax :-
        Authorization: Basic <credentials>
        * Where <credentials> is a Base64-encoded string containing the username and password separated by a colon (:).
    When using token-based authentication schemes like Bearer authentication (commonly used with JWTs), the Authorization header has the following syntax :-
        Authorization: Bearer <token>
        * Where <token> is the authentication token, such as a JWT, that the client includes in the header to authenticate itself to the server.


30. Basic AuthN vs Bearer AuthN.
Basic AuthN :-
    * Basic Authentication is a simple and widely used HTTP authentication scheme. 
    * It involves sending a username and password in the request header, encoded in Base64 format. Here's how it works :-
        Client Request -
            * Client includes the Authorization header in the HTTP request.
            * Header follows the format: Authorization: Basic <credentials>.
            * <credentials> is the Base64-encoded string of the form username:password.
            * Ex - Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
                * In this example, QWxhZGRpbjpvcGVuIHNlc2FtZQ== is the Base64-encoded string for the credentials Aladdin:open sesame.
        Server Authentication -
            * Server decodes the Base64 string to extract the username and password.
            * Verifies the credentials against its authentication system.
            * If the credentials are valid, the server grants access to the requested resource.
Bearer AuthN :-
    * Bearer Authentication is commonly used with token-based systems, such as JSON Web Tokens (JWT). 
    * In this scheme, the client includes a token in the Authorization header to authenticate itself. Here's how it works :-
        Client Request -
            * Client includes the Authorization header in the HTTP request.
            * Header follows the format: Authorization: Bearer <token>.
            * <token> is the authentication token, such as a JWT.
            * Ex - Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                * In this example, the JWT is a string with three parts separated by dots. The server validates the token's signature, checks its expiration, and verifies any other necessary claims.
        Server Authentication -
            * Server verifies the authenticity and validity of the token.
            * If the token is valid, the server grants access to the requested resource.
Note :-
    Basic Auth - Requires sending the username and password with each request. Simple but less secure, especially over unencrypted connections.
    Bearer Auth - Involves sending a token with each request. Tokens are usually short-lived, reducing the risk associated with long-term exposure. It is often used in conjunction with HTTPS for enhanced security.


31. Authorization Header with Implementation :-
    * Crucial component of HTTP requests that plays a key role in authenticating and authorizing users or clients to access certain resources on a server.
    * Used to transmit credentials (such as tokens or API keys) from the client to the server. 
    * These credentials are then verified by the server to determine whether the client has the necessary permissions to access the requested resource.
    * Authorization header typically follows this basic structure - 
        Authorization: <type> <credentials>
        Type - 
            * Specifies the type of credentials being sent.
            * Common types include "Bearer" for token-based authentication and "Basic" for basic authentication.
        Credentials -
            * Actual credentials, which could be a token, username and password combination, or other relevant information, depending on the chosen authentication type.
Bearer Token Authentication Type -
    Used in token-based authentication (e.g., JSON Web Tokens or OAuth), where a token represents the user's identity and permissions.
    Example - Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    How it Works :-
        Client Request - Client includes the Authorization header in an HTTP request when accessing a secured resource.
        Server Verification - Server receives the request and extracts the credentials from the Authorization header.
        Credential Verification - Server verifies the credentials, usually by checking against a user database, validating a token, or using other authentication mechanisms.
        Access Decision - Based on the verification result, the server decides whether to grant or deny access to the requested resource.
        Ex - 
            const axios = require('axios');
            const url = '<https://api.example.com/resource>';
            const token = 'your-access-token';
            axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error:', error));
        In this example, the Bearer token is included in the Authorization header of an Axios HTTP GET request.

*/