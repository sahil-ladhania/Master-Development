# Introduction to ORMs

## 1. What are ORMs ?
## Explanation :-
* Object-Relational Mapping.
* It is a technique that connects databases (like SQL) with programming languages by mapping database tables to objects.
* It allows you to interact with your database using your programming language’s objects, without writing raw SQL.
* **Object (Programming world)** - 
    * Software mein, hum aksar classes aur objects ka use karte hain. 
    * Jaise JavaScript, Java, Python, etc. mein classes banake objects create karte hain. 
    * Ek class ek template hoti hai jo real-world objects ko represent karti hai. 
    * For example, ek “User” class mein name, age, aur email address ki properties ho sakti hain.
* **Relational (Database world)** - 
    * Ab SQL databases, jaise MySQL, PostgreSQL, etc., relational databases hote hain. 
    * Yaha data ko tables mein store kiya jata hai, aur rows aur columns ke through organize kiya jata hai. 
    * Ek table rows aur columns mein divide hota hai, jo data ko structure mein rakhne mein help karta hai.
* **Mapping** - 
    * Ye vo process hai jisme objects aur tables ke beech ka connection create hota hai. 
    * Mapping ka matlab hai ki hum code ke objects aur unke attributes ko directly database ke tables aur unke columns ke sath connect karte hain.

![Logo](./assets/ORM.png)

## 2. Why do we even need ORMs ? Cant we directly use express with DB ?
## Explanation :-
* Yes, you can use Express with raw SQL queries, but ORMs abstract the database interactions, making it easier to read, write, and maintain code.
* ORMs help manage database connections, migrations, and data consistency.
* **Few reason to use an ORM** :
    * **Abstraction aur Simplicity** -
        * Agar hum directly Express ke saath DB connect karte hain, toh hume har SQL query likhni padti hai, jo complex aur time-consuming ho sakta hai. 
        * Lekin ORM ye kaam easy kar deta hai by providing simple methods like .find(), .save(), .update(), etc., jo internally SQL queries ko handle karte hain. 
        * Isse queries ko likhna aur samajhna asaan ho jata hai.
    * **Less Code and Reusability** -
        * ORMs mein aapko repetitive SQL queries nahi likhni padti. 
        * ORM libraries mein predefined methods aur functions hote hain jo CRUD operations ko direct banate hain. 
        * For example, agar aapko user data fetch karna hai, toh aapko SELECT * FROM users jaisi query likhne ki zaroorat nahi hai; bas ORM method ko call karenge, aur data mil jayega.
    * **Cross-Database Compatibility** -
        * ORMs kaafi databases ko support karte hain. 
        * Agar aap MySQL se PostgreSQL ya SQLite par switch karna chahein, toh ORM mein minimum changes required hote hain. 
        * Direct SQL queries likhne par aapko naye database ke syntax ko adjust karna padta hai, jo mushkil ho sakta hai.
    * **Security Benefits** -
        * ORM automatically SQL injection attacks se bachne mein help karta hai. 
        * Jab hum direct SQL queries likhte hain, toh input ko validate karna zaroori hai warna SQL injection attacks ho sakte hain. 
        * Lekin ORM methods input ko sanitize karke SQL injection se protect karte hain, jo security ke liye helpful hai.
    * **Better Relationship Handling** -
        * Relational databases mein tables ke beech mein relations hoti hain (one-to-many, many-to-many, etc.). 
        * ORM libraries like Sequelize ya TypeORM ye relationships ko manage karna easy banate hain by providing relationship methods. 
        * Isse hume manually joins aur foreign keys handle karne ki zaroorat nahi padti.
    * **Migration and Schema Management** -
        * ORM libraries mein migration ka feature hota hai, jo schema changes (jaise nayi column add karna, column rename karna, etc.) ko track aur manage karna easy banata hai. 
        * Aap apne DB structure mein changes kar sakte hain aur ORM un changes ko sync aur maintain kar leta hai across development and production environments.

## 3. What are the Advantages of ORMs ?
## Explanation :-
* **Code Simplification** -
    * ORM data ko manipulate karna aur access karna kaafi simple banata hai. 
    * Aapko complex SQL queries likhne ki zaroorat nahi padti, aur CRUD (Create, Read, Update, Delete) operations ko normal functions ki tarah handle kar sakte hain, jaise .save(), .find(), etc.
* **Maintainability aur Readability** -
    * ORM ka code object-oriented hota hai, jo complex applications me maintain aur read karna easy bana deta hai. 
    * Aapka code readable aur organized rahta hai, especially jab multiple developers project par kaam kar rahe hain.
* **Cross-Platform Database Compatibility** -
    * ORM tools ek hi code ko multiple databases par compatible banate hain. 
    * Agar aap database switch karte hain, toh ORM ka code mein minimum ya zero changes ki zaroorat hoti hai.
* **Improved Security** -
    * ORM SQL injection se automatically bachata hai. 
    * Kyunki ORM libraries queries ko sanitize karti hain, toh aapke data par unauthorized access hone ke chances kam ho jate hain.
* **Built-in Relationship Handling** -
    * ORM tools relational databases mein tables ke beech ke relationships ko easily handle karte hain. 
    * Aap joins, foreign keys, aur associations ko effortlessly manage kar sakte hain without writing complex join queries.
* **Automated Schema Migrations** -
    * ORM tools mein migration ka feature hota hai jo schema changes ko manage aur track karna easy banata hai. 
    * Agar aap tables mein naye columns add karte hain ya schema change karte hain, ORM migration commands se ye changes sync ho jate hain.

## 4. What are the Disadvantages of ORMs ?
## Explanation :-
* **Performance Overhead** -
    * ORM ke methods thode slow ho sakte hain as compared to raw SQL queries. 
    * Ye kyunki ORM internal mechanism mein queries ko translate karte hain, jo large datasets par heavy aur slow ho sakta hai.
