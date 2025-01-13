# Web Warriors (All about Internet)

## Internet Working
### 1. Start with the Basics
- 1.1. **What is an IP Address?**
	- **What is an IP address, and why is it important?**
	- **What is the difference between public and private IP addresses?**

- 1.2. **What is a Domain Name System (DNS)?**
	- **What is the purpose of DNS?**
	- **How does DNS resolve domain names to IP addresses?**
    - **What happens when DNS fails (DNS caching and fallback)?**

- 1.3. **What is a URL?**
	- **What are the components of a URL (protocol, domain, path, query, fragment)?**
	- **How does a browser process a URL?**

- 1.4. **What is a Server?**
	- **What are the types of servers (web, mail, database)?**
	- **How do servers handle client requests?**

- 1.5. **What is a Client?**
	- **What is the role of a client in the Internet?**

- 1.6. **What are Packets?**
	- **Why is data broken into packets?**
	- **What happens when a packet is lost or corrupted?**

- 1.7. **What are Protocols?**
	- **What are protocols, and why are they necessary?**
	- **Key protocols: HTTP, HTTPS, TCP/IP.**

- 1.8. **What is a Router?**
	- **What is the role of a router in data transmission?**

- 1.9. **What is a Modem?**
	- **How does a modem connect a local network to an ISP?**
	- **What are the differences between a modem and a router?**

- 1.10. **What is an ISP (Internet Service Provider)?**
	- **What services do ISPs provide?**

### Core Internet Concepts
- 2.1. **What is HTTP/HTTPS?**
	- **How does HTTP work?**
	- **What is HTTPS, and how does it provide security (TLS/SSL)?**

- 2.2. **What is Caching?**
	- **What types of caching exist (browser caching, server caching, CDN)?**
	- **How does caching improve performance?**

- 2.3. **What is Web Browsing?**
	- **How do browsers fetch and display web pages?**
	- **What is the browser’s rendering engine?**

- 2.4. **What is Cloud Computing?**
	- **How does cloud computing work?**
	- **What are the types of cloud services (IaaS, PaaS, SaaS)?**

- 2.5. **What is a CDN (Content Delivery Network)?**
	- **How do CDNs reduce latency?**
	- **What is the role of edge servers in CDNs?**

### Deeper Layers of the Internet
- 3.1. **Protocol Layer**
	- **What is the TCP/IP model, and how do its layers function?**
	- **How do TCP and UDP differ?**

- 3.2. **Application Layer**
	- **How do web applications communicate using APIs?**

- 3.3. **Domain Name System (DNS)**
	- **How does DNS caching work?**

### Advanced Topics
- 4.1. **Security**
	- **What is encryption, and how does it protect data?**
	- **What are TLS/SSL certificates?**
	- **What are common threats (e.g., DDoS attacks, phishing)?**

- 4.2. **Data Transmission**
	- **What are latency, bandwidth, and throughput?**

- 4.3. **Internet Governance**
	- **Who controls the Internet (ICANN, IETF)?**

- 4.4. **The Role of CDNs**
	- **How do CDNs handle content delivery?**

### The Evolution of the Internet
- 5.1. **History of the Internet**
	- **How did ARPANET evolve into the modern Internet?**
	- **What are the key milestones in Internet history?**

- 5.2. **Modern Developments**
	- **How does 5G impact Internet usage?**
	- **What is IoT (Internet of Things)?**


## 2. DNS Magic and Internals
### Understand the Basics of Networking
- 1.1.	**What is an IP Address?**
	- **What is IPv4?**
	- **What is IPv6?**
	- **Why do we need IP addresses?**

- 1.2.	**What is a Domain Name?**
	- **How does a domain name map to an IP address?**
	- **Why use domain names instead of IP addresses?**

- 1.3.	**What is a Protocol?**
	- **What are TCP and UDP, and how are they used in DNS?**
	- **What are the differences between TCP and UDP?**

### Understand DNS Basics
- 2.1.	**What is DNS?**
	- **Why is DNS called the “phonebook of the internet”?**
	- **How does DNS fit into the overall structure of the internet?**

- 2.2.	**What are DNS Records?**
	- **What are the different types of DNS records (A, AAAA, MX, CNAME, TXT, etc.)?**
	- **How are these records used in practice?**
    
- 2.3.	**What is a DNS Resolver?**
	- **What is the difference between a recursive resolver and an authoritative nameserver?**
	- **What role does the resolver play in DNS lookups?**

### Learn Key Internet Concepts
- 3.1.	**What is the Client-Server Model?**
	- **How do clients (like browsers) communicate with servers?**
	- **How does DNS fit into the client-server model?**

- 3.2.	**What is HTTP/HTTPS?**
	- **How does HTTP differ from HTTPS?**
	- **Why is HTTPS important?**

