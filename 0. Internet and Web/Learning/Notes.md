# Web Warriors (All about Internet)

## 1. How the Internet Works
### Introduction to the Concept of the Internet
- The Internet is a global network of interconnected computers that communicate and share information.
- It is based on packet-switching, where data is broken into packets, sent to its destination, and reassembled.
- **Key technologies** :
	- **IP (Internet Protocol)** - 
		- Determines how devices communicate over the network.
	- **TCP (Transmission Control Protocol)** - 
		- Ensures reliable data transfer.
- **Example** - When you send an email, it travels through multiple computers (routers) to reach the recipient’s email server.

### Overview of the World Wide Web (WWW)
- WWW is a system of interlinked web pages and resources accessed through the Internet.
- Invented by **Tim Berners-Lee** in 1989.
- Works on HTTP/HTTPS protocols to enable communication between browsers (clients) and servers.
- The web is only a part of the Internet. Other services like email, FTP, and gaming also use the Internet.

### How Data is Transferred Across Networks
1.	Data is broken into smaller units called packets.
2.	Each packet is labeled with source and destination IP addresses.
3.	Packets travel independently through various routers.
4.	At the destination, packets are reassembled in the correct order.
5.	Protocols like TCP/IP ensure accuracy and reliability.
- **Example** - Streaming a YouTube video involves packets being sent from YouTube’s server to your device.

### Understanding IP Addresses, Domain Names, and Routing
- **IP Address**
	- Unique identifier for devices on a network (like a postal address for computers).
	- **Types** :
		- **IPv4** - 32-bit addresses (e.g., 192.168.0.1).
		- **IPv6** - 128-bit addresses for a larger address space.

- **Domain Names**
	- Human-readable names mapped to IP addresses.
	- **Example** - www.google.com maps to an IP like 142.250.72.206.

- **Routing**
	- The process of finding the best path for data packets to travel from source to destination.
	- Routers play a key role by forwarding packets between networks.

### Key Concepts
1. **Internet Service Providers (ISPs)**
	- ISPs provide access to the Internet.
	- They connect homes and businesses to the backbone of the Internet.
	- **Examples** - Airtel, Jio, Comcast.

2. **Routers**
	- Devices that direct data packets between networks.
	- Use routing tables to decide the best path for packets.

3. **DNS (Domain Name System)**
	- Translates human-readable domain names into machine-readable IP addresses.
	- Acts like a phonebook for the Internet.

**Example Workflow of Internet Communication**
1.	You type www.google.com in your browser.
2.	The browser queries a DNS server to get the IP address for Google.
3.	The browser sends an HTTP request to the server at that IP address.
4.	Google’s server sends back the requested data (e.g., the Google homepage).

## 2. DNS Magic and Internals

### What is DNS (Domain Name System)?
- DNS is a system that translates domain names (like www.google.com) into IP addresses (like 142.250.72.206) that computers can understand.
- It acts as the phonebook of the Internet:
- Humans use domain names.
- Machines use IP addresses to locate and communicate with each other.

### Why is DNS needed?
- It’s easier for humans to remember names than numerical IPs.
- DNS ensures a smooth connection between users and web servers.

### How DNS Resolves Domain Names to IP Addresses
1.	**User Action** - You type a URL in your browser (e.g., www.example.com).
2.	**Browser Cache** - The browser checks its cache for the IP address.
3.	**Operating System Cache** - If not found, the OS checks its DNS cache.
4.	**DNS Resolver Query** - The OS sends the request to a DNS resolver (usually provided by your ISP).
5.	**Recursive Query** - The resolver queries the DNS hierarchy:
	- **Root DNS Server** - Provides the address of the TLD (Top-Level Domain) server (e.g., .com).
	- **TLD Server** - Provides the address of the authoritative DNS server for the domain.
	- **Authoritative DNS Server** - Returns the IP address for the domain (e.g., 192.0.2.1).
6.	**Browser Communication** - The browser uses the IP address to connect to the web server.

### Types of DNS Records
- DNS records define specific details about a domain. 
- Common types include :
1.	**A Record** - Maps a domain name to an IPv4 address. 
	**Example** - example.com -> 192.0.2.1