* **Lack of Full Control Over Queries** -
    * Complex queries, jaise nested subqueries ya multi-table joins, ORM ke saath likhna mushkil ya limited hota hai. 
    * Aapka access controlled hote hain aur kuch specific SQL features ORM mein na ho sakte hain.
* **Learning Curve** -
    * ORM libraries ka use karna seekhne mein time lag sakta hai, especially beginners ke liye. 
    * Har ORM tool ka apna syntax aur structure hota hai, jo samajhne mein pehle effort lag sakta hai.
* **Debugging Issues** -
    * ORM tools mein errors aur bugs ko debug karna mushkil hota hai kyunki SQL queries auto-generated hoti hain. 
    * Agar queries optimize nahi hoti hain toh performance aur debugging challenging ho sakti hai.
* **Limited Database-Specific Features** -
    * ORM tools mostly generic SQL queries ko handle karte hain. 
    * Agar aap kisi specific database ka koi unique feature use karna chahein toh ye ORM ke through possible nahi ho sakta ya complicated ho sakta hai.
* **Memory Overhead** -
    * ORMs kaafi data load kar sakte hain, jo memory usage increase karta hai. 
    * Agar aapka dataset large hai, toh ye inefficient memory usage aur slow queries ka cause ban sakta hai.

## 5. What are different types of ORMs ?
## Explanation :-
* **Active Record Pattern ORMs** -
    * Is pattern mein, ek record ko ek object ke form mein represent kiya jata hai, aur object ke methods hi database operations (CRUD) ko perform karte hain. 
    * Active Record ORMs mein table ke rows directly objects ke roop mein map ho jaate hain, aur aap direct objects ke methods use karke data manipulate kar sakte hain.
    * **Examples** :
	    * **Ruby on Rails Active Record** - Ruby on Rails framework mein ye ORM built-in hota hai jo Active Record pattern use karta hai.
	    * **Eloquent (Laravel)** - PHP mein use hone waala ORM jo Laravel framework ke saath aata hai. Ye bhi Active Record approach follow karta hai.
* **Data Mapper Pattern ORMs** -
    * Is pattern mein, objects aur database ke tables ke beech ek “mapper” layer hoti hai jo data ko transfer karti hai. 
    * Isme objects aur database tables loosely coupled hote hain, aur mapper data ko objects aur relational tables ke beech move karta hai. 
    * Ye approach generally complex applications ke liye use hota hai kyunki ye abstraction aur flexibility provide karta hai.
    * **Examples** :
	    * **Hibernate (Java)** - Ye ek popular ORM hai jo Data Mapper pattern follow karta hai aur Java applications mein extensively use hota hai.
	    * **Doctrine (PHP)** - PHP mein ye ek ORM hai jo complex applications mein Data Mapper pattern ko use karta hai.
* **Query Builder ORMs** -
    * Query builder ORMs mein aapko SQL-like syntax mein query likhne ki flexibility milti hai, lekin ye simplified aur object-oriented hoti hai. 
    * Ye ORMs predefined functions provide karte hain jo queries ko more readable aur maintainable banate hain, lekin ye full ORM jitne abstraction provide nahi karte.
    * **Examples** :
	    * **Sequelize (JavaScript)** - Node.js environment mein kaafi popular hai aur query builder approach ka support bhi karta hai.
	    * **Knex.js (JavaScript)** - Ek SQL query builder hai jo MySQL, PostgreSQL, SQLite jaise databases ko support karta hai, lekin fully-featured ORM nahi hai.
* **Micro ORMs** -
    * Micro ORMs lightweight ORMs hote hain jo basic ORM features provide karte hain lekin zyada abstraction ya complex features ko include nahi karte. 
    * Ye generally high performance aur low overhead focus karte hain aur raw SQL ka bhi use karne ki flexibility dete hain.
    * **Examples** :
	    * **Dapper (.NET)** - Ye .NET environment mein ek lightweight ORM hai jo speed aur performance ke liye optimize kiya gaya hai.
	    * **Massive.js (JavaScript)** - Ye PostgreSQL ke saath use hone waala ek Micro ORM hai jo SQL aur JavaScript ke beech bridge ka kaam karta hai.
* **Hybrid ORMs** -
    * Kuch ORMs hybrid features offer karte hain, jisme aapko Active Record aur Data Mapper dono patterns ka benefit milta hai. 
    * Iska matlab hai ki aap relational mapping aur query building dono approaches ko use kar sakte hain.
    * **Examples** :
	    * **TypeORM (TypeScript/JavaScript)** - Ye ek hybrid ORM hai jo Active Record aur Data Mapper patterns ko support karta hai. Ye Node.js aur TypeScript applications mein kaafi use hota hai.
	    * **Entity Framework (EF Core - .NET)** - Ye .NET platform ke liye ORM hai jo Active Record aur Data Mapper ka combination offer karta hai.
* **NoSQL ORMs** -
    * NoSQL ORMs un databases ke liye hote hain jo relational nahi hain, jaise MongoDB, CouchDB, etc. 
    * Ye ORMs data ko objects ke form mein represent karte hain lekin tables aur rows ki jagah collections aur documents ka use karte hain.
    * **Examples** :
	    * **Mongoose (MongoDB ke liye)** - Ye JavaScript/Node.js mein use hone waala ORM hai jo MongoDB ke liye tailored hai.
	    * **Django ODM (Django ke liye)** - Ye Python-based Django framework mein MongoDB ke liye use kiya ja sakta hai.

## 6. What are ODMs ?
## Explanation :-
* Object-Document Mapping.
* Ye ek technique hai jo programming language ke objects ko document-oriented databases (jaise MongoDB) ke collections aur documents se map karta hai.
* Isse hum database documents ko apne application ke objects ki tarah treat kar sakte hain, bina raw queries likhe.
* **Object (Programming world)** -
    * Software mein, hum classes aur objects ka use karte hain.
    * Jaise JavaScript ya Python mein, ek “User” class bana ke uske properties define karte hain.