- 3.3.	**What is URL Structure?**
	- **What are the components of a URL (protocol, domain, path, query string)?**
	- **How does a URL map to a DNS query?**

### Learn DNS Internals
- 4.1.	**What is Time-to-Live (TTL)?**
	- **What happens when TTL expires?**
	- **How does TTL affect DNS caching and propagation?**
- 4.2.	**What is Caching?**
	- **What are the levels of DNS caching (browser, OS, ISP, recursive resolvers)?**
	- **How does caching improve performance and reduce latency?**
- 4.3.	**What is DNS Hierarchy?**
	- **What are root servers?**
	- **What are TLD (Top-Level Domain) servers?**
	- **What are authoritative nameservers?**
- 4.4.	**What are the two types of DNS Queries?**
	- **What is a recursive query?**
	- **What is an iterative query?**

### Dive Deeper into DNS Magic and Internals
- 5.1.	**What is DNS Resolution Process?**
	- **How does a domain name get resolved step by step?**
	- **What happens during recursive and iterative resolution?**
- 5.2.	**What is DNS Caching?**
	- **How does DNS caching work at different levels?**
	- **What happens if a DNS cache is stale or incorrect?**
- 5.3.	**What is DNS Security?**
	- **What is DNS spoofing or cache poisoning?**
	- **How does DNSSEC work to secure DNS?**
- 5.4.	**What is Load Balancing with DNS?**
	- **What is round-robin DNS?**
	- **How does GeoDNS work for distributing traffic?**
- 5.5.	**What is CDN and DNS?**
	- **How do CDNs use DNS to serve content faster?**
	- **What is the role of DNS in reducing latency for CDNs?**
- 5.6.	**What is DNS Propagation?**
	- **What causes propagation delays?**
	- **How can propagation delays be minimized?**
- 5.7.	**What is Anycast DNS?**
	- **How does Anycast DNS route users to the nearest server?**
	- **Why is Anycast important for DNS performance?**
- 5.8.	**What is DNS Over HTTPS (DoH)?**
	- **How does DoH secure DNS queries?**
	- **What are the advantages and disadvantages of DoH?**
- 5.9.	**What is DNS Over TLS (DoT)?**
	- **How is DoT different from DoH?**
	- **How does DoT enhance privacy and security?**

## 3. Server-Client Architecture
### Foundational Terms to Know (Before diving into Server-Client Architecture)
- 1.1	**What is an IP Address?**
	- **What is the role of an IP address in networking?**
	- **What is the difference between IPv4 and IPv6?**
- 1.2.	**What is a Port?**
	- **Why do we use ports in networking?**
	- **What is the difference between well-known ports, registered ports, and dynamic/private ports?**
- 1.3.	**What is a Protocol?**
	- **What role do protocols play in communication between devices?**
	- **What are common types of protocols in networking?**
- 1.4.	**What is HTTP Protocol?**
	- **How does HTTP work in the context of the web?**
	- **How is HTTP different from other protocols (e.g., FTP, SMTP)?**
- 1.5.	**What is TCP/IP Protocol?**
	- **How does TCP/IP help in communication between devices over the internet?**
	- **What is the difference between TCP and UDP?**
- 1.6.	**What is HTTP Request & Response?**
    - **What are the components of an HTTP request (e.g., method, headers, body)?**
	- **What are the components of an HTTP response (e.g., status code, headers, body)?**
- 1.7.	**What is a URL?**
	- **What is the structure of a URL (e.g., scheme, domain, path, query)?**
	- **How does a browser use a URL to access resources on a server?**
- 1.8.	**What are Status Codes?**
	- **What are the most common HTTP status codes (e.g., 200, 404, 500)?**
	- **What does each status code signify in terms of request and response?**
- 1.9.	**What is a Browser?**
	- **How does a browser communicate with the server using HTTP?**
	- **What is the browser’s role in the client-server architecture?**
- 1.10.	**What is a Web Server?**
	- **What does a web server do in response to client requests?**
	- **How does a server process HTTP requests and send back responses?**
- 1.11.	**What is Request-Response Cycle?**
	- **How does the client send requests and receive responses from the server?**
	- **What happens inside a server when it receives a request from the client?**
- 1.12.	**What is REST (Representational State Transfer)?**
	- **What principles define RESTful architecture?**
	- **What is the role of REST in client-server communication?**
### Key Topics Inside Server-Client Architecture (To gain a deep understanding)
- 2.1.	**What is the Client-Server Model?**
	- **How does the client-server architecture work in a simple client-server interaction?**
	- **What are the advantages of using this model?**
- 2.2.	**What is the Role of the Server?**
	- **What does a server do when it receives a client request?**
	- **How does the server interact with databases or other systems to generate responses?**
