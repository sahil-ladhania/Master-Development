# Advance Topics to Read About

## 1. Distributed Systems
- Microservices Architecture
- Monolithic vs. Microservices
- Service Discovery (e.g., Consul, Eureka)
- Inter-service Communication (REST, gRPC, Message Queues)
- Load Balancing Strategies
- Circuit Breaker Patterns (e.g., Resilience4j, Hystrix)
- Saga Patterns for Transactions (Choreography vs. Orchestration)
- Service Mesh (e.g., Istio, Linkerd)
- CAP Theorem
- Trade-offs in distributed systems
- Examples of CP, AP, and CA systems
- Eventual Consistency
- Event sourcing
- Conflict resolution strategies
- Use cases (e.g., DynamoDB)
- Sharding and Replication
- Data partitioning techniques
- Master-slave vs. Master-master replication
- Consensus Algorithms
- Raft Algorithm
- Paxos Algorithm
- Leader election

## 2. API Design and Optimization
- RESTful API Best Practices
- Versioning APIs
- Pagination and Filtering
- Error handling and status codes
- Securing APIs (OAuth, API Keys)
- GraphQL
- Query and Mutation basics
- Resolvers and Schema Design
- Subscriptions for real-time data
- gRPC
- Protocol Buffers
- gRPC vs REST
- Streaming in gRPC
- API Rate Limiting
- Token bucket and leaky bucket algorithms
- Tools for rate limiting (e.g., Redis)
- HATEOAS
- Hypermedia concepts
- Designing discoverable APIs

## 3. Caching Strategies
- Cache Invalidation
- Write-through, Write-behind, and Cache-aside strategies
- CDN Integration
- Edge caching for static content
- Cache busting techniques
- Distributed Caches
- Setting up Redis or Memcached clusters
- Data eviction policies (LRU, LFU)
- Cache Partitioning
- Consistent hashing
- Avoiding cache stampedes

## 4. Asynchronous Processing
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

## 5. Database Optimization and Management
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

## 6. Authentication and Authorization
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

## 7. Observability and Monitoring
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

## 8. Fault Tolerance and Resilience
- Circuit Breakers
- Open, closed, and half-open states
- Libraries like Hystrix, Resilience4j
- Retries and Exponential Backoff
- Retry strategies for transient failures
- Graceful Degradation
- Designing fallback mechanisms
- Dead Letter Queues
- Handling failed messages in queues

## 9. Security
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

## 10. Advanced Networking Concepts
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

## 11. Advanced Architectures
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

## 12. Data Pipelines and ETL
- Stream Processing
- Setting up Kafka Streams, Apache Flink
- Event-time vs. processing-time semantics
- Batch Processing
- Designing workflows with Apache Airflow
- Data extraction and transformation best practices
- Data Warehousing
- Snowflake vs. BigQuery comparison
- Designing data marts