* **Document (Database world)** -
    * Document databases mein data JSON/BSON format mein store hota hai.
    * Ek collection rows ki jagah documents ka group hota hai, jisme fields aur nested sub-documents ho sakte hain.
* **Mapping** -
    * Ye process objects aur documents ke beech connection banata hai.
    * Aap apne code mein objects ko update karte ho, ODM library wo changes document DB mein reflect karti hai.
* **Examples** -
    * **Mongoose (Node.js + MongoDB)** – kaafi popular ODM hai, schema define karo aur phir .find(), .save(), .update() methods use karo.
    * **Typegoose (TypeScript wrapper)** – Mongoose ka TypeScript-friendly wrapper, schema definitions type-safe banata hai.

![Logo](./assets/ODM.png)

## 7. What are some Key Differences between ORM and ODM ?
## Explanation :-

| **Aspect**         | **ORM (SQL)**                               | **ODM (NoSQL/Document)**                                |
|--------------------|---------------------------------------------|----------------------------------------------------------|
| **Storage Model**  | Tables & Rows                               | Collections & Documents (JSON/BSON)                      |
| **Schema**         | Fixed schema, migrations required           | Flexible/Optional schema, easy to change                 |
| **Joins/Relations**| JOIN statements, foreign keys               | Embedded documents or manual references                 |
| **Query Language** | SQL (SELECT, JOIN, GROUP BY…)               | JSON-style queries (e.g., `{ age: { $gt: 18 } }`)       |
| **Transactions**   | ACID transactions built-in                  | Limited multi-document transactions (DB dependent)       |
| **Use-case**       | Structured data with strict relations       | Hierarchical or semi-structured data, rapid development  |


## 6. What is Prisma ?
## Explanation :-
* Prisma ek modern ORM hai jo mainly Node.js aur TypeScript applications mein relational databases ke saath kaam karne ke liye use hota hai. 
* Prisma traditional ORMs se alag approach follow karta hai kyunki ye type-safe aur schema-driven hai, jo developer productivity aur code quality ko improve karta hai. 
* Ye backend development mein popular ho raha hai, especially TypeScript ecosystem mein, aur ye multiple databases ko support karta hai, jaise :
	* PostgreSQL
	* MySQL
	* SQLite
	* SQL Server
	* MongoDB (Beta)
* Prisma ka main focus hai ki relational databases ke saath kaam karte waqt developers ko type safety, autocompletion, aur simple syntax ke saath best practices follow karne ka mauka mile.
* **Prisma ke Main Components** :
	* **Prisma Client** -
	    * Ye Prisma ka main component hai jo ORM ka kaam karta hai. 
        * Prisma Client ek auto-generated, type-safe library hai jo database se CRUD operations karna easy banati hai. 
        * Ye aapke Prisma schema ke basis par code generate karti hai jo aapke database ke tables aur relationships ko reflect karta hai.
	    * Isme findMany(), create(), update(), delete() jaise object-oriented methods hote hain jo tables par operations ko easy aur readable banate hain.
	* **Prisma Migrate** -
	    * Ye tool schema ko manage aur track karne ke liye hai. 
        * Iske through aap apne database mein changes jaise naye tables, columns, relationships add ya remove kar sakte hain bina manual SQL likhe.
	    * Prisma Migrate database migrations ko track karta hai aur aapke database schema ko apke code ke schema ke saath synchronize karne mein madad karta hai.
	* **Prisma Studio** -
	    * Ye ek GUI (Graphical User Interface) hai jo developers ko database ke data ko explore aur manage karne ka graphical interface provide karta hai. 
        * Iske through aap directly data ko CRUD kar sakte hain, jo database management ko visual aur easy banata hai.
* **Prisma ke Main Benefits** :
	* **Type Safety aur Autocompletion** -
        * Prisma automatically client code generate karta hai jo TypeScript aur JavaScript mein strongly typed hota hai. 
        * Ye autocompletion aur type safety provide karta hai, jo errors ko pehle detect karne mein madad karta hai aur code ko maintainable banata hai.
	* **Simplified Syntax aur Readability** -
        * Prisma ka API kaafi readable aur user-friendly hai. 
        * Isme complex queries ko bhi simple object-oriented syntax ke saath likha ja sakta hai, jo readability ko improve karta hai.
	* **Database-Agnostic** -
        * Prisma multiple databases ko support karta hai, aur agar aap database switch bhi karte hain (jaise MySQL se PostgreSQL), toh minimal code changes ki zaroorat padti hai. 
        * Ye cross-database compatibility provide karta hai.
	* **Automatic Migrations** -
        * Schema changes ko track karna aur manage karna Prisma Migrate ke saath kaafi easy hota hai. 
        * Iske through database schema aur codebase ko sync rakhne mein madad milti hai.
	* **Modern Tooling Integration** -
        * Prisma modern backend ecosystem ke saath well-integrated hai, aur GraphQL aur REST APIs ke saath bhi use kiya ja sakta hai. 
        * Iske saath saath ye TypeScript support ke saath well-suited hai jo modern backend projects ke liye useful hai.

## 7. What is the need of Prisma ?
## Explanation :-
* **Type Safety** - Helps avoid runtime errors by providing static types.
* **Modern Features** - Prisma offers advanced tools like migrations, studio, and robust querying options.

## 8. What is the difference between traditional ORMs and Prisma ?
## Explanation :-
### Difference Between Traditional ORMs and Prisma
| Feature              | Prisma                                              | Traditional ORMs                              |
|----------------------|-----------------------------------------------------|----------------------------------------------|
| **Type Safety**      | Strong TypeScript-oriented                          | Limited, dependent on manual typing        |
| **Approach**         | Schema-Driven                                       | Code-Driven                                |
| **Migrations**       | Automated with Prisma Migrate                       | Often Manual or Semi-Automatic             |
| **Query Syntax**     | Clean, Object-Oriented                              | Can be Complex                             |
| **Relations & Joins**| Type-safe, Simple Syntax                            | Often Complex                              |
| **Raw SQL Support**  | Yes, well-integrated                                | Yes, but integration varies                |
| **Supported Databases** | Limited, with a focus on Relational and TypeScript | Often wider, includes some NoSQL         |