- 2.3.	**What is the Role of the Client?**
	- **What does the client do in a client-server interaction?**
	- **How does the client initiate requests, and how does it display the response to the user?**
- 2.4.	**What are HTTP Methods?**
	- **What are the most common HTTP methods used in the client-server architecture (GET, POST, PUT, DELETE)?**
	- **What role does each method play in the request-response cycle?**
- 2.5.	**What is Request and Response Structure?**
	- **What are the different parts of an HTTP request (headers, body, query parameters)?**
	- **What does an HTTP response consist of (headers, body, status code)?**
	- **How are data (like HTML, JSON, images) embedded in responses?**
- 2.6.	**What is Stateless Communication?**
	- **What does “stateless” mean in the context of HTTP?**
	- **Why is HTTP considered a stateless protocol?**
	- **How does stateless communication affect the server-client interaction?**
- 2.7.	**What is Stateful Communication?**
	- **What does “stateful” communication mean?**
	- **How do servers maintain state between requests (e.g., sessions, cookies)?**
	- **How does stateful communication differ from stateless?**
- 2.8.	**What are Some Types of Servers?**
	- **What are the different types of servers involved in the client-server model (Web Server, Application Server, Database Server)?**
	- **How do these servers interact with one another in a full-stack architecture?**
- 2.9.	**What is Web Security?**
	- **What is the importance of securing the communication between client and server?**
	- **What is HTTPS, and how does it work?**
	- **What are common web security threats (e.g., SQL Injection, Cross-Site Scripting)?**
- 2.10.	**What are Two Caching Mechanisms?**
	- **What is Client-Side Caching (e.g., browser caching, local storage)?**
	- **What is Server-Side Caching (e.g., caching with Redis, database query caching)?**
	- **How do both caching mechanisms improve performance in server-client interactions?1.	What is the Client-Server Model?**
	- **How does the client-server architecture work in a simple client-server interaction?**
	- **What are the advantages of using this model?**

## 4. Internet Protocols
- 1.1. **What is a Protocol?**
    - **What does a protocol mean in the context of networking and communication?**
    - **How do they help different devices communicate effectively?**
    - **What are the key features of a protocol (syntax, semantics, timing)?**
- 1.2. **What is the OSI Model?**
    - **What are the 7 layers in the OSI model, and what does each layer do?**
    - **How does the OSI model help in understanding network communication and protocols?**
    - **How does the OSI model differ from the TCP/IP model? Which one is more commonly used today?**
- 1.3. **What are the Types of Protocols?**
    - **What are the different types of protocols?**
    - **What are some Common Types of Protocols ?**
- 1.4. **What is the Internet Protocol Suite (TCP/IP)?**
    - **What is the TCP/IP model, and how does it map to the OSI model?**
    - **What is the role of the Internet Protocol in addressing and routing?**
    - **What is TCP, and how does it ensure reliable data delivery?**
    - **How does UDP differ from TCP in terms of reliability and speed?**
    - **How do TCP and IP work together to make the internet function?**
- 1.5. **What are Some Most Important Application Layer Protocols?**
    - **How does HTTP work, and why is it the foundation of web communication?**
    - **What is the difference between HTTP and HTTPS, and why is security important in web communication?**
    - **How does FTP work for transferring files over the network?**
    - **How is SMTP used in email communication?**
    - **How does DNS resolve domain names into IP addresses?**
    - **What are POP3 and IMAP, and how do they function in email retrieval?**
- 1.6. **What are Some Most Important Transport Layer Protocols?**
    - **How does TCP ensure reliable communication? What is flow control and error handling in TCP?**
    - **What are the pros and cons of using UDP, and in which scenarios is it ideal?**
    - **How do port numbers function in the transport layer to direct traffic?**
- 1.7. **What are Some Most Important Routing Protocols?**
    - **What’s the difference between static and dynamic routing?**
    - **How does RIP work, and what are its limitations?**
    - **How does OSPF work to route data within large networks?**
    - **What is BGP, and why is it crucial for routing between different networks on the internet?**
- 1.8. **What is Addressing and Name Resolution?**
    - **What is an IP address, and what are the differences between IPv4 and IPv6?**
    - **How does subnetting work, and why is it important for efficient use of IP addresses?**
    - **What is a MAC address, and how is it different from an IP address?**
    - **How does DNS work to map domain names to IP addresses?**
    - **How does DHCP automatically assign IP addresses to devices on a network?**
- 1.9. **What are Some Most Important Security Protocols?**
    - **How do SSL/TLS protocols ensure secure communication over the web?**
    - **How does HTTPS use SSL/TLS to encrypt data between the client and server?**
    - **How does a VPN work to securely connect users to a remote network over the internet?**
    - **What is IPSec, and how does it provide security at the network layer?**
    - **How do firewalls work to filter traffic, and what is the role of NAT in securing a network?**

