# Advance Topics to Read About

## **1. Distributed Systems**
* Distributed System matlab ek aisa system jahan kaam karne wale parts (servers/computers) multiple jagah pe hote hain, lekin end user ko lagta hai ki sab kuch ek hi jagah se ho raha hai.
* Jaise ki Google, Amazon, Facebook – inka data aur logic ek server pe nahi, multiple servers pe spread hota hai – toh agar ek server fail bhi ho jaye, toh system still works.

- **Microservices Architecture**
    * System ko chhote-chhote independent services mein tod dete hain.
	* Har service ek specific kaam karti hai (auth service, payment service, order service etc.)
	* Example: Swiggy – alag service for search, cart, restaurant listing, delivery etc.

- **Monolithic vs. Microservices**
    * Monolith: Sab kuch ek hi application ke andar. Easy to build, hard to scale.
	* Microservices: Divide and conquer – easier to scale, deploy, maintain.
	* Example: Early stage startup -> monolith, Scaling app like Flipkart -> microservices

- **Service Discovery (e.g., Consul, Eureka)**
    * Jab microservices zyada ho jaate hain, toh kisi ko kisi ka address kaise mile?
	* Service Discovery tools help identify and locate services dynamically.
	* Example: Netflix uses Eureka to discover microservices.

- **Inter-service Communication (REST, gRPC, Message Queues)**
	* Services ek doosre se kaise baat karein?
	    * REST API (HTTP based)
	    * gRPC (faster, Protocol Buffers)
	    * MQ (Kafka, RabbitMQ) – for async communication.
	* Example: Order service RabbitMQ se payment service ko message bhejta hai.

- **Load Balancing Strategies**
    * Load balancing ensures ki traffic evenly distribute ho across multiple servers.
	* Strategies:
	    * Round Robin
	    * Least Connections
	    * IP Hash
	* Example: Cloudflare or AWS Load Balancers do this behind the scenes.

- **Circuit Breaker Patterns (e.g., Resilience4j, Hystrix)**
    * Agar ek service down hai, toh baaki services ka wait karna galat hoga.
	* Circuit breaker bolta hai – “bhai ye service abhi kaam nahi kar rahi, fallback use karo”.
	* Example: Netflix uses Hystrix to avoid cascading failures.

- **Saga Patterns for Transactions (Choreography vs. Orchestration)**
    * Multi-service transactions kaise handle karein?
	    * Choreography: Services independently react to events.
	    * Orchestration: Central coordinator controls flow.
	* Example: Flipkart order placement: inventory, payment, shipping – all involved.

- **Service Mesh (e.g., Istio, Linkerd)**
    * Network-level logic (traffic control, security, retries) ko services ke bahar handle karta hai.
	* Istio jaise tools service ke beech proxy lagate hain.
	* Example: Istio is used by enterprises for secure communication and monitoring between services.

- **CAP Theorem**
    * Consistency, Availability, Partition Tolerance – out of these, system can only guarantee any 2.
	* Real-life: You have to pick trade-offs.
	* Example: MongoDB is CP, Cassandra is AP.

- **Trade-offs in distributed systems**
    * High availability vs consistency
	* Real-time vs eventual accuracy
	* Speed vs Reliability
	* Example: Instagram comments may take time to show on all devices (eventual consistency)

- **Examples of CP, AP, and CA systems**
    * CP: MongoDB – consistent and partition tolerant
	* AP: Cassandra – available and partition tolerant
	* CA: Only in ideal world without network failures – mostly not practical

- **Eventual Consistency**
    * Sab nodes ek hi value ko final mein maan lenge, but thoda delay ho sakta hai.
	* Example: WhatsApp “Last Seen” may update after some delay on your friend’s device.

- **Event sourcing**
    * Poore system ka record events ke form mein store hota hai.
	* Rather than just final data, we store every change.
	* Example: Git – every commit is an event.

- **Conflict resolution strategies**
    * Jab same data ko 2 alag services ne update kiya – kaun jeetega?
	* Last-write-wins, merge logic, manual resolution.
	* Example: Google Docs manages real-time edits by multiple users.