## 9. How to setup and install Prisma ?
## Explanation :-
* Install Prisma using npm install prisma and npm install @prisma/client.
* Initialize Prisma in your project with npx prisma init.
* Define your data model in the prisma/schema.prisma file.

# Prisma and Databases

## 1. Why Does Prisma Use This Object Syntax ?
## Explanation :-
* When you write SQL by hand (e.g., `SELECT * FROM user WHERE userId = 2;`), you’re describing exactly how the database should filter, aggregate, or join data. 
* With Prisma, you’re describing the query in a JavaScript/TypeScript-friendly object structure. 
* Prisma then translates that structure into the actual SQL queries behind the scenes.
* Below is a conceptual breakdown of how each SQL clause — `SELECT` , `FROM` , `WHERE` , `GROUP BY` , `HAVING` - maps into Prisma’s syntax and why it’s structured that way.
* **JavaScript Ecosystem** :
    * Prisma queries are plain JavaScript/TypeScript objects. 
    * That means your code is type-safe (if you’re using TypeScript) and integrates naturally with the rest of your JS app.
* **Abstraction & Type-Safety** :
    * An ORM like Prisma hides low-level SQL details. 
    * It enforces constraints (e.g., required fields, valid column names) at compile time, preventing many runtime errors.
* **Declarative, Not Procedural** :
    * Instead of writing out a full SQL statement, you describe “what” data you want, and Prisma handles “how” it’s retrieved. 
    * That’s why you see a nested object structure specifying where, select, and so on.


## 2. What are Prisma Query Components ?
## Explanation :-
* `SELECT` Clause
    * **In SQL** : 
        * SELECT determines which columns you want to retrieve.
        ```sql
            SELECT * FROM Customer;
        ```
	* **In Prisma** : 
        * You specify what fields you want returned **under a select object** or you can include all fields by default.
        ```javascript
            const allCustomers = await prisma.customer.findMany();
        ```
        * `prisma` → tumhara PrismaClient instance
        * `.findMany()` → SQL ka SELECT *
	    * This design is type-safe. If you mark a field in the select that doesn’t exist in your Prisma schema, you’ll get an error before you even run the query.
* `FROM` Clause
    * **In SQL** : 
        * FROM indicates which table(s) you’re querying.
	* **In Prisma** : 
        * The FROM concept is encapsulated by the model you’re calling, e.g. prisma.user means you are operating on the “user” table.
	    * You typically see it as prisma.user.findMany(...), prisma.user.findUnique(...), etc.
* `WHERE` Clause
    * **In SQL** : 
        * WHERE filters rows based on conditions.
        ```sql
            SELECT * 
            FROM Customer
            WHERE age > 18
            AND status = 'ACTIVE';
        ```
	* **In Prisma** : 
        * The **where property is an object** describing these conditions.
        ```javascript
            const filtered = await prisma.customer.findMany({
                where: {
                    age: { gt: 18 },
                    status: 'ACTIVE',
                },
            });
        ```
        * where object me har field ke liye filter operators -
	        * gt (greater than), lt (less than), equals, contains, etc.
	    * Multiple conditions default “AND” se judte hain. Agar “OR” chahiye -
        ```sql
            where: {
                OR: [
                    { status: 'ACTIVE' },
                    { age: { lt: 18 } },
                ]
            }
        ```
	    * Fields are key-value pairs that represent column-value checks (where: { userId: someValue }), or more complex conditions with operators like gt, lt, in, etc.
* `GROUP BY` Clause
    * **In SQL** : 
        * GROUP BY groups rows sharing certain field values, often used with aggregate functions (COUNT, SUM, etc.).
        ```sql
            SELECT region, COUNT(*) AS cnt
            FROM Customer
            GROUP BY region;
        ```
	* **In Prisma** : 
        * There’s a specific groupBy method you can call on the Prisma client (for example, prisma.user.groupBy(...)).
        ```javascript
            const grouped = await prisma.customer.groupBy({
                by: ['region'],
                _count: { _all: true },
            });
            // result: [{ region: 'North', _count: { _all: 12 } }, …]
        ```
    	* `groupBy` → grouping method
	    * `by` → fields ki list jinpe group karna hai
	    * `_count`/`_sum`/`_avg`/`_min`/`_max` → aggregation selections
	    * The configuration object for groupBy in Prisma often includes which fields to group on, which aggregates to compute, and conditions (like a where filter) if needed.
	    * Internally, Prisma will generate the correct SQL with GROUP BY behind the scenes.
* `HAVING` Clause
    * **In SQL** : 
        * HAVING is like a WHERE but applies to grouped data (i.e., results of GROUP BY).
	* **In Prisma** : 
        * When using groupBy, you can specify filters on the aggregated data in the same object. 
        * Prisma calls this property having in some versions, or merges it with where depending on the aggregator function.
	    * The idea is the same: filter out grouped results that don’t meet certain aggregate conditions.

## 3. How Prisma Translates to SQL ?
## Explanation :-
* When you construct a Prisma query, e.g. :
```javascript
    prisma.user.findUnique({
        where: { ... },
        select: { ... }
    })
```
* **Prisma** :
	* Reads your schema and the query object.
	* Builds a parameterized SQL statement under the hood (something like `SELECT [fields] FROM user WHERE ...`).
	* Sends it to the database driver, which then executes the query.

You rarely see the raw SQL, because Prisma’s main goal is to abstract that away for developer productivity and type-safety.

## 4. Why Do We Nested Objects in Prisma Queries ?
## Explanation :-
* When you use Prisma, many of its filters (like startsWith, contains, lt, gt, etc.) are accessed via nested objects. 
* This nested object structure is how Prisma differentiates between :
	* A direct equality check (e.g., name: "Alice").
    * A more complex condition/operation (e.g., name: { startsWith: "A" }).