2.	**CNAME Record** - Alias for another domain.
	**Example** - blog.example.com -> www.example.com
3.	**MX Record**: Specifies mail servers for a domain.
	**Example** - Handles email delivery for example.com.
4.	**TXT Record** - Provides text information, often for verification (e.g., SPF records for email security).
5.	**AAAA Record** - Maps a domain name to an IPv6 address.
	**Example** - example.com -> 2001:0db8:85a3::8a2e:0370:7334

### DNS Hierarchy
1.	**Root DNS Servers** :
	Top-most level of the DNS hierarchy.
	Handle requests for top-level domains (TLDs) like .com, .org, .net.
2.	**TLD Servers** :
	Manage specific top-level domains (e.g., .com TLD servers handle .com domains).
	**Example** - .com, .edu, .gov.
3.	**Authoritative DNS Servers** :
	Provide the final answer for domain queries.
	Contain the actual DNS records for a domain.

### How Browsers Query DNS Servers
1.	**Recursive Queries** :
	The DNS resolver does all the work to retrieve the IP address by querying multiple servers.
	The client only waits for the final response.
2.	**Iterative Queries** :
	The client queries each server (Root → TLD → Authoritative) step by step.

### Key Concepts
1. **Recursive Queries**
	- The DNS resolver queries servers on behalf of the client until it finds the correct IP address.

2. **Caching**
	- DNS servers and browsers cache DNS records to reduce query times for frequently visited sites.
	- Cache reduces the load on DNS servers.

3. **TTL (Time-to-Live)**
	- DNS records have a TTL value that specifies how long they can be cached.
	- **Example** - If a record’s TTL is 3600 seconds, it will remain in the cache for 1 hour.

**Example Workflow of a DNS Query**
1.	User types www.google.com in their browser.
2.	The browser checks its cache.
3.	If not found, the OS queries the ISP’s DNS resolver.
4.	The resolver queries :
	- Root DNS Server → TLD Server (.com) → Authoritative DNS Server.
5.	The authoritative server returns the IP address for www.google.com.
6.	The browser uses the IP address to load the website.

## 3. Server-Client Architecture

### What is a Client-Server Model?
	- The Client-Server Model is a network structure where:
	- Clients (users or devices) request services or resources.
	- Servers provide those resources or services.

**Analogy** :
- Think of a restaurant:
	- Client - Customer placing an order.
	- Server - Waiter who delivers the food (service).

### Differences Between Client and Server in Web Applications
| **Aspect**   | **Client**                          | **Server**                         |
|--------------|-------------------------------------|------------------------------------|
| **Role**     | Requests data or services.         | Processes and serves requested data. |
| **Examples** | Web browsers, Mobile apps.         | Web servers, API servers.         |
| **Location** | End-user devices (laptops, phones).| Centralized systems (cloud or on-premises). |
| **Technology** | Frontend (HTML, CSS, JS).        | Backend (Node.js, Django, etc.).  |

### HTTP Request-Response Cycle
- The HTTP Request-Response Cycle defines how clients and servers communicate over the web.
- **Steps** :
	1.	**Client Request** :
		- The client sends an HTTP request to the server via a browser or an app.
		- **Example** - Typing www.example.com in a browser.
	2.	**Server Processes Request** :
		- The server interprets the request (e.g., fetch data, process logic).
	3.	**Server Sends Response**:
		- The server sends an HTTP response containing the requested resource or an error message.
	4.	**Client Displays the Response** :
		- The browser renders the received data (e.g., a webpage).

### How Browsers Act as Clients
- Browsers like Chrome, Firefox, and Edge act as HTTP clients.
- They send requests (e.g., GET or POST) to servers.
- Render the response (HTML, CSS, JS) for users to see.

### Introduction to Web Servers
- A Web Server is software or hardware that hosts websites and serves resources to clients.
- Common Web Servers :
1.	Apache -
	- Open-source, widely used.
	- Known for flexibility and configuration options.