- **Use cases (e.g., DynamoDB)**
    * Amazon ka NoSQL DB – eventual consistency, replication, conflict resolution ka best example.
	* Behind the scenes, many distributed system concepts are applied.

- **Sharding and Replication**
    * Sharding: Data ko parts mein todna (horizontal scaling)
	* Replication: Ek hi data ka multiple copy banana (redundancy & availability)
	* Example: Facebook stores user data via sharding, replicates it globally.

- **Data partitioning techniques**
    * Range-based, List-based, Hash-based
	* Example: Redis uses hash-based partitioning.

- **Master-slave vs. Master-master replication**
    * Master-Slave: Only one writer, rest readers (easy, less conflicts)
	* Master-Master: Multiple writers – complex but powerful
	* Example: MySQL supports both with configuration.

- **Consensus Algorithms**
    * Multiple nodes agreement kaise karein?
	* Used in distributed databases, blockchain, etc.
    - **Raft Algorithm** : 
        * Leader election + log replication
	    * Simpler and more understandable than Paxos
    - **Paxos Algorithm** : 
        •	Theoretical, complex, used in Google systems (like Chubby lock service)
    - **Leader election** : 
        •	Important to have one leader to take final decision in distributed system.
    	•	Example: Kubernetes controller manager selects one active leader in HA setup.

## **2. API Design and Optimization**
* API (Application Programming Interface) ek bridge hai frontend aur backend ke beech. 
* Jaise ki agar frontend bolta hai “mujhe user ka data chahiye”, toh API woh request backend tak le jaati hai, process karwati hai, aur response wapas frontend ko deti hai.

* **Good API design means** :
	* Fast
	* Secure
	* Predictable
	* Scalable

- **RESTful API Best Practices**
	* Use nouns for endpoints: /users, /products
	* Use HTTP verbs: GET, POST, PUT, DELETE
	* Status codes properly return karo (200, 201, 404, 500)
	* Keep it stateless – har request independent honi chahiye
	* Example:
		`GET /users/101 → fetch user 101`
		`POST /products → add a product`

- **Versioning APIs**
	* Jab API change hoti hai, purane users break na hoon isliye versioning karte hain
	* Common way: /api/v1/products
	* Real-Life Example: Stripe and Razorpay use v1, v2, v3 etc.

- **Pagination and Filtering**
	* Jab large data ho, toh pura bhejna waste hai.
	* Use pagination:
		* GET /users?page=2&limit=10
	* Filtering:
		* GET /orders?status=completed
	*  Example: Admin dashboard for orders will paginate and filter thousands of entries.

- **Error handling and status codes**
	* Return meaningful errors:
		* 400 – Bad request
		* 401 – Unauthorized
		* 403 – Forbidden
		* 404 – Not Found
		* 500 – Server Error
	* Send proper error message in JSON.
	```json
	{
  		"error": "Product not found",
  		"code": 404
	}
	```

- **Securing APIs (OAuth, API Keys)**
	* API Keys – for internal/external apps (e.g., Google Maps)
	* OAuth 2.0 – for user auth (Google login, GitHub login)
	* Access Tokens – temporary permission to access something
	* Example: YouTube API requires API Key, Google Sign-in uses OAuth.

- **GraphQL**
	* Query language for APIs – ek request mein jo chahiye wahi milega
	* Frontend decides what it needs – more flexibility
	* Ek endpoint: /graphql
	* Example: GitHub GraphQL API lets you fetch user, repos, followers in 1 go

- **Query and Mutation basics**
	* Query → read data
	* Mutation → write/update/delete data
	```javascript
		query {
  			user(id: 101) {
    			name
    			email
  			}
		}
	```

- **Resolvers and Schema Design**
	* GraphQL backend pe resolvers hota hai – jo decide karte hai query/mutation ka logic
	* Schema defines what data is allowed
	* React with Apollo Client + Node.js GraphQL server → common stack