* You can think of these nested objects as “operators” that Prisma provides for each field. 
* Here’s the breakdown :
	* **where Takes an Object**
	    * where is the top-level condition container. 
        * You fill it with a set of field-based rules.
    * **Field-Level Operators**
	    * For simpler comparisons (like equality), you can do where: { name: "Alice" }.
	    * For operators (e.g., startsWith, endsWith, in, lt, gt, etc.), you need an object describing that operator.
	    * Example: where: { name: { startsWith: "A" } }
	* **Why Another Object ?**
	    * Because Prisma lets you chaining multiple operators for the same field. For example:
        ```javascript
            where: {
                age: {
                    gte: 18,
                    lt: 65
                }
            }
        ```
        * The outermost object (where) organizes all fields; each field has its own object if you need advanced conditions.

## 5. Is It Always Required ?
## Explanation :-
* No. It’s only required if you use an operator on that field. 
* If you do a simple check like `name = "Alice"`, a direct key-value works :
```javascript
    where: { name: "Alice" }
```
* But if you want something like name `LIKE "A%"`, then Prisma’s approach is :
```javascript
    where: {
        name: { startsWith: "A" }
    }
```
* Prisma uses these nested objects to handle all sorts of condition “operators” gracefully without repeating the keywords in different ways.

## 6. Why Do AND/OR in Prisma Use Arrays of Objects Instead of a Single Object ?
## Explanation :-
* Prisma’s design for logical operators (AND, OR, NOT) follows a declarative, structured approach that can handle multiple complex conditions. 
* Let’s break down the reasoning :
* **Multiple Conditions = Arrays**
    * **Real-World Use Case** - You often want to chain many conditions with AND or OR. 
    * **For Example** :
        * (a \or b \or c)
        * (x \and y \and z)
    * **Array Is More Natural** - Each element in the array is itself a condition object. 
    * For instance :
    ```javascript
        AND: [
        { conditionForA },
        { conditionForB },
        { conditionForC },
        ]
    ```
    * It’s logical to group these as an array, because each array element represents a standalone “clause” you’re combining.
* **Keeping Consistency**
	* Prisma’s approach is similar to how MongoDB (and many other ORMs) handle complex conditions: OR, AND, etc., all expect arrays of objects.
	* This standardized structure makes it easier to read and build queries dynamically. 
    * For instance, you can push new condition objects into an array programmatically if needed.
* **Single Object vs. Array**
	* **Could We Use a Single Object?**
	    * Suppose Prisma allowed something like :
        ```javascript
        AND: {
            conditionForA: true,
            conditionForB: true
        }
        ```
        * That might be okay for simple “all must be equal” checks, but it doesn’t scale well for advanced filters (e.g. OR within a field, nested conditions, etc.).
    * **Array Facilitates Nesting & Operator Diversity**
	    * Each condition can include operators like contains, in, lt, AND or OR again, etc. 
        * Sticking them into a single object becomes messy and ambiguous. 
        * The array approach is a clear way to say: “Apply this set of conditions together (AND/OR).”

## 7. How to connect Prisma to DBs(MySQL and MongoDB) ?
## Explanation :-
* **MySQL**
    * In your prisma/schema.prisma, set the datasource block like this -
        ```javascript
        datasource db {
            provider = "mysql"
            url      = env("DATABASE_URL")
        }
        ```
    * Provide the DATABASE_URL in your .env file, such as -
        ```javascript
        DATABASE_URL="mysql://user:password@localhost:3306/dbname"
        ```
* **MongoDB**
    * Change the provider in the prisma/schema.prisma to -
        ```javascript
        datasource db {
            provider = "mongodb"
            url      = env("DATABASE_URL")
        }
        ```
    * Your MongoDB connection URL in the .env file will look like -
        ```javascript
        DATABASE_URL="mongodb+srv://user:password@cluster0.mongodb.net/dbname"
        ```

## 8. What are Prisma Data Models ?
## Explanation :-
* Data Models in Prisma are used to define database schemas in a declarative way.
* They describe the tables in your database (or collections for MongoDB).
* **Example** -
    ```prisma
    model User {
        id    Int     @id @default(autoincrement())
        name  String
        email String  @unique
    }
    ```