2.	Nginx -
	- Lightweight and fast.
	- Handles high traffic efficiently.
3.	Node.js -
	- JavaScript runtime for building scalable server-side applications.

**Web Hosting** :
- Web Hosting is a service that stores web applications on servers and makes them accessible over the Internet.

**Hosting Providers** :
- **Shared Hosting** - Multiple sites on one server (e.g., Bluehost).
- **Cloud Hosting** - Distributed across multiple servers (e.g., AWS, Google Cloud).

### Key Concepts
1. **Client-Side vs Server-Side**
	- **Client-Side** :
		- Refers to code executed in the user’s browser.
		- **Example** - Rendering UI with HTML, CSS, and JS.
	- **Server-Side** :
		- Refers to code executed on the server.
		- **Example** - Validating user input, accessing databases.

2. **Request Headers**
	- Metadata sent by the client in an HTTP request.
	- **Examples** -
		- Host: Domain name (e.g., example.com).
		- User-Agent: Browser details (e.g., Chrome/112).

3. **Response Codes**
	- HTTP status codes sent by the server to indicate the result of a request:
		- **200 OK** - Success.
		- **404 Not Found** - Resource not found.
		- **500 Internal Server Error** - Server issue.

**Example Workflow** :
1.	You type www.example.com in a browser.
2.	The browser (client) sends an HTTP request to the server hosting example.com.
3.	The server processes the request and sends back an HTML page.
4.	The browser displays the webpage to you.

## 4. Internet Protocols

### Introduction to Network Protocols
- Network protocols are standardized rules and conventions that enable communication between devices over a network.
- **Purpose** : 
	- Ensure :
		- **Data integrity** - Accurate delivery of information.
		- **Data formatting** - Consistent structure for interoperability.
		- **Reliable communication** - Handling errors and maintaining order.

### Why Are Protocols Needed?
1.	**Communication Standardization** :
	- Devices from different manufacturers can communicate seamlessly.
	- **Example** - Your PC (Windows) can connect to a server running Linux.
2.	**Error Handling** :
	- Detects and resolves errors in data transmission.
	- **Example** - Retransmitting lost packets.
3.	**Efficient Data Transfer** :
	- Breaks large data into smaller chunks, sends them in sequence, and reassembles at the destination.
	- **Example** - Downloading a file from a server.

### Types of Network Protocols
- Network protocols can be broadly categorized based on their function :
1.	**Application Layer** - Protocols used for user-level communication.
		- **Example** - HTTP, FTP, DNS.
2.	**Transport Layer** - Ensures reliable or fast data delivery.
		- **Example** - TCP, UDP.
3.	**Network Layer** - Handles addressing and routing.
		- **Example** - IP.
4.	**Data Link Layer** - Ensures error-free transmission over the physical medium.
		- **Example** - Ethernet.

### 4.1 TCP/IP Protocol Suite

### What is TCP/IP?
- Stands for Transmission Control Protocol/Internet Protocol.
- A foundational suite of protocols used for communication over the Internet.

### Key Features:
- Layered Model.
- Divided into 4 layers :
	1.	**Application Layer** - Interacts with user applications.
	2.	**Transport Layer** - Handles reliable data transfer.
	3.	**Internet Layer** - Manages addressing and routing.
	4.	**Network Interface Layer** - Manages physical transmission.
- End-to-End Communication :
	- Ensures data is transmitted reliably between source and destination.

### TCP (Transmission Control Protocol)
- Ensures reliable, ordered, and error-checked delivery of data.

### How TCP Works:
1.	**Data Segmentation** :
		- Breaks large data into smaller packets.
2.	**Error Detection & Retransmission** :
		- Lost or corrupted packets are retransmitted.
3.	**Acknowledgment** :
		- Sender and receiver confirm successful data delivery.

### Key Concepts:
- **Port Numbers** - Identify specific applications on a device.
- **Example** - Port 80 (HTTP), Port 443 (HTTPS).
- **Three-Way Handshake** - Establishes a reliable connection (discussed in detail in Topic 5).

