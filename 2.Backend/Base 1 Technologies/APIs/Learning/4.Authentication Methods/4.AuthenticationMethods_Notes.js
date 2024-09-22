/*

-----Authentication Methods-----

1. What is Basic Auth ?
Explanation :-
* A simple authentication method where the username and password are sent with every request, encoded in Base64.
* How It Works -
	•	Credentials are sent in the Authorization header as: Authorization: Basic <base64-encoded-username-password>.
	•	No session management.
* Drawback - Insecure if not used over HTTPS, as credentials are easily intercepted.

2. What is Token Based Auth ?
Explanation :-
* A method where a client sends a token (instead of username/password) to access resources after authentication.
* How It Works -
	•	User logs in, server generates a token (e.g., JWT).
	•	Token is included in each request header: Authorization: Bearer <token>.
	•	Stateless; no need to store sessions on the server.
* Advantage - More secure and scalable than Basic Auth.

3. What is JWT ?
Explanation :-
* A compact, self-contained token format that encodes user information and is signed to ensure integrity.
* Structure -
	•	Header: Token type and signing algorithm.
	•	Payload: Claims (e.g., user ID, role).
	•	Signature: Verifies the token wasn’t tampered with.
* Usage - Passed with requests to verify user identity.

4. What is OAuth 2.0 ?
Explanation :-
* An open standard for access delegation, allowing third-party apps to access resources on behalf of a user without sharing their credentials.
* How It Works -
	•	The client gets an access token after the user approves access.
	•	Tokens are used to authenticate API requests.
	•	Common in login systems (e.g., “Login with Google”).
* Flows -
	•	Authorization Code - Most secure, for server-side apps.
	•	Implicit - For public clients like single-page apps.

5. What is Session Based Auth ?
Explanation :-
* A method where the server creates a session for the user upon login, and a session ID is stored in a cookie.
* How It Works -
	•	User logs in, the server creates a session and stores the session ID in a cookie.
	•	The client sends the cookie with each request, and the server validates the session ID.
* Advantage - State is maintained on the server, making it easier to revoke access (e.g., logging out).

*/