## 9. What is Prisma Migration ?
## Explanation :-
* Prisma Migration ek feature hai jo aapke database schema changes ko manage aur version control karne ke liye use hota hai. 
* Jab bhi aap apne Prisma schema (schema.prisma) mein koi changes karte hain, jaise naye tables add karna, columns update karna, ya relationships modify karna, to Prisma Migration ye changes automatically migrations ke through aapke database mein apply karta hai.
* Chaliye step-by-step dekhein Prisma Migration kaise kaam karta hai aur kyun useful hai :
    * **Schema Changes ko Version Control mein Rakhna** -
	    * Prisma Migrate ek version control system ki tarah database schema changes ko track karta hai. Har baar jab aap Prisma schema file mein koi change karte hain aur migration create karte hain, to Prisma ek migration file generate karta hai jo is change ka snapshot hota hai.
	    * Yeh snapshot later point par reference ke liye use kiya ja sakta hai, aur aap easily kisi bhi migration ko rollback ya undo bhi kar sakte hain agar needed ho.
    * **Automatically Generate Migration Files** -
	    * Jab aap command prisma migrate dev --name <migration_name> run karte hain, to Prisma automatically ek migration file create karta hai jo naye schema changes ko reflect karti hai.
	    * Ye migration files SQL statements ko contain karti hain jo database ko update karne ke liye needed hote hain, jaise CREATE TABLE, ALTER TABLE, etc.
	    * Prisma Migrate yeh ensure karta hai ki aapke database aur Prisma schema hamesha sync mein rahe, aur koi bhi mismatch ya inconsistency na aaye.
    * **Database Consistency aur Rollbacks** -
	    * Prisma Migration ki madad se aap complex database updates ko safe aur consistent way mein implement kar sakte hain. Agar kabhi koi migration fail ho jaye, to Prisma us migration ko rollback karke database ko previous state mein le aata hai, taaki data integrity aur consistency maintain ho.
	    * Rollbacks aur down migrations ka support large applications mein kaafi useful hota hai kyunki agar koi deployment ke baad issue aata hai to us migration ko reverse karke fix kiya ja sakta hai.
    * **Migration Lifecycle: Dev, Prod aur Deployment** -
	    * **Dev Environment** - Development phase mein prisma migrate dev command use kiya jata hai jo locally migrations ko apply karta hai aur development team ke sath share karne ke liye easy hota hai.
	    * **Production Environment** - Production ke liye prisma migrate deploy command use hota hai, jo migration scripts ko production database mein safely apply karta hai. Ye deployment process ko safe aur automated banata hai.
	    * **Deployment Flexibility** - Migrations ko version control mein rakhne ka fayda ye hota hai ki agar aap kisi doosri team ke sath work kar rahe hain ya multiple environments mein deploy kar rahe hain, toh schema ka consistent version sab jagah apply hota hai.
    * **Improved Developer Collaboration aur Sync** -
	    * Large projects mein multiple developers ek database ke sath work karte hain, toh Prisma Migrate ke through har developer ke pass same migrations aur schema ka access hota hai. Agar kisi developer ne koi new table add kiya, toh wo migration file sab developers ke paas share ki ja sakti hai, aur sab easily us migration ko apne local database mein apply kar sakte hain.
	    * Iska fayda ye hai ki database schema changes ka koi conflict nahi hota aur team members same version ke sath kaam karte hain.
    * **Example Workflow** -
	    * **Schema Update** - Schema file mein koi table ya column add/update/delete karein.
	    * **Generate Migration** - prisma migrate dev --name "add_user_table" command run karein.
	    * **Migration Apply** - Ye command migration file create karke local dev database mein apply kar deti hai.
	    * **Sync aur Commit** - Migration files ko version control mein commit karein, aur team ke sath share karein.
	    * **Production Deployment** - Production mein prisma migrate deploy command se migration safely apply karte hain.

## 10. What is Seeding Data in Prisma ?
## Explanation :-
* Seeding means pre-populating your database with data for development or testing purposes.
* You can seed your database by adding a seed script in prisma/seed.ts or seed.js and run it using npx prisma db seed.
* Seeding Data in Prisma ka matlab hai ki aap apne database ko initial data se populate karna, jise aap development aur testing ke liye use karte hain. 
* Seeding ka purpose yeh hota hai ki aap apne database ko relevant, realistic, aur testable data se fill karein taaki aap apne application ka testing aur development smoothly kar sakein.

## 11. What is DB Schema in Prisma ?
## Explanation :-
* DB Schema in Prisma refers to the structure of your database tables/collections, defined in the schema.prisma file.
* This includes your models, fields, and relationships between models.

## 12. What are Prisma DB Connectors ?
## Explanation :-
* DB Connectors in Prisma are database-specific drivers that enable Prisma to communicate with different databases.
* Ex - MySQL, PostgreSQL, MongoDB.
* Prisma supports connectors for both SQL and NoSQL databases.

# Prisma Client

## 1. What is Prisma Client ?
## Explanation :-
* Prisma Client ek ORM client hota hai jo aapke database ke models ke according type-safe methods generate karta hai. 
* Yeh aapke schema (schema.prisma) ko dekh kar har model ke liye methods aur properties ready karta hai jo aapko SQL ya complex queries likhne ki zarurat ko hatata hai.
* Prisma Client automatically aapke schema ke models ke base par generate hota hai. 
* Matlab, agar aap apne Prisma schema mein koi table add karte hain, toh Prisma Client uske liye auto-generated queries provide karega jaise findMany(), create(), update(), etc.

## 2. How to do CRUD operations with Prisma Client ?
## Explanation :-
* **Create** -
    * Insert a new record.
    * **Example** -
        ```javascript
        const newUser = await prisma.user.create({
            data: { name: "John", email: "john@example.com" }
        });
        ```
    * **IMP Methods** :
        * **create** :
        	* **What** - Used to create a single record in the database.
	        * **Why/When** - When you need to insert a new entry.
	        * **Usage** - Typically used for adding a new row to the database.
	        * **Difference** - Only creates one record
        * **createMany** : 
        	* **What** - Used to create multiple records at once.
	        * **Why/When** - When you need to insert multiple records in one operation.
	        * **Usage** - When you have an array of data and want to insert them at once.
	        * **Difference** - Unlike create, it’s for batch operations.
* **Read** -
    * Fetch records.
    * **Example** -
        ```javascript
        const allUsers = await prisma.user.findMany();
        ```
    * **IMP Methods** :
        * **findFirst** : 
        	* **What** - Finds the first record that matches the given filter.
	        * **Why/When** - When you only need the first matching record, not all.
	        * **Usage** - Commonly used when you expect just one result.
	        * **Difference** - Returns only the first match; might be helpful when you’re unsure of how many results there are.
            * **Returns** - Single object (pahla match)
        * **findFirstOrThrow** : 
        	* **What** - Similar to findFirst, but throws an error if no matching record is found.
	        * **Why/When** - When you require a record and cannot proceed without it.
	        * **Usage** - Use when you expect the record to exist and need to handle errors if it doesn’t.
	        * **Difference** - Throws an error if nothing is found, unlike findFirst, which returns null.
            * **Returns** - Single object (pehla match) ya exception throw
        * **findMany** : 
        	* **What** - Finds multiple records that match the given filter.
	        * **Why/When** - When you need a list of matching records.
	        * **Usage** - Used for queries where multiple records are expected.
	        * **Difference** - Unlike findFirst, it returns an array of matching results.
            * **Returns** - Array of objects
        * **findUnique** :
        	* **What** - Finds a single record that matches the unique filter (e.g., by primary key).
	        * **Why/When** - When you’re looking for a specific, unique record.
	        * **Usage** - Ideal for queries where you know there’s only one matching record (e.g., id).
	        * **Difference** - It is used for finding a unique, singular record based on unique fields.
            * **Returns** - Single object (uniquely match) ya null
        * **findUniqueOrThrow** : 
        	* **What** - Similar to findUnique, but throws an error if no matching record is found.
	        * **Why/When** - When you need to ensure the record exists and can’t continue without it.
	        * **Usage** - Use it when you’re certain the record should exist and want an error if it’s missing.
            * **Difference** - Unlike findUnique, it throws an error when no record is found.
            * **Returns** - Single object (uniquely match) ya exception throw