### IP (Internet Protocol)
- **Purpose** - Provides logical addressing and routing.
- **IP Address** - A unique identifier for devices on a network.
- **Example** - 192.168.1.1.

### Key Features:
1.	**Routing** :
		- Determines the best path for data to reach its destination.
2.	**Types of IP** :
		- **IPv4** - 32-bit addresses (e.g., 192.168.0.1).
		- **IPv6** - 128-bit addresses for more devices (e.g., 2001:0db8:85a3::8a2e:0370:7334).

### 4.2 UDP (User Datagram Protocol)

### What is UDP?
- A lightweight protocol for fast, connectionless communication.

### Features:
1.	**No Connection Establishment** :
		- Data is sent without prior setup (no handshake).
2.	**Unreliable** :
		- No guarantee of delivery or order.

### Advantages:
	- Faster than TCP.
	- Suitable for real-time applications (e.g., video streaming, gaming).

**Example Use Case** :
	- Video Calls - Dropped frames are acceptable, as the focus is on speed, not reliability.

### Comparison: TCP vs UDP
| Feature        | TCP                                   | UDP                         |
|----------------|---------------------------------------|-----------------------------|
| **Connection** | Connection-oriented (requires handshake). | Connectionless.             |
| **Reliability**| Reliable (error checking, retransmission). | Unreliable.                 |
| **Speed**      | Slower due to error handling.        | Faster due to minimal overhead. |
| **Use Case**   | Web browsing, File downloads.        | Streaming, Gaming.          |

**Example Workflow for TCP/IP** :
	1.	A user types www.google.com in a browser.
	2.	The DNS resolves the domain to an IP (e.g., 142.250.190.78).
	3.	TCP establishes a connection between the browser (client) and Google’s server.
	4.	Data is transmitted over the IP protocol, ensuring correct routing.

## 5. TCP Handshakes and 3-Way Handshakes

### What is a 3-Way Handshake in TCP?
- The 3-Way Handshake is the process used to establish a reliable connection between a client and a server over TCP (Transmission Control Protocol). 
- This ensures that both parties are ready to begin communication and are synchronized.

### Purpose of the Handshake
- Reliable Connection - Ensures both client and server are ready to send and receive data.
- Synchronization - Makes sure both sides agree on sequence numbers (used to keep track of packets).
- Error-Free Communication - Ensures no data loss by using acknowledgments and sequence numbers.

### The Three Phases of the Handshake
1.	**SYN (Synchronize)** -
	- The client sends a SYN (synchronize) message to the server. 
	- This message contains a random sequence number to initialize the communication.
	- Client → Server: “Let’s start communication. 
	- Here’s my sequence number (let’s call it x)”
**Example** :
	- Client -> SYN = x
2.	**SYN-ACK (Synchronize-Acknowledge)**:
	- The server receives the SYN message and acknowledges it by sending back a SYN-ACK message. 
	- This message acknowledges the client’s sequence number and also includes the server’s own sequence number to synchronize the connection.
	- **Server → Client** - “I received your SYN (sequence x) and here’s my SYN (sequence y).”
**Example** :
	- Server -> SYN-ACK = y, ACK = x + 1
3.	**ACK (Acknowledge)**:
	- The client receives the SYN-ACK message from the server. 
	- It acknowledges the server’s sequence number and confirms the connection is established by sending an ACK message.
	- **Client → Server** - “I received your SYN-ACK (sequence y). Let’s proceed with data transfer.”
	- This completes the handshake, and both parties can now begin data transmission.
**Example** :
	Client -> ACK = y + 1

### Diagram of 3-Way Handshake:
1. Client → SYN = x
2. Server → SYN-ACK = y, ACK = x + 1
3. Client → ACK = y + 1

### Key Concepts Involved in the 3-Way Handshake:
- **Sequence Numbers** - 
	- TCP assigns a sequence number to each byte of data for reliable ordering. 
	- These numbers help both parties track the data correctly.
- **Example** :
	- Client sends data starting with sequence number x.
	- Server responds with sequence number y, which is used to track the server’s response.
	- **Acknowledgments** - After each message, the recipient sends an acknowledgment to confirm receipt and readiness to continue.

