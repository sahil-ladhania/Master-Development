/*

1. What is a Database ?
* Structured collection of data that is organized to be easily accessed, managed, and updated. Acts as a central storage system for applications, allowing efficient data retrieval and manipulation.

2. Why use Database for saving the data and Why not save user in-memory ?
* Storing data in memory is bad for few reasons and that is why we need Central Database :-
Data can’t be dynamic :
When data is stored in memory, it becomes volatile. Any updates or changes made to in-memory objects are temporary and get lost if the process restarts. In a real-world application, this limitation is significant because processes may restart due to various reasons, such as server maintenance, deployments, or unexpected crashes. As a result, any dynamically updated information will be lost, leading to inconsistencies and potential data loss.
Example - Imagine an application that keeps track of user sessions or preferences. If this data is only stored in memory and the server restarts, all the user-related information would be reset, impacting the user experience.
There are multiple servers in the real world :
In a real-world application, especially those handling a significant user load or operating across multiple servers, relying solely on in-memory storage is impractical. Multiple servers may be used to distribute the load, enhance performance, and ensure high availability. When data is confined to the memory of a single server, it becomes challenging to maintain consistency and share data across the entire application infrastructure.
Example - Consider an e-commerce platform with multiple servers handling user requests. If each server maintains its own set of in-memory data, it becomes challenging to synchronize and share information seamlessly across all servers, leading to potential discrepancies in the displayed data.
Summary - Using databases, not just memory, is vital for strong, scalable apps. They ensure lasting, shared data across servers, maintaining consistency even after restarts.

3. What is the Basic Architecture of Full Stack App ?
* User hits the Backend.
* Backend hits the Database.
* User doesn’t have access to the database/can’t talk to the Database.

4. What are the types of Database ?
* Graph DB : 
Specialize in representing and navigating relationships between entities, making them ideal for applications emphasizing connected data. 
UseCase - Social networks, recommendation engines.
Example - Neo4j
* Vector DB :
Efficiently handle multidimensional and spatial relationships, particularly suited for applications dealing with spatial data. 
UseCase - Monitoring, IoT.
Example - InfluxDB(for time-series data)
* SQL DB :
Follow a structured query language, maintaining a tabular structure for organized data storage, retrieval, and manipulation. 
UseCase - Traditional relational data.
Example: PostgreSQL , MySQL
* NoSQL DB :
Offer flexibility in data modeling and are suitable for applications with evolving and diverse data needs. 
UseCase - Unstructured or semi-structured data.
Example: MongoDB

5. Intro to MongoDB ?
* MongoDB is a powerful and versatile NoSQL database that revolutionizes data management with its flexible and scalable design. Here's a breakdown of its key features.
* Database Creation : MongoDB allows users to create multiple databases, acting as distinct containers for organizing and storing data.
* Collection Creation : Within each database, collections serve as the equivalent of tables in relational databases. Collections provide a structured way to group and manage related documents.
* JSON Data Storage : MongoDB adopts a document-oriented data model, storing information in BSON (Binary JSON) format. This facilitates the storage of JSON-like documents in a flexible and readable manner.
* Schemaless Design : Unlike traditional relational databases, MongoDB is schemaless. This means documents within a collection can have varying structures, enabling easy adaptation to changing data requirements without rigid schema constraints.
* Scalability : MongoDB is designed for horizontal scalability, allowing for the distribution of data across multiple servers or clusters. This horizontal scaling ensures optimal performance as data volumes and user loads increase.
* Versatility for Most Use Cases : MongoDB's adaptability makes it a reliable choice for a diverse range of use cases. Whether handling complex data structures or large datasets, MongoDB can efficiently meet the demands of various applications.
* Summary - In essence, MongoDB provides a dynamic and scalable solution for modern data storage needs. Its schemaless design, JSON-based documents, and horizontal scalability make it well-suited for applications where flexibility, scalability, and diverse data types are crucial.

6. How does the Backend Connect to the Database ?
* It does so by Express, JWT and Mongoose Libraries.
* Express :
Role - Creates an HTTP server to handle requests and responses.
Connection to Database - While Express itself doesn't directly connect to the database, it provides a framework for building the server. Endpoints/routes within Express handle requests, and these routes may involve interactions with the database using other libraries like Mongoose.
* JWT Library : 
Role - Allows the creation and verification of JSON Web Tokens (JWT).
Connection to Database - Typically, JWTs are used for authentication. Once a user is authenticated, the backend can include a JWT in the response. This token can be sent by the client in subsequent requests, allowing the backend to identify and authorize the user without the need to store session information on the server.
* Mongoose :
Role - An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a structured way to interact with MongoDB.
Connection to Database - Mongoose simplifies the process of connecting to MongoDB. It allows defining models, schemas, and provides methods for CRUD (Create, Read, Update, Delete) operations. The connection to the MongoDB database is established using Mongoose, providing a higher-level abstraction for working with MongoDB.
* Summary - Express sets up the server, JWT helps with user authentication, and Mongoose facilitates interaction with the MongoDB database. Together, these libraries form a robust backend infrastructure for handling HTTP requests, securing routes, and managing data in the database.

7. What is Mongoose ?
* Object Data Modeling (ODM) library for MongoDB and Node.js.
* It provides a higher-level, schema-based abstraction over the MongoDB JavaScript driver.
* Mongoose acts as a powerful bridge between Node.js applications and MongoDB databases.
* It streamlines the data modeling process, simplifies interactions with the database, and enhances the overall development experience when working with MongoDB in a Node.js environment.

8. Why dont we let the user hit the Database Directly ?
* Direct database access poses security risks and lacks control. The backend acts as a gatekeeper, validating requests, ensuring data integrity, and applying business logic.

9. What extra does the HTTP Server provide exactly ?
* The HTTP server handles client-server communication. It receives requests from the frontend, processes them, interacts with the database, and sends back responses. It manages the flow of data between the client and the server.

10. What is CRUD in Database ?
* Create: Inserting new data.
* Read: Retrieving data.
* Update: Modifying existing data.
* Delete: Removing data.

11. What are the 3 Jargons to know in Database ?
* Cluster - Group of servers working together to ensure high availability and performance.
* Database - The main storage unit for data.
* Table - A structured representation of data, consisting of rows and columns.

*/