* **Update** -
    * Modify existing records.
    * **Example** -
        ```javascript
        const updatedUser = await prisma.user.update({
            where: { id: 1 },
            data: { name: "John Updated" }
        });
        ```
    * **IMP Methods** :
        * **update** : 
        	* **What** - Updates a single record that matches the filter.
	        * **Why/When** - When you need to modify an existing record in the database.
	        * **Usage** - Typically used when you need to change specific fields of a record.
	        * **Difference** - Updates a single record (based on a unique identifier).
        * **updateMany** : 
        	* **What** - Updates multiple records that match the given filter.
	        * **Why/When** - When you need to update several records at once.
	        * **Usage** - Used when you want to apply a change to multiple rows.
	        * **Difference** - Unlike update, it can update many records at once.
* **Delete** -
    * Remove a record.
    * **Example** -
        ```javascript
        const deletedUser = await prisma.user.delete({
            where: { id: 1 }
        });
        ```
    * **IMP Methods** :
        * **delete** :  
        	* **What** - Deletes a single record that matches the filter.
	        * **Why/When** - When you need to remove a specific record.
	        * **Usage** - Used when you want to delete a specific record.
	        * **Difference** - Deletes only one record based on the filter.
        * **deleteMany** :
        	* **What** - Deletes multiple records that match the given filter.
	        * **Why/When** - When you need to delete multiple records at once.
	        * **Usage** - When you want to delete more than one record based on some condition.
	        * **Difference** - Deletes multiple records, unlike delete, which removes only one record.

## 3. What are some advanced Prisma Client Features ?
## Explanation :-
* **Relations** -
    * Prisma me joins model relations se handle hote hain.
    * Types of JOINs in Prisma :
        * INNER
        * LEFT
        * RIGHT
        * **Schema Example** - 
            ```javascript
                model Customer {
                id       Int       @id @default(autoincrement())
                name     String
                addresses Address[] 
                }

                model Address {
                id          Int      @id @default(autoincrement())
                city        String
                customerId  Int
                customer    Customer @relation(fields: [customerId], references: [id])
                }
            ```
            * **INNER JOIN using Raw SQL** :
                ```sql
                    SELECT c.name, a.city
                    FROM Customer c
                    INNER JOIN Address a
                    ON c.id = a.customerId;
                ```
            * **INNER JOIN using Prisma** :
                ```javascript
                    const joined = await prisma.customer.findMany({
                        where: { addresses: { some: {} } },  // inner join filter
                        select: {
                            name: true,
                            addresses: { select: { city: true } }
                        },
                    });
                ```
            * **LEFT JOIN using Prisma** :
                * Prisma ka include left join jaisa behave karta hai.
                ```javascript
                    const leftJoined = await prisma.customer.findMany({
                        include: { addresses: true }
                    });
                    // agar kisi customer ke paas addresses nahin, to addresses: []
                ```
            * **RIGHT JOIN using Prisma** :
                * Prisma me direct right join nahi, but aise kar sakte ho.
                ```javascript
                    const rightJoined = await prisma.address.findMany({
                        include: { customer: true }
                    });
                    // sab addresses milenge + linked customer
                ```
* **Filtering** -
    * Add conditions to your queries.
    * **Example** -
        ```javascript
        const filteredUsers = await prisma.user.findMany({
            where: { age: { gte: 30 } }
        });
        ```
* **Pagination** -
    * Fetch limited results.
    * **Example** -
        ```javascript
        const paginatedUsers = await prisma.user.findMany({
            take: 10, -----> limit to 10 users
            skip: 5   -----> skip the first 5 users
        });
        ```

## 4. What is Prisma Client API ?
## Explanation :-
* Prisma Client API provides methods to perform database operations, like .findMany(), .create(), .update(), .delete().
* It is strongly typed, so you get type safety and autocompletion based on your schema.

## 5. What is Error Handeling in Prisma Client ?
## Explanation :-
* Prisma uses JavaScript try...catch blocks for error handling.
* **Common error types** -
	* **PrismaClientKnownRequestError** - Known database errors (Ex- constraint violation).
	* **PrismaClientUnknownRequestError** - Unexpected database errors.

## 6. How to do Pagination and Sorting in Prisma Client ?
## Explanation :-
* **Pagination** - Use take and skip options to limit and offset the number of results.
* **Sorting** - Use orderBy to sort by a field.
* **Example** -
    ```javascript
    const sortedUsers = await prisma.user.findMany({
        orderBy: { name: 'asc' }
    });
    ```

# Prisma Studio

## 1. What is Prisma Studio ?
## Explanation :-
* Prisma Studio is a GUI (Graphical User Interface) for managing and interacting with your database.
* It allows you to view, edit, and delete data in a visual interface rather than running queries manually.
* Prisma Studio ek visual database tool hai jo aapke Prisma schema ke sath connected rehta hai aur aapke tables aur data ko explore karna easy banata hai. 
* Isme aap table data ko view, edit, aur modify kar sakte hain bina SQL likhne ki zarurat ke.

## 2. How to setup Prisma Studio ?
## Explanation :-
* Run npx prisma studio in your terminal after setting up Prisma in your project.
* This command launches Prisma Studio in your browser, connecting to your database automatically.