### Why the 3-Way Handshake is Needed
1.	**Synchronization** - Ensures that both the client and server are ready to exchange data, and they know the correct sequence of data.
2.	**Avoiding Data Loss** - Ensures that no data is lost during transmission by establishing sequence numbers and acknowledgments.
3.	**Flow Control** - It helps in regulating the data transfer by using sequence numbers and acknowledgments.

### How Data Transmission Happens After the Handshake
- Once the 3-way handshake is completed :
	1.	The client and server can start exchanging data.
	2.	**TCP Segments** - Data is broken into smaller segments, each containing:
		- **Sequence number** - To indicate the order.
		- **Acknowledgment number** - To confirm the receipt of data.
		- **Payload** - The actual data being transmitted.

### Flow of Data Post-Handshaking:
1.	**Client → Server** - Sends data packets with sequence number.
2.	**Server → Client** - Acknowledges the receipt of packets and may send its own data.
3.	**Client → Server** - Confirms receipt of the server’s packets.

- Closing the Connection

- Once data transmission is complete, the connection is closed using a 4-Way Handshake.
	1.	FIN (Finish): One side (usually the client) sends a FIN message to indicate it wants to close the connection.
	2.	The other side (usually the server) sends an acknowledgment.
	3.	Both sides then send their own FIN messages to close the connection.

**Example Scenario**
- Let’s assume a client (browser) wants to establish a connection with a server to load a website:
	1.	**SYN** - The client sends a SYN request to the server, asking to start communication.
		- **Client → Server** - “SYN = 100” (sequence number 100)
	2.	**SYN-ACK** - The server responds with a SYN-ACK, acknowledging the client’s request and initiating its own.
		- **Server → Client** - “SYN = 200, ACK = 101”
	3.	**ACK** - The client receives the server’s response and sends an acknowledgment.
		- **Client → Server** - “ACK = 201”
- Once this is complete, data transfer begins, and both the client and server can send HTTP requests and responses to load the web page.

## 6. HTTP & HTTPS Protocols

### Introduction to HTTP (HyperText Transfer Protocol) and HTTPS (Secure version of HTTP)
- **HTTP** :
	- HyperText Transfer Protocol is the foundation of data communication on the web. 
	- It is an application-layer protocol used for transmitting hypertext (web pages) over the internet.
- **HTTP Request-Response Cycle** :
	- A client (usually a web browser) sends an HTTP request to a server.
	- The server processes the request, retrieves the requested resource (e.g., a webpage), and sends an HTTP response back to the client.
- **HTTPS** :
	- HyperText Transfer Protocol Secure is the secure version of HTTP. 
	- It uses SSL/TLS (Secure Sockets Layer/Transport Layer Security) protocols to encrypt the communication between the client and server.
- **Why HTTPS ?**
	- **Encryption** - Ensures that the data being transmitted is encrypted, making it unreadable to any third parties.
	- **Authentication** - Verifies that the server you are communicating with is the correct one (through SSL certificates).
	- **Integrity** - Ensures the data is not altered during transmission.

### What Happens During an HTTP Request-Response Cycle?
1.	Client Sends an HTTP Request : 
	- The client (typically a web browser) sends an HTTP request to the server to fetch a resource, such as a webpage, image, or data.
	- The request is sent using a specific HTTP method (GET, POST, PUT, DELETE, etc.).
- **Example** :
	```javascript
		GET /index.html HTTP/1.1
		Host: www.example.com
	```

2.	**Server Processes the Request** :
	- The web server (e.g., Apache, Nginx) receives the request and processes it. 
	- The server checks if the requested resource is available and if the client has permission to access it.

3.	**Server Sends an HTTP Response** :
	- The server returns an HTTP response, which contains the requested resource and a status code that indicates the outcome of the request.
	- A successful request returns a 200 OK status code, while a not-found resource returns a 404 Not Found status code.
- **Example** :
	```javascript
	HTTP/1.1 200 OK
	Content-Type: text/html
	Content-Length: 1234

	<html>...content...</html>
	```