- **Subscriptions for real-time data**
	* GraphQL ka ek powerful feature – real-time updates (like sockets)
	* Use case: live chat, stock price updates
	* Example: Slack or chat apps using GraphQL subscriptions

- **gRPC**
	* Alternative to REST, faster & efficient
	* Uses Protocol Buffers instead of JSON (binary format)
	* Works best in internal service-to-service communication

- **Protocol Buffers**
	* Define schema in .proto files
	* Compile into code for multiple languages (Java, Go, Python, etc.)
	* Example: Google uses gRPC internally for communication between services.

- **gRPC vs REST**

| **Feature**         | **REST**          | **gRPC**              |
|---------------------|-------------------|------------------------|
| **Format**          | JSON              | Protobuf (binary)      |
| **Speed**           | Slower            | Faster                 |
| **Browser Friendly**| Yes               | No (needs proxy)       |
| **Streaming Support** | Limited         | Native                 |

- **Streaming in gRPC**
	* gRPC supports bidirectional streaming
	* Real-time data push like chats, notifications
	* Example: Video conferencing apps like Google Meet use gRPC streaming.

- **API Rate Limiting**
	* Prevent abuse or overloading server
	* Limit requests per minute/hour/user
	* Example :
	```javascript
		Limit: 100 requests/minute per IP
	```

- **Token bucket and leaky bucket algorithms**
	* Token Bucket: Tokens add hote hain, har request ek token use karti hai
	* Leaky Bucket: Requests enter a queue and leak at a fixed rate
	* Used by APIs to prevent burst traffic

- **Tools for rate limiting (e.g., Redis)**
	* Redis used to store request counts temporarily (fast in-memory store)
	* Libraries like express-rate-limit use Redis for distributed APIs

- **HATEOAS**
	* Hypermedia as the engine of application state
	* API gives links to next possible actions
	```javascript
		{
		"user": "Sahil",
		"links": [
			{ "rel": "self", "href": "/users/101" },
			{ "rel": "orders", "href": "/users/101/orders" }
		]
		}
	```
	* Helps clients explore the API without documentation

- **Hypermedia concepts** -
	* Data ke response ke saath links provide karte ho (next actions).
	* Client ko documentation dekhni ki zarurat nahi padti.
	* Ye HATEOAS ka main idea hai.

- **Designing discoverable APIs** -
	* API aise design karo ki client khud samajh jaye next step kya hai.
	* Responses mein links, metadata, and available actions dekar API ko self-explanatory banao.
	* Helpful in dynamic clients (like SPAs or mobile apps).

## **3. Caching Strategies**
* Cache = Temporary memory to store frequently accessed data taaki har baar database ya server se na manga pade.
* Jaise Zomato app open karte hi popular restaurants dikh jaate hain → wo data pehle se cache me pada hota hai.

- **Cache Invalidation**
* Jab data update hota hai, old cache ko remove/refresh karna padta hai.
* Types -
	* Write Invalidate (delete cache)
	* Write Update (update cache)
	* Time-based Expiry (TTL)

- **Write-through, Write-behind, and Cache-aside strategies**
	* Write-through - Data DB aur cache dono mein ek saath likha jata hai
	* Write-behind - Pehle cache mein likho, baad mein DB update karo (async)
	* Cache-aside - Pehle cache check karo, nahi mila toh DB se lo aur cache mein daal do
	* Real-Life - Redis mostly cache-aside use karta hai

- **CDN Integration**
	* CDN = Content Delivery Network
	* Static content (images, JS, CSS) ko user ke najdiki servers pe store karna
	* Speeds up website for global users
	* Example: Cloudflare, Akamai
	
- **Edge caching for static content**
- **Cache busting techniques**
- **Distributed Caches**
- **Setting up Redis or Memcached clusters**
- **Data eviction policies (LRU, LFU)**
- **Cache Partitioning**
- **Consistent hashing**
- **Avoiding cache stampedes**