## 3. How to Browse and Edit Records in Prisma Studio ?
## Explanation :-
* You can easily browse records by selecting a model (like User, Post, etc.) in the left sidebar.
* Edit records by clicking on a field and changing its value. You can also add or delete records directly from the UI.

## 4. How to run and save queries in Prisma Studio ?
## Explanation :-
* Prisma Studio is primarily designed for visual interaction with data, not for writing or saving queries.
* For complex queries, you should use Prisma Client within your code. However, Studio can help you explore data visually and export it if needed.

## 5. How to view Data Model and Database Schema in Prisma Studio ?
## Explanation :-
* Prisma Studio allows you to view the data model as defined in your schema.prisma file.
* You can explore relationships between models and see how they map to the database schema directly in the UI.

## 6. How to export Data with Prisma Studio ?
## Explanation :-
* Prisma Studio doesn’t natively support exporting data as a feature.
* However, you can export data by using Prisma Client within your code or by exporting data manually through your database’s specific export tools (e.g., MySQL Workbench, MongoDB Compass).

# Prisma and Javascript

## 1. What is the overview of Prisma and JS ?
## Explanation :-
* Prisma integrates seamlessly with JavaScript and TypeScript applications, providing a type-safe way to access databases.
* It allows developers to perform CRUD operations efficiently while leveraging JavaScript’s asynchronous capabilities.

## 2. How to setup Prisma and JS ?
## Explanation :-
* Install Prisma with - npm install prisma @prisma/client
* Initialize Prisma - npx prisma init
* Configure your database connection in the prisma/schema.prisma file and define your data models.

## 3. How to do CRUD operations with Prisma and JS ?
## Explanation :-
* Use the same CRUD operations as with the Prisma Client in the earlier section, using async/await syntax in your JavaScript code.

## 4. How to do Error Handeling in JS ?
## Explanation :-
* Use try...catch blocks around your database operations to handle errors gracefully.
* Log errors or send responses with error messages based on the error type.

## 5. What are some advanced JS usage with Prisma ?
## Explanation :-
* Batching Queries - Use Promise.all to run multiple queries simultaneously.
* Custom Queries - Use the prisma.$queryRaw method for executing raw SQL queries when needed.
* Middleware - Implement middleware for logging or validation before database operations.

## 6. What is Prisma Client API in JS ?
## Explanation :-
* The Prisma Client API provides methods to interact with your database, similar to standard JavaScript APIs.
* It includes methods like .findMany(), .create(), .update(), and more, all of which are strongly typed when using TypeScript.

# Advanced Prisma Features

## 1. What is Prisma Middleware ?
## Explanation :-
* Prisma Middleware allows you to intercept and modify requests to the Prisma Client.
* You can use middleware to add functionality like logging, authentication checks, or error handling before or after database operations.

## 2. What is the need of Prisma Middleware ?
## Explanation :-
* Middleware provides a way to centralize common logic (like logging or validation) for multiple queries.
* It enhances code reusability and maintainability by avoiding repeated code across different parts of your application.

## 3. What is raw DB access with Prisma ?
## Explanation :-
* Raw DB Access allows you to run raw SQL queries directly against your database using the Prisma Client.
* Use prisma.$queryRaw or prisma.$executeRaw for executing queries that are not supported by the Prisma query API.

## 4. What is Cascade Delete with Prisma ?
## Explanation :-
* Cascade Delete refers to automatically deleting related records when a parent record is deleted.
* You can define cascading behavior in your Prisma schema using the onDelete: Cascade option in your model relationships.

## 5. What is Transaction support in Prisma ?
## Explanation :-
* Transaction Support allows you to execute multiple queries as a single unit of work.
* Use prisma.$transaction() to ensure that either all queries succeed or none do, maintaining database integrity.

## 6. How to Secure and Prisma ?
## Explanation :-
* Secure your Prisma application by -
	* Implementing authentication and authorization checks in your API.
	* Using environment variables for sensitive data like database credentials.
	* Regularly updating your Prisma and database dependencies to mitigate vulnerabilities.

## 7. How to Performance Tune with Prisma ?
## Explanation :-
* Performance Tuning can be done by -
    * Using efficient queries (Ex - limiting results with take).
	* Utilizing indexing in your database for frequently queried fields.
	* Profiling queries with database tools to identify bottlenecks.

# Prisma and REST API

## 1. What is the overview of REST API ?
## Explanation :-
* REST (Representational State Transfer) is an architectural style for designing networked applications.
* It relies on stateless communication and standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.

## 2. How to setup Prisma with REST API ?
## Explanation :-
* Integrate Prisma in your Express.js application -
    * Install dependencies - npm install express prisma @prisma/client
    * Initialize Prisma and set up your models in schema.prisma
    * Create an Express server and import the Prisma Client to handle requests.

## 3. How to do CRUD operations in REST APIs with Prisma ?
## Explanation :-
* Use Express routes to handle CRUD operations -
	* Create - POST /users
	* Read - GET /users or GET /users/:id
	* Update - PUT /users/:id
	* Delete - DELETE /users/:id
* **Example** -
    ```javascript
    app.post('/users', async (req, res) => {
        const user = await prisma.user.create({ data: req.body });
        res.json(user);
    });
    ```

## 4. How to do Error Handeling in REST APIs with Prisma ?
## Explanation :-
* Use try...catch blocks in your route handlers to catch errors.
* Respond with appropriate status codes and messages based on the error type.
* Example - 404 for not found, 400 for bad requests.

## 5. How to do AuthN and AuthZ in REST APIs with Prisma ?
## Explanation :-
* Authentication (AuthN): Verify user identity using methods like JWT tokens or sessions.
* Authorization (AuthZ): Check user permissions before allowing access to certain resources.
* Use middleware to implement these checks before your route handlers.

## 6. What are some advanced REST API usage with Prisma ?
## Explanation :-
* Implement pagination and sorting in your API endpoints.
* Utilize filters for querying data (e.g., filtering users by age).
* Add webhooks or real-time notifications for certain actions, leveraging Prisma’s event capabilities.