## 5. TCP/IP
- 1.1. **What is TCP/IP Model?**
    - **What are the layers of the TCP/IP model?**
    - **What does each layer do?**
    - **How does the TCP/IP model compare to the OSI model?**
    - **Why is the TCP/IP model important?**
    - **What are the roles of the different layers in networking?**
    - **How does each layer communicate with the others?**
    - **What are the protocols used in each layer of the TCP/IP model?**
    - **Which protocols are found in the Application layer?**
    - **Which protocols are found in the Transport layer?**
	- **What protocols are part of the Internet layer?**
	- **Which protocols are involved in the Link layer?**
- 1.2. **What is TCP ?**
    - **What are the main functions of TCP?**
    - **How does TCP ensure reliable communication?**
	- **How does TCP achieve ordered delivery of packets?**
	- **How does the Three-Way Handshake work?**
	- **What is SYN (synchronize), SYN-ACK, and ACK?**
	- **Why is the Three-Way Handshake needed in TCP?**
	- **What are the key features of TCP?**
	- **What are the TCP segments and their structure?**
	- **What is the TCP header?**
	- **What fields are in the TCP header (source port, destination port, sequence number, etc.)?**
	- **How does TCP handle retransmission of lost packets?**
    - **What is TCP’s acknowledgment mechanism?**
- 1.3. **What is IP ?**
	- **What is the role of IP in networking?**
	- **How does IP address a device?**
	- **What is the difference between IPv4 and IPv6?**
	- **How are IP addresses structured?**
	- **What are the parts of an IP address?**
	- **What is subnetting and how does it work?**
	- **What is a subnet mask and how does it relate to an IP address?**
	- **What is the purpose of Routing in IP?**
	- **How do routers use routing tables to forward packets?**
	- **What is the difference between static and dynamic routing?**
	- **How does IP handle packet fragmentation and reassembly?**
	- **What are the key components of an IP packet?**
	- **What is the IP header?**
	- **What fields are in the IP header (source IP, destination IP, TTL, protocol, etc.)?**
	- **What is NAT (Network Address Translation)?**
	- **How does NAT work and why is it important in modern networking?**

## 6. UDP (User Datagram Protocol)
- 1.1. **What is UDP Protocol ?**
    - **What layer does UDP operate in the OSI model?**
    - **What does “connectionless” mean in UDP?**
    - **How does data transmission happen in UDP?**
    - **What are the main characteristics of UDP?**
- 1.2. **Difference between TCP and UDP.**
    - **What are the core differences between TCP and UDP?**
    - **Why is UDP faster than TCP?**
    - **When is UDP preferred over TCP?**
    - **What are the trade-offs when using UDP?**
    - **How does UDP work in streaming (Video/Audio)?**
    - **How is UDP used in VoIP (Voice over IP)?**
    - **Why is UDP considered insecure?**

## 7. TCP Handshakes and 3-Way Handshakes
- 1.1. **What is a Handshake?**
- 1.2. **What is the purpose of Handshake?**
- 1.3. **What is the 3-Way Handshake?**
- 1.4. **Why is a 3-Way Handshake Needed?**
- 1.5. **What Happens After the 3-Way Handshake?**
- 1.6. **How to close a connection ?**

## 8. HTTP & HTTPS Protocols
- 1.1. **What is HTTP Terminology ?**
    - **What is URL?**
	- **What does a URL consist of? (protocol, domain, path, query parameters)**
	- **How does a browser resolve a URL to an IP address?**
	- **What is HTTP Request Methods?**
    - **What are the common HTTP methods (GET, POST, PUT, DELETE, etc.)?**
	- **When should each method be used?**
	- **What is HTTP Headers?**
	- **What are headers in an HTTP request/response?**
	- **How headers influence the behavior of HTTP requests/responses?**
	- **What is HTTP Status Codes?**
	- **What do status codes mean?**
	- **How are status codes categorized (e.g., 1xx, 2xx, 3xx, 4xx, 5xx)?**
- 1.2. **What are these Security Concepts ?**
	- **What is Encryption?**
	- **What is the purpose of encryption in web communication?**
	- **How does encryption protect sensitive data?**
	- **Difference between symmetric and asymmetric encryption.**
	- **What are encryption algorithms (e.g., AES, RSA)?**
	- **What is SSL/TLS?**
	- **What is the role of SSL and TLS in securing communication?**
	- **What is the SSL/TLS handshake process?**
	- **How SSL/TLS certificates work and the role of public/private keys?**
- 1.3. **How many versions of HTTP are there ?**
- 1.4. **What is the difference between each versions of HTTP ?**
- 1.5. **What is the difference between HTTP and HTTPS ?**