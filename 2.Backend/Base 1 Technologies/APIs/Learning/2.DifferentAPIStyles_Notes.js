/*

-----Different API Styles-----

1. What is RESTfull APIs ?
Explanation :-
* Representational State Transfer (REST) is an architectural style that uses HTTP for communication between client and server.
* Key Constraints -
	•	Stateless (each request is independent).
	•	Resource-based (everything is treated as a resource).
	•	Uses standard HTTP methods (GET, POST, etc.).
	•	Format - Typically uses JSON or XML for data exchange.

2. What is Simple JSON APIs ?
Explanation :-
* APIs that primarily rely on JSON (JavaScript Object Notation) as the data format for communication between the client and server.
* Why JSON - Lightweight, human-readable, and easily parsed by machines.
* Ex - Many web services return data in JSON format (e.g., public APIs like weather, financial data).

3. What is SOAP APIs ?
Explanation :-
* Simple Object Access Protocol (SOAP) is a protocol for exchanging structured information using XML.
* Key Features -
	•	Strong security features (WS-Security).
	•	Uses XML exclusively.
	•	Has strict standards (WSDL for describing the service).
	•	Use Case: Often used in enterprise-level applications where security and transactional integrity are critical.

4. What is GraphQL APIs ?
Explanation :-
* A query language for APIs that allows clients to request exactly the data they need.
* Advantages -
	•	No over-fetching or under-fetching of data.
	•	Strongly typed schema.
	•	Client-driven queries.
* Use Case - Ideal for applications that require flexibility in data retrieval (e.g., complex frontends like Facebook).

5. What is gRPC APIs ?
Explanation :-
* gRPC (Google Remote Procedure Call) is a high-performance RPC framework that uses Protocol Buffers (protobuf) for serialization.
* Key Features -
	•	Bi-directional streaming.
	•	Strong typing via Protocol Buffers.
	•	Efficient for microservices communication.
* Use Case - Used in low-latency, high-performance systems (e.g., inter-service communication in microservices).

*/
