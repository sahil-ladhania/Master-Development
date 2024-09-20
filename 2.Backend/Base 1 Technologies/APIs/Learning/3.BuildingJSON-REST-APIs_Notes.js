/*

-----Building JSON / REST APIs-----

1. What are REST Principles ?
Explanation :-
* Stateless - Each request from the client to the server must contain all the information needed to understand and process it.
* Client-Server Architecture - Separation of concerns; the client interacts with the server via APIs.
* Uniform Interface - Consistent way of interacting with resources (e.g., using standard HTTP methods).
* Resource-Based - Everything is treated as a resource, represented with URIs.
* Layered System - API design allows multiple layers like caching, load balancers, etc.

2. What is URI Design ?
Explanation :-
* URI (Uniform Resource Identifier): A unique identifier for a resource (e.g., /users/{id}).
* Best Practices -
	•	Use nouns, not verbs (e.g., /books instead of /getBooks).
	•	Hierarchical structure (e.g., /users/{id}/posts).
	•	Avoid using file extensions (.json, .xml).

3. What are Versioning Strategies ?
Explanation :-
* Versioning ensures backward compatibility when APIs evolve.
* Methods -
	•	URI-based - /v1/users.
	•	Header-based - Use headers like Accept: application/vnd.myapp.v2+json.
	•	Query Parameters - /users?version=1.

4. How to handle CRUD Operations ?
Explanation :-
* CRUD stands for Create, Read, Update, Delete, and these operations map to HTTP methods -
	•	Create - POST to /resources.
	•	Read - GET from /resources/{id}.
	•	Update - PUT or PATCH to /resources/{id}.
	•	Delete - DELETE to /resources/{id}.

5. What is Pagination ?
Explanation :-
* Dividing large datasets into smaller pages for more manageable data transfer.
* Common Implementation -
	Query parameters like ?page=2&limit=10.
	Response includes pagination metadata like total pages and current page.

6. What is Rate Limmiting ?
Explanation :-
* Controlling the number of API requests a client can make in a certain time period.
* Purpose - Prevents abuse and server overload.
* Implementation - Header X-Rate-Limit provides details on limits and remaining requests.

7. What is Idempotency ?
Explanation :-
* An operation that can be performed multiple times without changing the result.
* Methods -
	•	GET, PUT, and DELETE are idempotent.
	•	POST is not idempotent (creating multiple resources with the same data).

8. What is HATEOAS ?
Explanation :-
* Hypermedia as the Engine of Application State.
* Concept - API responses include links that guide the client on what actions can be performed next.
* Ex - A GET response on a user resource may include a link to update the user details.

9. What is Error Handeling ?
Explanation :-
* Standardized Responses - Use consistent format for errors (e.g., JSON response with error_code, message).
* Common Status Codes -
	400 Bad Request - Invalid input from the client.
    401 Unauthorized - Authentication failure.
	500 Internal Server Error - Server-side issue.

10. What is RFC 7807 - Problem Details for HTTP APIs in Error Handling ?
Explanation :-
* A specification for including error details in HTTP responses.
* Purpose - Provides a structured way to represent errors.
* Fields - Includes fields like type, title, status, detail, and instance to describe the error.

*/
