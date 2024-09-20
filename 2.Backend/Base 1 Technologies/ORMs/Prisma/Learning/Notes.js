/*

-----Introduction to ORMs-----

1. What are ORMS ?
Explanation :-
* ORM stands for Object-Relational Mapping.
* It is a technique that connects databases (like SQL) with programming languages by mapping database tables to objects.
* It allows you to interact with your database using your programming language’s objects, without writing raw SQL.

2. Why do we even need ORMs ? Cant we directly use express with DB ?
Explanation :-
* Yes, you can use Express with raw SQL queries, but ORMs abstract the database interactions, making it easier to read, write, and maintain code.
* ORMs help manage database connections, migrations, and data consistency.

3. What are the Advantages of ORMs ?
Explanation :-
* Ease of Use - Simplifies CRUD operations.
* Abstraction - No need to write SQL queries manually.
* Cross-DB Support - Works with multiple databases.
* Security - Prevents SQL injection with prepared statements.

4. What are the Disadvantages of ORMs ?
Explanation :-
* Performance Overhead - ORMs can be slower compared to raw SQL.
* Complex Queries - Harder to write highly optimized, complex queries.
* Learning Curve - Requires learning the ORM’s syntax and patterns.

5. What are different types of ORMs ?
Explanation :-
* Active Record (e.g., Sequelize): Models include data access methods directly.
* Data Mapper (e.g., TypeORM): Models are separate from the database, and a mapper is used to translate between them.

6. What is Prisma ?
Explanation :-
* Prisma is a next-generation ORM for Node.js and TypeScript.
* It offers type-safe database access and integrates with SQL and NoSQL databases.

7. What is the need of Prisma ?
Explanation :-
* Type Safety - Helps avoid runtime errors by providing static types.
* Modern Features - Prisma offers advanced tools like migrations, studio, and robust querying options.

8. What is the difference between traditional ORMs and Prisma ?
Explanation :-
* Traditional ORMs focus on wrapping SQL queries and mapping them to objects.
* Prisma is schema-based, focusing on developer experience, scalability, and type safety with strong integration with modern DB tools.

9. How to setup and install Prisma ?
Explanation :-
* Install Prisma using npm install prisma and npm install @prisma/client.
* Initialize Prisma in your project with npx prisma init.
* Define your data model in the prisma/schema.prisma file.

-----Prisma and Databases-----

1. How to connect Prisma to DBs(MySQL and MongoDB) ?
Explanation :-
* MySQL
    In your prisma/schema.prisma, set the datasource block like this -
        datasource db {
            provider = "mysql"
            url      = env("DATABASE_URL")
        }
    Provide the DATABASE_URL in your .env file, such as -
        DATABASE_URL="mysql://user:password@localhost:3306/dbname"
* MongoDB
    Change the provider in the prisma/schema.prisma to -
        datasource db {
            provider = "mongodb"
            url      = env("DATABASE_URL")
        }
    Your MongoDB connection URL in the .env file will look like -
        DATABASE_URL="mongodb+srv://user:password@cluster0.mongodb.net/dbname"

2. What are Prisma Data Models ?
Explanation :-
* Data Models in Prisma are used to define database schemas in a declarative way.
* They describe the tables in your database (or collections for MongoDB).
* Ex -
    model User {
        id    Int     @id @default(autoincrement())
        name  String
        email String  @unique
    }

3. What is Prisma Migration ?
Explanation :-
* Migration is the process of applying changes in your Prisma schema (like adding, removing, or modifying models) to the actual database.
* Use npx prisma migrate dev to create and apply migrations.

4. What is Seeding Data in Prisma ?
Explanation :-
* Seeding means pre-populating your database with data for development or testing purposes.
* You can seed your database by adding a seed script in prisma/seed.ts or seed.js and run it using npx prisma db seed.

5. What is DB Schema in Prisma ?
Explanation :-
* DB Schema in Prisma refers to the structure of your database tables/collections, defined in the schema.prisma file.
* This includes your models, fields, and relationships between models.

6. What are Prisma DB Connectors ?
Explanation :-
* DB Connectors in Prisma are database-specific drivers that enable Prisma to communicate with different databases
* Ex - MySQL, PostgreSQL, MongoDB.
* Prisma supports connectors for both SQL and NoSQL databases.

-----Prisma Client-----

1. What is Prisma Client ?
Explanation :-
* Prisma Client is an auto-generated, type-safe query builder used to interact with your database.
* It is generated based on your Prisma schema and allows you to perform CRUD operations without writing raw SQL.

2. How to do CRUD operations with Prisma Client ?
Explanation :-
* Create -
    Insert a new record.
    Ex -
        const newUser = await prisma.user.create({
            data: { name: "John", email: "john@example.com" }
        });
* Read -
    Fetch records.
    Ex -
        const allUsers = await prisma.user.findMany();
* Update -
    Modify existing records.
    Ex -
        const updatedUser = await prisma.user.update({
            where: { id: 1 },
            data: { name: "John Updated" }
        });
* Delete -
    Remove a record.
    Ex -
        const deletedUser = await prisma.user.delete({
            where: { id: 1 }
        });

3. What are some advanced Prisma Client Features ?
Explanation :-
* Relations -
    Query related data across models.
    Ex -
        const usersWithPosts = await prisma.user.findMany({
            include: { posts: true }
        });
* Filtering -
    Add conditions to your queries.
    Ex -
        const filteredUsers = await prisma.user.findMany({
            where: { age: { gte: 30 } }
        });
* Pagination -
    Fetch limited results.
    Ex -
        const paginatedUsers = await prisma.user.findMany({
            take: 10, -----> limit to 10 users
            skip: 5   -----> skip the first 5 users
        });

4. What is Prisma Client API ?
Explanation :-
* Prisma Client API provides methods to perform database operations, like .findMany(), .create(), .update(), .delete().
* It is strongly typed, so you get type safety and autocompletion based on your schema.

5. What is Error Handeling in Prisma Client ?
Explanation :-
* Prisma uses JavaScript try...catch blocks for error handling.
* Common error types -
	•	PrismaClientKnownRequestError - Known database errors (Ex- constraint violation).
	•	PrismaClientUnknownRequestError - Unexpected database errors.

6. How to do Pagination and Sorting in Prisma Client ?
Explanation :-
* Pagination - Use take and skip options to limit and offset the number of results.
* Sorting - Use orderBy to sort by a field.
* Ex -
    const sortedUsers = await prisma.user.findMany({
        orderBy: { name: 'asc' }
    });

-----Prisma Studio-----

1. What is Prisma Studio ?
Explanation :-
* Prisma Studio is a GUI (Graphical User Interface) for managing and interacting with your database.
* It allows you to view, edit, and delete data in a visual interface rather than running queries manually.

2. How to setup Prisma Studio ?
Explanation :-
* Run npx prisma studio in your terminal after setting up Prisma in your project.
* This command launches Prisma Studio in your browser, connecting to your database automatically.

3. How to Browse and Edit Records in Prisma Studio ?
Explanation :-
* You can easily browse records by selecting a model (like User, Post, etc.) in the left sidebar.
* Edit records by clicking on a field and changing its value. You can also add or delete records directly from the UI.

4. How to run and save queries in Prisma Studio ?
Explanation :-
* Prisma Studio is primarily designed for visual interaction with data, not for writing or saving queries.
* For complex queries, you should use Prisma Client within your code. However, Studio can help you explore data visually and export it if needed.

5. How to view Data Model and Database Schema in Prisma Studio ?
Explanation :-
* Prisma Studio allows you to view the data model as defined in your schema.prisma file.
* You can explore relationships between models and see how they map to the database schema directly in the UI.

6. How to export Data with Prisma Studio ?
Explanation :-
* Prisma Studio doesn’t natively support exporting data as a feature.
* However, you can export data by using Prisma Client within your code or by exporting data manually through your database’s specific export tools (e.g., MySQL Workbench, MongoDB Compass).

-----Prisma and Javascript-----

1. What is the overview of Prisma and JS ?
Explanation :-
* Prisma integrates seamlessly with JavaScript and TypeScript applications, providing a type-safe way to access databases.
* It allows developers to perform CRUD operations efficiently while leveraging JavaScript’s asynchronous capabilities.

2. How to setup Prisma and JS ?
Explanation :-
* Install Prisma with - npm install prisma @prisma/client
* Initialize Prisma - npx prisma init
* Configure your database connection in the prisma/schema.prisma file and define your data models.

3. How to do CRUD operations with Prisma and JS ?
Explanation :-
* Use the same CRUD operations as with the Prisma Client in the earlier section, using async/await syntax in your JavaScript code.

4. How to do Error Handeling in JS ?
Explanation :-
* Use try...catch blocks around your database operations to handle errors gracefully.
* Log errors or send responses with error messages based on the error type.

5. What are some advanced JS usage with Prisma ?
Explanation :-
* Batching Queries - Use Promise.all to run multiple queries simultaneously.
* Custom Queries - Use the prisma.$queryRaw method for executing raw SQL queries when needed.
* Middleware - Implement middleware for logging or validation before database operations.

6. What is Prisma Client API in JS ?
Explanation :-
* The Prisma Client API provides methods to interact with your database, similar to standard JavaScript APIs.
* It includes methods like .findMany(), .create(), .update(), and more, all of which are strongly typed when using TypeScript.

-----Advanced Prisma Features-----

1. What is Prisma Middleware ?
Explanation :-
* Prisma Middleware allows you to intercept and modify requests to the Prisma Client.
* You can use middleware to add functionality like logging, authentication checks, or error handling before or after database operations.

2. What is the need of Prisma Middleware ?
Explanation :-
* Middleware provides a way to centralize common logic (like logging or validation) for multiple queries.
* It enhances code reusability and maintainability by avoiding repeated code across different parts of your application.

3. What is raw DB access with Prisma ?
Explanation :-
* Raw DB Access allows you to run raw SQL queries directly against your database using the Prisma Client.
* Use prisma.$queryRaw or prisma.$executeRaw for executing queries that are not supported by the Prisma query API.

4. What is Cascade Delete with Prisma ?
Explanation :-
* Cascade Delete refers to automatically deleting related records when a parent record is deleted.
* You can define cascading behavior in your Prisma schema using the onDelete: Cascade option in your model relationships.

5. What is Transaction support in Prisma ?
Explanation :-
* Transaction Support allows you to execute multiple queries as a single unit of work.
* Use prisma.$transaction() to ensure that either all queries succeed or none do, maintaining database integrity.

6. How to Secure and Prisma ?
Explanation :-
* Secure your Prisma application by -
	•	Implementing authentication and authorization checks in your API.
	•	Using environment variables for sensitive data like database credentials.
	•	Regularly updating your Prisma and database dependencies to mitigate vulnerabilities.

7. How to Performance Tune with Prisma ?
Explanation :-
* Performance Tuning can be done by -
	•	Using efficient queries (Ex - limiting results with take).
	•	Utilizing indexing in your database for frequently queried fields.
	•	Profiling queries with database tools to identify bottlenecks.

-----Prisma and REST API-----

1. What is the overview of REST API ?
Explanation :-
* REST (Representational State Transfer) is an architectural style for designing networked applications.
* It relies on stateless communication and standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.

2. How to setup Prisma with REST API ?
Explanation :-
* Integrate Prisma in your Express.js application -
    Install dependencies - npm install express prisma @prisma/client
    Initialize Prisma and set up your models in schema.prisma
    Create an Express server and import the Prisma Client to handle requests.

3. How to do CRUD operations in REST APIs with Prisma ?
Explanation :-
* Use Express routes to handle CRUD operations -
	•	Create: POST /users
	•	Read: GET /users or GET /users/:id
	•	Update: PUT /users/:id
	•	Delete: DELETE /users/:id
* Ex -
    app.post('/users', async (req, res) => {
        const user = await prisma.user.create({ data: req.body });
        res.json(user);
    });

4. How to do Error Handeling in REST APIs with Prisma ?
Explanation :-
* Use try...catch blocks in your route handlers to catch errors.
* Respond with appropriate status codes and messages based on the error type.
* Ex - 404 for not found, 400 for bad requests.

5. How to do AuthN and AuthZ in REST APIs with Prisma ?
Explanation :-
* Authentication (AuthN): Verify user identity using methods like JWT tokens or sessions.
* Authorization (AuthZ): Check user permissions before allowing access to certain resources.
* Use middleware to implement these checks before your route handlers.

6. What are some advanced REST API usage with Prisma ?
Explanation :-
* Implement pagination and sorting in your API endpoints.
* Utilize filters for querying data (e.g., filtering users by age).
* Add webhooks or real-time notifications for certain actions, leveraging Prisma’s event capabilities.

*/