## **4. Asynchronous Processing**
- Task Queues
- Setting up RabbitMQ, Kafka, or BullMQ
- Message delivery guarantees (at least once, at most once, exactly once)
- Worker Pools
- Managing concurrency in background tasks
- Batch Processing
- Partitioning and processing large datasets in chunks
- Event-Driven Architectures
- Event producers and consumers
- Designing pub/sub systems (e.g., Kafka, AWS SNS/SQS)

## **5. Database Optimization and Management**
- Indexing
- Single-column vs. multi-column indexes
- Covering indexes
- Full-text search
- Database Partitioning
- Horizontal vs. vertical partitioning
- Range, List, and Hash partitioning
- Query Optimization
- Understanding query execution plans
- Optimizing JOINs and subqueries
- Data Modeling
- Normalization vs. Denormalization
- Designing schemas for relational and NoSQL databases
- Distributed Databases
- Consistency models (strong, eventual, causal)
- Data distribution strategies
- ACID vs. BASE
- Pros and cons of ACID transactions
- Use cases for BASE systems

## **6. Authentication and Authorization**
- OAuth 2.0 and OpenID Connect
- Access tokens and refresh tokens
- Scopes and permissions
- JWT
- Structure of a JWT
- Token expiration and revocation
- Session Management
- Session persistence (cookies, local storage)
- RBAC
- Designing role hierarchies
- Attribute-Based Access Control (ABAC)
- SSO
- Integrating with identity providers (Google, Azure AD)

## **7. Observability and Monitoring**
- Logging
- Structured vs. unstructured logs
- Log aggregation tools (ELK Stack, Graylog)
- Metrics Collection
- Setting up Prometheus and Grafana
- Key metrics to monitor (CPU, memory, request latency)
- Tracing
- Concepts of spans and traces
- Distributed tracing tools (Jaeger, Zipkin)
- Alerting
- Threshold-based alerts
- Integrating with notification systems (Slack, PagerDuty)
- Chaos Engineering
- Failure injection testing
- Resilience benchmarking tools (Chaos Monkey)

## **8. Fault Tolerance and Resilience**
- Circuit Breakers
- Open, closed, and half-open states
- Libraries like Hystrix, Resilience4j
- Retries and Exponential Backoff
- Retry strategies for transient failures
- Graceful Degradation
- Designing fallback mechanisms
- Dead Letter Queues
- Handling failed messages in queues

## **9. Security**
- Data Encryption
- Symmetric vs. Asymmetric encryption
- TLS/SSL setup
- Rate Limiting and Throttling
- Preventing brute force and DDoS attacks
- CSRF and CORS
- Configuring CORS headers
- CSRF tokens
- SQL Injection and XSS Prevention
- Prepared statements
- Input sanitization techniques
- Secrets Management
- Using Vault or AWS Secrets Manager

## **10. Advanced Networking Concepts**
- Load Balancing
- Layer 4 vs. Layer 7 load balancers
- Sticky sessions
- Reverse Proxy
- Caching and compression at the proxy
- Tools like NGINX, HAProxy
- WebSockets
- Connection lifecycle
- Use cases (e.g., chat apps)
- TCP vs. UDP
- Comparing protocols
- Use cases for UDP (e.g., gaming, video streaming)
- Zero Downtime Deployments
- Blue-green deployment
- Canary releases

## **11. Advanced Architectures**
- Service Mesh
- Managing microservices with Istio or Linkerd
- Traffic shaping and security policies
- Serverless Architectures
- AWS Lambda, Google Cloud Functions
- Cold starts and optimization
- Edge Computing
- Content delivery at the edge
- Use cases for latency-sensitive applications
- Hybrid Cloud
- Challenges of integrating on-premises and cloud systems

## **12. Data Pipelines and ETL**
- Stream Processing
- Setting up Kafka Streams, Apache Flink
- Event-time vs. processing-time semantics
- Batch Processing
- Designing workflows with Apache Airflow
- Data extraction and transformation best practices
- Data Warehousing
- Snowflake vs. BigQuery comparison
- Designing data marts