4.	**Client Receives the Response** :
	- The client (browser) processes the response, displays the content (e.g., webpage), and renders it to the user.

### Understanding HTTP Status Codes
- HTTP status codes are used by servers to indicate the result of a client’s request. 
- The most common categories are :
	- **2xx (Success)** - The request was successfully received, understood, and accepted.
		- **200 OK** - The request was successful, and the server returns the requested resource.
		- **201 Created** - The resource was successfully created (typically used for POST requests).
	- **3xx (Redirection)** - The client must take additional action to complete the request.
		- **301 Moved Permanently** - The resource has permanently moved to a new URL.
		- **302 Found** - The resource is temporarily located at a different URL.
	- **4xx (Client Errors)** - The request contains bad syntax or cannot be fulfilled by the server.
		- **400 Bad Request** - The server cannot process the request due to malformed syntax.
		- **404 Not Found** - The requested resource could not be found on the server.
	- **5xx (Server Errors)** - The server failed to fulfill a valid request.
		- **500 Internal Server Error** - The server encountered an unexpected condition that prevented it from fulfilling the request.
		- **502 Bad Gateway** - The server, while acting as a gateway or proxy, received an invalid response from an upstream server.

### Introduction to SSL/TLS and How It Secures Data During Transmission
- SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols used to secure communication over a computer network. 
- TLS is the successor of SSL, and it is the protocol used today for secure HTTPS connections.
- **How SSL/TLS Works** :
	- Encryption: Ensures that the data transferred between the client and server is unreadable by anyone who intercepts the communication.
	- Authentication: Verifies the identity of the server through an SSL Certificate, ensuring the client communicates with the correct server.
	- Integrity: Ensures that the data has not been tampered with during transmission.
- **SSL/TLS Handshake** :
	- The process by which the client and server establish a secure connection using SSL/TLS involves several steps -
		1.	**Client Hello** - The client sends a message to the server, initiating the handshake and proposing encryption algorithms.
		2.	**Server Hello** - The server responds with its chosen encryption algorithms and sends its SSL certificate (containing the public key).
		3.	**Client Verification** - The client verifies the server’s certificate using the trusted certificate authority (CA).
		4.	**Session Key Generation** - The client and server exchange keys to establish a secure session.
		5.	**Secure Data Transfer** - Data is now encrypted, and the client and server communicate securely.

### Key Concepts in HTTP & HTTPS
- **HTTP Methods** :
	- GET: Retrieves data from the server.
	- POST: Sends data to the server to create a resource.
	- PUT: Updates an existing resource on the server.
	- DELETE: Removes a resource from the server.
- **Request Headers** - HTTP headers sent by the client provide additional information about the request, such as User-Agent (browser information), Content-Type (format of the data being sent), and Authorization (authentication credentials).
- **Response Headers** - HTTP headers sent by the server provide metadata about the response, such as Content-Type (the type of data being returned) and Set-Cookie (to set cookies).
- **SSL/TLS Certificates** - Digital certificates issued by a Certificate Authority (CA) that authenticate the identity of a website and enable secure communications.
- **Certificate Authorities (CAs)** - Trusted organizations that issue digital certificates for websites, ensuring that the site is legitimate and secure.

### How HTTPS Works Compared to HTTP
1.	**Insecure HTTP** - 
	- Data sent over HTTP is not encrypted and can be intercepted or altered by third parties (e.g., man-in-the-middle attacks).
2.	**Secure HTTPS** - 
	- HTTPS uses SSL/TLS encryption to protect the data, ensuring confidentiality and integrity during transmission. 
	- Additionally, HTTPS verifies the identity of the server to prevent impersonation.
- **Example of an HTTPS Request** -
	1.	**Client → Server** - The client (browser) sends a request using HTTPS.
		```javascript
			GET /index.html HTTP/1.1
        	Host: www.example.com
		```
	2.	**Server → Client** - The server responds with the requested resource and encrypts the data using SSL/TLS.
		```javascript
		HTTP/1.1 200 OK
		Content-Type: text/html
		Content-Length: 1234

		<html>...encrypted content...</html>
		```